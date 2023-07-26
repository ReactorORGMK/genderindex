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
var admin_subdomen_service_1 = require("./../admin-subdomen.service");
var router_1 = require("@angular/router");
var AdminSubdomenListComponent = /** @class */ (function () {
    function AdminSubdomenListComponent(service, router) {
        this.service = service;
        this.router = router;
        this.dropdownOptions = [{ id: 'select', name: 'Избери' }, { id: 'delete', name: 'Избриши' }];
        this.arrayRemove = [];
        this.subdomensList = service.getSubdomenList();
    }
    AdminSubdomenListComponent.prototype.getCheckboxVal = function (event, key) {
        if (event.target.checked == true) {
            this.arrayRemove.push(key);
        }
        else {
            var index = this.arrayRemove.indexOf(key);
            this.arrayRemove.splice(index, 1);
        }
    };
    AdminSubdomenListComponent.prototype.removeSubdomen = function () {
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
    AdminSubdomenListComponent.prototype.redirectNewSubdomen = function () {
        this.router.navigate(['/admin-subdomen']);
    };
    AdminSubdomenListComponent = __decorate([
        core_1.Component({
            selector: 'admin-subdomen-list',
            templateUrl: './admin-subdomen-list.component.html',
            styleUrls: ['./admin-subdomen-list.component.css']
        }),
        __metadata("design:paramtypes", [admin_subdomen_service_1.AdminSubdomenService, router_1.Router])
    ], AdminSubdomenListComponent);
    return AdminSubdomenListComponent;
}());
exports.AdminSubdomenListComponent = AdminSubdomenListComponent;
//# sourceMappingURL=admin-subdomen-list.component.js.map