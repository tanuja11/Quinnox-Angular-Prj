import { Bookticket } from './../bookticket';
import { Router, ActivatedRoute } from '@angular/router';
import { RegistrationService } from './../registration.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-d',
  templateUrl: './book-d.component.html',
  styleUrls: ['./book-d.component.css']
})
export class BookDComponent implements OnInit {

  bookticket = new Bookticket();
  bookticket1
  msg='';
  fid
  constructor(private service :RegistrationService, private router :Router) {}

  ngOnInit() {
  }

  booktickets(){
    this.service.bookTicketService(this.bookticket).subscribe(
      data =>{
        console.log("response recived");
        this.router .navigate(['/flightschedule'])
      },
    error =>{
      console.log("exception occur");
      this.msg=error.error;
  })

  }


}
