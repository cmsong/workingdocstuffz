import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Game } from '../../models/Game';
import { HttpClient } from '@angular/common/http';
import { Genre } from '../../models/Genre';
import { Router } from '@angular/router';
@Component({
  selector: 'app-editgame',
  templateUrl: './editgame.component.html',
  styleUrls: ['./editgame.component.css']
})
export class EditgameComponent implements OnInit {
  g : Game;
  g2 : Game;
  gameId: number;
  title: string;
  dateRel: number;
  imgurl: string;
  price: number;
  rating: string;
  description: string;
  genres: Genre[] = [];
  reviews:[] = [];
  constructor(
    private gservice: GameService,
    private http: HttpClient,
    private router: Router
  ) { }
​
  ngOnInit() {
    this.extractgame();
  }
  extractgame (){
    this.g = this.gservice.returngame();
  }
  sub(f){
    this.gameId = this.g.gameId;
    this.genres = this.g.genres;
    console.log(this.g.title);
    if(f.title == ""){
      this.title = this.g.title;
    } else{
      this.title = f.title;
    }
    if(f.dateRel == ""){
      this.dateRel = this.g.releaseDate;
    } else{
      this.dateRel = f.dateRel;
    }
    console.log(f.imgurl);
    console.log(this.g.image          );
    if(f.price == "") {
      this.price = this.g.price;
    } else {
      this.price = f.price;
    }
    if(f.imgurl == ""){
      this.imgurl = this.g.image;
    } else{
      this.imgurl = f.image;
    } if(f.rating == ""){
      this.rating = this.g.rated;
    } else{
      this.rating = f.rating;
    } if(f.description == ""){
      this.description = this.g.description;
    } else{
      this.description = f.description;
    }
    console.log(this.title);
    this.updateGame();
  }
  updateGame() {
    
    this.g2 = new Game(this.gameId, this.title, this.price, this.imgurl, this.genres, this.reviews, this.dateRel, this.rating, this.description);
    console.log(this.g2);
    this.gservice.updategame(this.g2).subscribe((response) => {
      console.log(response);
    });
    
    console.log('posted something');
    this.router.navigateByUrl("/home");
  }
}