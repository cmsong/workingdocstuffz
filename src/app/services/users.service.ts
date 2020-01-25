import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Users } from '../models/Users';
import { Observable } from 'rxjs';
import { Game } from '../models/Game';
import { Fulluser } from '../models/Fulluser';


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
    console.log(user);
    return this.http.post<Users>("http://localhost:8080/users", user, {headers: this.headers});
  }

  updateUsersGames(game :Game, username :String){
    console.log("http://localhost:8080/users/games?username="+username+"&g_id="+game.gameId);
   return this.http.get("http://localhost:8080/users/games?username="+username+"&g_id="+game.gameId);
  }
 
  getUserByUsername(username: string) :Observable<Fulluser[]>{
    return this.http.get<Fulluser[]>('http://localhost:8080/users/search?username=' + username);
  }
  addGamesToUsers(change: Fulluser) :Observable<string>{
    return this.http.put<string>('http://localhost:8080/users/', change, {headers: this.headers});
  }
}
