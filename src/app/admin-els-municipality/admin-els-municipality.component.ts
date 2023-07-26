import {OnInit } from '@angular/core';
import {AdminYearService} from '../admin-year.service';
import {AdminMunicipalityService} from '../admin-municipality.service';
import { AdminDomenService } from '../admin-domen.service';
import { AdminElsMunicipalityService } from '../admin-els-municipality.service';
import {Routes, RouterModule, Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';

import { AngularFireDatabase ,AngularFireList, AngularFireObject} from '@angular/fire/database';

import {Component, NgModule, ViewChildren, QueryList} from '@angular/core';





@Component({
	selector: 'app-admin-els-municipality',
	templateUrl: './admin-els-municipality.component.html',
	styleUrls: ['./admin-els-municipality.component.css']
})




export class AdminElsMunicipalityComponent implements OnInit {
	years;
	municipalities;
	yearsMun={};
	munEls={};
  munKey;
  munName;
  munCode;
  munColor;
  domeniSubdomeni;
  Object = Object;
  els;
  error;
  year;
  lastYearDomenSubdomen=[];
  thisYear;

  numberMen;
  numberWomen;
  plannedBudget;
  budget;
  
  numberRateInfants;
  numberRateMaternal;
  numberCompany;
  numberPlot;
  numberObject;
  numberFlat;
  scoreMun;
  rangMun;
  description;

  thisSpecYear;



  constructor(public serviceYear:AdminYearService, public serviceMun:AdminMunicipalityService, public serviceDomen:AdminDomenService, public serviceEls:AdminElsMunicipalityService, public db :AngularFireDatabase, public router:Router, public route:ActivatedRoute) { 
    this.els=db.list('els-municipality')
  }

  ngOnInit() {
    var that=this;
    this.years=this.serviceYear.getYearList();
    this.municipalities=this.serviceMun.getMunicipalityList();
    this.route.paramMap.subscribe(id=>{
      this.year=id.get('idYear');
    });





    /*get domenSubdomen for that specific year*/
    this.lastYearDomenSubdomen=[];
    this.thisYear= this.serviceYear.getYear(this.year);


    this.thisSpecYear= this.serviceYear.getSpecificYear(this.year);
    this.thisSpecYear.forEach(function(a){
     
      for(let key in a){

        that.lastYearDomenSubdomen.push({key:key,val:a[key]});  
      }
    });

    //old code
    // this.thisYear.forEach(function(a){
      //   for(var key in a.domeni){
        //     that.serviceDomen.getDomenSnapshot(key).subscribe(b=>{
          //       that.lastYearDomenSubdomen.push({key:b.key,val:b.payload.val()});
          //     });   
          //   }
          // }) 

          //end old code
          this.domeniSubdomeni=this.lastYearDomenSubdomen;
                   // console.log(this.domeniSubdomeni);
        }

        getCheckboxValMun(event, key, name, code, color){
          //	this.munEls={};
          this.munKey;
          this.munName;
          this.munCode;
          this.munColor;
          if(event){
            this.munKey=key;
            this.munName=name;
            this.munCode=code;
            this.munColor=color;
            //this.munEls={key:key,name:name, code:code}; 
            // console.log(this.munEls)
          }
        }

        saveAll( numberMen, numberWomen,plannedBudget, budget,numberRateInfants,numberRateMaternal,
          numberCompany,
          numberPlot,
          numberObject,
          numberFlat,scoreMun, rangMun, description){
          var dataObject={};
          dataObject=this.munEls;
          var newDomenSubdomen=[];
          this.lastYearDomenSubdomen.forEach(function(domeni){
            var that=this;
            var mytemp={};

            for (var subdomen in domeni.val.subdomeni){
              var mytempColumn={};
              for(var column in domeni.val.subdomeni[subdomen].columns){
                var columnId = (<HTMLInputElement>document.getElementById("id_"+subdomen+'_'+column)).value;
                mytempColumn[column]=[];
                mytempColumn[column]={columnName:domeni.val.subdomeni[subdomen].columns[column], columnValue:columnId};
              }
              mytemp[subdomen]=[];
              mytemp[subdomen]={subdomenName:domeni.val.subdomeni[subdomen].name, columns:mytempColumn, position:domeni.val.subdomeni[subdomen].position};
            }
            var columnsDomen={};
            for(var columndomen in domeni.val.columns){
              var columnVal=(<HTMLInputElement>document.getElementById("id_"+domeni.key+'_'+columndomen)).value;
              columnsDomen[columndomen]=[];
              columnsDomen[columndomen]={columnName:domeni.val.columns[columndomen],columnValue:columnVal };
            }
            newDomenSubdomen[domeni.key]=[];
            newDomenSubdomen[domeni.key]={domenName:domeni.val.name, 'subdomens':mytemp, 'columns':columnsDomen};
          });

          //console.log(newDomenSubdomen);

          if(this.munKey!=undefined && this.munCode!=undefined&&numberMen!=undefined&&plannedBudget!=undefined&&budget!=undefined&&scoreMun!=undefined&&rangMun!=undefined&&description!=undefined&&this.munName!=undefined){
            this.serviceEls.addMunEls(this.year, this.munKey,this.munCode, this.munColor, numberMen, numberWomen, plannedBudget, budget,numberRateInfants,numberRateMaternal,numberCompany, numberPlot,numberObject, numberFlat, newDomenSubdomen, scoreMun,rangMun, description, this.munName );
            this.router.navigate(['/years/'+this.year]);
          }else{
            this.error='Ве молиме пополете ги полињата означени со *'
          }
        }

      }
