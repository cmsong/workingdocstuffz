import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Users } from '../models/Users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  loginUser(user: Users) :Observable<Users>{
    return this.http.post<Users>("http://localhost:8080/getUsers.do", user, { headers: this.headers });
  }

  registerUser(user: Users) :Observable<Users>{
    return this.http.post<Users>("http://localhost:8080/makeUsers.do", user, {headers: this.headers});
  }
}
