import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '@services/token.service';

export const redirectGuard: CanActivateFn = () => {
  const tokenService: TokenService = inject(TokenService);
  const router: Router = inject(Router);
  const isValidToken: boolean = tokenService.isValidRefreshToken();
  if (isValidToken) {
    router.navigate(['/app']);
  }
  return true;
};
