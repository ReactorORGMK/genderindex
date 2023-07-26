import { Injectable } from '@angular/core';
import { AngularFireDatabase ,AngularFireList, AngularFireObject} from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import {Observable} from 'rxjs';
import { finalize } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import {Routes, RouterModule, Router} from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class AdminMunicipalityService {
	
	storageMunicipality;
	items:Observable<any[]>;
	item:Observable<any>;
	itemsMunicipality: AngularFireList<any>;
	uploadPercent: Observable<any>;
	downloadURL: Observable<string>;
	image;

	constructor(public db:AngularFireDatabase, public storage:AngularFireStorage, public router:Router) {
		this.itemsMunicipality=db.list('municipality');
	}
	

	getMunicipalityList(){
		return  this.itemsMunicipality.snapshotChanges().pipe(
			map(changes => 
				changes.map(c => ({ key: c.key, val:c.payload.val() }))
				));

	}

	uploadImage(event, name, progress: { percentage: number }){
		const file = event.target.files[0];
		const filePath = 'municipality/images/'+name;
		const fileRef = this.storage.ref(filePath);
		const task = this.storage.upload(filePath, file);
		// observe percentage changes
		this.uploadPercent = task.percentageChanges();
		// get notified when the download URL is available
		task.snapshotChanges().subscribe(a=>{
			if(a.bytesTransferred>0){
				fileRef.getDownloadURL().subscribe(img=>{
					this.image=img;		
				});
				progress.percentage = Math.round((a.bytesTransferred / a.totalBytes) * 100);
			}
		});
	}
	addMun(name,code,codeGraph,colorGraph, area, population){
		var image=this.image;
		if(image==undefined){
			console.log('ве молиме поставете слика ')
		}else{
			return this.itemsMunicipality.set(code,{name:name, code:code, codeGraph:codeGraph,colorGraph:colorGraph, area:area,population:population, image:image});
		}

	}


	removeMunicipality(key){
		this.itemsMunicipality.remove(key);
		/*var that=this;
		this.db.list('municipality/').snapshotChanges().subscribe(a=>{
			a.forEach(function (b) {
				that.db.list('subdomen_domen/'+b.key).remove(key);
			})
		})*/
		//this.removeSubdomen(key);
	}

	redirectMunicipalityList(){
		this.router.navigate(['/admin-municipality-list']);
	}

	getMunicipality(fromId){
		return this.db.object('municipality/'+ fromId).valueChanges();
		
	}

	


	updateMunicipality(key, newname,newCode,newCodeGraph, newcolorGraph, newArea, newPopulation, img){
		
		if(this.image!=undefined){
			this.itemsMunicipality.set(key,{name:newname,code:newCode,codeGraph:newCodeGraph, colorGraph:newcolorGraph, area:newArea, population:newPopulation,image:this.image});
		}else{
			this.itemsMunicipality.set(key,{name:newname,code:newCode,codeGraph:newCodeGraph,colorGraph:newcolorGraph, area:newArea, population:newPopulation,image:img});
		}

		this.router.navigate(['/admin-municipality-list']);

	}




}



