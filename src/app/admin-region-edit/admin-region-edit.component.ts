import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { AngularFireDatabase ,AngularFireList} from '@angular/fire/database';
import {Routes, RouterModule, Router} from '@angular/router';
import{AdminRegionService} from '../admin-region.service';
import{AdminMunicipalityService} from '../admin-municipality.service';
@Component({
	selector: 'app-admin-region-edit',
	templateUrl: './admin-region-edit.component.html',
	styleUrls: ['./admin-region-edit.component.css']
})
export class AdminRegionEditComponent implements OnInit {
	idRegion;
	nameRegion;
	regionData;
	regions;
	regionsYear;
	checkedValue=[];
	newRegionsCheckbox=[];
	new={};
	municipalityList;

	constructor(public route:ActivatedRoute, public service:AdminRegionService, public serviceMun:AdminMunicipalityService) {


	}

	ngOnInit() {
		this. getMunicipality();
		var that=this;
		this.route.paramMap.subscribe(id=>{
			this.idRegion=id.get('idRegion');
		/*	this.regionData=this.service.getRegion(this.idRegion).subscribe(objectdata => 
			{
				this.regionData=objectdata;
				this.checkedValue=Object.keys(objectdata.municipalities);

				var oldRegionsArray=[];
				for(var key in objectdata.municipalities){
					oldRegionsArray.push({key:key,name:objectdata.municipalities[key].name, code:objectdata.municipalities[key].code});
				}
				this.newRegionsCheckbox=oldRegionsArray;
			});*/


			//old code

			this.regionData=this.service.getRegion(this.idRegion);
			this.regionData.forEach(function (a) {
				that.regionData=a;
				that.checkedValue=Object.keys(a.municipalities);
				var oldRegionsArray=[];
				for(var key in a.municipalities){
					oldRegionsArray.push({key:key,name:a.municipalities[key].name, code:a.municipalities[key].code, codeGraph:a.municipalities[key].codeGraph, colorGraph:a.municipalities[key].colorGraph});
				}
				that.newRegionsCheckbox=oldRegionsArray;

			})


		});
		
	}

	getMunicipality(){
		this.municipalityList=this.serviceMun.getMunicipalityList();
	}

	getCheckboxVal(event, key, name, code, codeGraph, colorGraph){
		if(event.target.checked===true){
			this.newRegionsCheckbox.push({key:key, name:name, code:code, codeGraph:codeGraph, colorGraph:colorGraph});
			console.log(this.newRegionsCheckbox);
		}else{
			var index=this.newRegionsCheckbox.findIndex(p => p.key == key);
			this.newRegionsCheckbox.splice(index, 1);
			console.log(this.newRegionsCheckbox);
		}
	}

	updateRegion(key, newname){

		if(newname==undefined){
			newname=this.regionData.region;
		}
		var newRegion={};
		this.newRegionsCheckbox.forEach(function (a) {
			newRegion[a.key]=[];
			newRegion[a.key]={name:a.name,code:a.code, codeGraph:a.codeGraph, colorGraph:a.colorGraph};

		});

		/*ne se edituva imato zasto nema potreba , imeto e kluc, ako se zgresi neka se izbrise i dodade novo:)*/
		this.service.updateRegion(key, newname, newRegion)


	}
}
