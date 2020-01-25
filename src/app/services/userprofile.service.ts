import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { userprofile } from '../models/userprofile';
import { LoggedinService } from './loggedin.service';
​
@Injectable({
  providedIn: 'root'
})
export class Userprofileservice {
​
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  
  constructor(
    private loginservice: LoggedinService,
    private http: HttpClient
  ) {}
​
    getUser() {
      console.log("returning user");
      console.log(this.loginservice.getUsername());
      return this.loginservice.getUsername();
    }
    getUserByUsername(uname:string): Observable<userprofile[]>{
      return this.http.get<userprofile[]>('http://localhost:8080/users/search?username=' + uname);
    }
}