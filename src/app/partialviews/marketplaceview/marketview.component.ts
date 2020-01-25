import { GameService } from './../../services/game.service';
import { Component } from '@angular/core';
import { Game } from 'src/app/models/Game';
import { userprofile } from 'src/app/models/userprofile';
import { Userprofileservice } from 'services/userprofile.service';
import { GetgamesService } from 'src/app/services/getgames.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-marketview',
  templateUrl: './marketview.component.html',
  styleUrls: ['./marketview.component.css']
})
export class MarketviewComponent {
  disc: number = 0;
  allGames: Observable<Game[]> = this.getgames.getAllGames();

  constructor(private gameservice: GameService, private usersserv: Userprofileservice, private getgames: GetgamesService) {

  }
  arr: Game[] = [];



  ngOnInit(userprof: userprofile) {

    this.allGames.subscribe(
      (response) => {
        this.getgames.allGames = response;
        console.log(this.getgames.allGames);
        this.arr = this.getgames.allGames;
        this.getgames.setGames(this.arr);
        if(userprof != null || userprof != undefined){
          if(userprof.isPremium === 1 || userprof.isAdmin === 1){
            for (let i = 0; i < this.arr.length; i++) {
              this.arr[i].price = this.arr[i].price - (this.arr[i].price * .15);
            }
        this.disc = 1;
          }
        }
      }
    );
  }

  addToCart(game: Game) {
    this.gameservice.addGameToCart(game);
  }

  updateGames(array: Game[]){
    this.arr = array;
  }
}
