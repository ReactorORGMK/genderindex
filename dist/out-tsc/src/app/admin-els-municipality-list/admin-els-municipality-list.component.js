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
var router_2 = require("@angular/router");
var admin_els_municipality_service_1 = require("../admin-els-municipality.service");
var AdminElsMunicipalityListComponent = /** @class */ (function () {
    function AdminElsMunicipalityListComponent(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.arrayRemove = [];
        this.arrayRemoveCopy = [];
        this.dropdownOptions = [{ id: 'select', name: 'Избери' }, { id: 'delete', name: 'Избриши' }];
    }
    AdminElsMunicipalityListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var that = this;
        this.route.paramMap.subscribe(function (id) {
            _this.year = id.get('idYear');
            _this.service.getElsMunicipalityYearId(_this.year).subscribe(function (year) {
                _this.years = year;
            });
        });
    };
    AdminElsMunicipalityListComponent.prototype.getCheckboxVal = function (event, key) {
        if (event.target.checked == true) {
            this.arrayRemove.push(key);
        }
        else {
            var index = this.arrayRemove.indexOf(key);
            this.arrayRemove.splice(index, 1);
        }
    };
    AdminElsMunicipalityListComponent.prototype.removeDomen = function () {
        var _this = this;
        this.arrayRemove.forEach(function (myKey) {
            if (_this.optionSelected == 'delete') {
                console.log(_this.year, myKey);
                _this.service.removeMunEls(_this.year, myKey);
            }
            else {
                _this.error = "Ве молиме изберете од листата";
            }
        });
    };
    AdminElsMunicipalityListComponent.prototype.redirectNewDomen = function (year) {
        this.router.navigate(['/admin-els-municipality/' + year]);
    };
    AdminElsMunicipalityListComponent = __decorate([
        core_1.Component({
            selector: 'app-admin-els-municipality-list',
            templateUrl: './admin-els-municipality-list.component.html',
            styleUrls: ['./admin-els-municipality-list.component.css']
        }),
        __metadata("design:paramtypes", [admin_els_municipality_service_1.AdminElsMunicipalityService, router_1.ActivatedRoute, router_2.Router])
    ], AdminElsMunicipalityListComponent);
    return AdminElsMunicipalityListComponent;
}());
exports.AdminElsMunicipalityListComponent = AdminElsMunicipalityListComponent;
//# sourceMappingURL=admin-els-municipality-list.component.js.map