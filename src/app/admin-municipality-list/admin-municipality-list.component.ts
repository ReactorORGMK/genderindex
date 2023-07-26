import { Component, OnInit } from '@angular/core';
import {AdminMunicipalityService} from './../admin-municipality.service';
import {Routes, RouterModule, Router} from '@angular/router';

@Component({
  selector: 'app-admin-municipality-list',
  templateUrl: './admin-municipality-list.component.html',
  styleUrls: ['./admin-municipality-list.component.css']
})
export class AdminMunicipalityListComponent implements OnInit {
dropdownOptions=[{id:'select',name:'Избери'},{id:'delete', name:'Избриши'}];
	optionSelected: any;
	municipalityList;
	error;
	arrayRemove=[];
  arrayRemoveCopy=[];

  constructor(public service:AdminMunicipalityService, public router:Router) {
this.municipalityList=service.getMunicipalityList();

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

  removeMunicipality(){
  	this.arrayRemove.forEach(myKey => {
	if(this.optionSelected=='delete'){
  		this.service.removeMunicipality(myKey);
      
  	}else{
		this.error = "Ве молиме изберете од листата";
  	}
  	});
  }
  redirectMunicipality(){
      this.router.navigate(['/admin-municipality']);
    }

  
}
