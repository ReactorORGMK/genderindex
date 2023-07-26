import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import { AngularFireDatabase ,AngularFireList} from '@angular/fire/database'
import {AdminDomenService} from './../admin-domen.service';
import {AdminSubdomenService} from './../admin-subdomen.service';
import {Routes, RouterModule, Router} from '@angular/router';

@Component({
	selector: 'app-admin-domen-edit',
	templateUrl: './admin-domen-edit.component.html',
	styleUrls: ['./admin-domen-edit.component.css']
})
export class AdminDomenEditComponent implements OnInit {
	domenData;
	name;
	description;
	domen;
	descriptiondomen;
	idDomen;
	subdomens;
	arrayCheckbox=[];
	arrayCheckboxRemoveDb=[];
	item:Observable<any>;
	frontCheckboxCheck=[];
	oldSubdomeniCheckbox=[];
	newSubdomenCheck;
	domensColumns=[];
	oldColumnChecked=[];
	newColumnChecked=[];
	frontColumnChecked=[];
	arrayColumns=[{key:'1rank',subject:'Ранг'},
	{key:'2grade',subject:'Оценка'},
	{key:'3avg',subject:'Просек'}];

	
	constructor(public db: AngularFireDatabase, public route:ActivatedRoute, public service: AdminDomenService,
		public serviceSub:AdminSubdomenService) { 
		this.domensColumns=[{key:'4women',subject:'Жени'},
		{key:'5men',subject:'Мажи'},
		{key:'6w&m',subject:'Сооднос жени/мажи'},
		{key:'7number',subject:'Број'},
		{key:'8population',subject:'Популација'},
		{key:'9rate',subject:'Стапка'}];  
	}

	ngOnInit() {
		this.getSubdomen();
		
		

		/* this.route.paramMap.subscribe(idParm=>{
			let idSubdomen=idParm.get('idSubdomen');
			this.domenDataName=this.db.object('subdomen/'+ idSubdomen).valueChanges().subscribe(objectdata => 
				{
					this.domenDataName=objectdata;
				}
					
				);
			});*/


			var that=this;
			this.route.paramMap.subscribe(id=>{
				this.idDomen=id.get('idDomen');
				
				/*this.domenData=this.service.getDomen(this.idDomen).subscribe(objectdata => 
				{
					this.domenData=objectdata;
					console.log(objectdata);
					
				this.frontCheckboxCheck=Object.values(objectdata);
				console.log(this.frontCheckboxCheck)

				this.oldSubdomeniCheckbox.push(objectdata.subdomeni);
				this.oldSubdomeniCheckbox.forEach(function (a) {
					that.newSubdomenCheck= Object.keys(a).map(key => {
						return {
							key: key,
							name: a[key]
						};
					});



				})
			});*/

			//newcode

			this.domenData=this.service.getDomen(this.idDomen);
			this.domenData.forEach(function (a) {
				that.name=a.name;
				that.description=a.description;
				that.frontCheckboxCheck=Object.keys(a.subdomeni);
				that.frontColumnChecked=Object.keys(a.columns);
				
				that.oldSubdomeniCheckbox.push(a.subdomeni);
				that.oldSubdomeniCheckbox.forEach(function (a) {
					that.newSubdomenCheck= Object.keys(a).map(key => {
						return {
							key: key,
							name: a[key]
						};
					});
				});


				that.oldColumnChecked.push(a.columns);
				
				that.oldColumnChecked.forEach(function (b) {
					that.newColumnChecked= Object.keys(b).map(key => {
						return {
							key: key,
							subject: b[key]
						};
					});
				});
				// body...
			})

console.log(that.newColumnChecked);
		});

		/*	this.service.getSubdomenRelation(this.idDomen).subscribe(subdomenKeys=>{
				this.arrayCheckbox=[];
				subdomenKeys.forEach(function (subdomenkey) {
					that.arrayCheckbox.push({key:subdomenkey.key, name:subdomenkey.payload.val()});
					that.frontCheckbox.push(subdomenkey.key);
				});
			});*/
		}

		getSubdomen(){
			this.subdomens=this.serviceSub.getSubdomenList();
		}



	/*	onChange(topic: string) {
			let index = this.selectedTopics.indexOf(topic);
			if (index == -1) {
				this.selectedTopics.push(value);
			} else {
				this.selectedTopics.splice(index, 1);
			}
		}*/

		/*isSelected(topic){
			return selectedTopics.indexOf(topic) >= 0;
		}
		*/

		getCheckboxVal(event, key, name, columns){

			if(event.target.checked===true){
				this.newSubdomenCheck.push({key:key,name:{name:name, columns:columns}});
					console.log(this.newSubdomenCheck);			

			}else{
				var index=this.newSubdomenCheck.findIndex(p => p.key === key);
				this.newSubdomenCheck.splice(index, 1);
				//this.arrayCheckboxRemoveDb.push({key:key,name:name});
			}	
		}

		getCheckboxColumn(event, key, subject){

			if(event.target.checked==true){
				this.newColumnChecked.push({key,subject});
				console.log(this.newColumnChecked);
				

			}else{
				var index=this.newColumnChecked.findIndex(p => p.key === key);
				this.newColumnChecked.splice(index, 1);
				console.log(this.newColumnChecked);
				      
			}
		}

		updateData(key, newname, newdescription){
			//var that=this;
			if(newname==undefined){
				newname=this.name;
			}
			if(newdescription==undefined){
				newdescription=this.description
			}
			var newObjectSubdomeni=this.newSubdomenCheck.reduce((map, obj) => (map[obj.key] = obj.name, map), {});
			var newObjectColumns=this.newColumnChecked.reduce((map, obj) => (map[obj.key] = obj.subject, map), {});

			/*this.arrayCheckboxRemoveDb.forEach(function (removekey) {
				that.db.list('subdomen_domen/'+removekey.key).remove(key);
			});*/

			/*this.arrayCheckbox.forEach(function (subdomenNew) {
				that.service.updateDomenSubdomenRealtion(that.idDomen, subdomenNew.key, subdomenNew.name);
				that.service.updateDomenSubdomenRealtion(subdomenNew.key, that.idDomen, newname);
			});*/
			this.service.updateDomen(key, newname, newdescription, newObjectSubdomeni, newObjectColumns);
		}





	}