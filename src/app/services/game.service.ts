import { Injectable } from '@angular/core';
import { Game } from '../models/Game';
import { HttpHeaders, HttpClient } from '@angular/common/http';
​
@Injectable({
  providedIn: 'root'
})
export class GameService {
​
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) { }
  
  persistgame(game: Game) {
    this.editgame = game;
  }
  returngame() {
    console.log(this.editgame)
    return this.editgame;
  }
  updategame(game: Game) {
    console.log(game);
    return this.http.put<Game>("http://localhost:8080/games", game, {headers: this.headers});
  }
  private editgame: Game;
  
  game :Game;
  games = [];
  addGameToCart(game :Game){
    this.game = game;
    this.games.push(this.game);
  }
​
  getGame(){
    return this.games;
  }
​
  // getGame():Game{
  //   return this.game;
  // }
  clearGame(){
    this.game = null;
  }
}