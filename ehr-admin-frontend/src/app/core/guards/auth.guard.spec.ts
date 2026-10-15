import { TestBed } from '@angular/core/testing'; import { Router } from '@angular/router'; import { AuthService } from '../auth/auth.service'; import { authGuard } from './auth.guard';

describe('authGuard', () => { it('redirects an unauthenticated user to login', () => { TestBed.configureTestingModule({providers:[{provide:AuthService,useValue:{isAuthenticated:()=>false}},{provide:Router,useValue:{parseUrl:(url:string)=>url}}]}); expect(TestBed.runInInjectionContext(()=>authGuard({} as never,{} as never))).toBe('/login'); }); });
