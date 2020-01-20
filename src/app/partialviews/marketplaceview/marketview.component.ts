import { GameService } from './../../services/game.service';
import { Component } from '@angular/core';
import { Game } from 'src/app/models/Game';

@Component({
  selector: 'app-marketview',
  templateUrl: './marketview.component.html',
  styleUrls: ['./marketview.component.css']
})
export class MarketviewComponent {
  constructor(private gameservice :GameService) {

   }
   arr :Game[] = [
    new Game(1,"Resident Evil",59.99,"https://now.estarland.com/images/products/25/51525/127159.jpg","Horror",Date.now(),"M","killer kitties"),
    new Game(2,"Cyberpunk 2077",59.99,"http://images.pushsquare.com/44d8c567ed72a/cyberpunk-2077s-cover-featuring-male-v.large.jpg","Action/Shooter",Date.now(),"M","Cyberpunk 2077"),
    new Game(3,"Borderlands 3",59.99,"https://www.mmoga.com/images/games/_ext/1116075/borderlands-3-super-deluxe-edition-epic-games-store-key_large.png","Action/Shooter",Date.now(),"M","Borderlands 3"),
    new Game(4,"Star Wars Battlefront II",32.00,"https://i.ebayimg.com/images/g/24cAAOSwKOZcCpy1/s-l300.jpg","Action",Date.now(),"M","killer kitties"),
    new Game(1,"Resident Evil",59.99,"https://now.estarland.com/images/products/25/51525/127159.jpg","Horror",Date.now(),"M","killer kitties"),
    new Game(2,"Cyberpunk 2077",59.99,"http://images.pushsquare.com/44d8c567ed72a/cyberpunk-2077s-cover-featuring-male-v.large.jpg","Action/Shooter",Date.now(),"M","Cyberpunk 2077"),
    new Game(3,"Borderlands 3",59.99,"https://www.mmoga.com/images/games/_ext/1116075/borderlands-3-super-deluxe-edition-epic-games-store-key_large.png","Action/Shooter",Date.now(),"M","Borderlands 3"),
    new Game(4,"Star Wars Battlefront II",32.00,"https://i.ebayimg.com/images/g/24cAAOSwKOZcCpy1/s-l300.jpg","Action",Date.now(),"M","killer kitties"),
    new Game(1,"Resident Evil",59.99,"https://now.estarland.com/images/products/25/51525/127159.jpg","Horror",Date.now(),"M","killer kitties"),
    new Game(2,"Cyberpunk 2077",59.99,"http://images.pushsquare.com/44d8c567ed72a/cyberpunk-2077s-cover-featuring-male-v.large.jpg","Action/Shooter",Date.now(),"M","Cyberpunk 2077"),
    new Game(3,"Borderlands 3",59.99,"https://www.mmoga.com/images/games/_ext/1116075/borderlands-3-super-deluxe-edition-epic-games-store-key_large.png","Action/Shooter",Date.now(),"M","Borderlands 3"),
    new Game(4,"Star Wars Battlefront II",32.00,"https://i.ebayimg.com/images/g/24cAAOSwKOZcCpy1/s-l300.jpg","Action",Date.now(),"M","killer kitties"),
    new Game(1,"Resident Evil",59.99,"https://now.estarland.com/images/products/25/51525/127159.jpg","Horror",Date.now(),"M","killer kitties"),
    new Game(2,"Cyberpunk 2077",59.99,"http://images.pushsquare.com/44d8c567ed72a/cyberpunk-2077s-cover-featuring-male-v.large.jpg","Action/Shooter",Date.now(),"M","Cyberpunk 2077"),
    new Game(3,"Borderlands 3",59.99,"https://www.mmoga.com/images/games/_ext/1116075/borderlands-3-super-deluxe-edition-epic-games-store-key_large.png","Action/Shooter",Date.now(),"M","Borderlands 3"),
    new Game(4,"Star Wars Battlefront II",32.00,"https://i.ebayimg.com/images/g/24cAAOSwKOZcCpy1/s-l300.jpg","Action",Date.now(),"M","killer kitties"),
  ]
  ngOnInit() {

 
  }

  addToCart(game :Game){
   this.gameservice.addGameToCart(game);
    
  }
}
