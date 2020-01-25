import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from 'src/app/services/users.service';
import { Users } from '../../models/Users';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  usersarr: Users[] = [];
  allUsers: Observable<Users[]> = this.usersService.allUsers();
  stopGap: number = 0;
  username: string;
  password: string;
  email: string;
  fname: string;
  lname: string;
  ccInfo: string; //Dummy field. Not implemented in the backend.
  billingImage: string = "https://images.squarespace-cdn.com/content/v1/5a760a4890bade7aa2cc94b2/1530909622840-T9MKK1Y7MHGJRECSTWXQ/ke17ZwdGBToddI8pDm48kIAfDUahperg14ErRP7t_GMUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcVl31PG4RPDp27sr4LX07pBdzedAFAOAiPqYIuaZjezyMQNkVVzH_xWFOabp85M7O/credit-card-logos+copy.png?format=300w";
  constructor(private usersService: UsersServiceService, private router: Router) { }

  ngOnInit() {
  }
  sub(f){
  this.username = f.username;
  this.password = f.password;
  this.email = f.email;
  this.fname = f.fname;
  this.lname = f.lname;
  this.ccInfo = f.ccinfo;
 console.log(f);
    this.createUser();
  }
  createUser(){
    this.allUsers.subscribe(
      (response) => {
        this.usersarr = response;
        for (let i = 0; i < this.usersarr.length; i++){
          if(this.usersarr[i].username === this.username){
            this.stopGap = 1;
          }
          console.log(this.usersarr[i].username);
        }
        if(this.stopGap === 0){
          this.usersService.registerUser(new Users(this.username,this.password,this.email,this.fname,this.lname)).subscribe(
            (response) => {
              console.log(response);
            }
          );
          //this.router.navigate(['/login']);
        } else {
          console.log('Username already taken');
        }
      }
    );
    
  }
  

}
