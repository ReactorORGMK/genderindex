import { Injectable } from '@angular/core';
import { AngularFireDatabase ,AngularFireList, AngularFireObject} from '@angular/fire/database';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
	providedIn: 'root'
})
export class HomeService {
	year;
	constructor(public db:AngularFireDatabase) {		
	}
	getDefaultGrades(year){
		return this.db.list('els-municipality/'+year).snapshotChanges().map(changes => 
			changes.map((c:any) => ({key:c.key, val:c.payload.val().scoreMun}))
			);
	}

	getDomenId(year){
		return this.db.list('els-municipality/'+year).snapshotChanges().map(changes => 
			changes.map(c => ({key:c.key, val:c.payload.val() }))
			)
	}

	getRank(year, key){
		return this.db.object('els-municipality/'+year+'/'+key+'/'+'domenSubdomen').valueChanges().map(value => {
			return value; 
		});
	}



}
