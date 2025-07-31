import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

export const guestGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.authTokenSignal()) {
    console.log('Auth Guard: Already authenticated, redirecting to home');
    router.navigate(['/']);
    return false;
  }
  return true;
};
