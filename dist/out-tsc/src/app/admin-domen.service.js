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
var AdminDomenService = /** @class */ (function () {
    function AdminDomenService(db) {
        this.db = db;
        this.itemsDomen = db.list('domen');
        this.itemsSubdomen = db.list('subdomen');
        this.itemsDS = db.list('subdomen_domen');
        this.itemsDSobject = db.object('subdomen_domen');
    }
    AdminDomenService.prototype.addDomen = function (domen, descriptiondomen, subdomeni) {
        return this.itemsDomen.push({ name: domen, description: descriptiondomen, subdomeni: subdomeni }).key;
    };
    /*	addDomenSubdomenRealtion(keyDomen, keySubDomen, name){
            const ref=this.db.object(`subdomen_domen/${keyDomen}/${keySubDomen}`);
            ref.set(name);
        }
    
        updateDomenSubdomenRealtion(keyDomen, keySubDomen, name){
    
            const ref=this.db.object(`subdomen_domen/${keyDomen}/${keySubDomen}`);
            ref.set(name);
    
    }*/
    /*addSubdomenDomenRealtion(keyDomen, keySubDomen,name){
        const ref=this.db.object(`subdomen_domen/${keySubDomen}/${keyDomen}`);
        ref.set(name);
    }*/
    AdminDomenService.prototype.removeSubdomen = function (key) {
        this.itemsDS.remove(key);
    };
    AdminDomenService.prototype.removeDomen = function (key) {
        this.itemsDomen.remove(key);
        var that = this;
        this.db.list('subdomen_domen/').snapshotChanges().subscribe(function (a) {
            a.forEach(function (b) {
                that.db.list('subdomen_domen/' + b.key).remove(key);
            });
        });
        this.removeSubdomen(key);
    };
    AdminDomenService.prototype.updateDomen = function (key, newname, newdescription, subdomeni) {
        this.itemsDomen.set(key, { name: newname, description: newdescription, subdomeni: subdomeni });
    };
    AdminDomenService.prototype.getDomenList = function () {
        return this.items = this.itemsDomen.snapshotChanges().pipe(operators_1.map(function (changes) {
            return changes.map(function (c) { return ({ key: c.key, val: c.payload.val() }); });
        }));
    };
    AdminDomenService.prototype.getDomen = function (fromId) {
        return this.db.object('domen/' + fromId).valueChanges();
    };
    AdminDomenService.prototype.getSubdomenRelation = function (objectId) {
        return this.db.list('subdomen_domen/' + objectId).snapshotChanges();
    };
    AdminDomenService.prototype.redirectNewDomen = function () {
        //this.router.navigate(['/admin-domen-list']);
    };
    AdminDomenService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [database_1.AngularFireDatabase])
    ], AdminDomenService);
    return AdminDomenService;
}());
exports.AdminDomenService = AdminDomenService;
//# sourceMappingURL=admin-domen.service.js.map