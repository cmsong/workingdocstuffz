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

  constructor(private userService: UsersServiceService,private router :Router,private loggedinservice :LoggedinService) { 
   
  }

   ngOnInit() {
    this.userService.getAllUsers().subscribe((response)=>{
      this.allUsers = response;
    });
  }
  
  verifyUser(val){
    let user = new Users(val.username,val.password);
    this.userService.loginUser(user).subscribe((response)=>{
      if(response != null){
        this.router.navigateByUrl("/home");
        this.loginSuccess = true;
        this.loggedinservice.setLoginStatus(this.loginSuccess);
        this.loggedinservice.setUsername(val.username);
        return this.loginSuccess;
      }
      else{
        this.loginSuccess = false;
        this.loggedinservice.setLoginStatus(this.loginSuccess);
        return this.loginSuccess;
      }
    });
  }

}
