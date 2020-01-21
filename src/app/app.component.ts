import { Component } from '@angular/core';
import { LoggedinService } from './services/loggedin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'videogamemarketplace';
  
  constructor(private loggedinservice :LoggedinService){
    
  }

  loggedin(){
    return this.loggedinservice.getLoginStatus();
  }
  
}
