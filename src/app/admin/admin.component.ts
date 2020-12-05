import { AdminService } from './../admin.service';
import { Admin } from './../admin';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,Validators,FormControl,NgForm} from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  admin= new Admin();
  msg='';

  constructor(private service :AdminService, private router :Router) { }

  ngOnInit() {
  }


  loginAdmin(){
    this.service.loginAdminFromRemote(this.admin).subscribe(
      data =>{console.log("response recived");
      this.router .navigate(['/adminflight'])
    },
      error =>{ console.log("exception occur");
      this.msg="Wrong Credentials , Entr valid Email and Password";
  })

  }


}
