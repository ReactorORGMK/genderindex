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
var router_1 = require("@angular/router");
var admin_els_municipality_service_1 = require("../admin-els-municipality.service");
var MunicipalityCompareComponent = /** @class */ (function () {
    function MunicipalityCompareComponent(route, serviceEls) {
        this.route = route;
        this.serviceEls = serviceEls;
        this.mun = [];
    }
    MunicipalityCompareComponent.prototype.ngOnInit = function () {
        var that = this;
        this.route.paramMap.subscribe(function (id) {
            var fullParametersId = [];
            var idParameter;
            fullParametersId = id.keys;
            fullParametersId.forEach(function (idIn) {
                idParameter = id.get(idIn);
                that.serviceEls.getElsMunicipalityId(idParameter).subscribe(function (b) {
                    that.mun.push(b);
                    var newDomenSubdomen = [];
                    for (var key in b.domenSubdomen) {
                        var myTemp = [];
                        for (var key1 in b.domenSubdomen[key].subdomens) {
                            myTemp.push({ subdomenName: b.domenSubdomen[key].subdomens[key1].subdomenName, subdomenValue: b.domenSubdomen[key].subdomens[key1].subdomenValue });
                        }
                        newDomenSubdomen.push({ domenName: b.domenSubdomen[key].domenName, domenValue: b.domenSubdomen[key].domenValue, subdomeni: myTemp });
                    }
                    ;
                    that.domenSubdomenList = newDomenSubdomen;
                    b.domenSubdomen = newDomenSubdomen;
                });
            });
        });
    };
    MunicipalityCompareComponent = __decorate([
        core_1.Component({
            selector: 'app-municipality-compare',
            templateUrl: './municipality-compare.component.html',
            styleUrls: ['./municipality-compare.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, admin_els_municipality_service_1.AdminElsMunicipalityService])
    ], MunicipalityCompareComponent);
    return MunicipalityCompareComponent;
}());
exports.MunicipalityCompareComponent = MunicipalityCompareComponent;
//# sourceMappingURL=municipality-compare.component.js.map