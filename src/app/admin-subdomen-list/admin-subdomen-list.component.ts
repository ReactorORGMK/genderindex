import { Component, OnInit } from '@angular/core';
import {AdminSubdomenService} from './../admin-subdomen.service';
import {Routes, RouterModule, Router} from '@angular/router';

@Component({
  selector: 'admin-subdomen-list',
  templateUrl: './admin-subdomen-list.component.html',
  styleUrls: ['./admin-subdomen-list.component.css']
})

export class AdminSubdomenListComponent  {
	dropdownOptions=[{id:'select',name:'Избери'},{id:'delete', name:'Избриши'}];
	optionSelected: any;
	subdomensList;
	error;
	arrayRemove=[];

  constructor(public service:AdminSubdomenService, public router: Router) { 
  	this.subdomensList=service.getSubdomenList();
  }

  getCheckboxVal(event, key){
  
  	if(event.target.checked==true){
  		this.arrayRemove.push(key);
  	}else{
  		var index=this.arrayRemove.indexOf(key);
  		this.arrayRemove.splice(index, 1);
  	}
  }

  removeSubdomen(){
  	this.arrayRemove.forEach(myKey => {
	if(this.optionSelected=='delete'){
  		this.service.removeDomen(myKey);
  	}else{
		this.error = "Ве молиме изберете од листата";
  	}
  	});
  }

  	redirectNewSubdomen(){
  		this.router.navigate(['/admin-subdomen']);
  	}
 
  

}
