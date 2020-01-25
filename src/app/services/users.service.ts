import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Users } from '../models/Users';
import { Observable } from 'rxjs';
import { userprofile } from 'models/userprofile';
import { Fulluser } from '../models/fulluser';


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

  allUsers() :Observable<Users[]>{
    return this.http.get<Users[]>("http://localhost:8080/users");
  }

  allUsersByUsername(username: string) :Observable<Users[]>{
    return this.http.get<Users[]>("http://localhost:8080/users?username=" + username);
  }

  updateGamesUsers(username: string, g_id: number){
    console.log('in here');
    return this.http.get('http://localhost:8080/users/games?username=' + username + '&g_id=' + g_id);
  }

  testConn() {
    return this.http.get("http://localhost:8080/characters");
  }

  createPremiumUser(change: Fulluser){
    change.isPremium = 1;
    return this.http.put<Users>("http://localhost:8080/users/premium", change, {headers: this.headers});
  }









  getUserByUsername(username: string) :Observable<Fulluser[]>{
    return this.http.get<Fulluser[]>('http://localhost:8080/users/search?username=' + username);
  }

  addGamesToUsers(change: Fulluser) :Observable<string>{
    return this.http.put<string>('http://localhost:8080/users', change, {headers: this.headers});
  }

}
