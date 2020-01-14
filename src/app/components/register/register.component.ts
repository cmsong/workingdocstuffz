import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from 'src/app/services/users.service';
import { Users } from '../models/Users';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: string;
  password: string;

  constructor(private usersService: UsersServiceService) { }

  ngOnInit() {
  }

  createUser(){
    this.usersService.registerUser(new Users(this.username,this.password)).subscribe(
      (response) => {
        console.log(response);
      }
    );
  }

}
