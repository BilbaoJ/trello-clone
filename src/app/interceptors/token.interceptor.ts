import { HttpContext, HttpContextToken, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '@services/auth.service';
import { TokenService } from '@services/token.service';
import { switchMap } from 'rxjs';

const CHECK_TOKEN: HttpContextToken<boolean> = new HttpContextToken(() => false);

export function checkToken() {
  return new HttpContext().set(CHECK_TOKEN, true);
}

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.context.get(CHECK_TOKEN)){
    const tokenService: TokenService = inject(TokenService);
    const isValidToken: boolean = tokenService.isValidToken();
    if (isValidToken) {
      return addToken(req, next);
    }else {
      return updateAccesTokenAndRefreshToken(req, next);
    }
  }
  return next(req);
};

const addToken: HttpInterceptorFn = (req, next) => {
  const tokenService: TokenService = inject(TokenService);
  const accessToken: string | undefined = tokenService.getToken();
  if (accessToken) {
    const authRequest: HttpRequest<any> = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${accessToken}`)
    });
    return next(authRequest);
  }
  return next(req);
}

const updateAccesTokenAndRefreshToken: HttpInterceptorFn = (req, next) => {
  const tokenService: TokenService = inject(TokenService);
  const refreshToken: string | undefined = tokenService.getRefreshToken();
  const isValidRefreshToken: boolean = tokenService.isValidRefreshToken();
  if (refreshToken && isValidRefreshToken) {
    const authService: AuthService = inject(AuthService);
    return authService.refreshToken(refreshToken)
    .pipe(
      switchMap(() => addToken(req, next))
    )
  }
  return next(req);
}
