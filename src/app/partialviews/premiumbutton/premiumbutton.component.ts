import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from 'src/app/services/users.service';
import { Fulluser } from '../../models/Fulluser';
import { LoggedinService } from 'src/app/services/loggedin.service';
import { Router } from '@angular/router';
@Component({
  selector: 'premiumbutton',
  templateUrl: './premiumbutton.component.html',
  styleUrls: ['./premiumbutton.component.css']
})
export class PremiumbuttonComponent implements OnInit {
  user :Fulluser;
  premId :number;
  constructor(private userserv: UsersServiceService, private loggedinservice :LoggedinService,private router :Router) { }
  ngOnInit() {
    this.userserv.getUserByUsername(this.loggedinservice.getUsername()).subscribe((response)=>{
      this.user = response[0];
      this.premId = this.user.isPremium;
      console.log(this.premId);
    })
  }
  makePremium(){
    this.userserv.createPremiumUser(this.user).subscribe((response)=>{console.log(response);
      this.router.navigateByUrl("/home");
    });
    
    

  }
}