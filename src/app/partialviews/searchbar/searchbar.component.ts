import { Component, OnInit } from '@angular/core';
import { GenreService } from 'src/app/services/genre.service';
import { Genre } from 'src/app/models/Genre';
import { Observable } from 'rxjs';
import { Game } from 'src/app/models/Game';
import { MarketviewComponent } from '../marketplaceview/marketview.component';
import { GameService } from 'src/app/services/game.service';
import { GetgamesService } from 'src/app/services/getgames.service';
@Component({
  selector: 'searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  allTags: Genre[] = [];
  allGames: Game[] = [];
  allGamesReset: Game[] = [];
  gameTags: Game[] = [];
  singleGame: Game[] = [];
  tagsFetch: Observable<Genre[]> = this.genreservice.getAllGenres();
  gamesFetch: Observable<Game[]> = this.gameserv.getAllGames();
  addedTags: Genre[] = [];
  gameQuery: string;
  constructor(private genreservice: GenreService, private market: MarketviewComponent, private gameserv: GetgamesService) { }
  ngOnInit() {
    this.tagsFetch.subscribe(
      (response) => {
        this.genreservice.allGenres = response;
        this.allTags = this.genreservice.allGenres;
      }
    );
    this.gamesFetch.subscribe(
      (response) => {
        this.allGames = response;
        this.allGamesReset = response;
      }
    );
  }
  searchGames(gquery){
    this.gameserv.getAllGamesByTitle(gquery).subscribe((response)=>{
      this.singleGame = response;
    

    if(gquery.trim() == "" || gquery == undefined){
      console.log(this.allGames);
      this.market.updateGames(this.allGames);
      
      this.singleGame = [];
    } else{
      this.market.updateGames(this.singleGame);
      this.singleGame = [];
    }});
  }
  tagClicker(event, item){
    this.addedTags.push(item);
    for(let i = 0; i < this.allTags.length; i++){
      if (this.allTags[i] == item){
        this.allTags.splice(i,1);
      }
    }
    this.gameTags = [];
    for (let i = 0; i < this.allGames.length; i++) {
      for (let j = 0; j < this.addedTags.length; j++) {
        let obj = this.allGames[i];
        for (let z = 0;  z < obj.genres.length; z++){
          if (obj.genres[z].ge_id == this.addedTags[j].ge_id) {
            this.gameTags.push(this.allGames[i]);
            for (let y = 0; y < this.gameTags.length; y++){
              for (let o = 0; o < this.gameTags.length; o++) {
                if (this.gameTags[y].gameId == this.gameTags[o].gameId && o != y) {
                  this.gameTags.splice(o, 1);
                }
              }
            }
            this.market.updateGames(this.gameTags);
          }
        }
      }
    }
  }
  tagClickerAdded(event, item){
    this.allTags.push(item);
    for(let i = 0; i < this.addedTags.length; i++){
      if (this.addedTags[i] == item){
        this.addedTags.splice(i,1);
        if (this.addedTags.length == 0){
          this.gameTags = this.allGamesReset;
          this.market.updateGames(this.gameTags);
        }
      }
    }
    
    this.gamesFetch.subscribe(
      (response) => {
        this.allGames = response;
      }
    );
    this.gameTags = [];
    for (let i = 0; i < this.allGames.length; i++) {
      for (let j = 0; j < this.addedTags.length; j++) {
        let obj = this.allGames[i];
        for (let z = 0; z < obj.genres.length; z++) {
          if (obj.genres[z].ge_id == this.addedTags[j].ge_id) {
            this.gameTags.push(this.allGames[i]);
            this.market.updateGames(this.gameTags);
          }
        }
      }
    }
  }
}