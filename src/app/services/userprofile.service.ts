import { Injectable } from '@angular/core';
//import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { userprofile } from '../models/userprofile';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Userprofileservice {
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {}

    getUserByUsername() :Observable<userprofile[]>{
      return this.http.get<userprofile[]>('http://localhost:8080/genres');
    }

    addGamesToUsers(change: userprofile) :Observable<string>{
      return this.http.put<string>('http://localhost:8080/genres', change, {headers: this.headers});
    }

    
   
}