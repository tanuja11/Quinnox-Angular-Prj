import { Flightdetails } from './../flightdetails';
import { FlightdetailService } from './../flightdetail.service';
import { Router } from '@angular/router';
import { RegistrationService } from './../registration.service';
import { Bookticket } from './../bookticket';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allbookings',
  templateUrl: './allbookings.component.html',
  styleUrls: ['./allbookings.component.css']
})
export class AllbookingsComponent implements OnInit {

  flightdetails = new Flightdetails;
  flights = [];
  bookticket = new Bookticket;
  bookings =[];
  msg ='';

  constructor(private service :FlightdetailService ,private router :Router){

    this.service.getAllBookingsService(this.bookticket).subscribe (
      data =>{
        this.bookings =data;
        console.log(this.bookings);

      })
  }
  ngOnInit() {
  }

  getTicket(){
    let resp= this.service.getAllBookingsService(this.bookticket);
    resp.subscribe((data) =>{
      this.bookticket=data['data']
    });
  }


  deleteTicket(ticketId){
    let resp= this.service.deleteTicketService(ticketId);
    resp.subscribe((data) =>{
      this.msg=data
      this.getTicket()
      this.router .navigate(['/adminflight'])
    })

}}
