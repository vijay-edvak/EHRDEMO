import { inject } from '@angular/core'; import { CanMatchFn, Router } from '@angular/router'; import { AuthService } from '../auth/auth.service';
export const authGuard:CanMatchFn=()=>{const auth=inject(AuthService);return auth.isAuthenticated()?true:inject(Router).parseUrl('/login');};
