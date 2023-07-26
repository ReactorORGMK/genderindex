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
var operators_1 = require("rxjs/operators");
var AdminSubdomenService = /** @class */ (function () {
    function AdminSubdomenService(db) {
        this.db = db;
        this.itemsRef = db.list('subdomen');
    }
    AdminSubdomenService.prototype.addDomen = function (subdomen, descriptionsubdomen) {
        this.itemsRef.push({ name: subdomen, description: descriptionsubdomen });
    };
    AdminSubdomenService.prototype.removeDomen = function (key) {
        this.itemsRef.remove(key);
    };
    AdminSubdomenService.prototype.updateDomen = function (key, newname, newdescription) {
        this.itemsRef.set(key, { name: newname, description: newdescription });
    };
    AdminSubdomenService.prototype.getSubdomenList = function () {
        return this.items = this.itemsRef.snapshotChanges().pipe(operators_1.map(function (changes) {
            return changes.map(function (c) { return ({ key: c.key, val: c.payload.val() }); });
        }));
    };
    AdminSubdomenService.prototype.getSubdomen = function (fromId) {
        return this.db.object('subdomen/' + fromId).valueChanges();
    };
    AdminSubdomenService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [database_1.AngularFireDatabase])
    ], AdminSubdomenService);
    return AdminSubdomenService;
}());
exports.AdminSubdomenService = AdminSubdomenService;
//# sourceMappingURL=admin-subdomen.service.js.map