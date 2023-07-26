import { Component, OnInit } from '@angular/core';
import {AdminDomenService} from './../admin-domen.service';
import {Routes, RouterModule, Router} from '@angular/router';

@Component({
  selector: 'app-admin-domen-list',
  templateUrl: './admin-domen-list.component.html',
  styleUrls: ['./admin-domen-list.component.css']
})
export class AdminDomenListComponent  {
dropdownOptions=[{id:'select',name:'Избери'},{id:'delete', name:'Избриши'}];
	optionSelected: any;
	domensList;
	error;
	arrayRemove=[];
  arrayRemoveCopy=[];

  constructor(public service:AdminDomenService, public router: Router) { 
  	this.domensList=service.getDomenList();
  }

  getCheckboxVal(event, key){
  	if(event.target.checked==true){
  		this.arrayRemove.push(key);

  	}else{
  		var index=this.arrayRemove.indexOf(key);
  		this.arrayRemove.splice(index, 1);

  	}
  }

  removeDomen(){
  	this.arrayRemove.forEach(myKey => {
	if(this.optionSelected=='delete'){
  		this.service.removeDomen(myKey);
      
  	}else{
		this.error = "Ве молиме изберете од листата";
  	}
  	});
  }

  	redirectNewDomen(){
  		this.router.navigate(['/admin-domen']);
  	}
 
  

}
