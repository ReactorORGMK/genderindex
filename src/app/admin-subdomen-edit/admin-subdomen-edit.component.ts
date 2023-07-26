import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { AngularFireDatabase ,AngularFireList} from '@angular/fire/database';
import {AdminSubdomenService} from './../admin-subdomen.service';


@Component({
	selector: 'app-admin-subdomen-edit',
	templateUrl: './admin-subdomen-edit.component.html',
	styleUrls: ['./admin-subdomen-edit.component.css']
})
export class AdminSubdomenEditComponent implements OnInit {
	
	subdomenData;
	idSubdomen;
	subdomen;
	name;
	description;
	 descriptionsubdomen;
	item:Observable<any>;
	subdomensColumns=[];
	frontChecked=[];
	oldColumnChecked=[];
	newColumnChecked=[];
	 arrayColumns=[{key:'1rank',subject:'Ранг'},
		{key:'2grade',subject:'Оценка'},
		{key:'3avg',subject:'Просек'}];

	constructor(public db: AngularFireDatabase, public route:ActivatedRoute, public service: AdminSubdomenService) {        

		this.subdomensColumns=[{key:'4women',subject:'Жени'},
		{key:'5men',subject:'Мажи'},
		{key:'6w&m',subject:'Сооднос жени/мажи'},
		{key:'7number',subject:'Број'},
		{key:'8population',subject:'Популација'},
		{key:'9rate',subject:'Стапка'}];
	}

	ngOnInit() {
		var that=this;
		/* this.route.paramMap.subscribe(idParm=>{
			let idSubdomen=idParm.get('idSubdomen');
			this.subdomenDataName=this.db.object('subdomen/'+ idSubdomen).valueChanges().subscribe(objectdata => 
				{
					this.subdomenDataName=objectdata;
				}
					
				);
			});*/

			this.route.paramMap.subscribe(id=>{
				this.idSubdomen=id.get('idSubdomen');
				/*this.subdomenData=this.service.getSubdomen(this.idSubdomen).subscribe(objectdata => 
				{
					this.subdomenData=objectdata;
				});*/

				this.subdomenData=this.service.getSubdomen(this.idSubdomen);
				this.subdomenData.forEach(function(objectdata){
					that.name=objectdata.name;
					that.description=objectdata.description;
					that.frontChecked=Object.keys(objectdata.columns);

						that.oldColumnChecked.push(objectdata.columns);

				that.oldColumnChecked.forEach(function(a){
							that.newColumnChecked= Object.keys(a).map(key => {
						return {
							key: key,
							subject: a[key]
						};
					});
						})
				});

			});
		}

		getCheckboxVal(event, key, subject){

			if(event.target.checked===true){
				this.newColumnChecked.push({key:key,subject:subject});
				console.log(this.newColumnChecked);
			}else{
				var index=this.newColumnChecked.findIndex(p => p.key === key);
				this.newColumnChecked.splice(index, 1);
				console.log(this.newColumnChecked);

				//this.arrayCheckboxRemoveDb.push({key:key,name:name});
			}	
		}

		updateData(key, newname, newdescription){
			if(newname==undefined){
				newname=this.name;
			}

			if(newdescription==undefined){
				newdescription=this.description
			}
			var newObjectColumns=this.newColumnChecked.reduce((map, obj) => (map[obj.key] = obj.subject, map), {});
			this.service.updateDomen(key, newname, newdescription, newObjectColumns);
		}



	}
