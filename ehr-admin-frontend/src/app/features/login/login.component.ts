import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import { AuthService } from '../../core/auth/auth.service';

@Component({ selector:'app-login', standalone:true, imports:[FormsModule,RouterLink,ButtonComponent], templateUrl:'./login.component.html', styleUrls:['./login.component.scss'], changeDetection:ChangeDetectionStrategy.OnPush })
export class LoginComponent {
  email=''; password=''; submitted=false; loginError=''; requiresOtp=false; challengeUserId='';
  constructor(private readonly auth:AuthService, private readonly router:Router) {}
  submit(): void { this.loginError=''; this.auth.login(this.email,this.password).subscribe({next:(response)=>{this.submitted=true;this.requiresOtp=Boolean(response.requiresOtp);this.challengeUserId=response.challengeUserId??'';if(!this.requiresOtp)this.router.navigateByUrl('/dashboard');},error:()=>{this.loginError='We could not verify those credentials. Check your details or contact your workspace administrator.';}}); }
}
