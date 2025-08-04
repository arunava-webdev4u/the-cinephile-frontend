import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.authTokenSignal() === undefined || authService.authTokenSignal() === null) {
    console.error('Auth Guard: No token found, redirecting to login');
    router.navigate(['/auth/login']);
    return false;
  }
  return true;
};
