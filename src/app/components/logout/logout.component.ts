import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
    this.logout();
  }

  logout(){
    this.loginService.isUserLoggedIn = false;
    console.log(this.loginService.isUserLoggedIn);
    this.router.navigate([''])
  }

}
