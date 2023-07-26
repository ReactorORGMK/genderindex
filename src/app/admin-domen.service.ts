import { Injectable } from '@angular/core';
import { AngularFireDatabase ,AngularFireList, AngularFireObject} from '@angular/fire/database';

import {Routes, RouterModule, Router} from '@angular/router';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';



@Injectable({
	providedIn: 'root'
})
export class AdminDomenService {
	items:Observable<any[]>;
	itemsSub:Observable<any[]>;
	item:Observable<any>;
	idDomen;
	idSubDomen;
	itemsDomen: AngularFireList<any>;
	itemsSubdomen:AngularFireList<any>;
	itemsDS:AngularFireList<any>;
	
	itemsDSobject:AngularFireObject<any>;
	constructor(public db:AngularFireDatabase, public router:Router ) { 
		this.itemsDomen=db.list('domen');
		this.itemsSubdomen=db.list('subdomen');
	}

	addDomen(domen, descriptiondomen, subdomeni, columns){
		return this.itemsDomen.push({name:domen,description:descriptiondomen, subdomeni, columns}).key;
	}
	removeSubdomen(key){
		this.itemsDS.remove(key);
	}

	removeDomen(key){
		this.itemsDomen.remove(key);
	}

	updateDomen(key, newname, newdescription, subdomeni, columns){
		this.itemsDomen.set(key,{name:newname, description:newdescription, subdomeni:subdomeni, columns:columns});
		this.router.navigate(['/admin-domen-list']);
	}

	getDomenList(){
		return this.items = this.itemsDomen.snapshotChanges().pipe(
			map(changes => 
				changes.map(c => ({ key: c.key, val:c.payload.val() }))
				));
	}

	getDomen(fromId){
		return this.db.object('domen/'+ fromId).valueChanges();
		
	}

	/*for municipalityEls, for specific years , specific domens*/
	getDomenSnapshot(fromId){
		return this.db.object('domen/'+ fromId).snapshotChanges();
		
	}

	redirectNewDomen(){
		this.router.navigate(['/admin-domen-list']);
	}
   
}
