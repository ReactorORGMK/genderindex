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
var admin_year_service_1 = require("../admin-year.service");
var admin_domen_service_1 = require("./../admin-domen.service");
var AdminYearEditComponent = /** @class */ (function () {
    function AdminYearEditComponent(route, service, serviceDomen) {
        this.route = route;
        this.service = service;
        this.serviceDomen = serviceDomen;
        this.oldDomeniArray = [];
        this.checkedValue = [];
        this.newDomenCheckbox = [];
    }
    AdminYearEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getDomen();
        var that = this;
        this.route.paramMap.subscribe(function (id) {
            _this.idYear = id.get('idYear');
            _this.yearData = _this.service.getYear(_this.idYear).subscribe(function (objectdata) {
                _this.yearData = objectdata;
                _this.checkedValue = Object.keys(objectdata.domeni);
                _this.oldDomeniArray.push(objectdata.domeni);
                _this.oldDomeniArray.forEach(function (a) {
                    that.newDomenCheckbox = Object.keys(a).map(function (key) {
                        return {
                            key: key,
                            name: a[key]
                        };
                    });
                });
            });
        });
    };
    AdminYearEditComponent.prototype.getDomen = function () {
        this.domeni = this.serviceDomen.getDomenList();
    };
    AdminYearEditComponent.prototype.getCheckboxVal = function (event, key, name) {
        if (event.target.checked === true) {
            this.newDomenCheckbox.push({ key: key, name: name });
        }
        else {
            var index = this.newDomenCheckbox.findIndex(function (p) { return p.key == key; });
            this.newDomenCheckbox.splice(index, 1);
        }
    };
    AdminYearEditComponent.prototype.updateYear = function (key, newname) {
        if (newname == undefined) {
            newname = this.yearData.year;
        }
        var newObjectDomeni = this.newDomenCheckbox.reduce(function (map, obj) { return (map[obj.key] = obj.name, map); }, {});
        this.service.updateYear(key, newname, newObjectDomeni);
    };
    AdminYearEditComponent = __decorate([
        core_1.Component({
            selector: 'app-admin-year-edit',
            templateUrl: './admin-year-edit.component.html',
            styleUrls: ['./admin-year-edit.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, admin_year_service_1.AdminYearService, admin_domen_service_1.AdminDomenService])
    ], AdminYearEditComponent);
    return AdminYearEditComponent;
}());
exports.AdminYearEditComponent = AdminYearEditComponent;
//# sourceMappingURL=admin-year-edit.component.js.map