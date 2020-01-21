import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggedinService {

  isLoggedIn = false;
  uname;
  setLoginStatus(status){
    this.isLoggedIn = status;
  }
  setUsername(username){
    this.uname = username;
  }
  getUsername(){
    return this.uname;
  }
  getLoginStatus(){
    return this.isLoggedIn;
  }
  constructor() { }
}
