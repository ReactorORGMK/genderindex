import { Component, OnInit } from '@angular/core';
import {AdminYearService} from '../admin-year.service';
import {AdminDomenService} from '../admin-domen.service';
import {AdminSubdomenService} from '../admin-subdomen.service';
import {Observable} from 'rxjs';


@Component({
	selector: 'app-admin-year',
	templateUrl: './admin-year.component.html',
	styleUrls: ['./admin-year.component.css']
})
export class AdminYearComponent implements OnInit {
	arrayYear_domen_subdomen=[];
	arrayDomen=[];
	arraySubdomen=[];
	idYear;
	domeni;
	domeni1;
	subdomeni=[];
	alldata;
	error;
	year;
	array=[];
	count=0;
	
	constructor(public service:AdminYearService, public serviceDomen:AdminDomenService, public serviceSubDomen:AdminSubdomenService) { }

	ngOnInit() {
		//this.getDomen();
		//this.getSubdomen();
		this.getDomenWithSubdomen();

	}


	getCheckboxValDomen(event, key, name){


		if(event.target.checked==true){
			this.arrayDomen.push({key,name});
			console.log(this.arrayDomen);
			//this.service.addSubdomenRealtion(key,name);

		}else{
			var index=this.arrayDomen.indexOf(key);
			this.arrayDomen.splice(index, 1);
			console.log(index);
			//this.service.removeSubdomen(key);

		}
	}

	getCheckboxValSubDomen(event, domen, subdomen,subdomenkey, subdomenname, domenkey, domenname){
		if(event.target.checked==true){
			this.count+=1;
			var mainindex=this.arrayDomen.findIndex(x => x.domenkey === domenkey);
			if(mainindex==-1){
				this.arrayDomen.push({domenkey,domenname, columns:domen.val.columns, subdomeni:[{subdomenkey,subdomenname, columns:subdomen.value.columns, position:this.count}]});
			}else{
				this.arrayDomen.forEach((value,index)=>{
					if(value.domenkey===domenkey){
						this.arrayDomen[index].subdomeni.push({subdomenkey,subdomenname,columns:subdomen.value.columns, position:this.count});
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
					
				}
			})
		}
	}

	addYear(name){
		let result = {};
		let columns={};
		this.arrayDomen.forEach((element, index) => {
			let subdomains = {}
			var subArray=[];

			//columns fo subdomen
			element.subdomeni.forEach((el,ind)=>{
				let columns={};
				subdomains[el.subdomenkey] = {name:el.subdomenname, columns:el.columns, position:el.position};

			});
			result[element.domenkey] = {name:element.domenname,subdomeni:subdomains, columns:element.columns}
		});
		result = {domeni:result};
		console.log(result);

		if(name!=undefined && this.arrayDomen.length!=0){
			this.idYear=this.service.addYear(name, result);
			this.error='';

		}else{
			this.error='Ве молиме пополнете ги полињата означени со *';
		}
		//this.arrayRemove.forEach(function (domenNew) {
			//that.service.addDomenYearRealtion(that.idYear, domenNew.key, domenNew.name);
			//that.service.addDomenYearRealtion(domenNew.key,that.idYear,name);

			//});
		}
		
		getDomenWithSubdomen(){
			
			this.serviceDomen.getDomenList().subscribe(data=>{
				this.domeni1=data;
				for (let domenKey in this.domeni1){
					let domen = this.domeni1[domenKey]
					let subs = [];
					let subdomeni = domen.val.subdomeni;
					for (let key in subdomeni){
						let value = subdomeni[key];
						//console.log({"key":key,"value":subdomeni[key]});
						subs.push({"key":key,"value":subdomeni[key]});
					}

					this.domeni1[domenKey].subs = subs;
					//console.log(this.domeni1);
				}


			});
		}

		// getDomen(){
		// 	this.domeni=this.serviceDomen.getDomenList();

		// }


		// getSubdomen(){
		// 	this.subdomeni=this.serviceSubDomen.getSubdomenList();
		// }

	}
