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
var http_1 = require("@angular/common/http");
var database_1 = require("@angular/fire/database");
require("rxjs/add/observable/forkJoin");
require("rxjs/add/operator/map");
var admin_domen_service_1 = require("../admin-domen.service");
var admin_subdomen_service_1 = require("../admin-subdomen.service");
var home_service_1 = require("../home.service");
var admin_municipality_service_1 = require("../admin-municipality.service");
var HomeComponent = /** @class */ (function () {
    //end getSubdomenId
    function HomeComponent(http, serviceDomen, serviceSub, service, db, serviecMun) {
        var _this = this;
        this.http = http;
        this.serviceDomen = serviceDomen;
        this.serviceSub = serviceSub;
        this.service = service;
        this.db = db;
        this.serviecMun = serviecMun;
        this.Object = Object;
        this.defaultDataMap = [];
        this.selectedDomen = null;
        this.selectedSubdomen = null;
        var data = [
            ['mk-vv', 150],
            ['mk-ar', 1],
            ['mk-li', 2],
            ['mk-cz', 3],
            ['mk-dm', 4],
            ['mk-od', 5],
            ['mk-3086', 6],
            ['mk-pp', 7],
            ['mk-aj', 8],
            ['mk-st', 9],
            ['mk-pt', 10],
            ['mk-pe', 11],
            ['mk-su', 12],
            ['mk-sl', 13],
            ['mk-pn', 14],
            ['mk-vc', 15],
            ['mk-bu', 16],
            ['mk-ci', 17],
            ['mk-ng', 18],
            ['mk-rm', 19],
            ['mk-ce', 20],
            ['mk-zr', 21],
            ['mk-ch', 22],
            ['mk-cs', 23],
            ['mk-gb', 24],
            ['mk-gr', 25],
            ['mk-lo', 26],
            ['mk-dk', 27],
            ['mk-kn', 28],
            ['mk-kx', 29],
            ['mk-ca', 30],
            ['mk-av', 31],
            ['mk-ad', 32],
            ['mk-ss', 33],
            ['mk-vd', 34],
            ['mk-ky', 35],
            ['mk-tl', 36],
            ['mk-ks', 37],
            ['mk-um', 38],
            ['mk-ze', 39],
            ['mk-md', 40],
            ['mk-gp', 41],
            ['mk-kh', 42],
            ['mk-os', 43],
            ['mk-vh', 44],
            ['mk-vj', 45],
            ['mk-et', 46],
            ['mk-bn', 47],
            ['mk-gt', 48],
            ['mk-jg', 49],
            ['mk-ru', 50],
            ['mk-va', 51],
            ['mk-bg', 52],
            ['mk-ns', 53],
            ['mk-br', 54],
            ['mk-ni', 55],
            ['mk-rv', 56],
            ['mk-dr', 57],
            ['mk-ug', 58],
            ['mk-db', 59],
            ['mk-re', 60],
            ['mk-kz', 61],
            ['mk-kb', 62],
            ['mk-na', 63],
            ['mk-nv', 64],
            ['mk-mr', 65],
            ['mk-tr', 66],
            ['mk-gv', 67],
            ['mk-sd', 68],
            ['mk-dl', 69],
            ['mk-oc', 70],
            ['mk-mk', 71],
            ['mk-ph', 72],
            ['mk-rn', 73],
            ['mk-il', 74],
            ['mk-ve', 75],
            ['mk-zk', 76],
            ['mk-so', 77],
            ['mk-de', 78],
            ['mk-kg', 79],
            ['mk-mg', 80],
            ['mk-za', 81],
            ['mk-vl', 82],
            ['mk-bs', 83]
        ];
        this.http.get('./assets/map.json').map(function (response) {
            _this.options = {
                chart: {
                    map: 'countries/mk/mk-all',
                    width: 1200,
                    height: 905,
                },
                tooltip: {
                    backgroundColor: null,
                    borderWidth: 0,
                    shadow: false,
                    useHTML: true,
                    padding: 0,
                    pointFormat: '<div class="map">' +
                        '<div style="font-size: 20px;text-transform: uppercase;padding-top:10px;font-family:Arsenal">{point.name}</div>' +
                        '<div><img src="{point.properties.mun_img}" width="100px"/></div>' +
                        '<div style="font-size: 15px;text-transform: uppercase;margin-top:10px">Ранг: {point.properties.mun_rang} | Скор: {point.properties.mun_score}</div>' +
                        '<div class="triangle"></div></div>',
                },
                title: {
                    text: ' '
                },
                subtitle: {
                    text: ' '
                },
                legend: {
                    borderWidth: 0,
                    layout: 'vertical',
                    align: 'left',
                    verticalAlign: 'middle',
                    x: -20,
                    y: 150,
                },
                mapNavigation: {
                    enabled: true,
                    buttonOptions: {
                        theme: {
                            fill: 'white',
                            'stroke-width': 1,
                            stroke: 'silver',
                            r: 0,
                            states: {
                                hover: {
                                    fill: 'silver'
                                },
                                select: {
                                    stroke: 'silver',
                                    fill: 'silver'
                                }
                            }
                        },
                        verticalAlign: 'bottom'
                    }
                },
                colorAxis: {
                    minColor: '#cc2e3e',
                    maxColor: '#fabc3e'
                },
                credits: {
                    enabled: false
                },
                plotOptions: {
                    series: {
                        cursor: 'pointer',
                        point: {
                            events: {
                                click: function () {
                                }
                            }
                        }
                    }
                },
                series: [{
                        data: data,
                        mapData: response,
                        cursor: 'pointer',
                        name: 'РИ',
                        states: {
                            hover: {
                                color: '#770e20',
                                borderColor: '#fff',
                                borderWidth: 3,
                            }
                        },
                        dataLabels: {
                            enabled: true,
                            format: '{point.name}'
                        }
                    }],
            };
        }).subscribe();
        //constructor	
    }
    HomeComponent.prototype.ngOnInit = function () {
        setTimeout(function () {
            document.getElementById('pullBox').setAttribute("class", "pull_open");
            document.getElementById('pullIcon').setAttribute("class", "pull_icon1");
        }, 2500);
        this.domeniSubdomeni = this.serviceDomen.getDomenList();
        var that = this;
        this.defaultScore = this.service.getDefaultGrades().subscribe(function (a) {
            a.forEach(function (test) {
                that.defaultDataMap.push(test);
            });
        });
        console.log(that.defaultDataMap);
        document.getElementById('defaultIndex').setAttribute('class', 'active');
        this.name = "Генерална оцена";
        this.description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make";
    };
    HomeComponent.prototype.close_open_Slider = function () {
        if (document.querySelector("#pullBox").classList.contains("pull_open")) {
            document.getElementById('pullBox').setAttribute("class", "pull_box");
            document.getElementById('pullIcon').setAttribute("class", "pull_icon");
        }
        else if (document.querySelector("#pullBox").classList.contains("pull_box")) {
            document.getElementById('pullBox').setAttribute("class", "pull_open");
            document.getElementById('pullIcon').setAttribute("class", "pull_icon1");
        }
    };
    HomeComponent.prototype.getGeneralGrade = function () {
        document.getElementById('defaultIndex').setAttribute('class', 'active');
        this.selectedDomen = null;
        this.selectedSubdomen = null;
        this.name = "Генерална оцена";
        this.description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make";
    };
    HomeComponent.prototype.getDomenId = function (id) {
        var _this = this;
        var that = this;
        var test = [];
        this.defaultDataMap = [];
        this.selectedDomen = id;
        this.selectedSubdomen = null;
        document.getElementById('defaultIndex').setAttribute('class', ' ');
        // this.domenArrayKey=this.service.getDomenId(id).subscribe(a=>{
        // 	a.forEach(function (c) {
        // 		c.forEach(function(m){
        // 			that.defaultDataMap.push(m);
        // 		}
        // 	});
        // 	});
        this.serviceDomen.getDomen(id).subscribe(function (a) {
            _this.description = a.description;
            _this.name = a.name;
        });
        this.service.getDomenId().subscribe(function (a) {
            a.forEach(function (b) {
                that.db.list('els-municipality/' + 2016 + '/' + b.key + '/' + 'domenSubdomen' + '/' + id).valueChanges().subscribe(function (n) {
                    that.defaultDataMap.push([b.key, parseInt(n[1])]);
                });
            });
        });
        //console.log(this.defaultDataMap);
    };
    //end getDomenId
    HomeComponent.prototype.getSubdomenId = function (idDomen, idSubdomen, i) {
        var _this = this;
        var that = this;
        this.defaultDataMap = [];
        this.selectedSubdomen = idSubdomen;
        this.selectedDomen = null;
        document.getElementById('defaultIndex').setAttribute('class', ' ');
        // this.defaultDataMap=[];
        // this.service.getSubdomenId(id).subscribe(subdomeni=>{
        // 	console.log(subdomeni);
        // });
        //console.log(that.defaultDataMap);
        this.serviceSub.getSubdomen(idSubdomen).subscribe(function (a) {
            _this.description = a.description;
            _this.name = a.name;
        });
        this.service.getDomenId().subscribe(function (a) {
            a.forEach(function (b) {
                that.db.list('els-municipality/' + 2016 + '/' + b.key + '/' + 'domenSubdomen' + '/' + idDomen + '/subdomens/' + idSubdomen).valueChanges().subscribe(function (n) {
                    that.defaultDataMap.push([b.key, parseInt(n[1])]);
                });
            });
        });
        //console.log(this.defaultDataMap);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, admin_domen_service_1.AdminDomenService, admin_subdomen_service_1.AdminSubdomenService, home_service_1.HomeService, database_1.AngularFireDatabase, admin_municipality_service_1.AdminMunicipalityService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map