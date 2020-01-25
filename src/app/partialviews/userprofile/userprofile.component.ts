import { userprofile } from './../../models/userprofile';
import { Component, OnInit } from '@angular/core';
import { Userprofileservice } from '../../services/userprofile.service'
import { Observable } from 'rxjs';
import { Billing } from 'src/app/models/Billing';
import { Game } from 'src/app/models/Game';
​
@Component({
  selector: 'userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class ProfileComponent implements OnInit {
  gameImg :string;
  adminString :string;
  premiumString :string;
  public currname: string;
  currUser: userprofile[] = [];
  username:string;
  lname:string;
  fname: string;
  email: string;
  isAdmin: number;
  isPremium: number;
  billing: Billing;
  exUser: Observable<userprofile[]> = this.profService.getUserByUsername(this.currname);
  ownedgames: Game[] = [];
  constructor( private profService :Userprofileservice) { }
  
  ngOnInit() { 
    this.grabUser();
    this.exUser.subscribe(
    (response)  => {
      console.log(response);
      this.ownedgames = response[0].ug;
      this.username = response[0].username;
      this.lname = response[0].lname;
      this.fname = response[0].fname;
      this.email = response[0].email;
      this.isAdmin = response[0].isAdmin;
      this.isPremium = response[0].isPremium;
      this.billing = response[0].billing;
      console.log(this.ownedgames);
    });
  }
  grabUser() {
    this.currname = this.profService.getUser();
    this.exUser = this.profService.getUserByUsername(this.currname);
  }
  
  adminConvert(){
    if (this.isAdmin == 1)
      this.adminString = 'Administrative';
    else
      this.adminString = 'Customer'; 
    return this.adminString;
  }
  premiumConvert(){
    if (this.isPremium == 1)
      this.premiumString = 'Yes';
    else
      this.premiumString = 'No'; 
    return this.premiumString;
  }

  
}