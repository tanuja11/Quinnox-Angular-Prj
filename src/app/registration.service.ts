import { Userr } from './userr';
import { Bookticket } from './bookticket';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http : HttpClient) { }

   loginUserFromRemote(user:Userr):Observable<any>{
    return this.http.post<any>("http://localhost:8080/login",user)
   }

   registerUserFromRemote(user:Userr):Observable<any>{
    return this.http.post<any>("http://localhost:8080/registeruser",user);
}

viewAllUsersService(user:Userr):Observable<any>{
  return this.http.get<any>("http://localhost:8080/allusers");
}



bookTicketService(bookticket:Bookticket):Observable<any>{
  return this.http.post<any>("http://localhost:8080/addticket",bookticket)

}


}
