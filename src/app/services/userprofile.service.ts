import { Injectable } from '@angular/core';
//import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { userprofile } from '../models/userprofile';

@Injectable({
  providedIn: 'root'
})
export class Userprofileservice {

  //private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private user = new userprofile("jkobs420", "Jakey", "Kobbz", 1, 1, "jk666@aol.com");

  constructor() {}

    getUser() {
      console.log("returning user");
      return this.user;
    }
   
}