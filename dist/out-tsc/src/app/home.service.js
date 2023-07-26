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
var HomeService = /** @class */ (function () {
    function HomeService(db) {
        this.db = db;
        this.defaultGrade = [];
        this.year = db.list('els-municipality/' + 2016);
    }
    /*end constructor*/
    HomeService.prototype.getDefaultGrades = function () {
        return this.currentYear = this.year.snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return ([c.key, c.payload.val().scoreMun]); });
        });
        ;
    };
    HomeService.prototype.getDomenId = function () {
        return this.year.snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return ({ key: c.key, val: c.payload.val() }); });
        });
        ;
    };
    HomeService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [database_1.AngularFireDatabase])
    ], HomeService);
    return HomeService;
}());
exports.HomeService = HomeService;
//# sourceMappingURL=home.service.js.map