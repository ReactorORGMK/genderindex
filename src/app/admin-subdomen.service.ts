import { Injectable } from '@angular/core';
import { AngularFireDatabase ,AngularFireList} from '@angular/fire/database';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {Routes, RouterModule, Router} from '@angular/router';



@Injectable({
	providedIn: 'root'
})
export class AdminSubdomenService {
	items:Observable<any[]>;
	itemsRef: AngularFireList<any>;
	constructor(public db:AngularFireDatabase, public router:Router) { 
		this.itemsRef=db.list('subdomen');
	}

	addDomen(subdomen, descriptionsubdomen, columns){
		this.itemsRef.push({name:subdomen,description:descriptionsubdomen, columns:columns});
						this.router.navigate(['/admin-subdomen-list']);

	}

	removeDomen(key){
		this.itemsRef.remove(key);
	}

	updateDomen(key, newname, newdescription, columns){
		this.itemsRef.set(key,{name:newname,description:newdescription, columns});
				this.router.navigate(['/admin-subdomen-list']);

	}

	getSubdomenList(){
 	return this.items = this.itemsRef.snapshotChanges().pipe(
      map(changes => 
       changes.map(c => ({ key: c.key, val:c.payload.val() }))
      ));
	}
	getSubdomen(fromId){
		return this.db.object('subdomen/'+ fromId).valueChanges();
	}
	redirectNewSubomen(){
		this.router.navigate(['/admin-subdomen-list']);
	}


}
