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
var operators_1 = require("rxjs/operators");
var AdminYearService = /** @class */ (function () {
    function AdminYearService(db) {
        this.db = db;
        this.itemsYear = db.list('year');
    }
    AdminYearService.prototype.addYear = function (year, domeni) {
        return this.itemsYear.push({ year: year, domeni: domeni }).key;
    };
    AdminYearService.prototype.getYearList = function () {
        return this.items = this.itemsYear.snapshotChanges().pipe(operators_1.map(function (changes) {
            return changes.map(function (c) { return ({ key: c.key, val: c.payload.val().year }); });
        }));
    };
    AdminYearService.prototype.removeYear = function (key) {
        this.itemsYear.remove(key);
        var that = this;
        /*this.db.list('subdomen_domen/').snapshotChanges().subscribe(a=>{
            a.forEach(function (b) {
                that.db.list('subdomen_domen/'+b.key).remove(key);
            })
        })
        this.removeSubdomen(key);*/
    };
    AdminYearService.prototype.getYear = function (fromId) {
        return this.db.object('year/' + fromId).valueChanges();
    };
    AdminYearService.prototype.updateYear = function (key, year, domeni) {
        this.itemsYear.set(key, { year: year, domeni: domeni });
    };
    AdminYearService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [database_1.AngularFireDatabase])
    ], AdminYearService);
    return AdminYearService;
}());
exports.AdminYearService = AdminYearService;
//# sourceMappingURL=admin-year.service.js.map