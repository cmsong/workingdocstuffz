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

  loginUser(username:string, password:string) :Observable<Users>{
     let user = 'username: ' + username + ', password: ' + password;
     return this.http.post<Users>("http://localhost:8080/users",user, { headers: this.headers });
  }

  registerUser(user: Users) :Observable<Users>{
    console.log(user);
    return this.http.post<Users>("http://localhost:8080/users", user, {headers: this.headers});
  }

  allUsers(){
    return this.http.get("http://localhost:8080/users");
  }

  testConn() {
    return this.http.get("http://localhost:8080/characters");
  }
}
