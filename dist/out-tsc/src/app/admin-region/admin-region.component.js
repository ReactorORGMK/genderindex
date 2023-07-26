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
var admin_municipality_service_1 = require("../admin-municipality.service");
var admin_region_service_1 = require("../admin-region.service");
var AdminRegionComponent = /** @class */ (function () {
    function AdminRegionComponent(service, serviceMun) {
        this.service = service;
        this.serviceMun = serviceMun;
        this.arrayRemove = [];
    }
    AdminRegionComponent.prototype.ngOnInit = function () {
        this.getMunicipality();
    };
    AdminRegionComponent.prototype.getCheckboxVal = function (event, key, name, code) {
        if (event.target.checked == true) {
            this.arrayRemove.push({ key: key, name: name, code: code });
            // console.log(this.arrayRemove);
        }
        else {
            var index = this.arrayRemove.indexOf(key);
            this.arrayRemove.splice(index, 1);
        }
    };
    AdminRegionComponent.prototype.addRegion = function (name, description) {
        var newRegion = {};
        this.arrayRemove.forEach(function (a) {
            newRegion[a.key] = [];
            newRegion[a.key] = { name: a.name, code: a.code };
        });
        console.log(newRegion);
        this.idMun = this.service.addRegion(name, newRegion);
    };
    AdminRegionComponent.prototype.getMunicipality = function () {
        this.municipalityList = this.serviceMun.getMunicipalityList();
    };
    AdminRegionComponent = __decorate([
        core_1.Component({
            selector: 'app-admin-region',
            templateUrl: './admin-region.component.html',
            styleUrls: ['./admin-region.component.css']
        }),
        __metadata("design:paramtypes", [admin_region_service_1.AdminRegionService, admin_municipality_service_1.AdminMunicipalityService])
    ], AdminRegionComponent);
    return AdminRegionComponent;
}());
exports.AdminRegionComponent = AdminRegionComponent;
//# sourceMappingURL=admin-region.component.js.map