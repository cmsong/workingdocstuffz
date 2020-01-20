import { Injectable } from '@angular/core';
import { Game } from '../models/Game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }
  game :Game;
  games = [];
  addGameToCart(game :Game){
    this.game = game;
    this.games.push(this.game);
  }

  getGame(){
    return this.games;
  }

  // getGame():Game{
  //   return this.game;
  // }
  clearGame(){
    this.game = null;
  }
}
