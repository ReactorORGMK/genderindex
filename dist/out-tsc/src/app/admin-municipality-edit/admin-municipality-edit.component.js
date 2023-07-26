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
var admin_municipality_service_1 = require("./../admin-municipality.service");
var AdminMunicipalityEditComponent = /** @class */ (function () {
    function AdminMunicipalityEditComponent(route, service) {
        this.route = route;
        this.service = service;
        this.progress = { percentage: 0 };
    }
    AdminMunicipalityEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var that = this;
        this.route.paramMap.subscribe(function (id) {
            _this.idMunicipality = id.get('idMunicipality');
            _this.municipalityData = _this.service.getMunicipality(_this.idMunicipality).subscribe(function (objectdata) {
                _this.municipalityData = objectdata;
            });
        });
    };
    AdminMunicipalityEditComponent.prototype.selectFile = function (event, name) {
        this.service.uploadImage(event, name, this.progress);
    };
    AdminMunicipalityEditComponent.prototype.updateData = function (key, newname, newCode, newArea, newPopulation, image) {
        console.log(image);
        var that = this;
        if (newname == undefined) {
            newname = this.municipalityData.name;
        }
        if (newCode == undefined) {
            newCode = this.municipalityData.code;
        }
        if (newArea == undefined) {
            newArea = this.municipalityData.area;
        }
        if (newPopulation == undefined) {
            newPopulation = this.municipalityData.population;
        }
        image = this.municipalityData.image;
        /*that.service.removeSubdomen(key);

        this.arrayCheckboxRemoveDb.forEach(function (removekey) {
            that.db.list('subdomen_domen/'+removekey.key).remove(key);
        });

        this.arrayCheckbox.forEach(function (subdomenNew) {
            that.service.updateDomenSubdomenRealtion(that.idDomen, subdomenNew.key, subdomenNew.name);
            that.service.updateDomenSubdomenRealtion(subdomenNew.key, that.idDomen, newname);
        });*/
        this.service.updateMunicipality(key, newname, newCode, newArea, newPopulation, image);
    };
    AdminMunicipalityEditComponent = __decorate([
        core_1.Component({
            selector: 'app-admin-municipality-edit',
            templateUrl: './admin-municipality-edit.component.html',
            styleUrls: ['./admin-municipality-edit.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, admin_municipality_service_1.AdminMunicipalityService])
    ], AdminMunicipalityEditComponent);
    return AdminMunicipalityEditComponent;
}());
exports.AdminMunicipalityEditComponent = AdminMunicipalityEditComponent;
//# sourceMappingURL=admin-municipality-edit.component.js.map