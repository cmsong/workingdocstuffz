import { LoggedinService } from './../../services/loggedin.service';
import { GameService } from './../../services/game.service';
import { Component } from '@angular/core';
import { Game } from 'src/app/models/Game';
import { GetgamesService } from 'src/app/services/getgames.service';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { UsersServiceService } from 'src/app/services/users.service';
import { Fulluser } from 'src/app/models/Fulluser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marketview',
  templateUrl: './marketview.component.html',
  styleUrls: ['./marketview.component.css']
})
export class MarketviewComponent {
  
  rating = 3; 
  disc: number = 0;
  isAdmin :number = 0;
  allGames: Observable<Game[]> = this.getgames.getAllGames();
  gameForm :FormGroup;
  userprof :Fulluser;
  constructor(private gameservice :GameService, private usersserv : UsersServiceService, private getgames :GetgamesService,
    private loggedinservice :LoggedinService, private router :Router) {
   }
   arr :Game[] = [];
  
  ngOnInit() {
    this.usersserv.getUserByUsername(this.loggedinservice.getUsername()).subscribe((response)=>{
      this.userprof = response[0];
      this.isAdmin = this.userprof.isAdmin;
    })
    this.allGames.subscribe(
      (response) => {
        this.arr = response;
        console.log(this.userprof);
         if(this.userprof != null || this.userprof != undefined){
           if(this.userprof.isPremium == 1 || this.userprof.isAdmin == 1){
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
  

  persistgame(game :Game){
    console.log(game);
    this.gameservice.persistgame(game);
    this.router.navigateByUrl("/editgame");
  }
  
}
