import { userprofile } from './../../models/userprofile';
import { Component, OnInit } from '@angular/core';
import { Userprofileservice } from '../../services/userprofile.service'

@Component({
  selector: 'userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class ProfileComponent implements OnInit {
  adminString :string;
  premiumString :string;
  public exUser: userprofile;
 // public exUser = new User('csong', 'Chris', 'Song', 0, 0, 'csong@ree.com');
  constructor( private profService :Userprofileservice) { }
  
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