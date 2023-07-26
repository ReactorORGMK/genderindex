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
var admin_region_service_1 = require("../admin-region.service");
var admin_municipality_service_1 = require("../admin-municipality.service");
var AdminRegionEditComponent = /** @class */ (function () {
    function AdminRegionEditComponent(route, service, serviceMun) {
        this.route = route;
        this.service = service;
        this.serviceMun = serviceMun;
        this.checkedValue = [];
        this.newRegionsCheckbox = [];
        this.new = {};
    }
    AdminRegionEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getMunicipality();
        var that = this;
        this.route.paramMap.subscribe(function (id) {
            _this.idRegion = id.get('idRegion');
            _this.regionData = _this.service.getRegion(_this.idRegion).subscribe(function (objectdata) {
                _this.regionData = objectdata;
                _this.checkedValue = Object.keys(objectdata.municipalities);
                var oldRegionsArray = [];
                for (var key in objectdata.municipalities) {
                    oldRegionsArray.push({ key: key, name: objectdata.municipalities[key].name, code: objectdata.municipalities[key].code });
                }
                _this.newRegionsCheckbox = oldRegionsArray;
            });
        });
    };
    AdminRegionEditComponent.prototype.getMunicipality = function () {
        this.municipalityList = this.serviceMun.getMunicipalityList();
    };
    AdminRegionEditComponent.prototype.getCheckboxVal = function (event, key, name, code) {
        if (event.target.checked === true) {
            this.newRegionsCheckbox.push({ key: key, name: name, code: code });
            console.log(this.newRegionsCheckbox);
        }
        else {
            var index = this.newRegionsCheckbox.findIndex(function (p) { return p.key == key; });
            this.newRegionsCheckbox.splice(index, 1);
            console.log(this.newRegionsCheckbox);
        }
    };
    AdminRegionEditComponent.prototype.updateRegion = function (key, newname) {
        if (newname == undefined) {
            newname = this.regionData.region;
        }
        var newRegion = {};
        this.newRegionsCheckbox.forEach(function (a) {
            newRegion[a.key] = [];
            newRegion[a.key] = { name: a.name, code: a.code };
        });
        this.service.updateRegion(key, newname, newRegion);
    };
    AdminRegionEditComponent = __decorate([
        core_1.Component({
            selector: 'app-admin-region-edit',
            templateUrl: './admin-region-edit.component.html',
            styleUrls: ['./admin-region-edit.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, admin_region_service_1.AdminRegionService, admin_municipality_service_1.AdminMunicipalityService])
    ], AdminRegionEditComponent);
    return AdminRegionEditComponent;
}());
exports.AdminRegionEditComponent = AdminRegionEditComponent;
//# sourceMappingURL=admin-region-edit.component.js.map