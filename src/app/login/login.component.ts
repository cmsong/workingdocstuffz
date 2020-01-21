import { LoggedinService } from './../services/loggedin.service';

import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from 'src/app/services/users.service';
import { Users } from '../models/Users';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginSuccess :boolean = true;
  allUsers :Users[];
  username: string;
  password: string;

  constructor(private userService: UsersServiceService,private router :Router,private loggedinservice :LoggedinService) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe((response)=>{
      this.allUsers = response;
    });
  }
  
  verifyUser(val){
    
    console.log(this.allUsers);
    console.log(val.username);
    for(let i = 0; i < this.allUsers.length; i++){
      if(val.username == this.allUsers[i].username && val.password == this.allUsers[i].password){
        this.router.navigateByUrl("/home");
        this.loginSuccess = true;
        this.loggedinservice.setLoginStatus(this.loginSuccess);
        this.loggedinservice.setUsername(val.username);
        return this.loginSuccess;
        //Need to pass the 'loginSuccess' value to the app.component.ts to decide which navbar is being displayed
      }
    }
    this.loginSuccess = false;
    this.loggedinservice.setLoginStatus(this.loginSuccess);
    return this.loginSuccess;
  }

}
