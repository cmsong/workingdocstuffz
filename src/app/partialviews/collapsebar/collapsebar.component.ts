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
  games :Game[] =[];
  
  constructor(private gameservice :GameService) { 
    
  }

  ngOnInit() {
      document.getElementById("sidebar").style.width="0px";
      document.getElementById("cartbutton").style.color = "black";
      document.getElementById("sidebarinfo").style.visibility = "hidden";
      document.getElementById("sidebartitle").style.visibility = "hidden";
  }

  getGame(){
    this.games.push(this.gameservice.getGame());
  }

  expand(){
    this.expanded = !this.expanded;
    if(this.expanded){
      document.getElementById("sidebar").style.width = "250px";
      document.getElementById("cartbutton").style.color = "green";
      document.getElementById("sidebar").style.display = "block";
      document.getElementById("sidebarinfo").style.visibility = "visible";
      document.getElementById("sidebartitle").style.visibility = "visible";
    } else if(!this.expanded){
      document.getElementById("sidebar").style.width="0px";
      document.getElementById("cartbutton").style.color = "black";
      document.getElementById("sidebarinfo").style.visibility = "hidden";
      document.getElementById("sidebartitle").style.visibility = "hidden";
    }
  }
}
