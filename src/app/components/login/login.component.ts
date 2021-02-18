import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username = "";
  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
  }

  handleLogin(){
    this.loginService.setUsername(this.username);
    console.log('username is: ' + this.loginService.getUsername());
    this.loginService.isUserLoggedIn = true;
    console.log(this.loginService.isUserLoggedIn )
    this.router.navigate(['post'])
  }


}
