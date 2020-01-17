import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { ProfileService } from 'src/app/service/profile.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  adminString :string;
  premiumString :string;
  public exUser: User;
 // public exUser = new User('csong', 'Chris', 'Song', 0, 0, 'csong@ree.com');
  constructor( private profService :ProfileService) { }
  
  ngOnInit() { 
    this.grabUser();
    console.log('hello there i am profile');
  }
  grabUser() {
    this.exUser = this.profService.getUser();
  }
  adminConvert(){
    if (this.exUser.isAdmin == 1)
      this.adminString = 'Administrative';
    else
      this.adminString = 'Customer'; 
    return this.adminString;
  }
  premiumConvert(){
    if (this.exUser.isPremium == 1)
      this.premiumString = 'Yes';
    else
      this.premiumString = 'No'; 
    return this.premiumString;
  }
}
