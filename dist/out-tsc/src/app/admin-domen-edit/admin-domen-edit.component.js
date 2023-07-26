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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var database_1 = require("@angular/fire/database");
var admin_domen_service_1 = require("./../admin-domen.service");
var admin_subdomen_service_1 = require("./../admin-subdomen.service");
var AdminDomenEditComponent = /** @class */ (function () {
    function AdminDomenEditComponent(db, route, service, serviceSub) {
        this.db = db;
        this.route = route;
        this.service = service;
        this.serviceSub = serviceSub;
        this.arrayCheckbox = [];
        this.arrayCheckboxRemoveDb = [];
        this.frontCheckboxCheck = [];
        this.oldSubdomeniCheckbox = [];
    }
    AdminDomenEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getSubdomen();
        /* this.route.paramMap.subscribe(idParm=>{
            let idSubdomen=idParm.get('idSubdomen');
            this.domenDataName=this.db.object('subdomen/'+ idSubdomen).valueChanges().subscribe(objectdata =>
                {
                    this.domenDataName=objectdata;
                }
                    
                );
            });*/
        var that = this;
        this.route.paramMap.subscribe(function (id) {
            _this.idDomen = id.get('idDomen');
            _this.domenData = _this.service.getDomen(_this.idDomen).subscribe(function (objectdata) {
                _this.domenData = objectdata;
                _this.frontCheckboxCheck = Object.keys(objectdata.subdomeni);
                _this.oldSubdomeniCheckbox.push(objectdata.subdomeni);
                _this.oldSubdomeniCheckbox.forEach(function (a) {
                    that.newSubdomenCheck = Object.keys(a).map(function (key) {
                        return {
                            key: key,
                            name: a[key]
                        };
                    });
                });
            });
        });
        /*	this.service.getSubdomenRelation(this.idDomen).subscribe(subdomenKeys=>{
                this.arrayCheckbox=[];
                subdomenKeys.forEach(function (subdomenkey) {
                    that.arrayCheckbox.push({key:subdomenkey.key, name:subdomenkey.payload.val()});
                    that.frontCheckbox.push(subdomenkey.key);
                });
            });*/
    };
    AdminDomenEditComponent.prototype.getSubdomen = function () {
        this.subdomens = this.serviceSub.getSubdomenList();
    };
    /*	onChange(topic: string) {
            let index = this.selectedTopics.indexOf(topic);
            if (index == -1) {
                this.selectedTopics.push(value);
            } else {
                this.selectedTopics.splice(index, 1);
            }
        }*/
    /*isSelected(topic){
        return selectedTopics.indexOf(topic) >= 0;
    }
    */
    AdminDomenEditComponent.prototype.getCheckboxVal = function (event, key, name) {
        if (event.target.checked === true) {
            this.newSubdomenCheck.push({ key: key, name: name });
        }
        else {
            var index = this.newSubdomenCheck.findIndex(function (p) { return p.key === key; });
            this.newSubdomenCheck.splice(index, 1);
            //this.arrayCheckboxRemoveDb.push({key:key,name:name});
        }
    };
    AdminDomenEditComponent.prototype.updateData = function (key, newname, newdescription) {
        var that = this;
        if (newname == undefined) {
            newname = this.domenData.name;
        }
        if (newdescription == undefined) {
            newdescription = this.domenData.description;
        }
        var newObjectSubdomeni = this.newSubdomenCheck.reduce(function (map, obj) { return (map[obj.key] = obj.name, map); }, {});
        /*this.arrayCheckboxRemoveDb.forEach(function (removekey) {
            that.db.list('subdomen_domen/'+removekey.key).remove(key);
        });*/
        /*this.arrayCheckbox.forEach(function (subdomenNew) {
            that.service.updateDomenSubdomenRealtion(that.idDomen, subdomenNew.key, subdomenNew.name);
            that.service.updateDomenSubdomenRealtion(subdomenNew.key, that.idDomen, newname);
        });*/
        this.service.updateDomen(key, newname, newdescription, newObjectSubdomeni);
    };
    AdminDomenEditComponent = __decorate([
        core_1.Component({
            selector: 'app-admin-domen-edit',
            templateUrl: './admin-domen-edit.component.html',
            styleUrls: ['./admin-domen-edit.component.css']
        }),
        __metadata("design:paramtypes", [database_1.AngularFireDatabase, router_1.ActivatedRoute, admin_domen_service_1.AdminDomenService,
            admin_subdomen_service_1.AdminSubdomenService])
    ], AdminDomenEditComponent);
    return AdminDomenEditComponent;
}());
exports.AdminDomenEditComponent = AdminDomenEditComponent;
//# sourceMappingURL=admin-domen-edit.component.js.map