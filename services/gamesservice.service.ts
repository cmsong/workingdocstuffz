import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http/http';
import { Observable } from 'rxjs';
import { Games } from '../components/models/Games';
import { Genre } from '../components/models/Genre';

@Injectable({
  providedIn: 'root'
})
export class GamesserviceService {

  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  createGames(games:Games) :Observable<Games>{
    return this.http.post<Games>('http://localhost:8080/games', games, {headers: this.headers});
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

  updateGames(change:Games) :Observable<Games>{
    return this.http.put<Games>('http://localhost:8080/games', change, {headers: this.headers});
  }

  deleteGames(id:number){
    return this.http.delete('http://localhost:8080/games/' + id);
  }

}
