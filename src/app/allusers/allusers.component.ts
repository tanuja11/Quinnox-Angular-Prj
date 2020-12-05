import { Userr } from './../userr';
import { Router } from '@angular/router';
import { RegistrationService } from './../registration.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {

  user = new Userr;
  users =[];
  msg='';

  constructor(private service :RegistrationService ,private router :Router){

    this.service.viewAllUsersService(this.user).subscribe (
      data =>{
        this.users =data;
        console.log(this.users);

      })

  }

  ngOnInit() {
  }

}





