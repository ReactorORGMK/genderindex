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
var admin_domen_service_1 = require("./../admin-domen.service");
var router_1 = require("@angular/router");
var AdminDomenListComponent = /** @class */ (function () {
    function AdminDomenListComponent(service, router) {
        this.service = service;
        this.router = router;
        this.dropdownOptions = [{ id: 'select', name: 'Избери' }, { id: 'delete', name: 'Избриши' }];
        this.arrayRemove = [];
        this.arrayRemoveCopy = [];
        this.domensList = service.getDomenList();
    }
    AdminDomenListComponent.prototype.getCheckboxVal = function (event, key) {
        if (event.target.checked == true) {
            this.arrayRemove.push(key);
        }
        else {
            var index = this.arrayRemove.indexOf(key);
            this.arrayRemove.splice(index, 1);
        }
    };
    AdminDomenListComponent.prototype.removeDomen = function () {
        var _this = this;
        this.arrayRemove.forEach(function (myKey) {
            if (_this.optionSelected == 'delete') {
                _this.service.removeDomen(myKey);
            }
            else {
                _this.error = "Ве молиме изберете од листата";
            }
        });
    };
    AdminDomenListComponent.prototype.redirectNewDomen = function () {
        this.router.navigate(['/admin-domen']);
    };
    AdminDomenListComponent = __decorate([
        core_1.Component({
            selector: 'app-admin-domen-list',
            templateUrl: './admin-domen-list.component.html',
            styleUrls: ['./admin-domen-list.component.css']
        }),
        __metadata("design:paramtypes", [admin_domen_service_1.AdminDomenService, router_1.Router])
    ], AdminDomenListComponent);
    return AdminDomenListComponent;
}());
exports.AdminDomenListComponent = AdminDomenListComponent;
//# sourceMappingURL=admin-domen-list.component.js.map