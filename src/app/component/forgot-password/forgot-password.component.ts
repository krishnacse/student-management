import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  constructor(private auth: AuthService){ }

  email: string = '';

  forgotPassword(){
    this.auth.forgotPassword(this.email);
    this.email = '';
  }

}
