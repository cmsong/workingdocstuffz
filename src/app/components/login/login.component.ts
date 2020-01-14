import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from 'src/app/services/users.service';
import { Users } from '../models/Users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private userService: UsersServiceService) { }

  ngOnInit() {
  }

  verifyUser(){
    this.userService.loginUser(new Users(this.username,this.password)).subscribe(
      (response) => {
        console.log(response);
      }
    );
  }

}
