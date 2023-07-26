import { Component, OnInit } from '@angular/core';
import {AdminRegionService} from './../admin-region.service';
import {Routes, RouterModule, Router} from '@angular/router';

@Component({
  selector: 'app-admin-region-list',
  templateUrl: './admin-region-list.component.html',
  styleUrls: ['./admin-region-list.component.css']
})
export class AdminRegionListComponent implements OnInit {
dropdownOptions=[{id:'select',name:'Избери'},{id:'delete', name:'Избриши'}];
	optionSelected: any;
	regionList;
	arrayRemove=[];
	error;
  constructor(public service:AdminRegionService, public router:Router) {
  	this.regionList=service.getRegionList();
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

  removeRegion(){
  	this.arrayRemove.forEach(myKey => {
	if(this.optionSelected=='delete'){
  		this.service.removeRegion(myKey);
      
  	}else{
		this.error = "Ве молиме изберете од листата";
  	}
  	});
  }

  	redirectNewRegion(){
  		this.router.navigate(['/admin-region']);
  	}

}
