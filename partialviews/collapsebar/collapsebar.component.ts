import { GameService } from './../../services/game.service';
import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/Game';

@Component({
  selector: 'app-collapsebar',
  templateUrl: './collapsebar.component.html',
  styleUrls: ['./collapsebar.component.css']
})
export class CollapsebarComponent implements OnInit {
  expanded = false;
  games :Game[]=[];
  
  constructor(private gameservice :GameService) { 
  }

  ngOnInit() {
      
      document.getElementById("sidebar").style.width="0px";
      document.getElementById("cartbutton").style.color = "black";
      document.getElementById("sidebartitle").style.visibility = "hidden";
     

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
