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
var database_1 = require("@angular/fire/database");
require("rxjs/add/operator/map");
var AdminRegionService = /** @class */ (function () {
    function AdminRegionService(db) {
        this.db = db;
        this.itemsRegion = db.list('region');
    }
    AdminRegionService.prototype.addRegion = function (regionName, munList) {
        console.log(regionName);
        this.region = this.db.object('region/' + regionName);
        return this.region.set({ region: regionName, municipalities: munList });
    };
    AdminRegionService.prototype.getRegionList = function () {
        return this.items = this.itemsRegion.snapshotChanges().
            map(function (changes) {
            return changes.map(function (c) { return ({ key: c.key, val: c.payload.val().municipalities }); });
        });
    };
    AdminRegionService.prototype.getAll = function () {
        return this.items = this.itemsRegion.snapshotChanges().map(function (regions) {
            var fullArray = [];
            var regionArray = [];
            regions.forEach(function (region) {
                var munArray = [];
                for (var key in region.payload.val().municipalities) {
                    munArray.push({ name: region.payload.val().municipalities[key].name, link: key, code: region.payload.val().municipalities[key].code });
                }
                regionArray.push({ regionkey: region.key, mun: munArray });
            });
            return regionArray;
        });
    };
    AdminRegionService.prototype.removeRegion = function (key) {
        this.itemsRegion.remove(key);
    };
    AdminRegionService.prototype.getRegion = function (fromId) {
        return this.db.object('region/' + fromId).valueChanges();
    };
    AdminRegionService.prototype.updateRegion = function (key, mun, newObjectMun) {
        this.region = this.db.object('region/' + key);
        return this.region.set({ region: key, municipalities: newObjectMun });
    };
    AdminRegionService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [database_1.AngularFireDatabase])
    ], AdminRegionService);
    return AdminRegionService;
}());
exports.AdminRegionService = AdminRegionService;
//# sourceMappingURL=admin-region.service.js.map