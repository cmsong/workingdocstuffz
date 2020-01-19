import { Injectable } from '@angular/core';
import { Game } from '../models/Game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }
  game :Game;
  addGameToCart(game :Game){
    this.game = game;
  }

  getGame():Game{
    return this.game;
  }
}
