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
var admin_municipality_service_1 = require("../admin-municipality.service");
var admin_els_municipality_service_1 = require("../admin-els-municipality.service");
var router_1 = require("@angular/router");
var router_2 = require("@angular/router");
var MunicipalityComponent = /** @class */ (function () {
    function MunicipalityComponent(route, serviceMun, serviceEls, router) {
        var _this = this;
        this.route = route;
        this.serviceMun = serviceMun;
        this.serviceEls = serviceEls;
        this.router = router;
        // Text configuration// dropdown multiselect
        this.myTexts = {
            defaultTitle: 'Изберете општина',
            checkedPlural: 'Избрани',
            checked: 'Избран',
            searchPlaceholder: 'Барај',
            searchEmptyResult: 'Не постои таа општина'
        };
        this.mySettings = {
            checkedStyle: 'fontawesome',
            enableSearch: true,
            dynamicTitleMaxItems: 0,
            displayAllSelectedText: false
        };
        var that = this;
        this.route.paramMap.subscribe(function (id) {
            _this.idMunicipality = id.get('idMunicipality');
            /*data from municipality*/
            _this.municipalityDataSidebar = _this.serviceMun.getMunicipality(_this.idMunicipality).subscribe(function (objectdata) {
                _this.municipalityDataSidebar = objectdata;
            });
        });
        /*data from els*/
        this.municipalityData = this.serviceEls.getElsMunicipalityId(this.idMunicipality).subscribe(function (munData) {
            _this.municipalityData = munData;
        });
        this.options = {
            chart: {
                width: 600,
                height: 400,
                type: 'line'
            },
            title: {
                text: 'Monthly Average Rainfall'
            },
            subtitle: {
                text: 'Source: WorldClimate.com'
            },
            xAxis: {
                categories: [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec'
                ],
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Rainfall (mm)'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                    name: 'Tokyo',
                    data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
                }, {
                    name: 'New York',
                    data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]
                }, {
                    name: 'London',
                    data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]
                }, {
                    name: 'Berlin',
                    data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
                }]
        };
    }
    MunicipalityComponent.prototype.ngOnInit = function () {
        var _this = this;
        var that = this;
        /*domeni & subdomeni*/
        this.serviceEls.getDomenSubdomen(this.idMunicipality).subscribe(function (domenSubdomen) {
            _this.domenSubdomenList = domenSubdomen;
        });
        /*dropdown municipalities*/
        var municiplaities = [];
        this.serviceMun.getMunicipalityList().subscribe(function (mun) {
            mun.forEach(function (m) {
                municiplaities.push({ id: m.key, name: m.val.name });
            });
            var index = municiplaities.findIndex(function (a) { return a.id === that.idMunicipality; });
            municiplaities.splice(index, 1);
            _this.myOptions = municiplaities;
        });
    };
    MunicipalityComponent.prototype.onChange = function () {
        // console.log(this.optionsModel);
    };
    MunicipalityComponent.prototype.onClickDropdown = function () {
        if (this.optionsModel == '') {
            this.error = "Ве молиме изберете општина";
        }
        else {
            var array = [];
            array.push("/municipalities-compare");
            array.push(this.idMunicipality);
            this.optionsModel.forEach(function (am) {
                array.push(am);
            });
            this.router.navigate(array);
        }
    };
    MunicipalityComponent = __decorate([
        core_1.Component({
            selector: 'app-municipality',
            templateUrl: './municipality.component.html',
            styleUrls: ['./municipality.component.css']
        }),
        __metadata("design:paramtypes", [router_2.ActivatedRoute, admin_municipality_service_1.AdminMunicipalityService, admin_els_municipality_service_1.AdminElsMunicipalityService, router_1.Router])
    ], MunicipalityComponent);
    return MunicipalityComponent;
}());
exports.MunicipalityComponent = MunicipalityComponent;
//# sourceMappingURL=municipality.component.js.map