import { LoggedinService } from './../../services/loggedin.service';
import { GameService } from './../../services/game.service';
import { Component, OnInit } from '@angular/core';
import { NewGames } from 'src/app/models/NewGames';
import { UsersServiceService } from 'src/app/services/users.service';
import { Users_Games } from 'src/app/models/Users_Games';
import { GetgamesService } from 'src/app/services/getgames.service';
import { Fulluser } from 'src/app/models/Fulluser';

@Component({
  selector: 'app-collapsebar',
  templateUrl: './collapsebar.component.html',
  styleUrls: ['./collapsebar.component.css']
})
export class CollapsebarComponent implements OnInit {
  expanded = false;
  games :NewGames[]=[];
  checkoutGames :NewGames[] = [];
  ug :Users_Games[] = [];
  useradd :Fulluser[] = [];
  usey :Fulluser;
  game1 :NewGames;
  game2 :NewGames;
  constructor(private gameservice :GameService, private userservice :UsersServiceService, private loggedinservice : LoggedinService,
    private getgamesservice :GetgamesService) { 
  }

  ngOnInit() {
      
      document.getElementById("sidebar").style.width="0px";
      document.getElementById("cartbutton").style.color = "black";
      document.getElementById("sidebartitle").style.visibility = "hidden";
     
      this.userservice.getUserByUsername(this.loggedinservice.getUsername()).subscribe((response)=>{ this.useradd = response});

  }

  getGame(){
    // this.games.push(this.gameservice.getGame());
    this.games = this.gameservice.games;
  }
  getLength():boolean {
    if(this.games.length > 0){
      return false;
    }
    return true;
  }
    
  getTotal():number{
    let total = 0;
    for(let i = 0; i < this.games.length; i++){
      total+= this.games[i].price;
    }
    return total;
  }
 
  removeGame(gameId){
    console.log(event);
    for(let i = 0; i < this.games.length; i++){
      if(this.games[i]["gameId"] == gameId){
        this.games.splice(i,1);
      }
    }
  }
   checkout(){ //When button is clicked to checkout, current games in the checkout are passed to an array, which will be passed to
    //the DB. From there, the cart is cleared and can accept more games to be added.
    for(let i = 0; i < this.games.length; i++){
      this.checkoutGames[i] = this.games[i];
    }
    
  
    this.usey = this.useradd[0];
    for(let i = 0; i < this.checkoutGames.length; i++){
    this.getgamesservice.getGamesById(this.checkoutGames[i].gameId).subscribe((response)=>{this.game1 = response;
      console.log(this.game1);
      this.usey.ug.push(this.game1);
      this.userservice.addGamesToUsers(this.usey).subscribe((response)=>{console.log(response)});
    });
    
    }
    // console.log(this.checkoutGames);
    // for(let i = 0; i < this.checkoutGames.length; i++){
    // this.ug.push(new Users_Games(this.loggedinservice.getUsername(),this.checkoutGames[i].gameId));
    //   console.log(this.ug[i]);
    //  }
    //  for(let j = 0; j < this.ug.length; j++){
    //   this.getgamesservice.updateGamesUsers(this.ug[j]).subscribe((response)=>{console.log(response)});
    //  }
    this.games = [];
    this.gameservice.games = [];
    this.checkoutGames=[];
    this.expand();
  }
  
  expand(){
    this.expanded = !this.expanded;
    if(this.expanded){
      

      document.getElementById("sidebar").style.width = "250px";
      document.getElementById("cartbutton").style.color = "green";
      document.getElementById("sidebar").style.display = "block";
      document.getElementById("sidebartitle").style.visibility = "visible";
      
      if(this.gameservice.getGame() != null){
        this.getGame();
        console.log(this.games);
        this.gameservice.clearGame();
      }

    } else if(!this.expanded){
      document.getElementById("sidebar").style.width="0px";
      document.getElementById("cartbutton").style.color = "black";
      document.getElementById("sidebartitle").style.visibility = "hidden";
    }
  }
}
