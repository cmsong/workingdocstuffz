import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Users } from '../models/Users';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {
  thing: string;
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }
  persistedUser;
  getAllUsers() :Observable<Users[]>{
    return this.http.get<Users[]>("http://localhost:8080/users");
  }
  loginUser(username:string, password:string) :Observable<Users>{
    console.log("DB CALLED");
     let user = "username:" + username + ", password:" + password;
     return this.http.get<Users>("http://localhost:8080/users/"+username+"/"+password);
  }

  registerUser(user: Users) :Observable<Users>{
    return this.http.post<Users>("http://localhost:8080/users", user, {headers: this.headers});
  }

  testConn() {
    return this.http.get("http://localhost:8080/characters");
  }
}
