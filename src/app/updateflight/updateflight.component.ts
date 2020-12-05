import { Flightdetails } from './../flightdetails';
import { Router } from '@angular/router';
import { FlightdetailService } from './../flightdetail.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updateflight',
  templateUrl: './updateflight.component.html',
  styleUrls: ['./updateflight.component.css']
})
export class UpdateflightComponent implements OnInit {

  flightdetailsform = new FormGroup({
    flightName: new FormControl(''),
    sourceCity: new FormControl(''),
    arrivalTime: new FormControl(''),
    destinationCity: new FormControl(''),
    departureTime: new FormControl('')
  })

  fid;
  msg='';
  flightdetails= new Flightdetails();
  flightdetails1

  constructor(private service :FlightdetailService,private router :Router, private activated:ActivatedRoute,) {

    this.activated.params.subscribe(data=>{
      this.fid=data;
      console.log(this.fid);
    })
    this.activated.queryParams.subscribe(data=>{
      this.flightdetails1=data;
      console.log(this.flightdetails1);

    })
  }




  ngOnInit() {}

  updateFlight(){
    this.service.updateFlightDetailsService(this.flightdetails1).subscribe(
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
