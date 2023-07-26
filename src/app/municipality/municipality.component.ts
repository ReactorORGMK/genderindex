import { Component, OnInit} from '@angular/core';
import {AdminMunicipalityService} from '../admin-municipality.service';
import{AdminElsMunicipalityService} from'../admin-els-municipality.service';
import {Routes, RouterModule, Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';
import {IMultiSelectSettings } from 'angular-2-dropdown-multiselect';
import {IMultiSelectTexts} from 'angular-2-dropdown-multiselect';
import {AdminRegionService} from '../admin-region.service'; 
import { TranslateService } from '@ngx-translate/core';
import{AdminYearService} from '../admin-year.service';


@Component({
	selector: 'app-municipality',
	templateUrl: './municipality.component.html',
	styleUrls: ['./municipality.component.css']
})
export class MunicipalityComponent implements OnInit {
	currentLang:any='mk';
	municipalities;
	idMunicipality;
	idYear;
	municipalityDataSidebar;
	municipalityData;
	domenSubdomenList:any;
	optionsModel;
	myOptions: IMultiSelectOption[];
	myTexts: IMultiSelectTexts = {};
	error;
	regionName;
	years=[];
	alphabets = ["А", "Б", "В", "Г", "Д", "Ѓ","Е","Ж","З","Ѕ","И","Ј","К","Л","М","Н","Њ","О","П","Р","С","Т","Ќ","У",
	"Ф","Х","Ц","Ч","Џ","Ш"];


	// Text configuration// dropdown multiselect
	// myTexts: IMultiSelectTexts = {
		// 	defaultTitle: this.translate.instant('Изберете општина'),
		// 	checkedPlural:this.translate.instant('Избрани'),
		// 	checked:this.translate.instant('Избран'),
		// 	searchPlaceholder:this.translate.instant('Барај'),
		// 	searchEmptyResult:this.translate.instant('Не постои таа општина')
		//};
		mySettings: IMultiSelectSettings = {
			checkedStyle: 'fontawesome',
			enableSearch: true,
			dynamicTitleMaxItems: 0,
			displayAllSelectedText: false,
			selectionLimit:3
		};



		constructor(public route:ActivatedRoute,
			public serviceYear:AdminYearService, public serviceMun:AdminMunicipalityService, public serviceEls:AdminElsMunicipalityService, public router:Router, public serviceRegion:AdminRegionService,public translate:TranslateService) {}





		ngOnInit() {
			//for translation
			this.getDropdownSelectedText();
			//load all data
			this.loadData();
			//get municiplaities for the dropdown in sidebar
			this.getDropdownMnicipalities();

			this.getMunRegion();
			this.getAllYears();


		}



		async getDropdownSelectedText(){
			await this.translate.get('dummyTranslation').toPromise().then();
			this.myTexts={
				defaultTitle: this.translate.instant('Изберете општина'),
				checkedPlural:this.translate.instant('Избрани'),
				checked:this.translate.instant('Избран'),
				searchPlaceholder:this.translate.instant('Барај'),
				searchEmptyResult:this.translate.instant('Не постои таа општина')
			};

		}



		loadData(){
			var that=this;
			this.route.paramMap.subscribe(id=>{
				this.idMunicipality=id.get('idMunicipality');
				this.idYear=id.get('idYear');
				/*data from municipality*/
				this.municipalityDataSidebar=this.serviceMun.getMunicipality(this.idMunicipality).subscribe(objectdata => 
				{
					this.municipalityDataSidebar=objectdata;
				});
			});
			/*data from els*/
			this.municipalityData=this.serviceEls.getElsMunicipalityId(this.idMunicipality, this.idYear).subscribe(munData=>{
				this.municipalityData=munData;
			});
			/*domeni & subdomeni*/
			this.serviceEls.getDomenSubdomenYear(this.idMunicipality, this.idYear).subscribe(domenSubdomen=>{
				
				domenSubdomen.forEach(function(domen, ind){
					domen.subdomens.sort(function(a,b){
						return a.position-b.position;
					});

				});

				
				this.domenSubdomenList=domenSubdomen;
				
			});

		}

		loadData_year(year){
			var that=this;
			this.route.paramMap.subscribe(id=>{
				this.idMunicipality=id.get('idMunicipality');
				
				/*data from municipality*/
				this.municipalityDataSidebar=this.serviceMun.getMunicipality(this.idMunicipality).subscribe(objectdata => 
				{
					this.municipalityDataSidebar=objectdata;
				});
			});
			/*data from els*/
			this.municipalityData=this.serviceEls.getElsMunicipalityId(this.idMunicipality, year).subscribe(munData=>{
				this.municipalityData=munData;
			});
			/*domeni & subdomeni*/
			this.serviceEls.getDomenSubdomenYear(this.idMunicipality, year).subscribe(domenSubdomen=>{
				
				domenSubdomen.forEach(function(domen, ind){
					domen.subdomens.sort(function(a,b){
						return a.position-b.position;
					});

				});

				
				this.domenSubdomenList=domenSubdomen;
				
			});

		}

		getDropdownMnicipalities(){
			var that=this;
			/*dropdown municipalities*/
			var municiplaities=[];
			var getMun=this.serviceMun.getMunicipalityList().subscribe(mun=>{
				mun.forEach(function (m) {
					municiplaities.push({id:m.key,name:that.translate.instant(m.val.name)});
				});

				this.OrderFunc(municiplaities);	
				getMun.unsubscribe();
				var index =municiplaities.findIndex(a=>a.id===that.idMunicipality);
				municiplaities.splice(index,1);
				this.myOptions=municiplaities;
				//console.log(this.myOptions);

			});
		}
		getMunRegion(){

			var that=this;
			this.serviceRegion.getRegionList().forEach(function(a){
				a.forEach(function(b){
					for(var key in b.val){
						if(key==that.idMunicipality){
							that.regionName=b.key;
						}
					}
				})
			});
		}

		OrderFunc(municiplaities){
			var that=this;
			municiplaities.sort(function (a,b) {
				return that.CharCompare(a.name, b.name, 0);
			});

		}


		CharCompare(a, b, index) {
			var aChar;
			var bChar;
			aChar = this.alphabets.indexOf(a.toUpperCase().charAt(index));
			bChar = this.alphabets.indexOf(b.toUpperCase().charAt(index));
			if(aChar!=null){
				if (aChar < bChar){
					return -1;
				} else if (aChar > bChar) {
					return 1;
				} else {
					return 0;
				}
			}else{
				return this.CharCompare(a,b,index+1)
			}			
		}

		onChange(event) {
			// console.log(this.optionsModel);
		}
		onClickDropdown(){ 
			if(this.optionsModel==''){
				this.error="Ве молиме изберете општина"
			}else{
				var array=[];
				array.push("/municipalities-compare");

				array.push(this.idMunicipality);
				this.optionsModel.forEach(function (am) {
					array.push(am);
				});
				this.router.navigate(array);

			}
		}



		showClass(){

			var poimnik = document.getElementById('mypoimnik');
			poimnik.classList.add('myclass');
		}

		showMap(){

			var poimnik = document.getElementById('mymap');
			poimnik.classList.add('myclass');
		}

		removeBox(){
			var poimnik = document.getElementById('mypoimnik');
			poimnik.classList.remove("myclass");
			var map = document.getElementById('mymap');
			map.classList.remove("myclass");

		}
		recieveLang($event){
			this.currentLang=$event;
			//dropdown load again for the translate
			this.getDropdownSelectedText();
			this.getDropdownMnicipalities();

		}

		getAllYears(){
			var that=this;
			that.serviceYear.getYearList().subscribe((year)=>{
				year.forEach(function(y){
					that.years.push(y);
				});

			});



		}




		changeYear(changeyear){
			this.idYear=changeyear;
			this.loadData_year(changeyear);
			//this.serieData=[];
			//this.createChart();

		}




	}
