import { Component, OnInit, Input } from '@angular/core';
import {AdminRegionService} from '../admin-region.service';
import {AdminElsMunicipalityService} from '../admin-els-municipality.service';
import {Routes, RouterModule, Router} from '@angular/router';
import {Observable} from 'rxjs';
import{AdminYearService} from '../admin-year.service';
import { TranslateService } from '@ngx-translate/core';


@Component({
	selector: 'app-municipality-list',
	templateUrl: './municipality-list.component.html',
	styleUrls: ['./municipality-list.component.css']
})
export class MunicipalityListComponent implements OnInit {
	currentLang:any='mk';
	options;
	regions:Observable<any[]>;
	lastYear=2021;
	newYear;
	listener;
	yearId;
	years=[];
	alphabets = ["А", "Б", "В", "Г", "Д", "Ѓ","Е","Ж","З","Ѕ","И","Ј","К","Л","М","Н","Њ","О","П","Р","С","Т","Ќ","У",
	"Ф","Х","Ц","Ч","Џ","Ш"];
	serieData:Array<any>=[];

	constructor(public serviceRegion:AdminRegionService, public router:Router, 
		public serviceMun:AdminElsMunicipalityService, public serviceYear:AdminYearService, 
		public translate:TranslateService) {}


	ngOnInit() {
		this.listener=this.serviceYear.getLastYear().subscribe((year)=>{
			this.yearId = year.map((year) => {
				return year.key;
			});
			this.listener.unsubscribe();
			this.lastYear=this.yearId[0];
		});
		this.createChart();
		this.getAllYears();

	}


	createChart(){
		var that=this;
		var data=[];
		//console.log(that.translate.currentLang);
		this.serviceRegion.getAll().subscribe(region=>{
			this.orderByName(region);
			this.regions=region;
		});
		

		// this.serviceYear.getLastYear().forEach(function(a){
			// 	that.lastYear=a[0].key;
			that.serviceMun.getElsMunicipalityYearId(this.lastYear).subscribe(a=>{

				/*withouth sort*/
		/*a.forEach(function (b) {
				data.push({name:b.val.code,data:[b.val.scoreMun], color:b.val.colorGraph});
			});*/

			/*sort scoreMun*/
			var copyArrayA=a.slice(0);
			a.forEach(function (b) {
				copyArrayA.sort(function(am,bm) {
					return am.val.scoreMun - bm.val.scoreMun;
				});
			});

			copyArrayA.forEach(function (b) {
				that.serieData.push({name:that.translate.instant(b.val.code), data:[{y:b.val.scoreMun,munName:b.val.name}], color:b.val.colorGraph, 
					marker: {
					symbol: 'triangle'}
				});	
			});
			//console.log(that.serieData);

			/*end sort*/
			that.options = {
				chart: {
					width: 1000,
					height:400,
					type: 'column',
					style:{
						fontFamily:'Arsenal'

					}
				},

				tooltip: {
					formatter: function() {

						return '<span>'+that.translate.instant('Општина')+':</span><br/><span style="color:' + this.color + '">\u25CF</span> '+that.translate.instant(this.point.munName)+'  (<span class="munCode">'+that.translate.instant(this.series.name)+'</span>)<br/>'+'     '+'<span class="tooltipChart"> '+that.translate.instant('Оценка')+': </span><span class="num">'+this.point.y+'</span>'
					}
				},
				
				xAxis: {
					categories: [that.translate.instant('Општини')]

				},
				yAxis:{
					title: {
						text: that.translate.instant('Оценка'),

					},
					max:100
				},
				credits: {
					enabled: false
				},
				colors:['#F0A442'],
				legend: {
					layout: 'vertical',
					align: 'right',
					verticalAlign: 'middle'

				},

				title : { 
					text : that.translate.instant('Оценка на општините')
				},
				series: that.serieData
			}; 

		});
			//});
		}

		orderByName(region){
			var that=this;
			region.sort(function (a,b) {
				return that.CharCompare(a.regionkey,b.regionkey,0);
				// body...
			})

		}

		CharCompare(a, b, index) {

			var aChar = this.alphabets.indexOf(a.toUpperCase().charAt(index));
			var bChar = this.alphabets.indexOf(b.toUpperCase().charAt(index));

			if(aChar!=bChar){
				if (aChar < bChar){
					return -1;
				} else if (aChar > bChar) {
					return 1;
				} else {
					return 0;
				}
			}else{
				return this.CharCompare(a, b, index + 1);
			}




		}

		recieveLang($event){
			this.currentLang=$event;
			this.serieData=[];
			this.createChart();
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
			this.lastYear=changeyear;
			this.serieData=[];
			this.createChart();
		}

	}
