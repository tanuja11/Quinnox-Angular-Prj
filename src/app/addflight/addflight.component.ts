import { Router } from '@angular/router';
import { FlightdetailService } from './../flightdetail.service';
import { Flightdetails } from './../flightdetails';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addflight',
  templateUrl: './addflight.component.html',
  styleUrls: ['./addflight.component.css']
})
export class AddflightComponent implements OnInit {

  flightdetails = new Flightdetails();
  msg='';

  constructor(private service :FlightdetailService, private router :Router) { }


  ngOnInit() {
  }

  addflightdetails(){
    this.service.addFlightDetailsService(this.flightdetails).subscribe(
      data =>{
        console.log("response recived");
        this.router .navigate(['/adminflight'])
      },
        error =>{
        console.log("exception occur");
        this.msg=error.error;
    })


    }

}
