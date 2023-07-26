import { Component, OnInit } from '@angular/core';
import {AdminMunicipalityService} from './../admin-municipality.service';
@Component({
	selector: 'app-admin-municipality',
	templateUrl: './admin-municipality.component.html',
	styleUrls: ['./admin-municipality.component.css']
})
export class AdminMunicipalityComponent implements OnInit {
	progress: { percentage: number } = { percentage: 0 };
	error;
	name;
	code;
	codeGraph;
	colorGraph;
	area;
	population;
	constructor(public service:AdminMunicipalityService) {

	}

	ngOnInit() {
	}

	addMunicipality(name,code,codeGraph,colorGraph,area,population){
		if(name && code && area && population!=''){
			var newId=this.service.addMun(name,code,codeGraph,colorGraph,area,population);
			this.service.redirectMunicipalityList();
		}else if(newId==undefined){
			this.error="Ве молиме пополнете ги полињата означени со *"
		}
	}
	selectFile(event, name){
		this.service.uploadImage(event, name, this.progress);
	}

}
