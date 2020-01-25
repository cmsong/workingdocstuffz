import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Game } from '../models/Game';
import { Observable } from 'rxjs';
import { Users_Games } from '../models/Users_Games';
import { NewGames } from '../models/NewGames';

@Injectable({
  providedIn: 'root'
})
export class GetgamesService {


  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  createGames(games:Game) :Observable<Game>{
    return this.http.post<Game>('http://localhost:8080/games', games, {headers: this.headers});
  }

  getGamesById(id:number):Observable<NewGames>{
    return this.http.get<NewGames>('http://localhost:8080/games/' + id);
  }

  getAllGames():Observable<Game[]>{
    return this.http.get<Game[]>('http://localhost:8080/games');
  }

 

  getAllGamesByTitle(name:string) :Observable<Game[]>{
    return this.http.get<Game[]>('http://localhost:8080/games/search?title=' + name);
  }

  updateGames(change:Game) :Observable<Game>{
    return this.http.put<Game>('http://localhost:8080/games', change, {headers: this.headers});
  }

  deleteGames(id:number){
    return this.http.delete('http://localhost:8080/games/' + id);
  }

  updateGamesUsers(change: Users_Games) :Observable<string>{
    console.log('here bro');
    return this.http.put<string>('http://localhost:8080/users/games',change,{headers: this.headers});
  }

}
