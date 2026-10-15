import { inject } from '@angular/core'; import { CanMatchFn, Router } from '@angular/router'; import { PermissionService } from './permission.service';
export function permissionGuard(code:string):CanMatchFn{ return ()=>inject(PermissionService).has(code)?true:inject(Router).parseUrl('/dashboard'); }
