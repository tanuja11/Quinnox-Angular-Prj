import { Bookticket } from './../bookticket';
import { Router, ActivatedRoute } from '@angular/router';
import { RegistrationService } from './../registration.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booktickets',
  templateUrl: './booktickets.component.html',
  styleUrls: ['./booktickets.component.css']
})
export class BookticketsComponent implements OnInit {

  bookticket = new Bookticket();
  bookticket1
  msg='';
  fid
  constructor(private service :RegistrationService, private router :Router, private activated:ActivatedRoute) {

    this.activated.params.subscribe(data =>{
      this.fid=data;
      console.log(this.fid);

    });
    this.activated.queryParams.subscribe(data=>{
      this.bookticket1=data;
      console.log(this.bookticket1);

    })



  }

  ngOnInit() {

    // this.flightName=this.activated.snapshot.params.flightName || null;


  }

  booktickets(){
    this.service.bookTicketService(this.bookticket1).subscribe(
      data =>{
        console.log("response recived");
        alert(" BOOKING CONFIRMED");
        this.router .navigate(['/home'])
      },
    error =>{
      console.log("exception occur");
      alert("Something went wrong");
      this.msg=error.error;
  })

  }


}
