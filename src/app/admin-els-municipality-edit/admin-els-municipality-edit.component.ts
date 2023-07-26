import { Component, OnInit } from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {AdminElsMunicipalityService} from './../admin-els-municipality.service';

@Component({
	selector: 'app-admin-els-municipality-edit',
	templateUrl: './admin-els-municipality-edit.component.html',
	styleUrls: ['./admin-els-municipality-edit.component.css']
})
export class AdminElsMunicipalityEditComponent implements OnInit {
	progress: { percentage: number } = { percentage: 0 };
	error;
	idMunicipality;
	idYear;
	municipalityData;
	domeniSubdomeni;
	numberMen;
	numberWomen;
	plannedBudget;
	budget;
	
	scoreMun;
	rangMun;
	description;
	numberRateInfants;
	numberRateMaternal;
	numberCompany;
	numberPlot;
	numberObject;
	numberFlat;
	lastYearDomenSubdomen=[];
	constructor(public route:ActivatedRoute,public serviceEls:AdminElsMunicipalityService ) { }

	ngOnInit() {
		var that=this;
		this.route.paramMap.subscribe(id=>{
			this.idMunicipality=id.get('idMun');
			this.idYear=id.get('idYear');
			this.municipalityData=this.serviceEls.getElsMunicipalityId(this.idMunicipality, this.idYear);

			this.municipalityData.forEach(function(objectdata){
				that.municipalityData=objectdata;
				that.numberMen=objectdata.men;
				that.numberWomen=objectdata.women;
				that.plannedBudget=objectdata.plannedBudget;
				that.budget=objectdata.budget;
				that.scoreMun=objectdata.scoreMun;
				that.rangMun=objectdata.rangMun;
				that.description=objectdata.description;
				that.numberRateInfants=objectdata.numberRateInfants;
				that.numberRateMaternal=objectdata.numberRateMaternal;
				that.numberCompany=objectdata.numberCompany;
				that.numberPlot=objectdata.numberPlot;
				that.numberObject=objectdata.numberObject;
				that.numberFlat=objectdata.numberFlat;

			})
			this.serviceEls.getDomenSubdomenYear(this.idMunicipality, this.idYear).subscribe(object=>{
				that.domeniSubdomeni=object;
			});
		});

		this.serviceEls.getElsMunicipalityIdEdit(this.idMunicipality, this.idYear).subscribe(a=> {
			this.lastYearDomenSubdomen.push({key:a.key,val:a.payload.val()});
		});
	}

	updateEls( numberMen, numberWomen, plannedBudget, budget, numberRateInfants,
		numberRateMaternal, numberCompany, numberPlot, numberObject, numberFlat, scoreMun, rangMun,descriptionMun){
		var that=this;
		
		if(numberMen==undefined){
			numberMen=this.numberMen;
		}
		if(numberWomen==undefined){
			numberWomen=this.numberWomen;
		}
		if(plannedBudget==undefined){
			plannedBudget=this.plannedBudget;
		}
		if(budget==undefined){
			budget=this.budget;
		}
		
		if(numberRateInfants==undefined){
			numberRateInfants=this.numberRateInfants;
		}
		if(numberRateMaternal==undefined){
			numberRateMaternal=this.numberRateMaternal;
		}
		if(numberCompany==undefined){
			numberCompany=this.numberCompany;
		}
		if(numberPlot==undefined){
			numberPlot=this.numberPlot;
		}
		if(numberObject==undefined){
			numberObject=this.numberObject;
		}
		if(numberFlat==undefined){
			numberFlat=this.numberFlat;
		}
		if(scoreMun==undefined){
			scoreMun=this.scoreMun;
		}
		if(rangMun==undefined){
			rangMun=this.rangMun;
		}
		if(descriptionMun==undefined){
			descriptionMun=this.description;
		}
		

		var newDomenSubdomen=[];
		
		this.lastYearDomenSubdomen.forEach(function(domeni){
			var that=this;
			
			
			for (var domen in domeni.val.domenSubdomen){
var mytemp={};
				for (var subdomen in domeni.val.domenSubdomen[domen].subdomens){
					var mytempColumn={};
					for(var column in domeni.val.domenSubdomen[domen].subdomens[subdomen].columns){
						var columnId = (<HTMLInputElement>document.getElementById("id_"+subdomen+'_'+column)).value;
						if(columnId==''){
							columnId=domeni.val.domenSubdomen[domen].subdomens[subdomen].columns[column].columnValue;
							mytempColumn[column]=[];
							mytempColumn[column]={columnName:domeni.val.domenSubdomen[domen].subdomens[subdomen].columns[column].columnName, columnValue:columnId};
						}else{
							mytempColumn[column]=[];
							mytempColumn[column]={columnName:domeni.val.domenSubdomen[domen].subdomens[subdomen].columns[column].columnName, columnValue:columnId};
						}
					}
					mytemp[subdomen]=[];
					mytemp[subdomen]={subdomenName:domeni.val.domenSubdomen[domen].subdomens[subdomen].subdomenName, columns:mytempColumn};
				}
				var columnsDomen={};
				for(var columndomen in domeni.val.domenSubdomen[domen].columns){
					var columnVal=(<HTMLInputElement>document.getElementById("id_"+domen+'_'+columndomen)).value;
					if(columnVal==''){
						columnVal=domeni.val.domenSubdomen[domen].columns[columndomen].columnValue;
						columnsDomen[columndomen]=[];
						columnsDomen[columndomen]={columnName:domeni.val.domenSubdomen[domen].columns[columndomen].columnName,columnValue:columnVal };
					}else{
						columnsDomen[columndomen]=[];
						columnsDomen[columndomen]={columnName:domeni.val.domenSubdomen[domen].columns[columndomen].columnName,columnValue:columnVal };
					}
				}
				newDomenSubdomen[domen]=[];
				if(domeni.val.domenSubdomen[domen].subdomens==null)
					{newDomenSubdomen[domen]={domenName:domeni.val.domenSubdomen[domen].domenName, 'columns':columnsDomen};
				}
			else{
				newDomenSubdomen[domen]={domenName:domeni.val.domenSubdomen[domen].domenName, 'subdomens':mytemp, 'columns':columnsDomen};
			}
		}
	});

this.serviceEls.updateElsService(this.idYear, this.idMunicipality, this.municipalityData.code, numberMen, numberWomen, plannedBudget, budget, numberRateInfants, numberRateMaternal, numberCompany, numberPlot, numberObject, numberFlat, newDomenSubdomen,  scoreMun, rangMun, descriptionMun, this.municipalityData.name);

}





}
