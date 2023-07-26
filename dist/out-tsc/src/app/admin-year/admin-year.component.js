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
var admin_year_service_1 = require("../admin-year.service");
var admin_domen_service_1 = require("../admin-domen.service");
var AdminYearComponent = /** @class */ (function () {
    function AdminYearComponent(service, serviceDomen) {
        this.service = service;
        this.serviceDomen = serviceDomen;
        this.arrayRemove = [];
    }
    AdminYearComponent.prototype.ngOnInit = function () {
        this.getDomen();
    };
    AdminYearComponent.prototype.getCheckboxVal = function (event, key, name) {
        if (event.target.checked == true) {
            this.arrayRemove.push({ key: key, name: name });
            console.log(this.arrayRemove);
            //this.service.addSubdomenRealtion(key,name);
        }
        else {
            var index = this.arrayRemove.indexOf(key);
            this.arrayRemove.splice(index, 1);
            //this.service.removeSubdomen(key);
        }
    };
    AdminYearComponent.prototype.addYear = function (name, description) {
        var that = this;
        var newArray = this.arrayRemove.reduce(function (map, obj) { return (map[obj.key] = obj.name, map); }, {});
        this.idYear = this.service.addYear(name, newArray);
        /*	this.arrayRemove.forEach(function (domenNew) {
            //that.service.addDomenYearRealtion(that.idYear, domenNew.key, domenNew.name);
            //that.service.addDomenYearRealtion(domenNew.key,that.idYear,name);
            
        });*/
    };
    AdminYearComponent.prototype.getDomen = function () {
        this.domeni = this.serviceDomen.getDomenList();
    };
    AdminYearComponent = __decorate([
        core_1.Component({
            selector: 'app-admin-year',
            templateUrl: './admin-year.component.html',
            styleUrls: ['./admin-year.component.css']
        }),
        __metadata("design:paramtypes", [admin_year_service_1.AdminYearService, admin_domen_service_1.AdminDomenService])
    ], AdminYearComponent);
    return AdminYearComponent;
}());
exports.AdminYearComponent = AdminYearComponent;
//# sourceMappingURL=admin-year.component.js.map