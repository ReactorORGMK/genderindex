import { Injectable } from '@angular/core';
import { AngularFireDatabase ,AngularFireList, AngularFireObject} from '@angular/fire/database';
import {Routes, RouterModule, Router} from '@angular/router';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class AdminRegionService {
	itemsRegion;
	items:Observable<any[]>;
	itemsMun;
	region;
	constructor(public db:AngularFireDatabase, public router:Router) {
		this.itemsRegion=db.list('region');

	}

	addRegion(regionName, munList){
		console.log(regionName);
		this.region=this.db.object('region/'+regionName);
	 this.region.set({region:regionName,municipalities:munList});
				this.router.navigate(['/admin-region-list']);

	}

	getRegionList(){
		return  this.items=this.itemsRegion.snapshotChanges().
		map(changes => 
			changes.map(c => ({ key: c.key, val:c.payload.val().municipalities }))
			);
	}

	
	getAll(){
		return this.items=this.itemsRegion.snapshotChanges().map(regions=>{
			var fullArray=[];
			var regionArray=[];
			regions.forEach(function (region) {
				var munArray=[];
				for(var key in region.payload.val().municipalities){
					
					munArray.push({name:region.payload.val().municipalities[key].name, link:key, code:region.payload.val().municipalities[key].codeGraph});
				}
				regionArray.push({regionkey:region.key, mun:munArray});
			});
			return regionArray;
		})

	}

	removeRegion(key){
		this.itemsRegion.remove(key);
	}

	getRegion(fromId){
		return this.db.object('region/'+ fromId).valueChanges();
		
	}

	updateRegion(key, mun, newObjectMun){
		this.region=this.db.object('region/'+key);
		this.region.set({region:key,municipalities:newObjectMun});
		this.router.navigate(['/admin-region-list']);

}

}