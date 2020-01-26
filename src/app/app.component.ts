import { Component } from '@angular/core';
import { LoggedinService } from './services/loggedin.service';
import { Router, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'videogamemarketplace';

  constructor(private loggedinservice :LoggedinService, private router :Router){
  
  }
  
  loggedin(){
    
    return this.loggedinservice.getLoginStatus();
  }
  
}
