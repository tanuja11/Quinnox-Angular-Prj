import { Userr } from './../userr';
import { Router } from '@angular/router';
import { RegistrationService } from './../registration.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user= new Userr
  msg='';

  constructor(private service :RegistrationService , private router :Router) { }

  ngOnInit() {
  }

  registerUser(){
    this.service.registerUserFromRemote(this.user).subscribe(
      data =>{
      console.log("response recived");
      this.router .navigate(['/login'])
    },
      error =>{
      console.log("exception occur");
      this.msg=error.error;
  })
  }

}
