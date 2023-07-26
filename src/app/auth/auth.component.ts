import { Component, OnInit } from '@angular/core';
import {AuthService} from './../auth.service';
import { AdminElsMunicipalityService } from '../admin-els-municipality.service';
import { AdminYearService } from '../admin-year.service';



@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent{
listenerEls;
  yearsEls;
  constructor(public authService: AuthService,public serviceEls:AdminElsMunicipalityService, public serviceYear:AdminYearService){
this.getYears();
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
  getYears(){
    var allYears=[];

  this.listenerEls= this.serviceYear.getYearList().subscribe(year=>{
     year.forEach(function (a) {
       allYears.push({key:a.key, name:a.val});
     })
     this.listenerEls.unsubscribe();
   });
  // console.log(allYears);
this.yearsEls=allYears;
  // console.log(this.yearsEls);
  }
}
