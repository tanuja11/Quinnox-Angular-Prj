import { Observable } from 'rxjs';
import { Admin } from './admin';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http : HttpClient) { }

  loginAdminFromRemote(admin:Admin):Observable<any>{
    return this.http.post<any>("http://localhost:8080/adminlogin",admin)
   }

  }
