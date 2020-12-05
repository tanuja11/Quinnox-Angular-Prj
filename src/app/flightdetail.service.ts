import { Bookticket } from './bookticket';
import { Flightdetails } from './flightdetails';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightdetailService {

  constructor(private http : HttpClient) { }

  URL= "http://localhost:8080/allflights"
  getCurrentData(fid):Observable<any>{
    return this.http.get(`${this.URL}/${fid}`)
  }

  URL1="http://localhost:8080/updateflightinfo"
  updateFlight(fid,data){
    return this.http.put(`${this.URL1}/${fid}`,data)
  }


  addFlightDetailsService(flightdetails:Flightdetails):Observable<any>{
    return this.http.post<any>("http://localhost:8080/addflight",flightdetails)

  }

  deleteFlightDetailsService(fid):Observable<any>{
   return this.http.delete<any>("http://localhost:8080/deleteflight?fId="+fid)

  }

  getFlightByIdService(fId):Observable<any>{
    return this.http.get<any>("http://localhost:8080/flightbyId?fId="+fId)

  }


   getAllFlightDetailsService(flightdetails:Flightdetails):Observable<any>{
    return this.http.get<any>("http://localhost:8080/allflights")
   }


   getAllBookingsService(bookticket:Bookticket):Observable<any>{
    return this.http.get<any>("http://localhost:8080/alltickets")
   }

   deleteTicketService(ticketId):Observable<any>{
    return this.http.delete<any>("http://localhost:8080/deleteticket?ticketId="+ticketId)
   }

   getTicketByIdService(ticketId):Observable<any>{
    return this.http.get<any>("http://localhost:8080/ticketbyid?ticketId="+ticketId)

  }

  updateFlightDetailsService(flightdetails:Flightdetails):Observable<any>{
    return this.http.post<any>("http://localhost:8080/updateflightinfo",flightdetails)

  }
















  //  updateFlightService(flightdetails:Flightdetails):Observable<any>{
  //   return this.http.put<any>("http://localhost:8080/updateflightinfo" ,flightdetails)
  // }


  //  updateFlightService(fligt)

  //  getFlightListService(flightdetails:FlightDetails):Observable<any>{
  //    return this.http.get<any>("http://localhost:8080/allflights",flightdetails)

  //  }



}
