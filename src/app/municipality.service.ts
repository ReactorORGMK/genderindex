import { Injectable } from '@angular/core';
import { AngularFireDatabase ,AngularFireList, AngularFireObject} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class MunicipalityService {
municipalities;
  constructor(public db:AngularFireDatabase) {

   }

 
}
