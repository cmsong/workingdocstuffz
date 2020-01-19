import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Users } from '../components/models/Users';
import { Observable } from 'rxjs';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {
  thing: string;
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }
  persistedUser;

  loginUser(username:string, password:string) :Observable<Users>{
     let user = 'username: ' + username + ', password: ' + password;
     return this.http.post<Users>("http://localhost:8080/getUsers.do",user, { headers: this.headers });
  }

  registerUser(user: Users) :Observable<Users>{
    return this.http.post<Users>("http://localhost:8080/makeUsers.do", user, {headers: this.headers});
  }

  testConn() {
    return this.http.get("http://localhost:8080/characters");
  }
}
