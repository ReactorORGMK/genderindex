import { Injectable } from '@angular/core';
import { AngularFireDatabase ,AngularFireList, AngularFireObject} from '@angular/fire/database';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs';
import {Routes, RouterModule, Router} from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class AdminElsMunicipalityService {
	itemsEls: AngularFireList<any>;
	listServiceFeature=[];
	yearObject;
	municipalityElsDataId;
	municiplaityYear;
	obser:Observable<any>;
	removeYearMun;
	updateEls;

	constructor(public db:AngularFireDatabase, public router:Router) {
		this.itemsEls=db.list('els-municipality');
	}


	addMunEls( year, municipalityId,municipalityCode, municipalityColor, numberMen, numberWomen,plannedBudget,budget,numberRateInfants,numberRateMaternal,
		numberCompany,
		numberPlot,
		numberObject,
		numberFlat,domenSubdomen, scoreMun, rangMun,descripMun, munName){
		this.yearObject=this.db.object('/els-municipality/'+ year+'/' + municipalityId);
		this.yearObject.set({code:municipalityCode,color:municipalityColor, men:numberMen, women:numberWomen,plannedBudget:plannedBudget, budget:budget, numberRateInfants:numberRateInfants,
			numberRateMaternal:numberRateMaternal,
			numberCompany:numberCompany,
			numberPlot:numberPlot,
			numberObject:numberObject,
			numberFlat:numberFlat,
			domenSubdomen:domenSubdomen,
			 scoreMun:scoreMun, rangMun:rangMun, description:descripMun,name:munName});
	}

	getElsMunicipalityId(idMun, idYear){
		return this.municipalityElsDataId=this.db.object('/els-municipality/'+ idYear +'/' + idMun).valueChanges();
	}

	/*getElsMunicipalityId(idMun, idYear){
		return this.municipalityElsDataId=this.db.object('/els-municipality/'+ idYear +'/' + idMun).snapshotChanges().map(changes => {
			var yearMun=[];
			for(var key in changes.payload.val()) {
				yearMun.push({key:key, val:changes.payload.val()[key]});
			}
			return yearMun;
		});
	}*/


	

	getElsMunicipalityYearId(idYear){
		return this.db.object('/els-municipality/'+ idYear).snapshotChanges().map(changes => {
			var yearMun=[];
			for(var key in changes.payload.val()) {
				yearMun.push({key:key, val:changes.payload.val()[key]});
			}
			return yearMun;
		});
	}



async getElsMunicipalityYearName(idYear){
	var yearMun=[];
	return await new Promise((resolve, reject) => {
		return this.db.object('/els-municipality/'+ idYear).snapshotChanges().map(changes => {
			
			for(var key in changes.payload.val()) {
				yearMun.push({key:key, val:changes.payload.val()[key]});
			}
			resolve(yearMun);
			return yearMun;
		});
		//resolve(yearMun);
	})
	}


	getElsMunicipalityIdEdit(idMun, idYear){
		return this.municipalityElsDataId=this.db.object('/els-municipality/'+ idYear +'/' + idMun).snapshotChanges();
	}


	getElsYears(){
		return this.itemsEls.snapshotChanges().pipe(
			map(changes => 
				changes.map(c => ({ key: c.key, val:c.payload.val() }))
				));
	}

	/*getDomenSubdomen(idMun){
		return this.db.object('/els-municipality/'+ 2016+'/' + idMun+"/domenSubdomen/").snapshotChanges().map(changes => {
			var newDomenSubdomen=[];
			for(var key in changes.payload.val()) {
				var myTemp=[];
				for(var key1 in changes.payload.val()[key].subdomens) {
					myTemp.push({subdomenName:changes.payload.val()[key].subdomens[key1].subdomenName, subdomenValue:changes.payload.val()[key].subdomens[key1].subdomenValue});
				}
				newDomenSubdomen.push({domenName:changes.payload.val()[key].domenName, domenValue:changes.payload.val()[key].domenValue, subdomeni:myTemp});
			};
			return newDomenSubdomen;
		})
	}*/

	getDomenSubdomenYear(idMun, year){
		return this.db.object('/els-municipality/'+ year+'/' + idMun+"/domenSubdomen/").snapshotChanges().map(changes => {
			var newDomenSubdomen=[];
			for(var key in changes.payload.val()) {
				/*domeni*/
				var mySubdomens=[];
				
				for(var sub in changes.payload.val()[key].subdomens) {
					/*subdomeni*/
					var myColumn=[];
					for(var column in changes.payload.val()[key].subdomens[sub].columns){
						/*columns*/
						myColumn.push({columnName:changes.payload.val()[key].subdomens[sub].columns[column].columnName, columnValue:changes.payload.val()[key].subdomens[sub].columns[column].columnValue, columnKey:column});
					}
					mySubdomens.push({subdomenName:changes.payload.val()[key].subdomens[sub].subdomenName, columns:myColumn, subdomenKey:sub, position:changes.payload.val()[key].subdomens[sub].position});
				}
				var domenColumn=[];
				for(var domen in changes.payload.val()[key].columns) {

					domenColumn.push({columnName:changes.payload.val()[key].columns[domen].columnName, columnValue:changes.payload.val()[key].columns[domen].columnValue, columnKey:domen})
				}
				newDomenSubdomen.push({domenName:changes.payload.val()[key].domenName, subdomens:mySubdomens, columns:domenColumn, domenKey:key});
			}
			return newDomenSubdomen;
		});


	}


	

	updateElsService(year, idMun, code,  numberMen, numberWomen, plannedBudget, budget,numberRateInfants,numberRateMaternal,
		numberCompany,
		numberPlot,
		numberObject,
		numberFlat,domenSubdomen1, scoreMun, rangMun,descriptionMun, munName){
		this.updateEls=this.db.object('/els-municipality/'+ year+'/' + idMun);
		this.updateEls.set({code:code, men:numberMen, women:numberWomen,plannedBudget:plannedBudget, budget:budget, numberRateInfants:numberRateInfants,
			numberRateMaternal:numberRateMaternal,
			numberCompany:numberCompany,
			numberPlot:numberPlot,
			numberObject:numberObject,
			numberFlat:numberFlat, domenSubdomen:domenSubdomen1, scoreMun:scoreMun, rangMun:rangMun, description:descriptionMun, name:munName})
		this.router.navigate(['/years/'+year]);
	}

	removeMunEls(idYear, idMun){
		this.db.list('els-municipality/'+idYear).remove(idMun)
	}






}
