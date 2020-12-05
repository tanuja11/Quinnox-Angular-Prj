import { Flightdetails } from './../flightdetails';
import { Router } from '@angular/router';
import { FlightdetailService } from './../flightdetail.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminflight',
  templateUrl: './adminflight.component.html',
  styleUrls: ['./adminflight.component.css']
})
export class AdminflightComponent implements OnInit {

  flightdetails = new Flightdetails;
  flights = [];
  msg='';

  constructor(private service :FlightdetailService, private router :Router){

    this.service.getAllFlightDetailsService(this.flightdetails).subscribe (
      data =>{
        this.flights = data;
        console.log(this.flights);

      });
  }
  ngOnInit() {
  }

  getFlight(){
    let resp= this.service.getAllFlightDetailsService(this.flightdetails);
    resp.subscribe((data) =>{
      this.flightdetails=data['data']
    });
  }

  deleteFlight(fid){
    let resp= this.service.deleteFlightDetailsService(fid);
    resp.subscribe((data) =>{
      this.msg=data
      this.getFlight()
      alert(" DELETED SUCCESFULLY ");
      this.router .navigate(['/adminflight'])
      alert(" DELETED SUCCESFULLY ");
    })




    // this.service.deleteFlightDetailsService(fid).subscribe(
    //   data =>{
    //     this.flights = data;
    //     console.log("response recived");
    //     this.router .navigate(['/login'])
    //   },
    //     error =>{
    //     console.log("exception occur");
    //     this.msg=error.error;
    // })

  }

  addFlights(){
    this.router.navigate(['/addflight'])
  }

  updateFlight(fid,flightName,arrivalTime,departureTime,sourceCity,destinationCity,day,seat,price){
    console.log(fid+flightName+arrivalTime);

    this.router.navigate([`updateflight/${fid}`],{
      queryParams:{
        flightName:flightName,
        arrivalTime:arrivalTime,
        departureTime:departureTime,
        sourceCity:sourceCity,
        destinationCity:destinationCity,
        day:day,
        seat:seat,
        price:price
      }
    });

  }

  viewAllBookings(){
    this.router.navigate(['/allbookings'])
  }

  viewAllUsers(){
    this.router.navigate(['/allusers'])


  }
}
