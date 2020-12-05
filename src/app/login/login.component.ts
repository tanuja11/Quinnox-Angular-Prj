import { Userr } from './../userr';
import { Component, OnInit } from '@angular/core';
import { RegistrationService } from './../registration.service';

import { Router } from '@angular/router';
import { FormBuilder,Validators,FormControl,NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new Userr();
  msg='';

  error: String;
  message: String;
  constructor(private service :RegistrationService, private router :Router) { }

  ngOnInit() {
  }

  loginUser(){
    // if(loginform.value.email)
    this.service.loginUserFromRemote(this.user).subscribe(
      data =>{console.log("response recived");
      this.router .navigate(['/flightbook'])
    },
      error =>{ console.log("exception occur");
      this.msg="Wrong Credentials , Entr valid Email and Password";
  })

  }

}
