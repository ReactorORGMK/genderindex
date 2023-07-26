import { Component, OnInit } from '@angular/core';
import {AdminMunicipalityService} from '../admin-municipality.service';
import {AdminRegionService} from '../admin-region.service';

@Component({
  selector: 'app-admin-region',
  templateUrl: './admin-region.component.html',
  styleUrls: ['./admin-region.component.css']
})
export class AdminRegionComponent implements OnInit {

  arrayRemove=[];
  idMun;
  municipalityList;
  error;
  nameRegion;
  constructor(public service:AdminRegionService, public serviceMun:AdminMunicipalityService) { }

  ngOnInit() {
    this.getMunicipality();
  }


  getCheckboxVal(event, key, name, code, codeGraph, colorGraph){

    if(event.target.checked==true){
      this.arrayRemove.push({key,name,code,codeGraph, colorGraph});
      // console.log(this.arrayRemove);
    }else{
      var index=this.arrayRemove.indexOf(key);
      this.arrayRemove.splice(index, 1);
    }
  }

  addRegion(name){
    var newRegion={};
    this.arrayRemove.forEach(function (a) {
      newRegion[a.key]=[];
      newRegion[a.key]={name:a.name,code:a.code, codeGraph:a.codeGraph, colorGraph:a.colorGraph};

    });
    console.log(newRegion);
    if(name!=undefined && this.arrayRemove.length!=0){
      this.idMun=this.service.addRegion(name, newRegion);
      this.error='';
    }else{
      this.error="Ве молиме пополнете ги полињата означени со *"
    }

  }
  getMunicipality(){
    this.municipalityList=this.serviceMun.getMunicipalityList();
  }

}
