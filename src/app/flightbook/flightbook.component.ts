import { HttpClient } from '@angular/common/http';
import { Flightdetails } from './../flightdetails';
import { FlightdetailService } from './../flightdetail.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-flightbook',
  templateUrl: './flightbook.component.html',
  styleUrls: ['./flightbook.component.css']
})
export class FlightbookComponent implements OnInit {

  flightdetails = new Flightdetails;
  flights = [];
  msg='';
  search: string;

  constructor(private service :FlightdetailService,private http:HttpClient, private router :Router){

    this.service.getAllFlightDetailsService(this.flightdetails).subscribe (
      data =>{
        this.flights = data;
        console.log(this.flights);

      });

    }

  ngOnInit() {


  }

  bookTickets(fid ,flightName,arrivalTime,departureTime,sourceCity,destinationCity,day,seat,price){
   console.log(flightName  + arrivalTime+ departureTime + fid+ price);

    this.router .navigate([`booktickets/${fid}`],{
    queryParams:{
      flightName :flightName,
      arrivalTime:arrivalTime,
      departureTime :departureTime,
      sourceCity:sourceCity,
      destinationCity:destinationCity,
      day:day,
      seat:seat,
      price:price


      }
      });
   }

}
