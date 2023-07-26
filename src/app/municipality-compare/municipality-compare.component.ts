import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AdminElsMunicipalityService} from '../admin-els-municipality.service';
import {AdminYearService} from '../admin-year.service';

@Component({
	selector: 'app-municipality-compare',
	templateUrl: './municipality-compare.component.html',
	styleUrls: ['./municipality-compare.component.css']
})
export class MunicipalityCompareComponent implements OnInit {
	mun=[];
	domenSubdomenList:any[];
	els;
	lastYear;
	years=[];
	dataRoute;
	yearSubscrition;
	dataRouteSubscription;
	constructor(public route:ActivatedRoute, public serviceEls:AdminElsMunicipalityService, public serviceYear:AdminYearService) { 


	}

	ngOnInit() {
		
		this.getAllYears();
		this.loadData();
		
	}
//treba da se sredi loadData i loadData1, istata funkcija e
	loadData(){
		var that=this;
		if (this.yearSubscrition){
			this.yearSubscrition.unsubscribe()
		}
		this.yearSubscrition=this.serviceYear.getLastYear().subscribe(a=>{
			a.forEach(function(b){
				that.lastYear=b.key;
			});

			if(this.dataRouteSubscription){
				this.dataRouteSubscription.unsubscribe();
			}

			this.dataRouteSubscription=this.route.paramMap.subscribe(id=>{
				var fullParametersId=[];
				var idParameter;
				fullParametersId=id.keys;
				fullParametersId.forEach(function(idIn){
					idParameter=id.get(idIn);
					that.els=that.serviceEls.getElsMunicipalityId(idParameter, that.lastYear);
					that.els.forEach(function (b) {
						that.mun.push(b);
						//console.log(that.mun);	
						var newDomenSubdomen=[];
						for(var key in b.domenSubdomen) {
							var myTemp=[];
							for(var key1 in b.domenSubdomen[key].subdomens) {
								var myColumn=[];
								for(var col in b.domenSubdomen[key].subdomens[key1].columns){
									if(col=='1rank' || col=="2grade"){
										myColumn.push({columnName:b.domenSubdomen[key].subdomens[key1].columns[col].columnName, columnValue:b.domenSubdomen[key].subdomens[key1].columns[col].columnValue});
									}
								}
								myTemp.push({subdomenName:b.domenSubdomen[key].subdomens[key1].subdomenName, columns:myColumn, position:b.domenSubdomen[key].subdomens[key1].position});
							}
							var mydomenCol=[];
							for(var colDomen in b.domenSubdomen[key].columns){
								if(colDomen=='1rank' || colDomen=="2grade"){
									mydomenCol.push({columnName:b.domenSubdomen[key].columns[colDomen].columnName, columnValue:b.domenSubdomen[key].columns[colDomen].columnValue})
								}
							}
							newDomenSubdomen.push({domenName:b.domenSubdomen[key].domenName, subdomeni:myTemp, columns:mydomenCol});
						};

						newDomenSubdomen.forEach(function(domen, ind){
							domen.subdomeni.sort(function(a,b){
								return a.position-b.position;
							});
						});
						that.domenSubdomenList=newDomenSubdomen;
						//console.log(that.domenSubdomenList)
						b.domenSubdomen=newDomenSubdomen;
					});
				});

			});

			

		});

		// newDomenSubdomen.forEach(function(domen, ind){
			// 	//console.log(domen);

			// 	domen.subdomeni.sort(function(a,b){
				// 		return a.position-b.position;
				// 	});

				// });

			}

			loadData1(year){
				var that=this;

				this.route.paramMap.subscribe(id=>{
					var fullParametersId=[];
					var idParameter;
					fullParametersId=id.keys;
					fullParametersId.forEach(function(idIn){
						idParameter=id.get(idIn);
						that.els=that.serviceEls.getElsMunicipalityId(idParameter, year);

						that.els.forEach(function (b) {

							that.mun.push(b);	
							var newDomenSubdomen=[];
							for(var key in b.domenSubdomen) {
								var myTemp=[];

								for(var key1 in b.domenSubdomen[key].subdomens) {
									var myColumn=[];
									for(var col in b.domenSubdomen[key].subdomens[key1].columns){
										if(col=='1rank' || col=="2grade"){

											myColumn.push({columnName:b.domenSubdomen[key].subdomens[key1].columns[col].columnName, columnValue:b.domenSubdomen[key].subdomens[key1].columns[col].columnValue});
										}
									}
									myTemp.push({subdomenName:b.domenSubdomen[key].subdomens[key1].subdomenName, columns:myColumn, position:b.domenSubdomen[key].subdomens[key1].position});

								}
								var mydomenCol=[];

								for(var colDomen in b.domenSubdomen[key].columns){

									if(colDomen=='1rank' || colDomen=="2grade"){
										mydomenCol.push({columnName:b.domenSubdomen[key].columns[colDomen].columnName, columnValue:b.domenSubdomen[key].columns[colDomen].columnValue})
									}

								}
								newDomenSubdomen.push({domenName:b.domenSubdomen[key].domenName, subdomeni:myTemp, columns:mydomenCol});



							};

							newDomenSubdomen.forEach(function(domen, ind){
								domen.subdomeni.sort(function(a,b){
									return a.position-b.position;
								});

							});

							//console.log(newDomenSubdomen);



							that.domenSubdomenList=newDomenSubdomen;
							//console.log(that.domenSubdomenList)

							b.domenSubdomen=newDomenSubdomen;

						});



					});
					


				});



				// newDomenSubdomen.forEach(function(domen, ind){
					// 	//console.log(domen);

					// 	domen.subdomeni.sort(function(a,b){
						// 		return a.position-b.position;
						// 	});

						// });

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
						this.domenSubdomenList=[];
						this.mun=[];
						this.loadData1(changeyear);
						//this.serieData=[];
						//this.createChart();

					}



				}
