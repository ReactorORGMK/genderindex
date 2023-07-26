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
var admin_subdomen_service_1 = require("./../admin-subdomen.service");
var AdminSubdomenEditComponent = /** @class */ (function () {
    function AdminSubdomenEditComponent(db, route, service) {
        this.db = db;
        this.route = route;
        this.service = service;
    }
    AdminSubdomenEditComponent.prototype.ngOnInit = function () {
        /* this.route.paramMap.subscribe(idParm=>{
            let idSubdomen=idParm.get('idSubdomen');
            this.subdomenDataName=this.db.object('subdomen/'+ idSubdomen).valueChanges().subscribe(objectdata =>
                {
                    this.subdomenDataName=objectdata;
                }
                    
                );
            });*/
        var _this = this;
        this.route.paramMap.subscribe(function (id) {
            _this.idSubdomen = id.get('idSubdomen');
            _this.subdomenData = _this.service.getSubdomen(_this.idSubdomen).subscribe(function (objectdata) {
                _this.subdomenData = objectdata;
            });
        });
    };
    AdminSubdomenEditComponent.prototype.updateData = function (key, newname, newdescription) {
        if (newname == undefined) {
            newname = this.subdomenData.name;
        }
        if (newdescription == undefined) {
            newdescription = this.subdomenData.description;
        }
        this.service.updateDomen(key, newname, newdescription);
    };
    AdminSubdomenEditComponent = __decorate([
        core_1.Component({
            selector: 'app-admin-subdomen-edit',
            templateUrl: './admin-subdomen-edit.component.html',
            styleUrls: ['./admin-subdomen-edit.component.css']
        }),
        __metadata("design:paramtypes", [database_1.AngularFireDatabase, router_1.ActivatedRoute, admin_subdomen_service_1.AdminSubdomenService])
    ], AdminSubdomenEditComponent);
    return AdminSubdomenEditComponent;
}());
exports.AdminSubdomenEditComponent = AdminSubdomenEditComponent;
//# sourceMappingURL=admin-subdomen-edit.component.js.map