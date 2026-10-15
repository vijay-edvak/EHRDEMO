import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../shared/ui/button/button.component';
@Component({ selector:'app-login', standalone:true, imports:[FormsModule,RouterLink,ButtonComponent], templateUrl:'./login.component.html', styleUrls:['./login.component.scss'], changeDetection:ChangeDetectionStrategy.OnPush })
export class LoginComponent { email=''; password=''; submitted=false; submit(): void { this.submitted=true; } }
