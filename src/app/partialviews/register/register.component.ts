import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from 'src/app/services/users.service';
import { Users } from '../../models/Users';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  ccInfo: string; //Dummy field. Not implemented in the backend.
  billingImage: string = "https://images.squarespace-cdn.com/content/v1/5a760a4890bade7aa2cc94b2/1530909622840-T9MKK1Y7MHGJRECSTWXQ/ke17ZwdGBToddI8pDm48kIAfDUahperg14ErRP7t_GMUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcVl31PG4RPDp27sr4LX07pBdzedAFAOAiPqYIuaZjezyMQNkVVzH_xWFOabp85M7O/credit-card-logos+copy.png?format=300w";
  constructor(private usersService: UsersServiceService) { }

  ngOnInit() {
  }
  sub(f){
  this.username = f.username;
  this.password = f.password;
  this.email = f.email;
  this.firstName = f.firstName;
  this.lastName = f.lastName;
  this.ccInfo = f.ccinfo;
 console.log(f);
    this.createUser();
  }
  createUser(){
    console.log(this.password);
    this.usersService.registerUser(new Users(this.username,this.password,this.email,this.firstName,this.lastName)).subscribe(
      (response) => {
        console.log(response);
      }
    );
  }
  

}
