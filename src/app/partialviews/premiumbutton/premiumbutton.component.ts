import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from 'src/app/services/users.service';
import { Fulluser } from 'src/app/models/fulluser';

@Component({
  selector: 'app-premiumbutton',
  templateUrl: './premiumbutton.component.html',
  styleUrls: ['./premiumbutton.component.css']
})
export class PremiumbuttonComponent implements OnInit {
  user: Fulluser;

  constructor(private userserv: UsersServiceService) { }

  ngOnInit() {
    //make user = user that is persisted through the program here
  }


  makePremium(){
    this.userserv.addGamesToUsers(this.user).subscribe((response)=>{console.log(response)});
  }
}
