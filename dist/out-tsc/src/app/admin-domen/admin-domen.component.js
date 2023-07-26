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
var admin_domen_service_1 = require("./../admin-domen.service");
var AdminDomenComponent = /** @class */ (function () {
    function AdminDomenComponent(service, serviceSub) {
        this.service = service;
        this.serviceSub = serviceSub;
        this.domenSubdomens = [];
        this.getSubdomen();
    }
    AdminDomenComponent.prototype.getCheckboxVal = function (event, key, name) {
        if (event.target.checked == true) {
            this.domenSubdomens.push({ key: key, name: name });
            console.log(this.domenSubdomens);
            //this.service.addSubdomenRealtion(key,name);
        }
        else {
            var index = this.domenSubdomens.indexOf(key);
            this.domenSubdomens.splice(index, 1);
            //this.service.removeSubdomen(key);
        }
    };
    AdminDomenComponent.prototype.addDomen = function (name, description) {
        var newDomenSubdomen = this.domenSubdomens.reduce(function (map, obj) { return (map[obj.key] = obj.name, map); }, {});
        console.log(newDomenSubdomen);
        this.idDomen = this.service.addDomen(name, description, newDomenSubdomen);
        /*	this.arrayRemove.forEach(function (subdomenNew) {
            that.service.addDomenSubdomenRealtion(that.idDomen, subdomenNew.key, subdomenNew.name);
            that.service.addDomenSubdomenRealtion(subdomenNew.key,that.idDomen,name);
            
        });*/
    };
    AdminDomenComponent.prototype.getSubdomen = function () {
        this.subdomens = this.serviceSub.getSubdomenList();
    };
    AdminDomenComponent = __decorate([
        core_1.Component({
            selector: 'admin-domen',
            templateUrl: './admin-domen.component.html',
            styleUrls: ['./admin-domen.component.css']
        }),
        __metadata("design:paramtypes", [admin_domen_service_1.AdminDomenService, admin_subdomen_service_1.AdminSubdomenService])
    ], AdminDomenComponent);
    return AdminDomenComponent;
}());
exports.AdminDomenComponent = AdminDomenComponent;
//# sourceMappingURL=admin-domen.component.js.map