import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import {AdminSubdomenService} from './../admin-subdomen.service';



@Component({
	selector: 'app-admin-subdomen',
	templateUrl: './admin-subdomen.component.html',
	styleUrls: ['./admin-subdomen.component.css']
})
export class AdminSubdomenComponent {
	error;
	subdomen;
	 descriptionsubdomen;
	 subdomensColumns=[];
	 arrayColumns=[{key:'1rank',subject:'Ранг'},
		{key:'2grade',subject:'Оценка'},
		{key:'3avg',subject:'Просек'}];

	constructor(public service: AdminSubdomenService) {
		this.subdomensColumns=[{key:'4women',subject:'Жени'},
		{key:'5men',subject:'Мажи'},
		{key:'6w&m',subject:'Сооднос жени/мажи'},
		{key:'7number',subject:'Број'},
		{key:'8population',subject:'Популација'},
		{key:'9rate',subject:'Стапка'}];
	}


  getCheckboxVal(event, key, subject){
  	if(event.target.checked==true){
  		this.arrayColumns.push({key,subject});
  	console.log(this.arrayColumns);
  		
  	}else{
  		var index=this.arrayColumns.indexOf(key);
  		this.arrayColumns.splice(index, 1);
  		  	console.log(this.arrayColumns);  		
  	}
  }

  addSubdomen(name,description){
    var newDomenSubdomen=this.arrayColumns.reduce((map, obj) => (map[obj.key] = obj.subject, map), {});
    if(name!=undefined && this.arrayColumns.length!=0){
      console.log(newDomenSubdomen);
    this.service.addDomen(name,description, newDomenSubdomen);
      this.error="";
    }else{
      this.error="Ве молиме пополнете ги полињата означени со *";
    }

   
  }
}
