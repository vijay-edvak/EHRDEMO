import { Injectable, signal } from '@angular/core';
import { HttpClient, HttpContext, HttpContextToken } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
export const SKIP_AUTH = new HttpContextToken<boolean>(() => false);
interface AuthResponse { accessToken?: string; requiresOtp?: boolean; challengeUserId?: string; }
@Injectable({providedIn:'root'}) export class AuthService { private readonly tokenState=signal<string|null>(null); private readonly api=`${environment.apiUrl}/auth`; accessToken=this.tokenState.asReadonly(); constructor(private readonly http:HttpClient) {}
 login(email:string,password:string):Observable<AuthResponse>{return this.http.post<AuthResponse>(`${this.api}/login`,{email,password},{withCredentials:true}).pipe(tap((response)=>{if(response.accessToken)this.tokenState.set(response.accessToken);}));}
 verifyOtp(userId:string,otp:string):Observable<AuthResponse>{return this.http.post<AuthResponse>(`${this.api}/verify-otp`,{userId,otp},{withCredentials:true}).pipe(tap((response)=>{if(response.accessToken)this.tokenState.set(response.accessToken);}));}
 refresh():Observable<boolean>{return this.http.post<AuthResponse>(`${this.api}/refresh`,{},{withCredentials:true,context:new HttpContext().set(SKIP_AUTH,true)}).pipe(tap((response)=>this.tokenState.set(response.accessToken??null)),map((response)=>Boolean(response.accessToken)),catchError(()=>{this.clear();return of(false);}));}
 logout():Observable<void>{return this.http.post<void>(`${this.api}/logout`,{},{withCredentials:true}).pipe(tap(()=>this.clear()));}
 clear():void{this.tokenState.set(null);} isAuthenticated():boolean{return Boolean(this.tokenState());} csrfToken():string|null{return document.cookie.split('; ').find((part)=>part.startsWith('ehr_csrf='))?.split('=')[1]??null;}
}
