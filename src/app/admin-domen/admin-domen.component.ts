import { Component, OnInit } from '@angular/core';
import {AdminSubdomenService} from './../admin-subdomen.service';
import {AdminDomenService} from './../admin-domen.service';



@Component({
  selector: 'admin-domen',
  templateUrl: './admin-domen.component.html',
  styleUrls: ['./admin-domen.component.css']
})
export class AdminDomenComponent {
	subdomens;
	domenSubdomens=[];
	idDomen;
error;
domen;
descriptiondomen;

domensColumns=[];
   arrayColumns=[{key:'1rank',subject:'Ранг'},
    {key:'2grade',subject:'Оценка'},
    {key:'3avg',subject:'Просек'}];

  constructor(public service: AdminDomenService, public serviceSub:AdminSubdomenService) {
    this.getSubdomen();
    this.domensColumns=[{key:'4women',subject:'Жени'},
    {key:'5men',subject:'Мажи'},
    {key:'6w&m',subject:'Сооднос жени/мажи'},
    {key:'7number',subject:'Број'},
    {key:'8population',subject:'Популација'},
    {key:'9rate',subject:'Стапка'}];
  }

  getCheckboxVal(event, key, name, columns){
  	
  	if(event.target.checked==true){
  		this.domenSubdomens.push({key,name, columns});
  		console.log(this.domenSubdomens);
  		//this.service.addSubdomenRealtion(key,name);
  		
  	}else{
  		var index=this.domenSubdomens.indexOf(key);
  		this.domenSubdomens.splice(index, 1);
      //console.log(this.domenSubdomens);
  		//this.service.removeSubdomen(key);
  	}
  }


   getCheckboxColumn(event, key, subject){
    if(event.target.checked==true){
      this.arrayColumns.push({key,subject});
    //console.log(this.arrayColumns);
      
    }else{
      var index=this.arrayColumns.indexOf(key);
      this.arrayColumns.splice(index, 1);
         // console.log(this.arrayColumns);      
    }
  }

  addDomen(name,description){
    //console.log(this.domenSubdomens);
    var newDomenSubdomen=this.domenSubdomens.reduce((map, obj) => (map[obj.key] = ({'name':obj.name,columns:obj.columns}), map), {});
    console.log(newDomenSubdomen);
   // var newDomenSubdomen=this.domenSubdomens.reduce((map, obj) => (map[obj.key] = obj.name, map), {});
     var newColumns=this.arrayColumns.reduce((map, obj) => (map[obj.key] = obj.subject, map), {});
    if(name!=undefined && this.domenSubdomens.length!=0){
       this.idDomen=this.service.addDomen(name,description,newDomenSubdomen,newColumns );
    this.service.redirectNewDomen();
      this.error="";
    }else{
      this.error="Ве молиме пополнете ги полињата означени со *";
    }
  }


  getSubdomen(){
    this.subdomens=this.serviceSub.getSubdomenList();
  }




  /*addSubdomen(name,description){
    var newDomenSubdomen=this.arrayColumns.reduce((map, obj) => (map[obj.key] = obj.subject, map), {});
    if(name!=undefined && this.arrayColumns.length!=0){
      this.service.addDomen(name,description, newDomenSubdomen);
      this.error="";
    }else{
      this.error="Ве молиме пополнете ги полињата означени со *";
    }*/

   
  







}
