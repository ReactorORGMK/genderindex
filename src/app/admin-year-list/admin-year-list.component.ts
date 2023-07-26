import { Component, OnInit } from '@angular/core';
import {AdminYearService} from './../admin-year.service';
import {Routes, RouterModule, Router} from '@angular/router';


@Component({
  selector: 'app-admin-year-list',
  templateUrl: './admin-year-list.component.html',
  styleUrls: ['./admin-year-list.component.css']
})
export class AdminYearListComponent implements OnInit {
dropdownOptions=[{id:'select',name:'Избери'},{id:'delete', name:'Избриши'}];
	optionSelected: any;
	yearsList;
	arrayRemove=[];
	error;
  constructor(public service:AdminYearService, public router:Router) {
  	this.yearsList=service.getYearList();
   }

  ngOnInit() {
  	
  }

  getCheckboxVal(event, key){
  	if(event.target.checked==true){
  		this.arrayRemove.push(key);

  	}else{
  		var index=this.arrayRemove.indexOf(key);
  		this.arrayRemove.splice(index, 1);

  	}
  }

  removeYear(){
  	this.arrayRemove.forEach(myKey => {
	if(this.optionSelected=='delete'){
  		this.service.removeYear(myKey);
      
  	}else{
		this.error = "Ве молиме изберете од листата";
  	}
  	});
  }

  	redirectNewYear(){
  		this.router.navigate(['/admin-year']);
  	}

}
