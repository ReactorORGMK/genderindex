import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { AngularFireDatabase ,AngularFireList} from '@angular/fire/database';
import {Routes, RouterModule, Router} from '@angular/router';

import {AdminYearService} from '../admin-year.service';
import {AdminDomenService} from './../admin-domen.service';
import {AdminSubdomenService} from '../admin-subdomen.service';

@Component({
	selector: 'app-admin-year-edit',
	templateUrl: './admin-year-edit.component.html',
	styleUrls: ['./admin-year-edit.component.css']
})
export class AdminYearEditComponent implements OnInit {
	idYear;
	year;
	yearData;
	domeni;
	subdomeni;
	domeniYear;
	oldDomeniArray=[];
	oldSubdomeniArray=[];
	checkedValueDomeni=[];
	checkedValueSubdomeni=[];
	newDomenCheckbox=[];
	newSubdomenCheckbox=[];
	arrayDomen=[];
	newData;
	newPosition=0;
	arrayPosition=[];

	constructor(public route:ActivatedRoute, public service:AdminYearService, public serviceDomen:AdminDomenService, public serviceSubdomen:AdminSubdomenService) {


	}

	ngOnInit() {
		var that=this;
		// this.getDomen();
		// this.getSubdomen();
		this.getDomenWithSubdomen();
		this.route.paramMap.subscribe(id=>{
			this.idYear=id.get('idYear');
			this.yearData=this.service.getYear(this.idYear);
			this.yearData.forEach(function (a) {
				
				that.year=id.get('idYear');

				//ova da se vrati
				
				for(let d in a.domeni){

					let tempValue = a.domeni[d]
					let temp = {domenkey:d}
					for (let key in tempValue){
						let value = tempValue[key]
						temp[key] = value;
						let subdomenArray=[];
						// console.log(temp)
						for(let sun in tempValue.subdomeni){
							let subdomen=tempValue.subdomeni[sun];
							//console.log(subdomen);
							let temp1={subdomenkey:sun};
							for(let sunkey in subdomen){
								
								let sunkeyval=subdomen[sunkey];

								temp1[sunkey]=sunkeyval;
							}
							subdomenArray.push(temp1);
						}
						temp["subdomeni"]=subdomenArray;
						//console.log(temp);
					}
					that.arrayDomen.push(temp);
				}



				that.checkedValueDomeni=Object.keys(a.domeni);
				that.oldDomeniArray.push(a.domeni);
				that.oldDomeniArray.forEach(function (domeni) {
					that.newDomenCheckbox= Object.keys(domeni).map(key => {
						return {
							key: key,
							name: a[key]
						};
					})
				});


				const subdomenObject = Object.entries(a.domeni).reduce((subdomen, key) => {
					subdomen
					return subdomen
				}, {});


				const list = Object.keys(a.domeni).reduce((acc, key) => {
					acc[key]= a.domeni[key].subdomeni
					return acc
				}, {})
				let result = []
				for (let domenKey in list){
					// console.log(domenKey);
					let tempDomen = list[domenKey];
					// console.log(tempDomen);
					for (let subKey in tempDomen){
						result.push(subKey);
					}
				}
				
				if(subdomenObject){
					that.checkedValueSubdomeni=result;

				}
			});

		})
	}

	//old code

	// getDomen(){
	// 	//this.domeni1=this.serviceDomen.getDomenList();
	// }
	// getSubdomen(){
	// 	this.subdomeni=this.serviceSubdomen.getSubdomenList();
	// }

	// getCheckboxValDomen(event, key, name){
	// 	if(event.target.checked===true){
	// 		this.newDomenCheckbox.push({key:key, name:name});
	// 	}else{
	// 		var index=this.newDomenCheckbox.findIndex(p => p.key == key);
	// 		this.newDomenCheckbox.splice(index, 1);
	// 	}

	// }
	// getCheckboxValSubdomen(event, key, name){

	// 	if(event.target.checked===true){
	// 		this.newSubdomenCheckbox.push({key:key, name:name});
	// 	}else{
	// 		var index=this.newSubdomenCheckbox.findIndex(p => p.key == key);
	// 		this.newSubdomenCheckbox.splice(index, 1);
	// 	}

	// }
	//end old code

	//new code for 2021

	getCheckboxValSubDomen(event, domen, subdomen,subdomenkey, subdomenname, domenkey, domenname){
		var newPosition;
		
		if(event.target.checked==true){
			var mainindex=this.arrayDomen.findIndex(x => x.domenkey === domenkey);
			
			if(mainindex!=-1){
				var array=[];
				var that=this;
				var currentDomen=this.arrayDomen[mainindex];
				currentDomen.subdomeni.forEach(function(a){
					array.push(a.position);
					array.sort();
				});
				var m=array[array.length-1];
				newPosition=m+1;
			}



			if(mainindex==-1){
				this.arrayDomen.push({domenkey,domenname, columns:[domen.val.columns], subdomeni:[{subdomenkey,subdomenname, columns:subdomen.value.columns, position:newPosition}]});
			}else{
				this.arrayDomen.forEach((value,index)=>{
					//console.log(subdomen);
					if(value.domenkey===domenkey){
						this.arrayDomen[index].subdomeni.push({subdomenkey,name:subdomenname,columns:subdomen.value.columns,position:newPosition});
					}
				});
			}
		}else{
			this.arrayDomen.forEach((value,index)=>{

				value.subdomeni.forEach((a,i)=>{
					if(a.subdomenkey==subdomenkey){
						this.arrayDomen[index].subdomeni.splice(i,1);
					}
				});
				if(value.subdomeni.length==0){
					this.arrayDomen.splice(mainindex, 1);

				}else{
					//console.log(value.subdomeni.length);
				}
			})
		}
		this.changeForFirebase(this.arrayDomen);
	}

	changeForFirebase(array){
		let result = {};
		let columns={};
		array.forEach((element, index) => {
			
			let subdomains = {}
			//columns fo subdomen
			element.subdomeni.forEach((el,ind)=>{

				
				let columns={};
				subdomains[el.subdomenkey] = {name:el.name, columns:el.columns, position:el.position};
			});
			result[element.domenkey] = {name:element.name,subdomeni:subdomains, columns:element.columns}
		});
		result = {domeni:result};
		this.newData=result;
		//console.log(result);
	}


	getDomenWithSubdomen(){
		this.serviceDomen.getDomenList().subscribe(data=>{
			this.domeni=data;
			for (let domenKey in this.domeni){
				let domen = this.domeni[domenKey]
				let subs = [];
				let subdomeni = domen.val.subdomeni;
				for (let key in subdomeni){
					let value = subdomeni[key];

					subs.push({"key":key,"value":subdomeni[key],"position":subdomeni[key].position})
				}
				this.domeni[domenKey].subs = subs;
				
			}


		});
	}



	updateYear(key, newname){
		if(newname==undefined){
			newname=this.year;
		}
		this.service.updateYear(key, newname, this.newData);
		
	}
}
