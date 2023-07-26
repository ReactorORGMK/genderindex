import { Component, OnInit } from '@angular/core';
import {AuthService} from './../auth.service';

@Component({
  selector: 'sign-in',
  templateUrl: './admin-sign-in.component.html',
  styleUrls: ['./admin-sign-in.component.css']
})
export class AdminSignInComponent implements OnInit {

  constructor(public authService:AuthService) { }

  ngOnInit() {
  }

login(email,password) {
    this.authService.loginUser(email.viewModel, password.viewModel);
    email = password = '';    
  }

  logout(){
    this.authService.logoutUser();
  }

  loggedIn(){
    this.authService.isloggedIn();
    console.log( this.authService.isloggedIn());
   
  }
}
