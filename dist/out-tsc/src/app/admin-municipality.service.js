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
var storage_1 = require("@angular/fire/storage");
var operators_1 = require("rxjs/operators");
require("rxjs/add/operator/map");
var router_1 = require("@angular/router");
var AdminMunicipalityService = /** @class */ (function () {
    function AdminMunicipalityService(db, storage, router) {
        this.db = db;
        this.storage = storage;
        this.router = router;
        this.itemsMunicipality = db.list('municipality');
    }
    AdminMunicipalityService.prototype.getMunicipalityList = function () {
        return this.item = this.itemsMunicipality.snapshotChanges().pipe(operators_1.map(function (changes) {
            return changes.map(function (c) { return ({ key: c.key, val: c.payload.val() }); });
        }));
    };
    AdminMunicipalityService.prototype.uploadImage = function (event, name, progress) {
        var _this = this;
        var file = event.target.files[0];
        var filePath = 'municipality/images/' + name;
        var fileRef = this.storage.ref(filePath);
        var task = this.storage.upload(filePath, file);
        // observe percentage changes
        this.uploadPercent = task.percentageChanges();
        // get notified when the download URL is available
        task.snapshotChanges().subscribe(function (a) {
            if (a.bytesTransferred > 0) {
                fileRef.getDownloadURL().subscribe(function (img) {
                    _this.image = img;
                });
                progress.percentage = Math.round((a.bytesTransferred / a.totalBytes) * 100);
            }
        });
    };
    AdminMunicipalityService.prototype.addMun = function (name, code, area, population) {
        var image = this.image;
        if (image == undefined) {
            console.log('ве молиме поставете слика ');
        }
        else {
            return this.itemsMunicipality.set(code, { name: name, code: code, area: area, population: population, image: image }).key;
        }
    };
    AdminMunicipalityService.prototype.removeMunicipality = function (key) {
        this.itemsMunicipality.remove(key);
        /*var that=this;
        this.db.list('municipality/').snapshotChanges().subscribe(a=>{
            a.forEach(function (b) {
                that.db.list('subdomen_domen/'+b.key).remove(key);
            })
        })*/
        //this.removeSubdomen(key);
    };
    AdminMunicipalityService.prototype.redirectMunicipalityList = function () {
        this.router.navigate(['/admin-municipality-list']);
    };
    AdminMunicipalityService.prototype.getMunicipality = function (fromId) {
        return this.db.object('municipality/' + fromId).valueChanges();
    };
    AdminMunicipalityService.prototype.updateMunicipality = function (key, newname, newCode, newArea, newPopulation, img) {
        if (this.image != undefined) {
            this.itemsMunicipality.set(key, { name: newname, code: newCode, area: newArea, population: newPopulation, image: this.image });
        }
        else {
            this.itemsMunicipality.set(key, { name: newname, code: newCode, area: newArea, population: newPopulation, image: img });
        }
    };
    AdminMunicipalityService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [database_1.AngularFireDatabase, storage_1.AngularFireStorage, router_1.Router])
    ], AdminMunicipalityService);
    return AdminMunicipalityService;
}());
exports.AdminMunicipalityService = AdminMunicipalityService;
//# sourceMappingURL=admin-municipality.service.js.map