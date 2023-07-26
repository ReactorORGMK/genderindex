"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var admin_year_service_1 = require("../admin-year.service");
var admin_municipality_service_1 = require("../admin-municipality.service");
var admin_domen_service_1 = require("../admin-domen.service");
var admin_els_municipality_service_1 = require("../admin-els-municipality.service");
var router_1 = require("@angular/router");
var router_2 = require("@angular/router");
var database_1 = require("@angular/fire/database");
var core_1 = require("@angular/core");
var AdminElsMunicipalityComponent = /** @class */ (function () {
    function AdminElsMunicipalityComponent(serviceYear, serviceMun, serviceDomen, serviceEls, db, router, route) {
        this.serviceYear = serviceYear;
        this.serviceMun = serviceMun;
        this.serviceDomen = serviceDomen;
        this.serviceEls = serviceEls;
        this.db = db;
        this.router = router;
        this.route = route;
        this.yearsMun = {};
        this.munEls = {};
        this.Object = Object;
        this.els = db.list('els-municipality');
    }
    AdminElsMunicipalityComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.years = this.serviceYear.getYearList();
        this.municipalities = this.serviceMun.getMunicipalityList();
        this.domeniSubdomeni = this.serviceDomen.getDomenList();
        this.route.paramMap.subscribe(function (id) {
            _this.year = id.get('idYear');
        });
    };
    /* getCheckboxValYear(event, key, year){
       this.yearsMun={};
       if(event){
         this.yearsMun={key:key,year:year};
       }
     }*/
    AdminElsMunicipalityComponent.prototype.getCheckboxValMun = function (event, key, name, code) {
        this.munEls = {};
        if (event) {
            this.munEls = { key: key, name: name, code: code };
            console.log(this.munEls);
        }
    };
    AdminElsMunicipalityComponent.prototype.saveId = function () {
        /*   this.domeniSubdomeni.forEach(item => {
             Object.keys(item).map(key=>item[key]).map(domen => {
       
               var temp = [];
               var mytemp={};
               var aman=[]
               for (var subdomen in domen.val.subdomeni){
                   var t = document.getElementById("id_"+subdomen).value;
                   temp.push({subdomenId:subdomen,subdomenName:domen.val.subdomeni[subdomen],subdomenValue:t});
                   mytemp[subdomen]=[];
                   mytemp[subdomen]={subdomenValue:t, subdomenName:domen.val.subdomeni[subdomen] };
               }
               var domenID = "id_"+domen.key;
               var t1 = document.getElementById(domenID).value;
               var t2 = mytemp;
               myResult[domen.key]=[];
               myResult[domen.key]={domenValue:t1,domenName:domen.val.name, 'subdomens':t2};
               this.resultArray.push({"domenKey":domen.key,"domenName":domen.val.name,"domenValue":t1, "subdomains" :  t2});
               //this.els.set(domen.key,{domenValue:t1,aman});
               // result.push ({"domenKey":domen.key,"subdomens":temp});
       
               //close map
             })
           });*/
        /*    this.serviceDomen.getDomenList().subscribe(domeni=>{
              var that=this;
              domeni.forEach(function (domen) {
                var temp = [];
                var mytemp={};
                var aman=[]
                for (var subdomen in domen.val.subdomeni){
                  console.log(subdomen);
                  var t = document.getElementById("id_"+subdomen).value;
                  temp.push({subdomenId:subdomen,subdomenName:domen.val.subdomeni[subdomen],subdomenValue:t});
                  mytemp[subdomen]=[];
                  mytemp[subdomen]={subdomenValue:t, subdomenName:domen.val.subdomeni[subdomen] };
                }
                var domenID = "id_"+domen.key;
                var t1 = document.getElementById(domenID).value;
                var t2 = mytemp;
                that.domenSubdomenObject[domen.key]=[];
                that.domenSubdomenObject[domen.key]=({domenValue:t1,domenName:domen.val.name, 'subdomens':t2});
                //this.resultArray.push({"domenKey":domen.key,"domenName":domen.val.name,"domenValue":t1, "subdomains" :  t2});
                //close map
              })
              // body...
            });*/
    };
    AdminElsMunicipalityComponent.prototype.saveAll = function (numberMen, numberWomen, budget, numberKindergartens, numberInstitutions, numberHealthWomen, numberGynecologist, scoreMun, rangMun, description) {
        var _this = this;
        var newDomenSubdomen = [];
        this.serviceDomen.getDomenList().subscribe(function (domeni) {
            var that = _this;
            domeni.forEach(function (domen) {
                var temp = [];
                var mytemp = {};
                for (var subdomen in domen.val.subdomeni) {
                    var t = document.getElementById("id_" + subdomen).value;
                    temp.push({ subdomenId: subdomen, subdomenName: domen.val.subdomeni[subdomen], subdomenValue: t });
                    mytemp[subdomen] = [];
                    mytemp[subdomen] = { subdomenValue: t, subdomenName: domen.val.subdomeni[subdomen] };
                }
                var domenID = "id_" + domen.key;
                var t1 = document.getElementById(domenID).value;
                var t2 = mytemp;
                newDomenSubdomen[domen.key] = [];
                newDomenSubdomen[domen.key] = { domenValue: t1, domenName: domen.val.name, 'subdomens': t2 };
            });
            if (_this.munEls.key != null && _this.munEls.code != null && numberMen != undefined && budget != undefined && numberKindergartens != undefined && numberInstitutions != undefined && numberHealthWomen != undefined, numberGynecologist != undefined && newDomenSubdomen.length == 0 && scoreMun != undefined && rangMun != undefined && description != undefined && _this.munEls.name != undefined) {
                _this.serviceEls.addMunEls(_this.year, _this.munEls.key, _this.munEls.code, numberMen, numberWomen, budget, numberKindergartens, numberInstitutions, numberHealthWomen, numberGynecologist, newDomenSubdomen, scoreMun, rangMun, description, _this.munEls.name);
                _this.router.navigate(['/years/' + _this.year]);
            }
            else {
                _this.error = 'Ве молиме пополете ги полињата означени со *';
            }
        });
    };
    AdminElsMunicipalityComponent = __decorate([
        core_1.Component({
            selector: 'app-admin-els-municipality',
            templateUrl: './admin-els-municipality.component.html',
            styleUrls: ['./admin-els-municipality.component.css']
        }),
        __metadata("design:paramtypes", [admin_year_service_1.AdminYearService, admin_municipality_service_1.AdminMunicipalityService, admin_domen_service_1.AdminDomenService, admin_els_municipality_service_1.AdminElsMunicipalityService, database_1.AngularFireDatabase, router_1.Router, router_2.ActivatedRoute])
    ], AdminElsMunicipalityComponent);
    return AdminElsMunicipalityComponent;
}());
exports.AdminElsMunicipalityComponent = AdminElsMunicipalityComponent;
//# sourceMappingURL=admin-els-municipality.component.js.map