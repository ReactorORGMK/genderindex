import { Component, OnInit } from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {AdminMunicipalityService} from './../admin-municipality.service';


@Component({
	selector: 'app-admin-municipality-edit',
	templateUrl: './admin-municipality-edit.component.html',
	styleUrls: ['./admin-municipality-edit.component.css']
})
export class AdminMunicipalityEditComponent implements OnInit {
	progress: { percentage: number } = { percentage: 0 };
	error;
	idMunicipality;
	municipalityData;
	
	newName;
	newCode;
	newCodeGraph;
	newColorGraph;
	newArea;
	newPopulation;
	image;
	constructor(public route:ActivatedRoute,public service:AdminMunicipalityService ) { }

	ngOnInit() {
		var that=this;
		this.route.paramMap.subscribe(id=>{
			this.idMunicipality=id.get('idMunicipality');
			this.municipalityData=this.service.getMunicipality(this.idMunicipality).subscribe(objectdata => 
			{
				this.municipalityData=objectdata;
			});

		});
	}

	selectFile(event, name){
		this.service.uploadImage(event, name, this.progress);
	}

	updateData(key, newName,newCode, newCodeGraph, newColorGraph, newArea, newPopulation, image){
		console.log(image)
		var that=this;
		if(newName==undefined){
			newName=this.municipalityData.name;
		}
		if(newCode==undefined){
			newCode=this.municipalityData.code;
		}
		if(newCodeGraph==undefined){
			newCodeGraph=this.municipalityData.codeGraph;
		}
		if(newColorGraph==undefined){
			newColorGraph=this.municipalityData.colorGraph;
		}
		if(newArea==undefined){
			newArea=this.municipalityData.area
		}
		if(newPopulation==undefined){
			newPopulation=this.municipalityData.population;
		}
		
		image=this.municipalityData.image;
			/*that.service.removeSubdomen(key);

			this.arrayCheckboxRemoveDb.forEach(function (removekey) {
				that.db.list('subdomen_domen/'+removekey.key).remove(key);
			});

			this.arrayCheckbox.forEach(function (subdomenNew) {
				that.service.updateDomenSubdomenRealtion(that.idDomen, subdomenNew.key, subdomenNew.name);
				that.service.updateDomenSubdomenRealtion(subdomenNew.key, that.idDomen, newname);
			});*/

			this.service.updateMunicipality(key, newName,newCode, newCodeGraph, newColorGraph, newArea, newPopulation, image);
		}


	}
