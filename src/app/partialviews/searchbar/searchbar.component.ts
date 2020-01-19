import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  allTags = ['Action','Adventure','Horror','RPG','Fantasy','Space',];
  addedTags = [];
  gameQuery: string;

  constructor() { }

  ngOnInit() {
  }

  searchGames(){

  }

  tagClicker(event, item){
    this.addedTags.push(item);
    for(let i = 0; i < this.allTags.length; i++){
      if (this.allTags[i] == item){
        this.allTags.splice(i,1);
      }
    }
  }

  tagClickerAdded(event, item){
    this.allTags.push(item);
    for(let i = 0; i < this.addedTags.length; i++){
      if (this.addedTags[i] == item){
        this.addedTags.splice(i,1);
      }
    }
  }

}