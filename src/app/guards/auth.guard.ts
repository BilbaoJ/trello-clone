import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '@services/token.service';

export const authGuard: CanActivateFn = () => {
  const tokenService: TokenService = inject(TokenService);
  const router: Router = inject(Router);
  const isValidToken: boolean = tokenService.isValidRefreshToken();
  if (!isValidToken) {
    router.navigate(['/login']);
    return false;
  }
  return true;
};
