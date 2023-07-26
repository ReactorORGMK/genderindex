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
require("rxjs/add/operator/map");
var AdminElsMunicipalityService = /** @class */ (function () {
    function AdminElsMunicipalityService(db) {
        this.db = db;
        this.listServiceFeature = [];
        this.itemsEls = db.list('els-municipality');
    }
    AdminElsMunicipalityService.prototype.addMunEls = function (year, municipalityId, municipalityCode, numberMen, numberWomen, budget, numberKindergartens, numberInstitutions, numberHealthWomen, numberGynecologist, domenSubdomen, scoreMun, rangMun, descripMun, munName) {
        this.yearObject = this.db.object('/els-municipality/' + year + '/' + municipalityId);
        this.yearObject.set({ code: municipalityCode, men: numberMen, women: numberWomen, budget: budget, kindergartens: numberKindergartens, institutions: numberInstitutions, healthWomen: numberHealthWomen, gynecologists: numberGynecologist, domenSubdomen: domenSubdomen, scoreMun: scoreMun, rangMun: rangMun, description: descripMun, name: munName });
    };
    AdminElsMunicipalityService.prototype.getElsMunicipalityId = function (idMun) {
        return this.municipalityElsDataId = this.db.object('/els-municipality/' + 2016 + '/' + idMun).snapshotChanges().map(function (changes) {
            return changes.payload.val();
        });
    };
    AdminElsMunicipalityService.prototype.getElsMunicipalityYearId = function (idYear) {
        return this.db.object('/els-municipality/' + idYear).snapshotChanges().map(function (changes) {
            var yearMun = [];
            for (var key in changes.payload.val()) {
                yearMun.push({ key: key, val: changes.payload.val()[key] });
            }
            return yearMun;
        });
    };
    AdminElsMunicipalityService.prototype.getElsYears = function () {
        return this.itemsEls.snapshotChanges().pipe(operators_1.map(function (changes) {
            return changes.map(function (c) { return ({ key: c.key, val: c.payload.val() }); });
        }));
    };
    AdminElsMunicipalityService.prototype.getDomenSubdomen = function (idMun) {
        return this.db.object('/els-municipality/' + 2016 + '/' + idMun + "/domenSubdomen/").snapshotChanges().map(function (changes) {
            var newDomenSubdomen = [];
            for (var key in changes.payload.val()) {
                var myTemp = [];
                for (var key1 in changes.payload.val()[key].subdomens) {
                    myTemp.push({ subdomenName: changes.payload.val()[key].subdomens[key1].subdomenName, subdomenValue: changes.payload.val()[key].subdomens[key1].subdomenValue });
                }
                newDomenSubdomen.push({ domenName: changes.payload.val()[key].domenName, domenValue: changes.payload.val()[key].domenValue, subdomeni: myTemp });
            }
            ;
            return newDomenSubdomen;
        });
    };
    AdminElsMunicipalityService.prototype.removeMunEls = function (idYear, idMun) {
        this.db.list('els-municipality/' + idYear).remove(idMun);
    };
    AdminElsMunicipalityService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [database_1.AngularFireDatabase])
    ], AdminElsMunicipalityService);
    return AdminElsMunicipalityService;
}());
exports.AdminElsMunicipalityService = AdminElsMunicipalityService;
//# sourceMappingURL=admin-els-municipality.service.js.map