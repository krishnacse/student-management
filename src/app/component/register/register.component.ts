import { Component,OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  email : string = '';
  password : string = "";
  constructor ( private auth: AuthService){  }
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  register(){
      if(this.email == ''){
        alert("email not entered");
        return;
      }
      if(this.password == ''){
        alert("password not entered");
        return;
      }
      this.auth.register(this.email,this.password);
      this.email = '';
      this.password = '';
  
  }

}
