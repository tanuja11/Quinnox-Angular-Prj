import { HttpClient } from '@angular/common/http';
import { Flightdetails } from './../flightdetails';
import { FlightdetailService } from './../flightdetail.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-flightschedule',
  templateUrl: './flightschedule.component.html',
  styleUrls: ['./flightschedule.component.css']
})
export class FlightscheduleComponent implements OnInit {

  flightdetails = new Flightdetails;
  flights = [];
  msg='';
  search: string;
  search1: string;

  constructor(private service :FlightdetailService,private http:HttpClient, private router :Router){

    this.service.getAllFlightDetailsService(this.flightdetails).subscribe (
      data =>{
        this.flights = data;
        console.log(this.flights);

      });

    }

  ngOnInit() {
    alert("PLEASE LOGIN FOR BOOKING ");


  }

  bookTickets(fid,flightName,arrivalTime,departureTime,sourceCity,destinationCity){
   console.log(flightName+arrivalTime+departureTime+fid);

    this.router .navigate([`booktickets/${fid}`],{
    queryParams:{
      flightName :flightName,
      arrivalTime:arrivalTime,
      departureTime :departureTime,
      sourceCity:sourceCity,
      destinationCity:destinationCity


      }
      });
   }

}
