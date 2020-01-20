import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Game } from '../models/Game';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetgamesService {


  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  createGames(games:Game) :Observable<Game>{
    return this.http.post<Game>('http://localhost:8080/games', games, {headers: this.headers});
  }

  getGamesById(id:number){
    return this.http.get('http://localhost:8080/games?id=' + id);
  }

  getAllGames(){
    return this.http.get('http://localhost:8080/games');
  }

  getAllGamesByName(name:string){
    return this.http.get('http://localhost:8080/games/search?name=' + name);
  }

  updateGames(change:Game) :Observable<Game>{
    return this.http.put<Game>('http://localhost:8080/games', change, {headers: this.headers});
  }

  deleteGames(id:number){
    return this.http.delete('http://localhost:8080/games/' + id);
  }

}
