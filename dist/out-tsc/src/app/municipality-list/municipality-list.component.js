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
var admin_region_service_1 = require("../admin-region.service");
var router_1 = require("@angular/router");
var MunicipalityListComponent = /** @class */ (function () {
    function MunicipalityListComponent(serviceRegion, router) {
        var _this = this;
        this.serviceRegion = serviceRegion;
        this.router = router;
        var that = this;
        serviceRegion.getAll().subscribe(function (region) {
            _this.regions = region;
        });
        this.options = {
            chart: {
                width: 1000,
                height: 400,
                type: 'column',
            },
            xAxis: {
                categories: ['Скор на општина']
            },
            credits: {
                enabled: false
            },
            colors: ['#F0A442'],
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },
            title: { text: 'Скор на општините' },
            series: [{
                    name: 'sk',
                    data: [133]
                }, {
                    name: 'ge',
                    data: [156]
                }, {
                    name: 'mk',
                    data: [947]
                }, {
                    name: 'be',
                    data: [408]
                }, {
                    name: 'go',
                    data: [6]
                }, {
                    name: 'te',
                    data: [20]
                }, {
                    name: 'bt',
                    data: [300]
                }, {
                    name: 'pp',
                    data: [220]
                }, {
                    name: 'st',
                    data: [120]
                }, {
                    name: 'sv',
                    data: [210]
                }, {
                    name: 'be',
                    data: [133]
                }, {
                    name: 'vv',
                    data: [156]
                }, {
                    name: 'ne',
                    data: [947]
                }, {
                    name: 'mm',
                    data: [408]
                }, {
                    name: 've',
                    data: [6]
                }, {
                    name: 'mb',
                    data: [20]
                }, {
                    name: 'tt',
                    data: [300]
                }, {
                    name: 'ss',
                    data: [220]
                }, {
                    name: 'aa',
                    data: [120]
                }, {
                    name: 'nn',
                    data: [210]
                }, {
                    name: 'sk',
                    data: [133]
                }, {
                    name: 'nn',
                    data: [156]
                }, {
                    name: 'll',
                    data: [947]
                }, {
                    name: 'yy',
                    data: [408]
                }, {
                    name: 'mm',
                    data: [6]
                }, {
                    name: 'jj',
                    data: [20]
                }, {
                    name: 'Скор на општината',
                    data: [300]
                }, {
                    name: 'Скор на општината',
                    data: [220]
                }, {
                    name: 'Скор на општината',
                    data: [120]
                }, {
                    name: 'Скор на општината',
                    data: [210]
                }, {
                    name: 'Скор на општината',
                    data: [133]
                }, {
                    name: 'Скор на општината',
                    data: [156]
                }, {
                    name: 'Скор на општината',
                    data: [947]
                }, {
                    name: 'Скор на општината',
                    data: [408]
                }, {
                    name: 'Скор на општината',
                    data: [6]
                }, {
                    name: 'Скор на општината',
                    data: [20]
                }, {
                    name: 'Скор на општината',
                    data: [300]
                }, {
                    name: 'Скор на општината',
                    data: [220]
                }, {
                    name: 'Скор на општината',
                    data: [120]
                }, {
                    name: 'Скор на општината',
                    data: [210]
                }, {
                    name: 'Скор на општината',
                    data: [133]
                }, {
                    name: 'Скор на општината',
                    data: [156]
                }, {
                    name: 'Скор на општината',
                    data: [947]
                }, {
                    name: 'Скор на општината',
                    data: [408]
                }, {
                    name: 'Скор на општината',
                    data: [6]
                }, {
                    name: 'Скор на општината',
                    data: [20]
                }, {
                    name: 'Скор на општината',
                    data: [300]
                }, {
                    name: 'Скор на општината',
                    data: [220]
                }, {
                    name: 'Скор на општината',
                    data: [120]
                }, {
                    name: 'Скор на општината',
                    data: [210]
                }, {
                    name: 'Скор на општината',
                    data: [133]
                }, {
                    name: 'Скор на општината',
                    data: [156]
                }, {
                    name: 'Скор на општината',
                    data: [947]
                }, {
                    name: 'Скор на општината',
                    data: [408]
                }, {
                    name: 'Скор на општината',
                    data: [6]
                }, {
                    name: 'Скор на општината',
                    data: [20]
                }, {
                    name: 'Скор на општината',
                    data: [300]
                }, {
                    name: 'Скор на општината',
                    data: [220]
                }, {
                    name: 'Скор на општината',
                    data: [120]
                }, {
                    name: 'Скор на општината',
                    data: [210]
                }, {
                    name: 'Скор на општината',
                    data: [133]
                }, {
                    name: 'Скор на општината',
                    data: [156]
                }, {
                    name: 'Скор на општината',
                    data: [947]
                }, {
                    name: 'Скор на општината',
                    data: [408]
                }, {
                    name: 'Скор на општината',
                    data: [6]
                }, {
                    name: 'Скор на општината',
                    data: [20]
                }, {
                    name: 'Скор на општината',
                    data: [300]
                }, {
                    name: 'Скор на општината',
                    data: [220]
                }, {
                    name: 'Скор на општината',
                    data: [120]
                }, {
                    name: 'Скор на општината',
                    data: [210]
                }, {
                    name: 'Скор на општината',
                    data: [133]
                }, {
                    name: 'Скор на општината',
                    data: [156]
                }, {
                    name: 'Скор на општината',
                    data: [947]
                }, {
                    name: 'Скор на општината',
                    data: [408]
                }, {
                    name: 'Скор на општината',
                    data: [6]
                }, {
                    name: 'Скор на општината',
                    data: [20]
                }, {
                    name: 'Скор на општината',
                    data: [300]
                }, {
                    name: 'Скор на општината',
                    data: [220]
                }, {
                    name: 'Скор на општината',
                    data: [120]
                }, {
                    name: 'Скор на општината',
                    data: [210]
                }, {
                    name: 'Скор на општината',
                    data: [133]
                }, {
                    name: 'Скор на општината',
                    data: [156]
                }, {
                    name: 'Скор на општината',
                    data: [947]
                }, {
                    name: 'Скор на општината',
                    data: [408]
                }, {
                    name: 'Скор на општината',
                    data: [6]
                }, {
                    name: 'Скор на општината',
                    data: [20]
                }, {
                    name: 'Скор на општината',
                    data: [300]
                }, {
                    name: 'Скор на општината',
                    data: [220]
                }, {
                    name: 'Скор на општината',
                    data: [120]
                }, {
                    name: 'Скор на општината',
                    data: [210]
                }, {
                    name: 'Скор на општината',
                    data: [230]
                }]
        };
    }
    MunicipalityListComponent.prototype.ngOnInit = function () {
    };
    MunicipalityListComponent = __decorate([
        core_1.Component({
            selector: 'app-municipality-list',
            templateUrl: './municipality-list.component.html',
            styleUrls: ['./municipality-list.component.css']
        }),
        __metadata("design:paramtypes", [admin_region_service_1.AdminRegionService, router_1.Router])
    ], MunicipalityListComponent);
    return MunicipalityListComponent;
}());
exports.MunicipalityListComponent = MunicipalityListComponent;
//# sourceMappingURL=municipality-list.component.js.map