import { Component, OnInit } from '@angular/core';
import {AuthService} from './../auth.service';


@Component({
  selector: 'admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {

  constructor(public authService:AuthService) {
   }

   loggedIn(){
    this.authService.isloggedIn();
    console.log( this.authService.isloggedIn());
   
  }
  logout(){
    this.authService.logoutUser();
  }

  ngOnInit() {
  }

}
