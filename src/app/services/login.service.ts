import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
username:string;
isUserLoggedIn = false;
  constructor() { }
  setUsername(username){
    this.username = username;
  }

  getUsername(){
    return this.username;
  }
}
