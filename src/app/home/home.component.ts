import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase ,AngularFireList, AngularFireObject} from '@angular/fire/database';
import 'rxjs/add/operator/map';
import {AdminDomenService} from '../admin-domen.service';
import {AdminSubdomenService} from '../admin-subdomen.service';
import { AdminElsMunicipalityService } from '../admin-els-municipality.service';
import {HomeService} from '../home.service';
import {AdminMunicipalityService} from '../admin-municipality.service';
import {AdminYearService} from '../admin-year.service';
import {Routes, RouterModule, Router} from '@angular/router';
import 'rxjs/add/operator/take';
import { TranslateService } from '@ngx-translate/core';



@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit{
	currentLang:any;

	domeniSubdomeni;
	domenArrayKey;
	Object = Object;
	defaultScore=<any>{};
	defaultDataMap=[];
	description=<any>{};
	name=<any>{};
	columnsData;
	selectedDomen: number = null;
	/*domen stay highlighted*/
	defaultIndex;
	profileUrl: Observable<string | null>;
	lastYear;
	years=[];
	domenMapData=[];
	defaultData=[];
	listener;
	dataClasses:Array<any>=[];
	newData;
	listenerYears
	myCurrentYear;
	mapSeriesData=[];
	constructor(private http: HttpClient, 
		public serviceDomen:AdminDomenService, 
		public serviceSub:AdminSubdomenService, 
		public service:HomeService, 
		public  db:AngularFireDatabase, 
		public serviecMun:AdminMunicipalityService, 
		public serviecMunEls:AdminElsMunicipalityService, 
		public serviceYear:AdminYearService, 
		public router:Router,
		public translate: TranslateService) {
		
		//constructor	
	}

	async ngOnInit() {
		await this.translate.get('dummyTranslation').toPromise().then();
		var that=this;
		this.getCurrentYear();
		this.domeniSubdomeni=this.serviceDomen.getDomenList();
		document.querySelector("#loaderData").setAttribute("class", "onLoader");
		document.getElementById('defaultIndex').setAttribute('class','active');
		//new code proveri za error na kraj
		this.name={name:"За индексот"};
		this.description={description:"Индексот на родова еднаквост е композитен  показател  за статусот на жените и мажите во различни сфери од живеењето, достапноста на јавни услуги кои се релевантни за остварување на родова еднаквост и напорите на општината за промовирање на родово одговорни политики."};
		//proveri dali ova pravi spor loading na sajtot

		this.serviceYear.getLastYear().subscribe(a=>{
			a.forEach(function(b){
				that.createChartMap(b.key);	
			})
		});

		
		this.getAllYears();
		
	}


	

	mainDataChartLabels(){
		var that=this;
		that.dataClasses=[{name:that.translate.instant('Ниско рангирани'),
		to: 16,
		color: "#B40013",

	}, {
		name:that.translate.instant('Средно рангирани'),
		from: 17,
		to: 38,
		color: "#F19722",

	}, {name:that.translate.instant('Високо рангирани'),
	from: 39,
	color: '#F2BE54'
}];
}

async createChartMap(year){
	this.myCurrentYear=year;
	await this.translate.get('dummyTranslation').toPromise().then();
	var that=this;
	this.dataClasses=[];
	that.mainDataChartLabels();
	setTimeout(function(){
		document.getElementById('pullBox').setAttribute("class", "pull_open");
		document.getElementById('pullIcon').setAttribute("class", "pull_icon1");
	},1500);

	if(this.listener){
		this.listener.unsubscribe();
	}

	this.listener=this.serviecMunEls.getElsMunicipalityYearId(year).subscribe((mun)=>{
		this.newData = mun.map((mun1) => {
			return [mun1.key, mun1.val.scoreMun];
		});

		// Replace ./data.json with your JSON feed
		fetch('./assets/map_'+year+'.json').then(response => {
			return response.json();


		}).then(dat => {

			that.options = {
				chart: {
					width: 1400,
					height:920,
				},

				tooltip: {
					backgroundColor: null,
					borderWidth: 0,
					shadow: false,
					useHTML: true,
					padding: 0,
					
					pointFormatter: function() {

						//console.log(this);
						var tooltop='<div class="map">'+
						'<div style="padding-top:8px"><img src="'+this.properties.mun_img+'" width="90px"/></div>'+
						'<div class="name_mun">'+that.translate.instant(this.name)+'</div>'+
						'<div class="grades">'+
						that.translate.instant('Ранг')+':'+this.properties.mun_rang+'  |  '+that.translate.instant('Оценка')+':'+ this.properties.mun_score+'</div>'+
						'<div class="triangle"></div></div>';
						return tooltop
					},

				},


				title: {
					text: ' '
				},

				subtitle: {
					text: ' '
				},
				legend: {
					borderWidth: 0,
					layout: 'vertical',
					align: 'left',
					verticalAlign: 'middle',
					x:-20,
					y:150,
				},

				mapNavigation: {
					enabled: true,
					buttonOptions: {
						theme: {
							fill: 'white',
							'stroke-width': 1,
							stroke: 'silver',
							r: 0,
							states: {
								hover: {
									fill: 'silver'
								},
								select: {
									stroke: 'silver',
									fill: 'silver'
								}
							}
						},
						verticalAlign: 'bottom'
					}
				},

				colorAxis: {
					dataClasses:that.dataClasses,
				},
				credits: {
					enabled: false
				},

				plotOptions: {
					series: {
						cursor: 'pointer',
						point: {
							events: {
								click: function() { 
									that.router.navigate(['/municipality-list/'+that.myCurrentYear+'/'+this.properties.code]);
								}
							}
						}
					}
				},
				series : [{
					data: that.newData,
					mapData:dat,
					cursor: 'pointer',
					name: 'РИ',
					states: {
						hover: {
							color: '#770e20',
							borderColor:'#fff',
							borderWidth:3,
						}
					},
					dataLabels: {
						enabled: true,


						//format: '{point.name}',
						style: {
							fontFamily :'Arsenal',
							fontSize:14,
							textTransform:'uppercase',
							color: 'white',
							textOutline: 'white'
						},

						formatter:function() {

							let name = this.point.name;
							if (name){
								return that.translate.instant(this.point.name);			
							}else{
								// console.log(this);
								return "";
							}


						},


					}
				}],
			};
		}).catch(err => {
			console.log(err)
		});
	})
}

/*load the Map and inilitalize the chart for the later update*/
options: Object;
chart: any;
saveChart(chart) {
	this.chart = chart;
}






/*get general grade - индекс*/
getGeneralGrade(elem){
	var that=this;
	document.getElementById('defaultIndex').setAttribute('class','active');
	this.selectedDomen=null;


	if(this.defaultData.length===81){
		that.chart.series[0].setData(that.defaultData);	
		that.chart.colorAxis[0].update({
			dataClasses:[{
				to: 16,
				color: "#B40013",
				name:that.translate.instant('Ниско рангирани')
			}, {
				from: 17,
				to: 38,
				color: "#F19722",
				name:that.translate.instant('Средно рангирани')
			}, {
				from: 39,
				color: '#F2BE54',

				name:that.translate.instant('Високо рангирани'),
			}]
		})
	}
}

/*on click get domenData*/
getDomenId(id){
	var that=this;
	var rankData=[];
	var domenMap=[];
	this.selectedDomen = id;

	document.getElementById('defaultIndex').setAttribute('class',' ');
	this.serviceDomen.getDomen(id).subscribe(a=>{
		this.description=a;
		this.name=a;
	});
	this.domenMapData.forEach(function(v){
		for(var domeniKey in v.domeni){
			if(domeniKey===id){
				for(var objects in v.domeni[domeniKey]){
					for(var rank in v.domeni[domeniKey].columns){
						if(rank==='1rank'){
							rankData=v.domeni[domeniKey].columns[rank].columnValue;
						}
					}
				}
			}
		}							
		domenMap.push([v.key, rankData]);

	});
	if(domenMap.length===81){
		that.chart.series[0].setData(domenMap);
		/*ColorAxis - бои како оцени*/
		/*first domen*/
		
		if(id==='-LQsYG2Wf30xOMNPuxeJ'){

			that.chart.colorAxis[0].update({
				dataClasses:[{
					from: 1,
					to:17,
					color: '#F2BE54',
					name:that.translate.instant('Високо рангирани'),
					
				}, {
					from: 18,
					to: 63,
					color: '#F19722',
					name:that.translate.instant('Средно рангирани')
				},{
					from:64,
					to: 81,
					color: '#B40013',
					name:that.translate.instant('Ниско рангирани')
				}, ]
			});

		}
		/*second domen*/
		else if(id==='-LQsYSYceSCpupl-VqtH'){
			that.chart.colorAxis[0].update({
				dataClasses:[
				{
					from: 1,
					to:18,
					color: '#F2BE54',
					name:that.translate.instant('Високо рангирани'),
					
				}, {
					from: 19,
					to: 38,
					color: '#F19722',
					name:that.translate.instant('Средно рангирани')
				},{
					from:59,
					to: 81,
					color: '#B40013',
					name:that.translate.instant('Ниско рангирани')
				}]
			});
		}
		/*third domen*/
		else{
		//that.chart.colorAxis[0].dataClasses=[];
			that.chart.colorAxis[0].update({
				dataClasses:[{
					from: 1,
					to:16,
					color: '#F2BE54',
					name:that.translate.instant('Високо рангирани'),
					
				}, {
					from: 17,
					to: 54,
					color: '#F19722',
					name:that.translate.instant('Средно рангирани')
				},{
					from: 55,
					to:81,
					color: '#B40013',
					name:that.translate.instant('Ниско рангирани')
				} ]
			});
		}
	}else{
		that.chart.series[0].setData(that.newData);
	}
}



/*slider window*/
close_open_Slider()
{
	if(document.querySelector("#pullBox").classList.contains("pull_open")){
		document.getElementById('pullBox').setAttribute("class", "pull_box");
		document.getElementById('pullIcon').setAttribute("class", "pull_icon");
	}else if(document.querySelector("#pullBox").classList.contains("pull_box")){
		document.getElementById('pullBox').setAttribute("class", "pull_open");
		document.getElementById('pullIcon').setAttribute("class", "pull_icon1");
	}
}






/*onInit - get currentYear*/
getCurrentYear(){
	var that=this;
	this.serviceYear.getLastYear().subscribe(a=>{
		a.forEach(function(b){
			that.lastYear=b.key;
			that.getDomen(b.key);
			that.getDefaultScore(b.key);	
		})
	});
}

/*onInit - get domen data*/
getDomen(year){
	var that=this;
	this.service.getDomenId(year).take(1).subscribe(domen=>{

		domen.forEach(function(n){
			that.service.getRank(that.lastYear,n.key).subscribe(domeni=>{
				that.domenMapData.push({key:n.key,domeni:domeni});
				if(that.domenMapData.length===81){
					document.querySelector("#loaderData").setAttribute("class", "offLoader");
				}else{
					document.querySelector("#loaderData").setAttribute("class", "onLoader");

				}
			})
		});
	});

}



/*onInit - get defaultGrades*/
getDefaultScore(domenId){
	var that=this;
	this.defaultScore=this.service.getDefaultGrades(domenId).subscribe((a:any)=>{
		a.forEach(function (mun) {
			that.defaultData.push([mun.key,Number(mun.val)]);
		});
	})
}

async recieveLang($event){
	var that=this;
	await this.translate.get('dummyTranslation').toPromise().then();
	this.currentLang=$event;
	this.dataClasses=[];
	//this.mainDataChartLabels();

if(this.myCurrentYear!=undefined){

	this.serviceYear.getLastYear().subscribe(a=>{
			a.forEach(function(b){
				that.createChartMap(b.key);	
			})
		});
}else{

	this.createChartMap(this.myCurrentYear);
}
}

getAllYears(){
	var that=this;
	this.listenerYears=that.serviceYear.getYearList().subscribe(year=>{
		year.forEach(function(y){
			that.years.push(y);
		})
		this.listenerYears.unsubscribe();
	})
}

changeYear(changeyear){
	this.lastYear=changeyear;
	this.createChartMap(changeyear);


}
}


