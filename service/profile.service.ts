import { Injectable } from '@angular/core';
//import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  //private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private user = new User("jkobs420", "Jakey", "Kobbz", 1, 1, "jk666@aol.com");

  constructor() {}

    getUser() {
      console.log("returning user");
      return this.user;
    }
   
}
