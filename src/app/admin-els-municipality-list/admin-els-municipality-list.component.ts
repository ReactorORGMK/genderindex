import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Routes, RouterModule, Router} from '@angular/router';
import {AdminElsMunicipalityService} from '../admin-els-municipality.service';

@Component({
	selector: 'app-admin-els-municipality-list',
	templateUrl: './admin-els-municipality-list.component.html',
	styleUrls: ['./admin-els-municipality-list.component.css']
})
export class AdminElsMunicipalityListComponent implements OnInit {
	year;
	years;
	error;
	arrayRemove=[];
  arrayRemoveCopy=[];
	dropdownOptions=[{id:'select',name:'Избери'},{id:'delete', name:'Избриши'}];
	optionSelected: any;
	constructor(public service:AdminElsMunicipalityService, public route:ActivatedRoute, public router:Router) { }

	ngOnInit() {
		var that=this;
		this.route.paramMap.subscribe(id=>{
			this.year=id.get('idYear');
			this.service.getElsMunicipalityYearId(this.year).subscribe(year=>{
				this.years=year;
			})
		})

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
		console.log(this.year,myKey)
  		this.service.removeMunEls(this.year,myKey);
      
  	}else{
		this.error = "Ве молиме изберете од листата";
  	}
  	});
  }

  	redirectNewDomen(year){
  		this.router.navigate(['/admin-els-municipality/'+year]);
  	}
 

}
