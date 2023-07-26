import { Injectable } from '@angular/core';
import { AngularFireDatabase ,AngularFireList, AngularFireObject} from '@angular/fire/database';

import {Routes, RouterModule, Router} from '@angular/router';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class AdminYearService {

	
	items:Observable<any[]>;
	itemsYear: AngularFireList<any>;
	itemYear;
	itemLastYear;
	domenSubdomen;

	constructor(public db:AngularFireDatabase, public router:Router) {
		this.itemsYear=db.list('year');


	}

	addYear(year, domeni){

		this.itemYear=this.db.object('year/'+year);
		this.itemYear.set({year:year, domeni:domeni.domeni});
		this.router.navigate(['/admin-year-list']);
		

	}

	getYearList(){
		return this.items = this.itemsYear.snapshotChanges().pipe(
			map(changes => 
				changes.map(c => ({ key: c.key, val:c.payload.val().year }))
				));
	}

	getLastYear(){
		return this.itemLastYear=this.db.list('/year', ref => ref.orderByKey().limitToLast(1)).snapshotChanges().map(change=>{
			return change;
		})
	}

	getSpecificYear(year){
		return this.db.object('year/'+ year + '/domeni').valueChanges();
	}

	
	removeYear(key){
		this.itemsYear.remove(key);
	}


	getYear(fromId){
		return this.db.object('year/'+ fromId).valueChanges();
		
	}

	updateYear(key,year, domeni){
		this.itemYear=this.db.object('year/'+key);
		this.itemYear.set({year:year, domeni:domeni.domeni});
		this.router.navigate(['/admin-year-list']);

	}



}
