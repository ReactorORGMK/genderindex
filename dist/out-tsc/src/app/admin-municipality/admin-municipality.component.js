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
var admin_municipality_service_1 = require("./../admin-municipality.service");
var AdminMunicipalityComponent = /** @class */ (function () {
    function AdminMunicipalityComponent(service) {
        this.service = service;
        this.progress = { percentage: 0 };
    }
    AdminMunicipalityComponent.prototype.ngOnInit = function () {
    };
    AdminMunicipalityComponent.prototype.addMunicipality = function (name, code, area, population) {
        if (name || code || area || population == '') {
            var newId = this.service.addMun(name, code, area, population);
            this.service.redirectMunicipalityList();
        }
        else if (newId == undefined) {
            this.error = "Ве молиме пополнете ги податоците означени со *";
        }
    };
    AdminMunicipalityComponent.prototype.selectFile = function (event, name) {
        this.service.uploadImage(event, name, this.progress);
    };
    AdminMunicipalityComponent = __decorate([
        core_1.Component({
            selector: 'app-admin-municipality',
            templateUrl: './admin-municipality.component.html',
            styleUrls: ['./admin-municipality.component.css']
        }),
        __metadata("design:paramtypes", [admin_municipality_service_1.AdminMunicipalityService])
    ], AdminMunicipalityComponent);
    return AdminMunicipalityComponent;
}());
exports.AdminMunicipalityComponent = AdminMunicipalityComponent;
//# sourceMappingURL=admin-municipality.component.js.map