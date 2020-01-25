import { LoggedinService } from './../../services/loggedin.service';
import { GameService } from './../../services/game.service';
import { Component } from '@angular/core';
import { Game } from 'src/app/models/Game';
import { userprofile } from 'src/app/models/userprofile';
import { Userprofileservice } from '../../services/userprofile.service';
import { GetgamesService } from 'src/app/services/getgames.service';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-marketview',
  templateUrl: './marketview.component.html',
  styleUrls: ['./marketview.component.css']
})
export class MarketviewComponent {
  
  rating = 3; 
  disc: number = 0;
  isAdmin :number = 1;
  allGames: Observable<Game[]> = this.getgames.getAllGames();
  gameForm :FormGroup;
  constructor(private gameservice :GameService, private usersserv : Userprofileservice, private getgames :GetgamesService,
    private loggedinservice :LoggedinService) {
   }
   arr :Game[] = [];
  
  ngOnInit(userprof: userprofile) {
   
    this.allGames.subscribe(
      (response) => {
        this.arr = response;
        console.log(this.arr);
         if(userprof != null || userprof != undefined){
           if(userprof.isPremium === 1 || userprof.isAdmin === 1){
          for(let i = 0; i<this.arr.length;i++){
            this.arr[i].price = this.arr[i].price - (this.arr[i].price * .15);
          }
          this.disc = 1;
        }
     }
      });
  }
  updateGames(array: Game[]){
    this.arr = array;
  }

  addToCart(game :Game){
   this.gameservice.addGameToCart(game);
    
  }
  editGame(game){
    console.log(game);
  }

  openModal(val){
    console.log(val);
  }
  
}
