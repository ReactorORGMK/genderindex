(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about-index/about-index.component.css":
/*!*******************************************************!*\
  !*** ./src/app/about-index/about-index.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about-index/about-index.component.html":
/*!********************************************************!*\
  !*** ./src/app/about-index/about-index.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n<div class=\"container\">\n  <h6 class=\"title\">{{\"about_the_index\"|translate}}</h6>\n  <div class=\"staticPage col-md-12\" style=\"min-height: 70vh\" [innerHTML]=\"'about_the_index_text'| translate\">\n  \n   \n </div>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/about-index/about-index.component.ts":
/*!******************************************************!*\
  !*** ./src/app/about-index/about-index.component.ts ***!
  \******************************************************/
/*! exports provided: AboutIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutIndexComponent", function() { return AboutIndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutIndexComponent = /** @class */ (function () {
    function AboutIndexComponent() {
    }
    AboutIndexComponent.prototype.ngOnInit = function () {
    };
    AboutIndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-index',
            template: __webpack_require__(/*! ./about-index.component.html */ "./src/app/about-index/about-index.component.html"),
            styles: [__webpack_require__(/*! ./about-index.component.css */ "./src/app/about-index/about-index.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutIndexComponent);
    return AboutIndexComponent;
}());



/***/ }),

/***/ "./src/app/about-page/about-page.component.css":
/*!*****************************************************!*\
  !*** ./src/app/about-page/about-page.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about-page/about-page.component.html":
/*!******************************************************!*\
  !*** ./src/app/about-page/about-page.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n<div class=\"container\">\n  <h6 class=\"title\">{{\"about_project\"|translate}}</h6>\n  <div class=\"staticPage col-md-12\" style=\"height: 70vh\" [innerHTML]=\"'about_project_page'|translate\">\n  </div>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/about-page/about-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/about-page/about-page.component.ts ***!
  \****************************************************/
/*! exports provided: AboutPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageComponent", function() { return AboutPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutPageComponent = /** @class */ (function () {
    function AboutPageComponent() {
    }
    AboutPageComponent.prototype.ngOnInit = function () {
    };
    AboutPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-page',
            template: __webpack_require__(/*! ./about-page.component.html */ "./src/app/about-page/about-page.component.html"),
            styles: [__webpack_require__(/*! ./about-page.component.css */ "./src/app/about-page/about-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutPageComponent);
    return AboutPageComponent;
}());



/***/ }),

/***/ "./src/app/admin-domen-edit/admin-domen-edit.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/admin-domen-edit/admin-domen-edit.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin-domen-edit/admin-domen-edit.component.html":
/*!******************************************************************!*\
  !*** ./src/app/admin-domen-edit/admin-domen-edit.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<admin-navbar></admin-navbar>\n<div class=\"container-fluid\" class=\"header-block\"><a [routerLink]=\"['/admin']\"> <span class=\"first\">почетна</span> </a> /<a [routerLink]=\"['/admin-domen-list']\"> <span> домени </span> /</a></div>\n<div class=\"admin\">\n  <div class=\"container\">\n    <div class=\"block\">\n      <h1>{{ name  }}</h1>\n      <form>\n        <div class=\"form-group\">\n          <div class=\"col-md-12 row\">\n            <div class=\"col-md-4\">\n              <label for=\"nameSubdomen\">Име на поддомен</label>\n            </div>\n            <div class=\"col-md-8\">\n              <input id=\"nameSubdomen\" type=\"text\" [(ngModel)]=\"domen\" name=\"domen\" class=\"form-control\" placeholder=\"{{name}}\">\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"col-md-12 row\">\n            <div class=\"col-md-4\">\n              <label for=\"descriptionDomen\">Опис</label>\n            </div>\n            <div class=\"col-md-8\">\n              <textarea id=\"descriptionDomen\" [(ngModel)]=\"descriptiondomen\" type=\"text\" name=\"description\" class=\"form-control\" placeholder=\"{{description}}\">\n\n              </textarea>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"col-md-12 row\">\n            <div class=\"col-md-4\">\n              <label for=\"subdomen\">Поддомен</label>\n            </div>\n            <div class=\"col-md-8 checkbox-box\">\n              <ul>\n                <li *ngFor=\"let subdomen of subdomens | async\">\n                  <span>\n             <input [checked]=\"frontCheckboxCheck.indexOf(subdomen.key) >= 0\"  #f type=\"checkbox\" [value]=\"subdomen\" name=\"subdomen\"  \n             (click)=\"getCheckboxVal($event, subdomen.key,  subdomen.val.name, subdomen.val.columns)\" >\n               </span>\n                  <span> {{ subdomen.val.name }}</span>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n            <div class=\"col-md-12 row\">\n              <div class=\"col-md-4\">\n                <label for=\"subdomen\">Колони за анализа</label>\n              </div>\n              <div class=\"col-md-5 checkbox-box\">\n                <ul>\n                  <li *ngFor=\"let domen of domensColumns\">\n                    <span>\n                      <input type=\"checkbox\" [checked]=\"frontColumnChecked.indexOf(domen.key) >= 0\"  #f type=\"checkbox\" [value]=\"domen\" name=\"domen\"\n                       (click)=\"getCheckboxColumn($event, domen.key,  domen.subject)\" ></span>\n                      <span> {{ domen.subject }}</span>\n                    </li>\n                  </ul>\n                </div>\n                <div class=\"col-md-1\" class=\"required\">*</div>\n              </div>\n            </div>\n        <div class=\"col-md-12\">\n          <button class=\"btn btn-primary\" (click)=\"updateData(idDomen, domen, descriptiondomen)\"> Ажурирај</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin-domen-edit/admin-domen-edit.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin-domen-edit/admin-domen-edit.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminDomenEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDomenEditComponent", function() { return AdminDomenEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _admin_domen_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../admin-domen.service */ "./src/app/admin-domen.service.ts");
/* harmony import */ var _admin_subdomen_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../admin-subdomen.service */ "./src/app/admin-subdomen.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminDomenEditComponent = /** @class */ (function () {
    function AdminDomenEditComponent(db, route, service, serviceSub) {
        this.db = db;
        this.route = route;
        this.service = service;
        this.serviceSub = serviceSub;
        this.arrayCheckbox = [];
        this.arrayCheckboxRemoveDb = [];
        this.frontCheckboxCheck = [];
        this.oldSubdomeniCheckbox = [];
        this.domensColumns = [];
        this.oldColumnChecked = [];
        this.newColumnChecked = [];
        this.frontColumnChecked = [];
        this.arrayColumns = [{ key: '1rank', subject: 'Ранг' },
            { key: '2grade', subject: 'Оценка' },
            { key: '3avg', subject: 'Просек' }];
        this.domensColumns = [{ key: '4women', subject: 'Жени' },
            { key: '5men', subject: 'Мажи' },
            { key: '6w&m', subject: 'Сооднос жени/мажи' },
            { key: '7number', subject: 'Број' },
            { key: '8population', subject: 'Популација' },
            { key: '9rate', subject: 'Стапка' }];
    }
    AdminDomenEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getSubdomen();
        /* this.route.paramMap.subscribe(idParm=>{
            let idSubdomen=idParm.get('idSubdomen');
            this.domenDataName=this.db.object('subdomen/'+ idSubdomen).valueChanges().subscribe(objectdata =>
                {
                    this.domenDataName=objectdata;
                }
                    
                );
            });*/
        var that = this;
        this.route.paramMap.subscribe(function (id) {
            _this.idDomen = id.get('idDomen');
            /*this.domenData=this.service.getDomen(this.idDomen).subscribe(objectdata =>
            {
                this.domenData=objectdata;
                console.log(objectdata);
                
            this.frontCheckboxCheck=Object.values(objectdata);
            console.log(this.frontCheckboxCheck)

            this.oldSubdomeniCheckbox.push(objectdata.subdomeni);
            this.oldSubdomeniCheckbox.forEach(function (a) {
                that.newSubdomenCheck= Object.keys(a).map(key => {
                    return {
                        key: key,
                        name: a[key]
                    };
                });



            })
        });*/
            //newcode
            _this.domenData = _this.service.getDomen(_this.idDomen);
            _this.domenData.forEach(function (a) {
                that.name = a.name;
                that.description = a.description;
                that.frontCheckboxCheck = Object.keys(a.subdomeni);
                that.frontColumnChecked = Object.keys(a.columns);
                that.oldSubdomeniCheckbox.push(a.subdomeni);
                that.oldSubdomeniCheckbox.forEach(function (a) {
                    that.newSubdomenCheck = Object.keys(a).map(function (key) {
                        return {
                            key: key,
                            name: a[key]
                        };
                    });
                });
                that.oldColumnChecked.push(a.columns);
                that.oldColumnChecked.forEach(function (b) {
                    that.newColumnChecked = Object.keys(b).map(function (key) {
                        return {
                            key: key,
                            subject: b[key]
                        };
                    });
                });
                // body...
            });
            console.log(that.newColumnChecked);
        });
        /*	this.service.getSubdomenRelation(this.idDomen).subscribe(subdomenKeys=>{
                this.arrayCheckbox=[];
                subdomenKeys.forEach(function (subdomenkey) {
                    that.arrayCheckbox.push({key:subdomenkey.key, name:subdomenkey.payload.val()});
                    that.frontCheckbox.push(subdomenkey.key);
                });
            });*/
    };
    AdminDomenEditComponent.prototype.getSubdomen = function () {
        this.subdomens = this.serviceSub.getSubdomenList();
    };
    /*	onChange(topic: string) {
            let index = this.selectedTopics.indexOf(topic);
            if (index == -1) {
                this.selectedTopics.push(value);
            } else {
                this.selectedTopics.splice(index, 1);
            }
        }*/
    /*isSelected(topic){
        return selectedTopics.indexOf(topic) >= 0;
    }
    */
    AdminDomenEditComponent.prototype.getCheckboxVal = function (event, key, name, columns) {
        if (event.target.checked === true) {
            this.newSubdomenCheck.push({ key: key, name: { name: name, columns: columns } });
            console.log(this.newSubdomenCheck);
        }
        else {
            var index = this.newSubdomenCheck.findIndex(function (p) { return p.key === key; });
            this.newSubdomenCheck.splice(index, 1);
            //this.arrayCheckboxRemoveDb.push({key:key,name:name});
        }
    };
    AdminDomenEditComponent.prototype.getCheckboxColumn = function (event, key, subject) {
        if (event.target.checked == true) {
            this.newColumnChecked.push({ key: key, subject: subject });
            console.log(this.newColumnChecked);
        }
        else {
            var index = this.newColumnChecked.findIndex(function (p) { return p.key === key; });
            this.newColumnChecked.splice(index, 1);
            console.log(this.newColumnChecked);
        }
    };
    AdminDomenEditComponent.prototype.updateData = function (key, newname, newdescription) {
        //var that=this;
        if (newname == undefined) {
            newname = this.name;
        }
        if (newdescription == undefined) {
            newdescription = this.description;
        }
        var newObjectSubdomeni = this.newSubdomenCheck.reduce(function (map, obj) { return (map[obj.key] = obj.name, map); }, {});
        var newObjectColumns = this.newColumnChecked.reduce(function (map, obj) { return (map[obj.key] = obj.subject, map); }, {});
        /*this.arrayCheckboxRemoveDb.forEach(function (removekey) {
            that.db.list('subdomen_domen/'+removekey.key).remove(key);
        });*/
        /*this.arrayCheckbox.forEach(function (subdomenNew) {
            that.service.updateDomenSubdomenRealtion(that.idDomen, subdomenNew.key, subdomenNew.name);
            that.service.updateDomenSubdomenRealtion(subdomenNew.key, that.idDomen, newname);
        });*/
        this.service.updateDomen(key, newname, newdescription, newObjectSubdomeni, newObjectColumns);
    };
    AdminDomenEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-domen-edit',
            template: __webpack_require__(/*! ./admin-domen-edit.component.html */ "./src/app/admin-domen-edit/admin-domen-edit.component.html"),
            styles: [__webpack_require__(/*! ./admin-domen-edit.component.css */ "./src/app/admin-domen-edit/admin-domen-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _admin_domen_service__WEBPACK_IMPORTED_MODULE_3__["AdminDomenService"],
            _admin_subdomen_service__WEBPACK_IMPORTED_MODULE_4__["AdminSubdomenService"]])
    ], AdminDomenEditComponent);
    return AdminDomenEditComponent;
}());



/***/ }),

/***/ "./src/app/admin-domen-list/admin-domen-list.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/admin-domen-list/admin-domen-list.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin-domen-list/admin-domen-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/admin-domen-list/admin-domen-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<admin-navbar></admin-navbar>\n<div class=\"container-fluid\" class=\"header-block\"><a [routerLink]=\"['/admin']\"> <span class=\"first\">почетна</span> </a> /</div>\n\n<div class=\"admin\">\n  <div class=\"container\">\n    <div class=\"block\">\n      <div class=\"action\">\n        <span class=\"action-1\">\n    <select class='select-option' [(ngModel)]='optionSelected'>\n      <option class='option' *ngFor='let option of dropdownOptions' [value]=\"option.id\">{{option.name}}</option>\n    </select>\n    </span>\n        <span class=\"action-2\"><button type=\"button\" class=\"btn btn-default\" (click)=\"removeDomen()\">Избриши</button></span>\n        <span class=\"action-3\"><button type=\"button\" class=\"btn btn-default\" (click)=\"redirectNewDomen()\">Додади</button></span>\n        <div class=\" error\">{{error}}\n        </div>\n      </div>\n      <ul>\n        <li *ngFor=\"let domen of domensList | async\">\n          <span>\n      <input type=\"checkbox\"  (click)=\"getCheckboxVal($event, domen.key)\" ></span>\n          <a [routerLink]=\"['/admin-domen',domen.key]\"><span> {{ domen.val.name }}</span></a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin-domen-list/admin-domen-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin-domen-list/admin-domen-list.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminDomenListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDomenListComponent", function() { return AdminDomenListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_domen_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../admin-domen.service */ "./src/app/admin-domen.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminDomenListComponent = /** @class */ (function () {
    function AdminDomenListComponent(service, router) {
        this.service = service;
        this.router = router;
        this.dropdownOptions = [{ id: 'select', name: 'Избери' }, { id: 'delete', name: 'Избриши' }];
        this.arrayRemove = [];
        this.arrayRemoveCopy = [];
        this.domensList = service.getDomenList();
    }
    AdminDomenListComponent.prototype.getCheckboxVal = function (event, key) {
        if (event.target.checked == true) {
            this.arrayRemove.push(key);
        }
        else {
            var index = this.arrayRemove.indexOf(key);
            this.arrayRemove.splice(index, 1);
        }
    };
    AdminDomenListComponent.prototype.removeDomen = function () {
        var _this = this;
        this.arrayRemove.forEach(function (myKey) {
            if (_this.optionSelected == 'delete') {
                _this.service.removeDomen(myKey);
            }
            else {
                _this.error = "Ве молиме изберете од листата";
            }
        });
    };
    AdminDomenListComponent.prototype.redirectNewDomen = function () {
        this.router.navigate(['/admin-domen']);
    };
    AdminDomenListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-domen-list',
            template: __webpack_require__(/*! ./admin-domen-list.component.html */ "./src/app/admin-domen-list/admin-domen-list.component.html"),
            styles: [__webpack_require__(/*! ./admin-domen-list.component.css */ "./src/app/admin-domen-list/admin-domen-list.component.css")]
        }),
        __metadata("design:paramtypes", [_admin_domen_service__WEBPACK_IMPORTED_MODULE_1__["AdminDomenService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminDomenListComponent);
    return AdminDomenListComponent;
}());



/***/ }),

/***/ "./src/app/admin-domen.service.ts":
/*!****************************************!*\
  !*** ./src/app/admin-domen.service.ts ***!
  \****************************************/
/*! exports provided: AdminDomenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDomenService", function() { return AdminDomenService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminDomenService = /** @class */ (function () {
    function AdminDomenService(db, router) {
        this.db = db;
        this.router = router;
        this.itemsDomen = db.list('domen');
        this.itemsSubdomen = db.list('subdomen');
    }
    AdminDomenService.prototype.addDomen = function (domen, descriptiondomen, subdomeni, columns) {
        return this.itemsDomen.push({ name: domen, description: descriptiondomen, subdomeni: subdomeni, columns: columns }).key;
    };
    AdminDomenService.prototype.removeSubdomen = function (key) {
        this.itemsDS.remove(key);
    };
    AdminDomenService.prototype.removeDomen = function (key) {
        this.itemsDomen.remove(key);
    };
    AdminDomenService.prototype.updateDomen = function (key, newname, newdescription, subdomeni, columns) {
        this.itemsDomen.set(key, { name: newname, description: newdescription, subdomeni: subdomeni, columns: columns });
        this.router.navigate(['/admin-domen-list']);
    };
    AdminDomenService.prototype.getDomenList = function () {
        return this.items = this.itemsDomen.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (changes) {
            return changes.map(function (c) { return ({ key: c.key, val: c.payload.val() }); });
        }));
    };
    AdminDomenService.prototype.getDomen = function (fromId) {
        return this.db.object('domen/' + fromId).valueChanges();
    };
    /*for municipalityEls, for specific years , specific domens*/
    AdminDomenService.prototype.getDomenSnapshot = function (fromId) {
        return this.db.object('domen/' + fromId).snapshotChanges();
    };
    AdminDomenService.prototype.redirectNewDomen = function () {
        this.router.navigate(['/admin-domen-list']);
    };
    AdminDomenService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminDomenService);
    return AdminDomenService;
}());



/***/ }),

/***/ "./src/app/admin-domen/admin-domen.component.css":
/*!*******************************************************!*\
  !*** ./src/app/admin-domen/admin-domen.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin-domen/admin-domen.component.html":
/*!********************************************************!*\
  !*** ./src/app/admin-domen/admin-domen.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<admin-navbar></admin-navbar>\n<div class=\"container-fluid\" class=\"header-block\"><a [routerLink]=\"['/admin']\"> <span class=\"first\">почетна</span> </a> / \n  <a [routerLink]=\"['/admin-domen-list']\"> <span >домени</span></a> / </div>\n\n  <div class=\"admin\">\n    <div class=\"container\">\n      <div class=\"block\">\n        <form>\n          <div class=\"form-group\">\n            <div class=\"col-md-12 row\">\n              <div class=\"col-md-4\">\n                <label for=\"nameDomen\">Име на домен</label>\n              </div>\n              <div class=\"col-md-6\">\n                <input id=\"nameDomen\" type=\"text\" [(ngModel)]=\"domen\" name=\"domen\" class=\"form-control\">\n              </div>\n              <div class=\"col-md-1\" class=\"required\">*</div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"col-md-12 row\">\n              <div class=\"col-md-4\">\n                <label for=\"descriptionDomen\">Опис</label>\n              </div>\n              <div class=\"col-md-6\">\n                <textarea id=\"descriptionDomen\" type=\"text\" [(ngModel)]=\"descriptiondomen\" name=\"descriptiondomen\" class=\"form-control\"></textarea>\n              </div>\n              <div class=\"col-md-1\" class=\"required\">*</div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"col-md-12 row\">\n              <div class=\"col-md-4\">\n                <label for=\"subdomen\">Поддомен</label>\n              </div>\n              <div class=\"col-md-5 checkbox-box\">\n                <ul>\n                  <li *ngFor=\"let subdomen of subdomens | async\">\n                    <span>\n                      <input type=\"checkbox\"  (click)=\"getCheckboxVal($event, subdomen.key,  subdomen.val.name, subdomen.val.columns)\" ></span>\n                      <span> {{ subdomen.val.name }}</span>\n                    </li>\n                  </ul>\n                </div>\n                <div class=\"col-md-1\" class=\"required\">*</div>\n              </div>\n            </div>\n\n             <div class=\"form-group\">\n            <div class=\"col-md-12 row\">\n              <div class=\"col-md-4\">\n                <label for=\"subdomen\">Колони за анализа</label>\n              </div>\n              <div class=\"col-md-5 checkbox-box\">\n                <ul>\n                  <li *ngFor=\"let domen of domensColumns\">\n                    <span>\n                      <input type=\"checkbox\"  (click)=\"getCheckboxColumn($event, domen.key,  domen.subject)\" ></span>\n                      <span> {{ domen.subject }}</span>\n                    </li>\n                  </ul>\n                </div>\n                <div class=\"col-md-1\" class=\"required\">*</div>\n              </div>\n            </div>\n            <div class=\"error\">{{error}}</div>\n            <div class=\"col-md-12\">\n              <button class=\"btn btn-primary\" (click)=\"addDomen(domen,descriptiondomen)\">Submit</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n"

/***/ }),

/***/ "./src/app/admin-domen/admin-domen.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin-domen/admin-domen.component.ts ***!
  \******************************************************/
/*! exports provided: AdminDomenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDomenComponent", function() { return AdminDomenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_subdomen_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../admin-subdomen.service */ "./src/app/admin-subdomen.service.ts");
/* harmony import */ var _admin_domen_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../admin-domen.service */ "./src/app/admin-domen.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminDomenComponent = /** @class */ (function () {
    function AdminDomenComponent(service, serviceSub) {
        this.service = service;
        this.serviceSub = serviceSub;
        this.domenSubdomens = [];
        this.domensColumns = [];
        this.arrayColumns = [{ key: '1rank', subject: 'Ранг' },
            { key: '2grade', subject: 'Оценка' },
            { key: '3avg', subject: 'Просек' }];
        this.getSubdomen();
        this.domensColumns = [{ key: '4women', subject: 'Жени' },
            { key: '5men', subject: 'Мажи' },
            { key: '6w&m', subject: 'Сооднос жени/мажи' },
            { key: '7number', subject: 'Број' },
            { key: '8population', subject: 'Популација' },
            { key: '9rate', subject: 'Стапка' }];
    }
    AdminDomenComponent.prototype.getCheckboxVal = function (event, key, name, columns) {
        if (event.target.checked == true) {
            this.domenSubdomens.push({ key: key, name: name, columns: columns });
            console.log(this.domenSubdomens);
            //this.service.addSubdomenRealtion(key,name);
        }
        else {
            var index = this.domenSubdomens.indexOf(key);
            this.domenSubdomens.splice(index, 1);
            //console.log(this.domenSubdomens);
            //this.service.removeSubdomen(key);
        }
    };
    AdminDomenComponent.prototype.getCheckboxColumn = function (event, key, subject) {
        if (event.target.checked == true) {
            this.arrayColumns.push({ key: key, subject: subject });
            //console.log(this.arrayColumns);
        }
        else {
            var index = this.arrayColumns.indexOf(key);
            this.arrayColumns.splice(index, 1);
            // console.log(this.arrayColumns);      
        }
    };
    AdminDomenComponent.prototype.addDomen = function (name, description) {
        //console.log(this.domenSubdomens);
        var newDomenSubdomen = this.domenSubdomens.reduce(function (map, obj) { return (map[obj.key] = ({ 'name': obj.name, columns: obj.columns }), map); }, {});
        console.log(newDomenSubdomen);
        // var newDomenSubdomen=this.domenSubdomens.reduce((map, obj) => (map[obj.key] = obj.name, map), {});
        var newColumns = this.arrayColumns.reduce(function (map, obj) { return (map[obj.key] = obj.subject, map); }, {});
        if (name != undefined && this.domenSubdomens.length != 0) {
            this.idDomen = this.service.addDomen(name, description, newDomenSubdomen, newColumns);
            this.service.redirectNewDomen();
            this.error = "";
        }
        else {
            this.error = "Ве молиме пополнете ги полињата означени со *";
        }
    };
    AdminDomenComponent.prototype.getSubdomen = function () {
        this.subdomens = this.serviceSub.getSubdomenList();
    };
    AdminDomenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'admin-domen',
            template: __webpack_require__(/*! ./admin-domen.component.html */ "./src/app/admin-domen/admin-domen.component.html"),
            styles: [__webpack_require__(/*! ./admin-domen.component.css */ "./src/app/admin-domen/admin-domen.component.css")]
        }),
        __metadata("design:paramtypes", [_admin_domen_service__WEBPACK_IMPORTED_MODULE_2__["AdminDomenService"], _admin_subdomen_service__WEBPACK_IMPORTED_MODULE_1__["AdminSubdomenService"]])
    ], AdminDomenComponent);
    return AdminDomenComponent;
}());



/***/ }),

/***/ "./src/app/admin-els-municipality-edit/admin-els-municipality-edit.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/admin-els-municipality-edit/admin-els-municipality-edit.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin-els-municipality-edit/admin-els-municipality-edit.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/admin-els-municipality-edit/admin-els-municipality-edit.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<admin-navbar></admin-navbar>\n<div class=\"container-fluid\" class=\"header-block\"><a [routerLink]=\"['/admin']\"> <span class=\"first\">почетна</span></a> /<a [routerLink]=\"['/years', idYear]\"><span> {{idYear}}</span></a> /</div>\n\n\n<div class=\"admin\">\n  <div class=\"container\">\n    <div class=\"block\">\n      <div class=\"container-fluid\"><h6 style=\"text-align: center;text-transform: uppercase;padding: 35px 0px \">Промени општина - <b>{{municipalityData.name}}</b></h6></div>\n      <form>\n       <div class=\"form-group\">\n        <div class=\"col-md-12 row\">\n          <div class=\"col-md-4\">\n            <label for=\"scoreMun\">Скор на општината</label>\n          </div>\n          <div class=\"col-md-4\">\n            <input id=\"scoreMun\" type=\"number\" [(ngModel)]=\"scoreMun\" name=\"scoreMun\" class=\"form-control\" placeholder=\"{{municipalityData.scoreMun}}\">\n          </div>\n          <div class=\"col-md-1\" class=\"required\">*</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"col-md-12 row\">\n          <div class=\"col-md-4\">\n            <label for=\"rangMun\">Ранк на општината</label>\n          </div>\n          <div class=\"col-md-4\">\n            <input id=\"rangMun\" type=\"number\" [(ngModel)]=\"rangMun\" name=\"rangMun\" class=\"form-control\" placeholder=\"{{municipalityData.rangMun}}\">\n          </div>\n          <div class=\"col-md-1\" class=\"required\">*</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"col-md-12 row\">\n          <div class=\"col-md-4\">\n            <label for=\"numberMen\">Број на мажи</label>\n          </div>\n          <div class=\"col-md-4\">\n            <input id=\"numberMen\" type=\"number\" [(ngModel)]=\"numberMen\" name=\"numberMen\" class=\"form-control\" placeholder=\"{{municipalityData.men}}\">\n          </div>\n          <div class=\"col-md-1\" class=\"required\">*</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"col-md-12 row\">\n          <div class=\"col-md-4\">\n            <label for=\"numberWomen\">Број на жени</label>\n          </div>\n          <div class=\"col-md-4\">\n            <input id=\"numberWomen\" type=\"number\" [(ngModel)]=\"numberWomen\" name=\"numberWomen\" class=\"form-control\" placeholder=\"{{municipalityData.women}}\">\n          </div>\n          <div class=\"col-md-1\" class=\"required\">*</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"col-md-12 row\">\n          <div class=\"col-md-4\">\n            <label for=\"numberBudget\">Вкупен планиран буџет на општината за {{idYear}}:</label>\n          </div>\n          <div class=\"col-md-4\">\n            <input id=\"plannedBudget\" type=\"text\" [(ngModel)]=\"plannedBudget\" name=\"plannedBudget\" class=\"form-control\" placeholder=\"{{municipalityData.plannedBudget}}\">\n          </div>\n          <div class=\"col-md-1\" class=\"required\">*</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"col-md-12 row\">\n          <div class=\"col-md-4\">\n            <label for=\"numberBudget\">Вкупен реализиран буџет на општината за {{idYear}}:</label>\n          </div>\n          <div class=\"col-md-4\">\n            <input id=\"numberBudget\" type=\"text\" [(ngModel)]=\"budget\" name=\"budget\" class=\"form-control\" placeholder=\"{{municipalityData.budget}}\">\n          </div>\n          <div class=\"col-md-1\" class=\"required\">*</div>\n        </div>\n      </div>\n     \n      <div class=\"form-group\">\n        <div class=\"col-md-12 row\">\n          <div class=\"col-md-4\">\n            <label for=\"numberRateInfants\">Стапка на морталитет на доенчиња:</label>\n          </div>\n          <div class=\"col-md-4\">\n            <input id=\"numberRateInfants\" type=\"text\" [(ngModel)]=\"numberRateInfants\" name=\"numberRateInfants\" class=\"form-control\" placeholder=\"{{municipalityData.numberRateInfants}}\">\n          </div>\n          <div class=\"col-md-1\" class=\"required\">*</div>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <div class=\"col-md-12 row\">\n          <div class=\"col-md-4\">\n            <label for=\"numberRateMaternal\">Стапка на матернален морталитет:</label>\n          </div>\n          <div class=\"col-md-4\">\n            <input id=\"numberRateMaternal\" type=\"text\" [(ngModel)]=\"numberRateMaternal\" name=\"numberRateMaternal\" class=\"form-control\" placeholder=\"{{municipalityData.numberRateMaternal}}\">\n          </div>\n          <div class=\"col-md-1\" class=\"required\">*</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"col-md-12 row\">\n          <div class=\"col-md-4\">\n            <label for=\"numberCompany\">Број на парцели:</label>\n          </div>\n          <div class=\"col-md-4\">\n            <input id=\"numberPlot\" type=\"text\" [(ngModel)]=\"numberPlot\" name=\"numberPlot\" class=\"form-control\" placeholder=\"{{municipalityData.numberPlot}}\">\n          </div>\n          <div class=\"col-md-1\" class=\"required\">*</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"col-md-12 row\">\n          <div class=\"col-md-4\">\n            <label for=\"numberCompany\">Број на објекти:</label>\n          </div>\n          <div class=\"col-md-4\">\n            <input id=\"numberObject\" type=\"text\" [(ngModel)]=\"numberObject\" name=\"numberObject\" class=\"form-control\" placeholder=\"{{municipalityData.numberObject}}\">\n          </div>\n          <div class=\"col-md-1\" class=\"required\">*</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"col-md-12 row\">\n          <div class=\"col-md-4\">\n            <label for=\"numberCompany\">Број на фирми:</label>\n          </div>\n          <div class=\"col-md-4\">\n            <input id=\"numberCompany\" type=\"text\" [(ngModel)]=\"numberCompany\" name=\"numberCompany\" class=\"form-control\" placeholder=\"{{municipalityData.numberCompany}}\">\n          </div>\n          <div class=\"col-md-1\" class=\"required\">*</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"col-md-12 row\">\n          <div class=\"col-md-4\">\n            <label for=\"numberCompany\">Број на станови:</label>\n          </div>\n          <div class=\"col-md-4\">\n            <input id=\"numberFlat\" type=\"text\" [(ngModel)]=\"numberFlat\" name=\"numberFlat\" class=\"form-control\" placeholder=\"{{municipalityData.numberFlat}}\">\n          </div>\n          <div class=\"col-md-1\" class=\"required\">*</div>\n        </div>\n      </div>\n        <div class=\"form-group\">\n          <div style=\"background: #b6caf0a8\" for=\"nameDomenSubdomen\">Домени и Поддомени</div>\n          <div class=\"domenSubdomen col-md-12 row\">\n            <ul style=\"width: 100%\" class=\"col-md-12\">\n              <li *ngFor=\"let domenSubdomen of domeniSubdomeni\" style=\"width:100%\">\n                <div class=\"row\">\n                  <div class=\"col-md-4\" style=\"font-family: ArsenalB\"><span style=\"padding-left: 15px\"> {{domenSubdomen.domenName}}</span></div>\n                  <div class=\"col-md-4\">\n                   <ul>\n                     <li *ngFor=\"let column of domenSubdomen.columns\">\n                      <div class=\"row\">\n                        <div class=\"col-md-4\"><span style=\"padding-left: 15px\">  {{column.columnName}}</span></div>\n                        <div class=\"col-md-4\">\n                          <input type=\"text\" id=\"id_{{domenSubdomen.domenKey}}_{{column.columnKey}}\" [name]=\"column\"  class=\"form-control\" placeholder=\" {{column.columnValue}}\">\n                        </div>\n                        <div class=\"col-md-1\" class=\"required\">*</div>\n                      </div>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n                <ul style=\"width: 100%\" *ngIf=\"domenSubdomen.subdomens!=null\">\n                  <li *ngFor=\"let subdomen of domenSubdomen.subdomens\">\n                    <div class=\"row\">\n                      <div class=\"col-md-4\"><span style=\"padding-left: 15px\">  {{subdomen.subdomenName}}</span></div>\n                      <div class=\"col-md-4\">\n                       <ul>\n                       <li *ngFor=\"let column of subdomen.columns\">\n                        <div class=\"row\">\n                          <div class=\"col-md-4\"><span style=\"padding-left: 15px\">  {{column.columnName}}</span></div>\n                          <div class=\"col-md-4\">\n                            <input type=\"text\" id=\"id_{{subdomen.subdomenKey}}_{{column.columnKey}}\" [name]=\"column.columnName\" #titleInput   class=\"form-control\" placeholder=\"{{column.columnValue}}\">\n                          </div>\n                          <div class=\"col-md-1\" class=\"required\">*</div>\n                        </div>\n                      </li></ul>\n                    </div>\n                  </div>\n                </li>\n              </ul>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"col-md-12 row\">\n          <div class=\"col-md-4\">\n            <label for=\"description\">Опис на општината</label>\n          </div>\n          <div class=\"col-md-7\">\n            <textarea id=\"description\" type=\"text\" [(ngModel)]=\"description\" name=\"description\" class=\"form-control\" placeholder=\"{{municipalityData.description}}\"></textarea>\n          </div>\n          <div class=\"col-md-1\" class=\"required\">*</div>\n        </div>\n      </div>\n      <div class=\"col-md-12\" style=\"margin-bottom: 100px\">\n        <button (click)=\"updateEls(numberMen, numberWomen, plannedBudget, budget, numberRateInfants, numberRateMaternal, numberCompany, numberPlot, numberObject, numberFlat, scoreMun, rangMun, description)\" type=\"button\" class=\"btn btn-default\">Зачувај</button>\n        <div class=\" error\">{{error}}</div>\n      </div>\n    </form>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin-els-municipality-edit/admin-els-municipality-edit.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/admin-els-municipality-edit/admin-els-municipality-edit.component.ts ***!
  \**************************************************************************************/
/*! exports provided: AdminElsMunicipalityEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminElsMunicipalityEditComponent", function() { return AdminElsMunicipalityEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_els_municipality_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../admin-els-municipality.service */ "./src/app/admin-els-municipality.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminElsMunicipalityEditComponent = /** @class */ (function () {
    function AdminElsMunicipalityEditComponent(route, serviceEls) {
        this.route = route;
        this.serviceEls = serviceEls;
        this.progress = { percentage: 0 };
        this.lastYearDomenSubdomen = [];
    }
    AdminElsMunicipalityEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var that = this;
        this.route.paramMap.subscribe(function (id) {
            _this.idMunicipality = id.get('idMun');
            _this.idYear = id.get('idYear');
            _this.municipalityData = _this.serviceEls.getElsMunicipalityId(_this.idMunicipality, _this.idYear);
            _this.municipalityData.forEach(function (objectdata) {
                that.municipalityData = objectdata;
                that.numberMen = objectdata.men;
                that.numberWomen = objectdata.women;
                that.plannedBudget = objectdata.plannedBudget;
                that.budget = objectdata.budget;
                that.scoreMun = objectdata.scoreMun;
                that.rangMun = objectdata.rangMun;
                that.description = objectdata.description;
                that.numberRateInfants = objectdata.numberRateInfants;
                that.numberRateMaternal = objectdata.numberRateMaternal;
                that.numberCompany = objectdata.numberCompany;
                that.numberPlot = objectdata.numberPlot;
                that.numberObject = objectdata.numberObject;
                that.numberFlat = objectdata.numberFlat;
            });
            _this.serviceEls.getDomenSubdomenYear(_this.idMunicipality, _this.idYear).subscribe(function (object) {
                that.domeniSubdomeni = object;
            });
        });
        this.serviceEls.getElsMunicipalityIdEdit(this.idMunicipality, this.idYear).subscribe(function (a) {
            _this.lastYearDomenSubdomen.push({ key: a.key, val: a.payload.val() });
        });
    };
    AdminElsMunicipalityEditComponent.prototype.updateEls = function (numberMen, numberWomen, plannedBudget, budget, numberRateInfants, numberRateMaternal, numberCompany, numberPlot, numberObject, numberFlat, scoreMun, rangMun, descriptionMun) {
        var that = this;
        if (numberMen == undefined) {
            numberMen = this.numberMen;
        }
        if (numberWomen == undefined) {
            numberWomen = this.numberWomen;
        }
        if (plannedBudget == undefined) {
            plannedBudget = this.plannedBudget;
        }
        if (budget == undefined) {
            budget = this.budget;
        }
        if (numberRateInfants == undefined) {
            numberRateInfants = this.numberRateInfants;
        }
        if (numberRateMaternal == undefined) {
            numberRateMaternal = this.numberRateMaternal;
        }
        if (numberCompany == undefined) {
            numberCompany = this.numberCompany;
        }
        if (numberPlot == undefined) {
            numberPlot = this.numberPlot;
        }
        if (numberObject == undefined) {
            numberObject = this.numberObject;
        }
        if (numberFlat == undefined) {
            numberFlat = this.numberFlat;
        }
        if (scoreMun == undefined) {
            scoreMun = this.scoreMun;
        }
        if (rangMun == undefined) {
            rangMun = this.rangMun;
        }
        if (descriptionMun == undefined) {
            descriptionMun = this.description;
        }
        var newDomenSubdomen = [];
        this.lastYearDomenSubdomen.forEach(function (domeni) {
            var that = this;
            for (var domen in domeni.val.domenSubdomen) {
                var mytemp = {};
                for (var subdomen in domeni.val.domenSubdomen[domen].subdomens) {
                    var mytempColumn = {};
                    for (var column in domeni.val.domenSubdomen[domen].subdomens[subdomen].columns) {
                        var columnId = document.getElementById("id_" + subdomen + '_' + column).value;
                        if (columnId == '') {
                            columnId = domeni.val.domenSubdomen[domen].subdomens[subdomen].columns[column].columnValue;
                            mytempColumn[column] = [];
                            mytempColumn[column] = { columnName: domeni.val.domenSubdomen[domen].subdomens[subdomen].columns[column].columnName, columnValue: columnId };
                        }
                        else {
                            mytempColumn[column] = [];
                            mytempColumn[column] = { columnName: domeni.val.domenSubdomen[domen].subdomens[subdomen].columns[column].columnName, columnValue: columnId };
                        }
                    }
                    mytemp[subdomen] = [];
                    mytemp[subdomen] = { subdomenName: domeni.val.domenSubdomen[domen].subdomens[subdomen].subdomenName, columns: mytempColumn };
                }
                var columnsDomen = {};
                for (var columndomen in domeni.val.domenSubdomen[domen].columns) {
                    var columnVal = document.getElementById("id_" + domen + '_' + columndomen).value;
                    if (columnVal == '') {
                        columnVal = domeni.val.domenSubdomen[domen].columns[columndomen].columnValue;
                        columnsDomen[columndomen] = [];
                        columnsDomen[columndomen] = { columnName: domeni.val.domenSubdomen[domen].columns[columndomen].columnName, columnValue: columnVal };
                    }
                    else {
                        columnsDomen[columndomen] = [];
                        columnsDomen[columndomen] = { columnName: domeni.val.domenSubdomen[domen].columns[columndomen].columnName, columnValue: columnVal };
                    }
                }
                newDomenSubdomen[domen] = [];
                if (domeni.val.domenSubdomen[domen].subdomens == null) {
                    newDomenSubdomen[domen] = { domenName: domeni.val.domenSubdomen[domen].domenName, 'columns': columnsDomen };
                }
                else {
                    newDomenSubdomen[domen] = { domenName: domeni.val.domenSubdomen[domen].domenName, 'subdomens': mytemp, 'columns': columnsDomen };
                }
            }
        });
        this.serviceEls.updateElsService(this.idYear, this.idMunicipality, this.municipalityData.code, numberMen, numberWomen, plannedBudget, budget, numberRateInfants, numberRateMaternal, numberCompany, numberPlot, numberObject, numberFlat, newDomenSubdomen, scoreMun, rangMun, descriptionMun, this.municipalityData.name);
    };
    AdminElsMunicipalityEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-els-municipality-edit',
            template: __webpack_require__(/*! ./admin-els-municipality-edit.component.html */ "./src/app/admin-els-municipality-edit/admin-els-municipality-edit.component.html"),
            styles: [__webpack_require__(/*! ./admin-els-municipality-edit.component.css */ "./src/app/admin-els-municipality-edit/admin-els-municipality-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _admin_els_municipality_service__WEBPACK_IMPORTED_MODULE_2__["AdminElsMunicipalityService"]])
    ], AdminElsMunicipalityEditComponent);
    return AdminElsMunicipalityEditComponent;
}());



/***/ }),

/***/ "./src/app/admin-els-municipality-list/admin-els-municipality-list.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/admin-els-municipality-list/admin-els-municipality-list.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin-els-municipality-list/admin-els-municipality-list.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/admin-els-municipality-list/admin-els-municipality-list.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<admin-navbar></admin-navbar>\n<div class=\"container-fluid\" class=\"header-block\"><a [routerLink]=\"['/admin']\"><span class=\"first\">почетна</span></a> /</div>\n\n<div class=\"admin\">\n  <div class=\"container\">\n    <div class=\"block\">\n      <div class=\"action\">\n        <span class=\"action-1\">  \n    <select class='select-option' [(ngModel)]='optionSelected'>\n    \t<option class='option' *ngFor='let option of dropdownOptions' [value]=\"option.id\">{{option.name}}</option>\n    </select>\n\t\t</span>\n        <span class=\"action-2\"><button type=\"button\" class=\"btn btn-default\" (click)=\"removeDomen()\">Избриши</button></span>\n        <span class=\"action-3\"><button type=\"button\" class=\"btn btn-default\" (click)=\"redirectNewDomen(year)\">Додади</button></span>\n        <div class=\" error\">{{error}}\n        </div>\n      </div>\n      <ul>\n        <li *ngFor=\"let mun of years | orderByName\">\n         \t<input type=\"checkbox\"  (click)=\"getCheckboxVal($event, mun.key)\" >\n          <a [routerLink]=\"['/years',year, mun.key]\"><span> {{ mun.val.name }}</span></a> \n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin-els-municipality-list/admin-els-municipality-list.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/admin-els-municipality-list/admin-els-municipality-list.component.ts ***!
  \**************************************************************************************/
/*! exports provided: AdminElsMunicipalityListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminElsMunicipalityListComponent", function() { return AdminElsMunicipalityListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_els_municipality_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin-els-municipality.service */ "./src/app/admin-els-municipality.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminElsMunicipalityListComponent = /** @class */ (function () {
    function AdminElsMunicipalityListComponent(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.arrayRemove = [];
        this.arrayRemoveCopy = [];
        this.dropdownOptions = [{ id: 'select', name: 'Избери' }, { id: 'delete', name: 'Избриши' }];
    }
    AdminElsMunicipalityListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var that = this;
        this.route.paramMap.subscribe(function (id) {
            _this.year = id.get('idYear');
            _this.service.getElsMunicipalityYearId(_this.year).subscribe(function (year) {
                _this.years = year;
            });
        });
    };
    AdminElsMunicipalityListComponent.prototype.getCheckboxVal = function (event, key) {
        if (event.target.checked == true) {
            this.arrayRemove.push(key);
        }
        else {
            var index = this.arrayRemove.indexOf(key);
            this.arrayRemove.splice(index, 1);
        }
    };
    AdminElsMunicipalityListComponent.prototype.removeDomen = function () {
        var _this = this;
        this.arrayRemove.forEach(function (myKey) {
            if (_this.optionSelected == 'delete') {
                console.log(_this.year, myKey);
                _this.service.removeMunEls(_this.year, myKey);
            }
            else {
                _this.error = "Ве молиме изберете од листата";
            }
        });
    };
    AdminElsMunicipalityListComponent.prototype.redirectNewDomen = function (year) {
        this.router.navigate(['/admin-els-municipality/' + year]);
    };
    AdminElsMunicipalityListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-els-municipality-list',
            template: __webpack_require__(/*! ./admin-els-municipality-list.component.html */ "./src/app/admin-els-municipality-list/admin-els-municipality-list.component.html"),
            styles: [__webpack_require__(/*! ./admin-els-municipality-list.component.css */ "./src/app/admin-els-municipality-list/admin-els-municipality-list.component.css")]
        }),
        __metadata("design:paramtypes", [_admin_els_municipality_service__WEBPACK_IMPORTED_MODULE_2__["AdminElsMunicipalityService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AdminElsMunicipalityListComponent);
    return AdminElsMunicipalityListComponent;
}());



/***/ }),

/***/ "./src/app/admin-els-municipality.service.ts":
/*!***************************************************!*\
  !*** ./src/app/admin-els-municipality.service.ts ***!
  \***************************************************/
/*! exports provided: AdminElsMunicipalityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminElsMunicipalityService", function() { return AdminElsMunicipalityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var AdminElsMunicipalityService = /** @class */ (function () {
    function AdminElsMunicipalityService(db, router) {
        this.db = db;
        this.router = router;
        this.listServiceFeature = [];
        this.itemsEls = db.list('els-municipality');
    }
    AdminElsMunicipalityService.prototype.addMunEls = function (year, municipalityId, municipalityCode, municipalityColor, numberMen, numberWomen, plannedBudget, budget, numberRateInfants, numberRateMaternal, numberCompany, numberPlot, numberObject, numberFlat, domenSubdomen, scoreMun, rangMun, descripMun, munName) {
        this.yearObject = this.db.object('/els-municipality/' + year + '/' + municipalityId);
        this.yearObject.set({ code: municipalityCode, color: municipalityColor, men: numberMen, women: numberWomen, plannedBudget: plannedBudget, budget: budget, numberRateInfants: numberRateInfants,
            numberRateMaternal: numberRateMaternal,
            numberCompany: numberCompany,
            numberPlot: numberPlot,
            numberObject: numberObject,
            numberFlat: numberFlat,
            domenSubdomen: domenSubdomen,
            scoreMun: scoreMun, rangMun: rangMun, description: descripMun, name: munName });
    };
    AdminElsMunicipalityService.prototype.getElsMunicipalityId = function (idMun, idYear) {
        return this.municipalityElsDataId = this.db.object('/els-municipality/' + idYear + '/' + idMun).valueChanges();
    };
    /*getElsMunicipalityId(idMun, idYear){
        return this.municipalityElsDataId=this.db.object('/els-municipality/'+ idYear +'/' + idMun).snapshotChanges().map(changes => {
            var yearMun=[];
            for(var key in changes.payload.val()) {
                yearMun.push({key:key, val:changes.payload.val()[key]});
            }
            return yearMun;
        });
    }*/
    AdminElsMunicipalityService.prototype.getElsMunicipalityYearId = function (idYear) {
        return this.db.object('/els-municipality/' + idYear).snapshotChanges().map(function (changes) {
            var yearMun = [];
            for (var key in changes.payload.val()) {
                yearMun.push({ key: key, val: changes.payload.val()[key] });
            }
            return yearMun;
        });
    };
    AdminElsMunicipalityService.prototype.getElsMunicipalityYearName = function (idYear) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var yearMun;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        yearMun = [];
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                return _this.db.object('/els-municipality/' + idYear).snapshotChanges().map(function (changes) {
                                    for (var key in changes.payload.val()) {
                                        yearMun.push({ key: key, val: changes.payload.val()[key] });
                                    }
                                    resolve(yearMun);
                                    return yearMun;
                                });
                                //resolve(yearMun);
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AdminElsMunicipalityService.prototype.getElsMunicipalityIdEdit = function (idMun, idYear) {
        return this.municipalityElsDataId = this.db.object('/els-municipality/' + idYear + '/' + idMun).snapshotChanges();
    };
    AdminElsMunicipalityService.prototype.getElsYears = function () {
        return this.itemsEls.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (changes) {
            return changes.map(function (c) { return ({ key: c.key, val: c.payload.val() }); });
        }));
    };
    /*getDomenSubdomen(idMun){
        return this.db.object('/els-municipality/'+ 2016+'/' + idMun+"/domenSubdomen/").snapshotChanges().map(changes => {
            var newDomenSubdomen=[];
            for(var key in changes.payload.val()) {
                var myTemp=[];
                for(var key1 in changes.payload.val()[key].subdomens) {
                    myTemp.push({subdomenName:changes.payload.val()[key].subdomens[key1].subdomenName, subdomenValue:changes.payload.val()[key].subdomens[key1].subdomenValue});
                }
                newDomenSubdomen.push({domenName:changes.payload.val()[key].domenName, domenValue:changes.payload.val()[key].domenValue, subdomeni:myTemp});
            };
            return newDomenSubdomen;
        })
    }*/
    AdminElsMunicipalityService.prototype.getDomenSubdomenYear = function (idMun, year) {
        return this.db.object('/els-municipality/' + year + '/' + idMun + "/domenSubdomen/").snapshotChanges().map(function (changes) {
            var newDomenSubdomen = [];
            for (var key in changes.payload.val()) {
                /*domeni*/
                var mySubdomens = [];
                for (var sub in changes.payload.val()[key].subdomens) {
                    /*subdomeni*/
                    var myColumn = [];
                    for (var column in changes.payload.val()[key].subdomens[sub].columns) {
                        /*columns*/
                        myColumn.push({ columnName: changes.payload.val()[key].subdomens[sub].columns[column].columnName, columnValue: changes.payload.val()[key].subdomens[sub].columns[column].columnValue, columnKey: column });
                    }
                    mySubdomens.push({ subdomenName: changes.payload.val()[key].subdomens[sub].subdomenName, columns: myColumn, subdomenKey: sub, position: changes.payload.val()[key].subdomens[sub].position });
                }
                var domenColumn = [];
                for (var domen in changes.payload.val()[key].columns) {
                    domenColumn.push({ columnName: changes.payload.val()[key].columns[domen].columnName, columnValue: changes.payload.val()[key].columns[domen].columnValue, columnKey: domen });
                }
                newDomenSubdomen.push({ domenName: changes.payload.val()[key].domenName, subdomens: mySubdomens, columns: domenColumn, domenKey: key });
            }
            return newDomenSubdomen;
        });
    };
    AdminElsMunicipalityService.prototype.updateElsService = function (year, idMun, code, numberMen, numberWomen, plannedBudget, budget, numberRateInfants, numberRateMaternal, numberCompany, numberPlot, numberObject, numberFlat, domenSubdomen1, scoreMun, rangMun, descriptionMun, munName) {
        this.updateEls = this.db.object('/els-municipality/' + year + '/' + idMun);
        this.updateEls.set({ code: code, men: numberMen, women: numberWomen, plannedBudget: plannedBudget, budget: budget, numberRateInfants: numberRateInfants,
            numberRateMaternal: numberRateMaternal,
            numberCompany: numberCompany,
            numberPlot: numberPlot,
            numberObject: numberObject,
            numberFlat: numberFlat, domenSubdomen: domenSubdomen1, scoreMun: scoreMun, rangMun: rangMun, description: descriptionMun, name: munName });
        this.router.navigate(['/years/' + year]);
    };
    AdminElsMunicipalityService.prototype.removeMunEls = function (idYear, idMun) {
        this.db.list('els-municipality/' + idYear).remove(idMun);
    };
    AdminElsMunicipalityService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AdminElsMunicipalityService);
    return AdminElsMunicipalityService;
}());



/***/ }),

/***/ "./src/app/admin-els-municipality/admin-els-municipality.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/admin-els-municipality/admin-els-municipality.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin-els-municipality/admin-els-municipality.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/admin-els-municipality/admin-els-municipality.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<admin-navbar></admin-navbar>\n<div class=\"container-fluid\" class=\"header-block\"><a [routerLink]=\"['/admin']\"> <span class=\"first\">почетна</span></a> /<a [routerLink]=\"['/years', year]\"><span> {{year}}</span></a> /</div>\n\n\n<div class=\"admin\">\n  <div class=\"container\">\n    <div class=\"block\">\n      <div class=\"container-fluid\"><h6 style=\"text-align: center;text-transform: uppercase;padding: 35px 0px \">Додади општина</h6></div>\n\n      <form>\n        <div class=\"form-group\">\n          <div class=\"col-md-12 row\">\n            <div class=\"col-md-4\">\n              <label for=\"nameDomen\">Општина</label>\n            </div>\n            <div class=\"col-md-4 checkbox-box\">\n              <ul>\n                <li *ngFor=\"let mun of municipalities | async | orderByName\">\n                  <input type=\"radio\" name=\"num.val.name\" (click)=\"getCheckboxValMun($event, mun.key, mun.val.name, mun.val.codeGraph, mun.val.colorGraph)\">{{mun.val.name}}</li>\n                </ul>\n              </div>\n              <div class=\"col-md-1\" class=\"required\">*</div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"col-md-12 row\">\n              <div class=\"col-md-4\">\n                <label for=\"scoreMun\">Скор на општината</label>\n              </div>\n              <div class=\"col-md-4\">\n                <input id=\"scoreMun\" type=\"number\" [(ngModel)]=\"scoreMun\" name=\"scoreMun\" class=\"form-control\">\n              </div>\n              <div class=\"col-md-1\" class=\"required\">*</div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"col-md-12 row\">\n              <div class=\"col-md-4\">\n                <label for=\"rangMun\">Ранк на општината</label>\n              </div>\n              <div class=\"col-md-4\">\n                <input id=\"rangMun\" type=\"number\" [(ngModel)]=\"rangMun\" name=\"rangMun\" class=\"form-control\">\n              </div>\n              <div class=\"col-md-1\" class=\"required\">*</div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"col-md-12 row\">\n              <div class=\"col-md-4\">\n                <label for=\"numberMen\">Број на мажи</label>\n              </div>\n              <div class=\"col-md-4\">\n                <input id=\"numberMen\" type=\"number\" [(ngModel)]=\"numberMen\" name=\"numberMen\" class=\"form-control\">\n              </div>\n              <div class=\"col-md-1\" class=\"required\">*</div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"col-md-12 row\">\n              <div class=\"col-md-4\">\n                <label for=\"numberWomen\">Број на жени</label>\n              </div>\n              <div class=\"col-md-4\">\n                <input id=\"numberWomen\" type=\"number\" [(ngModel)]=\"numberWomen\" name=\"numberWomen\" class=\"form-control\">\n              </div>\n              <div class=\"col-md-1\" class=\"required\">*</div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"col-md-12 row\">\n              <div class=\"col-md-4\">\n                <label for=\"numberBudget\">Вкупен планиран буџет на општината за {{year}}:</label>\n              </div>\n              <div class=\"col-md-4\">\n                <input id=\"plannedBudget\" type=\"text\" [(ngModel)]=\"plannedBudget\" name=\"plannedBudget\" class=\"form-control\">\n              </div>\n              <div class=\"col-md-1\" class=\"required\">*</div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"col-md-12 row\">\n              <div class=\"col-md-4\">\n                <label for=\"numberBudget\">Вкупен реализиран буџет на општината за {{year}}:</label>\n              </div>\n              <div class=\"col-md-4\">\n                <input id=\"numberBudget\" type=\"text\" [(ngModel)]=\"budget\" name=\"budget\" class=\"form-control\">\n              </div>\n              <div class=\"col-md-1\" class=\"required\">*</div>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <div class=\"info_circle\"><i class=\"fas fa-info-circle\"></i> * Во следниве полиња, доколку полињата се празни и не сакате да ги прикажите на фонтенд, ставете \"/ \"</div>\n\n          </div>\n\n\n          <div class=\"form-group\">\n            <div class=\"col-md-12 row\">\n              <div class=\"col-md-4\">\n                <label for=\"numberRateInfants\">Стапка на морталитет на доенчиња:</label>\n              </div>\n              <div class=\"col-md-4\">\n                <input id=\"numberRateInfants\" type=\"text\" [(ngModel)]=\"numberRateInfants\" name=\"numberRateInfants\" class=\"form-control\">\n              </div>\n<!--               <div class=\"col-md-1\" class=\"required\">*</div>\n-->            </div>\n                </div>\n\n                <div class=\"form-group\">\n                  <div class=\"col-md-12 row\">\n                    <div class=\"col-md-4\">\n                      <label for=\"numberRateMaternal\">Стапка на матернален морталитет:</label>\n                    </div>\n                    <div class=\"col-md-4\">\n                      <input id=\"numberRateMaternal\" type=\"text\" [(ngModel)]=\"numberRateMaternal\" name=\"numberRateMaternal\" class=\"form-control\">\n                    </div>\n                <!--               <div class=\"col-md-1\" class=\"required\">*</div>\n                -->            </div>\n                </div>\n                  <div class=\"form-group\">\n                    <div class=\"col-md-12 row\">\n                      <div class=\"col-md-4\">\n                        <label for=\"numberPlot\">Број на парцели:</label>\n                      </div>\n                      <div class=\"col-md-4\">\n                        <input id=\"numberPlot\" type=\"text\" [(ngModel)]=\"numberPlot\" name=\"numberPlot\" class=\"form-control\">\n                      </div>\n                  <!--               <div class=\"col-md-1\" class=\"required\">*</div>\n                  -->            </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <div class=\"col-md-12 row\">\n                      <div class=\"col-md-4\">\n                        <label for=\"numberObject\">Број на објекти:</label>\n                      </div>\n                      <div class=\"col-md-4\">\n                        <input id=\"numberObject\" type=\"text\" [(ngModel)]=\"numberObject\" name=\"numberObject\" class=\"form-control\">\n                      </div>\n                  <!--               <div class=\"col-md-1\" class=\"required\">*</div>\n                  -->            </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <div class=\"col-md-12 row\">\n                      <div class=\"col-md-4\">\n                        <label for=\"numberCompany\">Број на фирми:</label>\n                      </div>\n                      <div class=\"col-md-4\">\n                        <input id=\"numberCompany\" type=\"text\" [(ngModel)]=\"numberCompany\" name=\"numberCompany\" class=\"form-control\">\n                      </div>\n                  <!--               <div class=\"col-md-1\" class=\"required\">*</div>\n                  -->            </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <div class=\"col-md-12 row\">\n                      <div class=\"col-md-4\">\n                        <label for=\"numberFlat\">Број на станови:</label>\n                      </div>\n                      <div class=\"col-md-4\">\n                        <input id=\"numberFlat\" type=\"text\" [(ngModel)]=\"numberFlat\" name=\"numberFlat\" class=\"form-control\">\n                      </div>\n                  <!--               <div class=\"col-md-1\" class=\"required\">*</div>\n                  -->            </div>\n                  </div>\n\n<!-- old -->\n          <!-- <div class=\"form-group\">\n          <div style=\"padding: 30px 0px\"><i class=\"fas fa-info-circle\"></i> * Во полињата што следат, секаде што имате празно место или немате вредност поставете \" - \" и внимавајте секаде каде што имате полиња со label, во нив треба да ставите текст </div>\n            <div style=\"background: #eef4ff\" for=\"nameDomenSubdomen\">Домени и Поддомени</div>\n            <div class=\"domenSubdomen col-md-12 row\">\n              <ul style=\"width: 100%\" class=\"col-md-12\">\n                <li *ngFor=\"let domenSubdomen of domeniSubdomeni\" style=\"width:100%\">\n                  <div class=\"row\">\n                    <div class=\"col-md-4\" style=\"font-family: ArsenalB\"><span> {{domenSubdomen.val.name}}</span></div>\n                    <div class=\"col-md-4\">\n                     <ul><li *ngFor=\"let column of Object.keys(domenSubdomen.val.columns)\">\n                      <div class=\"row\">\n                        <div class=\"col-md-4\"><span>  {{domenSubdomen.val.columns[column]}}</span></div>\n                        <div class=\"col-md-4\">\n                          <input type=\"text\" id=\"id_{{domenSubdomen.key}}_{{column}}\" [name]=\"column\"  class=\"form-control\">\n                        </div>\n                        <div class=\"col-md-1\" class=\"required\">*</div>\n                      </div>\n                    </li></ul>\n                  </div>\n                </div>\n                <ul style=\"width: 100%\" *ngIf=\"domenSubdomen.val.subdomeni!=null\">\n                  <li *ngFor=\"let subdomen of Object.keys(domenSubdomen.val.subdomeni);\">\n                    <div class=\"row\">\n                      <div class=\"col-md-4\"><span>  {{domenSubdomen.val.subdomeni[subdomen].name}}</span></div>\n                      <div class=\"col-md-4\">\n                       <ul>\n                       <li *ngFor=\"let column of Object.keys(domenSubdomen.val.subdomeni[subdomen].columns); let i=index\">\n                        <div class=\"row\">\n                          <div class=\"col-md-4\"><span>  {{domenSubdomen.val.subdomeni[subdomen].columns[column]}}</span></div>\n                          <div class=\"col-md-4\">\n                            <input type=\"text\" id=\"id_{{subdomen}}_{{column}}\" [name]=\"domenSubdomen.val.subdomeni[subdomen].columns[column]\" #titleInput   class=\"form-control\">\n                          </div>\n                          <div class=\"col-md-1\" class=\"required\">*</div>\n                        </div>\n                      </li>\n                      </ul>\n                    </div>\n                  </div> -->\n                  <!-- end old -->\n\n                  <div class=\"form-group\">\n            <div class=\"info_circle\"><i class=\"fas fa-info-circle\"></i>\n            * Во полињата што следат, секаде што имате празно место или немате вредност поставете \" - \" и внимавајте секаде каде што имате полиња со label, во нив треба да ставите текст\n            </div>\n            </div>\n\n                  <div class=\"form-group\">\n                   \n                    <div style=\"background: #eef4ff\" for=\"nameDomenSubdomen\">Домени и Поддомени</div>\n                    <div class=\"domenSubdomen col-md-12 row\">\n                      <ul style=\"width: 100%\" class=\"col-md-12\">\n                        <li *ngFor=\"let domenSubdomen of domeniSubdomeni\" style=\"width:100%\">\n                          <div class=\"row\">\n                            <div class=\"col-md-4\" style=\"font-family: ArsenalB\"><span> {{domenSubdomen.val.name}}</span></div>\n                            <div class=\"col-md-4\">\n                             <ul><li *ngFor=\"let column of Object.keys(domenSubdomen.val.columns)\">\n                              <div class=\"row\">\n                                <div class=\"col-md-4\"><span>  {{domenSubdomen.val.columns[column]}}</span></div>\n                                <div class=\"col-md-7\">\n                                  <input type=\"text\" id=\"id_{{domenSubdomen.key}}_{{column}}\" [name]=\"column\"  class=\"form-control\">\n                                </div>\n                                <div class=\"col-md-1\" class=\"required\">*</div>\n                              </div>\n                            </li></ul>\n                          </div>\n                        </div>\n                        <ul style=\"width: 100%\" *ngIf=\"domenSubdomen.val.subdomeni!=null\" >\n                          <li *ngFor=\"let subdomen of Object.keys(domenSubdomen.val.subdomeni);\" >\n                            <div class=\"row\">\n                              <div class=\"col-md-4\">\n                                <span>  {{domenSubdomen.val.subdomeni[subdomen].name}}</span>\n                              </div>\n                              <div class=\"col-md-4\">\n                               <ul>\n                                 <li *ngFor=\"let column of Object.keys(domenSubdomen.val.subdomeni[subdomen].columns); let i=index \">\n                                  <div class=\"row\">\n                                    <div class=\"col-md-4\">\n                                      <span>  {{domenSubdomen.val.subdomeni[subdomen].columns[column]}}</span>\n                                    </div>\n                                    <div class=\"col-md-7\">\n                                      <input type=\"text\" id=\"id_{{subdomen}}_{{column}}\" [name]=\"domenSubdomen.val.subdomeni[subdomen].columns[column]\" #titleInput   class=\"form-control\">\n                                    </div>\n                                    <div class=\"col-md-1\" class=\"required\">*</div>\n                                  </div>\n                                </li>\n                              </ul>\n                            </div>\n                          </div>\n                        </li>\n                      </ul>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <div class=\"col-md-12 row\">\n                  <div class=\"col-md-4\">\n                    <label for=\"description\">Опис на општината</label>\n                  </div>\n                  <div class=\"col-md-7\">\n                    <textarea id=\"description\" type=\"text\" [(ngModel)]=\"description\" name=\"description\" class=\"form-control\"></textarea>\n                  </div>\n                  <div class=\"col-md-1\" class=\"required\">*</div>\n                </div>\n              </div>\n              <div class=\"col-md-12\" style=\"margin-bottom: 100px\">\n                <button (click)=\"saveAll( numberMen, numberWomen, plannedBudget, budget, numberRateInfants, numberRateMaternal, numberCompany, numberPlot, numberObject, numberFlat,  scoreMun, rangMun, description)\" type=\"button\" class=\"btn btn-default\">Зачувај</button>\n                <div class=\" error\">{{error}}</div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n"

/***/ }),

/***/ "./src/app/admin-els-municipality/admin-els-municipality.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/admin-els-municipality/admin-els-municipality.component.ts ***!
  \****************************************************************************/
/*! exports provided: AdminElsMunicipalityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminElsMunicipalityComponent", function() { return AdminElsMunicipalityComponent; });
/* harmony import */ var _admin_year_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../admin-year.service */ "./src/app/admin-year.service.ts");
/* harmony import */ var _admin_municipality_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../admin-municipality.service */ "./src/app/admin-municipality.service.ts");
/* harmony import */ var _admin_domen_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin-domen.service */ "./src/app/admin-domen.service.ts");
/* harmony import */ var _admin_els_municipality_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../admin-els-municipality.service */ "./src/app/admin-els-municipality.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AdminElsMunicipalityComponent = /** @class */ (function () {
    function AdminElsMunicipalityComponent(serviceYear, serviceMun, serviceDomen, serviceEls, db, router, route) {
        this.serviceYear = serviceYear;
        this.serviceMun = serviceMun;
        this.serviceDomen = serviceDomen;
        this.serviceEls = serviceEls;
        this.db = db;
        this.router = router;
        this.route = route;
        this.yearsMun = {};
        this.munEls = {};
        this.Object = Object;
        this.lastYearDomenSubdomen = [];
        this.els = db.list('els-municipality');
    }
    AdminElsMunicipalityComponent.prototype.ngOnInit = function () {
        var _this = this;
        var that = this;
        this.years = this.serviceYear.getYearList();
        this.municipalities = this.serviceMun.getMunicipalityList();
        this.route.paramMap.subscribe(function (id) {
            _this.year = id.get('idYear');
        });
        /*get domenSubdomen for that specific year*/
        this.lastYearDomenSubdomen = [];
        this.thisYear = this.serviceYear.getYear(this.year);
        this.thisTest = this.serviceYear.getSpecificYear(this.year);
        this.thisTest.forEach(function (a) {
            console.log(a);
            for (var key in a) {
                that.lastYearDomenSubdomen.push({ key: key, val: a[key] });
            }
        });
        //old code
        // this.thisYear.forEach(function(a){
        //   for(var key in a.domeni){
        //     that.serviceDomen.getDomenSnapshot(key).subscribe(b=>{
        //       that.lastYearDomenSubdomen.push({key:b.key,val:b.payload.val()});
        //     });   
        //   }
        // }) 
        //end old code
        this.domeniSubdomeni = this.lastYearDomenSubdomen;
        console.log(this.domeniSubdomeni);
    };
    AdminElsMunicipalityComponent.prototype.getCheckboxValMun = function (event, key, name, code, color) {
        //	this.munEls={};
        this.munKey;
        this.munName;
        this.munCode;
        this.munColor;
        if (event) {
            this.munKey = key;
            this.munName = name;
            this.munCode = code;
            this.munColor = color;
            //this.munEls={key:key,name:name, code:code}; 
            // console.log(this.munEls)
        }
    };
    AdminElsMunicipalityComponent.prototype.saveAll = function (numberMen, numberWomen, plannedBudget, budget, numberRateInfants, numberRateMaternal, numberCompany, numberPlot, numberObject, numberFlat, scoreMun, rangMun, description) {
        var dataObject = {};
        dataObject = this.munEls;
        var newDomenSubdomen = [];
        this.lastYearDomenSubdomen.forEach(function (domeni) {
            var that = this;
            var mytemp = {};
            for (var subdomen in domeni.val.subdomeni) {
                var mytempColumn = {};
                for (var column in domeni.val.subdomeni[subdomen].columns) {
                    var columnId = document.getElementById("id_" + subdomen + '_' + column).value;
                    mytempColumn[column] = [];
                    mytempColumn[column] = { columnName: domeni.val.subdomeni[subdomen].columns[column], columnValue: columnId };
                }
                mytemp[subdomen] = [];
                mytemp[subdomen] = { subdomenName: domeni.val.subdomeni[subdomen].name, columns: mytempColumn, position: domeni.val.subdomeni[subdomen].position };
            }
            var columnsDomen = {};
            for (var columndomen in domeni.val.columns) {
                var columnVal = document.getElementById("id_" + domeni.key + '_' + columndomen).value;
                columnsDomen[columndomen] = [];
                columnsDomen[columndomen] = { columnName: domeni.val.columns[columndomen], columnValue: columnVal };
            }
            newDomenSubdomen[domeni.key] = [];
            newDomenSubdomen[domeni.key] = { domenName: domeni.val.name, 'subdomens': mytemp, 'columns': columnsDomen };
        });
        console.log(newDomenSubdomen);
        if (this.munKey != undefined && this.munCode != undefined && numberMen != undefined && plannedBudget != undefined && budget != undefined && scoreMun != undefined && rangMun != undefined && description != undefined && this.munName != undefined) {
            this.serviceEls.addMunEls(this.year, this.munKey, this.munCode, this.munColor, numberMen, numberWomen, plannedBudget, budget, numberRateInfants, numberRateMaternal, numberCompany, numberPlot, numberObject, numberFlat, newDomenSubdomen, scoreMun, rangMun, description, this.munName);
            this.router.navigate(['/years/' + this.year]);
        }
        else {
            this.error = 'Ве молиме пополете ги полињата означени со *';
        }
    };
    AdminElsMunicipalityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
            selector: 'app-admin-els-municipality',
            template: __webpack_require__(/*! ./admin-els-municipality.component.html */ "./src/app/admin-els-municipality/admin-els-municipality.component.html"),
            styles: [__webpack_require__(/*! ./admin-els-municipality.component.css */ "./src/app/admin-els-municipality/admin-els-municipality.component.css")]
        }),
        __metadata("design:paramtypes", [_admin_year_service__WEBPACK_IMPORTED_MODULE_0__["AdminYearService"], _admin_municipality_service__WEBPACK_IMPORTED_MODULE_1__["AdminMunicipalityService"], _admin_domen_service__WEBPACK_IMPORTED_MODULE_2__["AdminDomenService"], _admin_els_municipality_service__WEBPACK_IMPORTED_MODULE_3__["AdminElsMunicipalityService"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], AdminElsMunicipalityComponent);
    return AdminElsMunicipalityComponent;
}());



/***/ }),

/***/ "./src/app/admin-municipality-edit/admin-municipality-edit.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/admin-municipality-edit/admin-municipality-edit.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin-municipality-edit/admin-municipality-edit.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/admin-municipality-edit/admin-municipality-edit.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<admin-navbar></admin-navbar>\n<div class=\"container-fluid\" class=\"header-block\"><a [routerLink]=\"['/admin']\"> <span class=\"first\">почетна</span></a> / <a [routerLink]=\"['/admin-municipality-list']\"> <span>општини</span></a> /</div>\n\n<div class=\"admin\">\n  <div class=\"container\">\n    <div class=\"block\">\n    <h3 style=\"padding: 40px 15px \">Општина: {{municipalityData.name}}</h3>\n      <form>\n        <div class=\"form-group\">\n          <div class=\"col-md-12 row\">\n            <div class=\"col-md-4\">\n              <label for=\"nameMunicipality\">Име на општина</label>\n            </div>\n            <div class=\"col-md-6\">\n              <input id=\"nameMunicipality\" type=\"text\" [(ngModel)]=\"newName\" name=\"newName\" class=\"form-control\" placeholder=\"{{municipalityData.name}}\">\n            </div>\n          </div>\n        </div>\n          <div class=\"form-group\">\n          <div class=\"col-md-12 row\">\n            <div class=\"col-md-4\">\n              <label for=\"codeMunicipality\">Код на општина (url)</label>\n            </div>\n            <div class=\"col-md-4\">\n              <input id=\"codeMunicipality\" type=\"text\" [(ngModel)]=\"newCode\" name=\"newCode\" class=\"form-control\" placeholder=\"{{municipalityData.code}}\">\n            </div>\n          </div>\n        </div>\n         <div class=\"form-group\">\n          <div class=\"col-md-12 row\">\n            <div class=\"col-md-4\">\n              <label for=\"codeMunicipality\">Код на општина (graphic)</label>\n            </div>\n            <div class=\"col-md-4\">\n              <input id=\"codeMunicipality\" type=\"text\" [(ngModel)]=\"newCodeGraph\" name=\"newCodeGraph\" class=\"form-control\" placeholder=\"{{municipalityData.codeGraph}}\">\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"col-md-12 row\">\n            <div class=\"col-md-4\">\n              <label for=\"colorMunicipality\">Боја на општина (graphic)</label>\n            </div>\n            <div class=\"col-md-4\">\n              <input id=\"colorMunicipality\" type=\"text\" [(ngModel)]=\"newColorGraph\" name=\"newColorGraph\" class=\"form-control\" placeholder=\"{{municipalityData.colorGraph}}\">\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"col-md-12 row\">\n            <div class=\"col-md-4\">\n              <label for=\"areaMunicipality\">Површина km<sup>2</sup></label>\n            </div>\n            <div class=\"col-md-4\">\n              <input id=\"areaMunicipality\" type=\"number\" [(ngModel)]=\"newArea\" name=\"newArea\" class=\"form-control\" placeholder=\"{{municipalityData.area}}\">\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"col-md-12 row\">\n            <div class=\"col-md-4\">\n              <label for=\"populationMunicipality\">Населени места</label>\n            </div>\n            <div class=\"col-md-4\">\n              <input id=\"populationMunicipality\" type=\"number\" [(ngModel)]=\"newPopulation\" name=\"newPopulation\" class=\"form-control\" placeholder=\"{{municipalityData.population}}\">\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"col-md-12 row\">\n            <div class=\"col-md-4\">\n              <label for=\"imgMunicipality\">Слика</label>\n            </div>\n            <div class=\"col-md-4\">\n              <img src=\"{{municipalityData.image}}\" width=\"100px\">\n              <div class=\"progress\">\n                <div class=\"progress-bar progress-bar-info progress-bar-striped\" role=\"progressbar\" attr.aria-valuenow=\"{{progress.percentage}}\" aria-valuemin=\"0\" aria-valuemax=\"100\" [ngStyle]=\"{width:progress.percentage+'%'}\">\n                  {{progress.percentage}}%</div>\n              </div>\n              <label class=\"btn btn-default\">\n                <input type=\"file\" (change)=\"selectFile($event, municipalityData.name)\">\n              </label>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"col-md-12 row error\">\n            {{error}}\n          </div>\n        </div>\n        <!-- \n         <div class=\"form-group\">\n          <div class=\"col-md-12 row\">\n            <div class=\"col-md-4\">\n              <label for=\"populationMunicipality\">населени места</label>\n            </div>\n            <div class=\"col-md-8\">\n              <input id=\"populationMunicipality\" type=\"number\" [(ngModel)]=\"populated_places\" name=\"populated_places\" class=\"form-control\">\n            </div>\n          </div>\n        </div>\n\n\n         <div class=\"form-group\">\n          <div class=\"col-md-12 row\">\n            <div class=\"col-md-4\">\n              <label for=\"menMunicipality\">Мажи</label>\n            </div>\n            <div class=\"col-md-8\">\n              <input id=\"menMunicipality\" type=\"number\" [(ngModel)]=\"men\" name=\"men\" class=\"form-control\">\n            </div>\n          </div>\n        </div>\n\n          <div class=\"form-group\">\n          <div class=\"col-md-12 row\">\n            <div class=\"col-md-4\">\n              <label for=\"womenMunicipality\">Жени</label>\n            </div>\n            <div class=\"col-md-8\">\n              <input id=\"womenMunicipality\" type=\"number\" [(ngModel)]=\"women\" name=\"women\" class=\"form-control\">\n            </div>\n          </div>\n        </div>\n       -->\n        <!-- <div class=\"form-group\">\n          <div class=\"col-md-12 row\">\n            <div class=\"col-md-4\">\n              <label for=\"subdomen\">Поддомен</label>\n            </div>\n            <div class=\"col-md-8 checkbox-box\">\n              <ul>\n                <li *ngFor=\"let subdomen of subdomens | async\">\n                  <span>\n      <input type=\"checkbox\"  (click)=\"getCheckboxVal($event, subdomen.key,  subdomen.val.name)\" ></span>\n                  <span> {{ subdomen.val.name }}</span>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div> -->\n        <div class=\"col-md-12\">\n          <button class=\"btn btn-primary\" (click)=\"updateData(idMunicipality, newName, newCode, newCodeGraph, newColorGraph, newArea, newPopulation, municipalityData.image)\">Зачувај</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin-municipality-edit/admin-municipality-edit.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/admin-municipality-edit/admin-municipality-edit.component.ts ***!
  \******************************************************************************/
/*! exports provided: AdminMunicipalityEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminMunicipalityEditComponent", function() { return AdminMunicipalityEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_municipality_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../admin-municipality.service */ "./src/app/admin-municipality.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminMunicipalityEditComponent = /** @class */ (function () {
    function AdminMunicipalityEditComponent(route, service) {
        this.route = route;
        this.service = service;
        this.progress = { percentage: 0 };
    }
    AdminMunicipalityEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var that = this;
        this.route.paramMap.subscribe(function (id) {
            _this.idMunicipality = id.get('idMunicipality');
            _this.municipalityData = _this.service.getMunicipality(_this.idMunicipality).subscribe(function (objectdata) {
                _this.municipalityData = objectdata;
            });
        });
    };
    AdminMunicipalityEditComponent.prototype.selectFile = function (event, name) {
        this.service.uploadImage(event, name, this.progress);
    };
    AdminMunicipalityEditComponent.prototype.updateData = function (key, newName, newCode, newCodeGraph, newColorGraph, newArea, newPopulation, image) {
        console.log(image);
        var that = this;
        if (newName == undefined) {
            newName = this.municipalityData.name;
        }
        if (newCode == undefined) {
            newCode = this.municipalityData.code;
        }
        if (newCodeGraph == undefined) {
            newCodeGraph = this.municipalityData.codeGraph;
        }
        if (newColorGraph == undefined) {
            newColorGraph = this.municipalityData.colorGraph;
        }
        if (newArea == undefined) {
            newArea = this.municipalityData.area;
        }
        if (newPopulation == undefined) {
            newPopulation = this.municipalityData.population;
        }
        image = this.municipalityData.image;
        /*that.service.removeSubdomen(key);

        this.arrayCheckboxRemoveDb.forEach(function (removekey) {
            that.db.list('subdomen_domen/'+removekey.key).remove(key);
        });

        this.arrayCheckbox.forEach(function (subdomenNew) {
            that.service.updateDomenSubdomenRealtion(that.idDomen, subdomenNew.key, subdomenNew.name);
            that.service.updateDomenSubdomenRealtion(subdomenNew.key, that.idDomen, newname);
        });*/
        this.service.updateMunicipality(key, newName, newCode, newCodeGraph, newColorGraph, newArea, newPopulation, image);
    };
    AdminMunicipalityEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-municipality-edit',
            template: __webpack_require__(/*! ./admin-municipality-edit.component.html */ "./src/app/admin-municipality-edit/admin-municipality-edit.component.html"),
            styles: [__webpack_require__(/*! ./admin-municipality-edit.component.css */ "./src/app/admin-municipality-edit/admin-municipality-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _admin_municipality_service__WEBPACK_IMPORTED_MODULE_2__["AdminMunicipalityService"]])
    ], AdminMunicipalityEditComponent);
    return AdminMunicipalityEditComponent;
}());



/***/ }),

/***/ "./src/app/admin-municipality-list/admin-municipality-list.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/admin-municipality-list/admin-municipality-list.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin-municipality-list/admin-municipality-list.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/admin-municipality-list/admin-municipality-list.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<admin-navbar></admin-navbar>\n<div class=\"container-fluid\" class=\"header-block\"><a [routerLink]=\"['/admin']\"> <span class=\"first\">почетна</span></a> /</div>\n\n<div class=\"admin\">\n  <div class=\"container\">\n    <div class=\"block\">\n      <div class=\"action\">\n        <span class=\"action-1\">  \n    <select class='select-option' [(ngModel)]='optionSelected'>\n    \t<option class='option' *ngFor='let option of dropdownOptions' [value]=\"option.id\">{{option.name}}</option>\n    </select>\n\t\t</span>\n        <span class=\"action-2\"><button type=\"button\" class=\"btn btn-default\" (click)=\"removeMunicipality()\">Избриши</button></span>\n        <span class=\"action-3\"><button type=\"button\" class=\"btn btn-default\" (click)=\"redirectMunicipality()\">Додади</button></span>\n        <div class=\" error\">{{error}}\n        </div>\n      </div>\n      <ul>\n        <li *ngFor=\"let municipality of municipalityList | async | orderByName \">\n          <span> \n\t\t\t<input type=\"checkbox\"  (click)=\"getCheckboxVal($event, municipality.key)\" ></span>\n          <a [routerLink]=\"['/admin-municipality',municipality.key]\"><span>{{ municipality.val.name }}</span></a> \n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin-municipality-list/admin-municipality-list.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/admin-municipality-list/admin-municipality-list.component.ts ***!
  \******************************************************************************/
/*! exports provided: AdminMunicipalityListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminMunicipalityListComponent", function() { return AdminMunicipalityListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_municipality_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../admin-municipality.service */ "./src/app/admin-municipality.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminMunicipalityListComponent = /** @class */ (function () {
    function AdminMunicipalityListComponent(service, router) {
        this.service = service;
        this.router = router;
        this.dropdownOptions = [{ id: 'select', name: 'Избери' }, { id: 'delete', name: 'Избриши' }];
        this.arrayRemove = [];
        this.arrayRemoveCopy = [];
        this.municipalityList = service.getMunicipalityList();
    }
    AdminMunicipalityListComponent.prototype.ngOnInit = function () {
    };
    AdminMunicipalityListComponent.prototype.getCheckboxVal = function (event, key) {
        if (event.target.checked == true) {
            this.arrayRemove.push(key);
        }
        else {
            var index = this.arrayRemove.indexOf(key);
            this.arrayRemove.splice(index, 1);
        }
    };
    AdminMunicipalityListComponent.prototype.removeMunicipality = function () {
        var _this = this;
        this.arrayRemove.forEach(function (myKey) {
            if (_this.optionSelected == 'delete') {
                _this.service.removeMunicipality(myKey);
            }
            else {
                _this.error = "Ве молиме изберете од листата";
            }
        });
    };
    AdminMunicipalityListComponent.prototype.redirectMunicipality = function () {
        this.router.navigate(['/admin-municipality']);
    };
    AdminMunicipalityListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-municipality-list',
            template: __webpack_require__(/*! ./admin-municipality-list.component.html */ "./src/app/admin-municipality-list/admin-municipality-list.component.html"),
            styles: [__webpack_require__(/*! ./admin-municipality-list.component.css */ "./src/app/admin-municipality-list/admin-municipality-list.component.css")]
        }),
        __metadata("design:paramtypes", [_admin_municipality_service__WEBPACK_IMPORTED_MODULE_1__["AdminMunicipalityService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminMunicipalityListComponent);
    return AdminMunicipalityListComponent;
}());



/***/ }),

/***/ "./src/app/admin-municipality.service.ts":
/*!***********************************************!*\
  !*** ./src/app/admin-municipality.service.ts ***!
  \***********************************************/
/*! exports provided: AdminMunicipalityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminMunicipalityService", function() { return AdminMunicipalityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdminMunicipalityService = /** @class */ (function () {
    function AdminMunicipalityService(db, storage, router) {
        this.db = db;
        this.storage = storage;
        this.router = router;
        this.itemsMunicipality = db.list('municipality');
    }
    AdminMunicipalityService.prototype.getMunicipalityList = function () {
        return this.itemsMunicipality.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
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
    AdminMunicipalityService.prototype.addMun = function (name, code, codeGraph, colorGraph, area, population) {
        var image = this.image;
        if (image == undefined) {
            console.log('ве молиме поставете слика ');
        }
        else {
            return this.itemsMunicipality.set(code, { name: name, code: code, codeGraph: codeGraph, colorGraph: colorGraph, area: area, population: population, image: image });
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
    AdminMunicipalityService.prototype.updateMunicipality = function (key, newname, newCode, newCodeGraph, newcolorGraph, newArea, newPopulation, img) {
        if (this.image != undefined) {
            this.itemsMunicipality.set(key, { name: newname, code: newCode, codeGraph: newCodeGraph, colorGraph: newcolorGraph, area: newArea, population: newPopulation, image: this.image });
        }
        else {
            this.itemsMunicipality.set(key, { name: newname, code: newCode, codeGraph: newCodeGraph, colorGraph: newcolorGraph, area: newArea, population: newPopulation, image: img });
        }
        this.router.navigate(['/admin-municipality-list']);
    };
    AdminMunicipalityService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AdminMunicipalityService);
    return AdminMunicipalityService;
}());



/***/ }),

/***/ "./src/app/admin-municipality/admin-municipality.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/admin-municipality/admin-municipality.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin-municipality/admin-municipality.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/admin-municipality/admin-municipality.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<admin-navbar></admin-navbar>\n<div class=\"container-fluid\" class=\"header-block\"><a [routerLink]=\"['/admin']\"><span class=\"first\">почетна</span></a> / <a [routerLink]=\"['/admin-municipality-list']\"><span>општини</span> /</a></div>\n<div class=\"admin\">\n  <div class=\"container\">\n    <div class=\"block\">\n      <form>\n        <div class=\"form-group\">\n          <div class=\"col-md-12 row\">\n            <div class=\"col-md-4\">\n              <label for=\"nameMunicipality\">Име на општина</label>\n            </div>\n            <div class=\"col-md-6\">\n              <input id=\"nameMunicipality\" type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n            </div>\n             <div class=\"col-md-1\" class=\"required\">*</div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"col-md-12 row\">\n            <div class=\"col-md-4\">\n              <label for=\"codeMunicipality\">Код на општина (url) </label>\n            </div>\n            <div class=\"col-md-4\">\n              <input id=\"codeMunicipality\" type=\"text\" [(ngModel)]=\"code\" name=\"code\" class=\"form-control\">\n            </div>\n             <div class=\"col-md-1\" class=\"required\">*</div>\n          </div>\n        </div>\n          <div class=\"form-group\">\n          <div class=\"col-md-12 row\">\n            <div class=\"col-md-4\">\n              <label for=\"codeMunicipality\">Код за график (graphic)</label>\n            </div>\n            <div class=\"col-md-4\">\n              <input id=\"codeMunicipality\" type=\"text\" [(ngModel)]=\"codeGraph\" name=\"codeGraph\" class=\"form-control\">\n            </div>\n             <div class=\"col-md-1\" class=\"required\">*</div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"col-md-12 row\">\n            <div class=\"col-md-4\">\n              <label for=\"colorMunicipality\">Боја за график (graphic)</label>\n            </div>\n            <div class=\"col-md-4\">\n              <input id=\"colorMunicipality\" type=\"text\" [(ngModel)]=\"colorGraph\" name=\"colorGraph\" class=\"form-control\">\n            </div>\n             <div class=\"col-md-1\" class=\"required\">*</div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"col-md-12 row\">\n            <div class=\"col-md-4\">\n              <label for=\"areaMunicipality\">Површина km<sup>2</sup></label>\n            </div>\n            <div class=\"col-md-4\">\n              <input id=\"areaMunicipality\" type=\"text\" [(ngModel)]=\"area\" name=\"area\" class=\"form-control\">\n            </div>\n             <div class=\"col-md-1\" class=\"required\">*</div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"col-md-12 row\">\n            <div class=\"col-md-4\">\n              <label for=\"populationMunicipality\">Населени места</label>\n            </div>\n            <div class=\"col-md-4\">\n              <input id=\"populationMunicipality\" type=\"number\" [(ngModel)]=\"population\" name=\"population\" class=\"form-control\">\n            </div>\n             <div class=\"col-md-1\" class=\"required\">*</div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"col-md-12 row\">\n            <div class=\"col-md-4\">\n              <label for=\"imgMunicipality\">Слика</label>\n            </div>\n            <div class=\"col-md-7\">\n              <div class=\"progress\">\n                <div class=\"progress-bar progress-bar-info progress-bar-striped\" role=\"progressbar\" attr.aria-valuenow=\"{{progress.percentage}}\" aria-valuemin=\"0\" aria-valuemax=\"100\" [ngStyle]=\"{width:progress.percentage+'%'}\">\n                  {{progress.percentage}}%</div>\n              </div>\n              <label class=\"btn btn-default\">\n                <input type=\"file\" (change)=\"selectFile($event, name)\">\n              </label>\n            </div>\n             <div class=\"col-md-1\" class=\"required\">*</div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"col-md-12 row error\">\n            {{error}}\n          </div>\n        </div>\n        <!-- \n         <div class=\"form-group\">\n          <div class=\"col-md-12 row\">\n            <div class=\"col-md-4\">\n              <label for=\"populationMunicipality\">населени места</label>\n            </div>\n            <div class=\"col-md-8\">\n              <input id=\"populationMunicipality\" type=\"number\" [(ngModel)]=\"populated_places\" name=\"populated_places\" class=\"form-control\">\n            </div>\n          </div>\n        </div>\n\n\n         <div class=\"form-group\">\n          <div class=\"col-md-12 row\">\n            <div class=\"col-md-4\">\n              <label for=\"menMunicipality\">Мажи</label>\n            </div>\n            <div class=\"col-md-8\">\n              <input id=\"menMunicipality\" type=\"number\" [(ngModel)]=\"men\" name=\"men\" class=\"form-control\">\n            </div>\n          </div>\n        </div>\n\n          <div class=\"form-group\">\n          <div class=\"col-md-12 row\">\n            <div class=\"col-md-4\">\n              <label for=\"womenMunicipality\">Жени</label>\n            </div>\n            <div class=\"col-md-8\">\n              <input id=\"womenMunicipality\" type=\"number\" [(ngModel)]=\"women\" name=\"women\" class=\"form-control\">\n            </div>\n          </div>\n        </div>\n       -->\n        <!-- <div class=\"form-group\">\n          <div class=\"col-md-12 row\">\n            <div class=\"col-md-4\">\n              <label for=\"subdomen\">Поддомен</label>\n            </div>\n            <div class=\"col-md-8 checkbox-box\">\n              <ul>\n                <li *ngFor=\"let subdomen of subdomens | async\">\n                  <span>\n      <input type=\"checkbox\"  (click)=\"getCheckboxVal($event, subdomen.key,  subdomen.val.name)\" ></span>\n                  <span> {{ subdomen.val.name }}</span>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div> -->\n        <div class=\"col-md-12\">\n          <button class=\"btn btn-primary\" (click)=\"addMunicipality(name,code,codeGraph,colorGraph,area,population)\">Зачувај</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin-municipality/admin-municipality.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin-municipality/admin-municipality.component.ts ***!
  \********************************************************************/
/*! exports provided: AdminMunicipalityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminMunicipalityComponent", function() { return AdminMunicipalityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_municipality_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../admin-municipality.service */ "./src/app/admin-municipality.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminMunicipalityComponent = /** @class */ (function () {
    function AdminMunicipalityComponent(service) {
        this.service = service;
        this.progress = { percentage: 0 };
    }
    AdminMunicipalityComponent.prototype.ngOnInit = function () {
    };
    AdminMunicipalityComponent.prototype.addMunicipality = function (name, code, codeGraph, colorGraph, area, population) {
        if (name && code && area && population != '') {
            var newId = this.service.addMun(name, code, codeGraph, colorGraph, area, population);
            this.service.redirectMunicipalityList();
        }
        else if (newId == undefined) {
            this.error = "Ве молиме пополнете ги полињата означени со *";
        }
    };
    AdminMunicipalityComponent.prototype.selectFile = function (event, name) {
        this.service.uploadImage(event, name, this.progress);
    };
    AdminMunicipalityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-municipality',
            template: __webpack_require__(/*! ./admin-municipality.component.html */ "./src/app/admin-municipality/admin-municipality.component.html"),
            styles: [__webpack_require__(/*! ./admin-municipality.component.css */ "./src/app/admin-municipality/admin-municipality.component.css")]
        }),
        __metadata("design:paramtypes", [_admin_municipality_service__WEBPACK_IMPORTED_MODULE_1__["AdminMunicipalityService"]])
    ], AdminMunicipalityComponent);
    return AdminMunicipalityComponent;
}());



/***/ }),

/***/ "./src/app/admin-navbar/admin-navbar.component.css":
/*!*********************************************************!*\
  !*** ./src/app/admin-navbar/admin-navbar.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin-navbar/admin-navbar.component.html":
/*!**********************************************************!*\
  !*** ./src/app/admin-navbar/admin-navbar.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"admin\">\n    <div class=\"admin-nav container-fluid\">\n      <div class=\"row\" style=\"padding: 10px 0px\">\n        <div class=\"col-md-10\">Добредојдовте! Родов индекс</div>\n        <div class=\"col-md-2\">\n          <span><i class=\"fas fa-user-ninja\"></i> {{ (authService.user | async)?.email }}!</span>\n          <span style=\"padding-left: 20px\"><i class=\"fas fa-power-off\" (click)=\"logout()\" style=\"\"></i></span>\n        </div>\n      </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin-navbar/admin-navbar.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin-navbar/admin-navbar.component.ts ***!
  \********************************************************/
/*! exports provided: AdminNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminNavbarComponent", function() { return AdminNavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminNavbarComponent = /** @class */ (function () {
    function AdminNavbarComponent(authService) {
        this.authService = authService;
    }
    AdminNavbarComponent.prototype.loggedIn = function () {
        this.authService.isloggedIn();
        console.log(this.authService.isloggedIn());
    };
    AdminNavbarComponent.prototype.logout = function () {
        this.authService.logoutUser();
    };
    AdminNavbarComponent.prototype.ngOnInit = function () {
    };
    AdminNavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'admin-navbar',
            template: __webpack_require__(/*! ./admin-navbar.component.html */ "./src/app/admin-navbar/admin-navbar.component.html"),
            styles: [__webpack_require__(/*! ./admin-navbar.component.css */ "./src/app/admin-navbar/admin-navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AdminNavbarComponent);
    return AdminNavbarComponent;
}());



/***/ }),

/***/ "./src/app/admin-region-edit/admin-region-edit.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/admin-region-edit/admin-region-edit.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin-region-edit/admin-region-edit.component.html":
/*!********************************************************************!*\
  !*** ./src/app/admin-region-edit/admin-region-edit.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<admin-navbar></admin-navbar>\n<div class=\"container-fluid\" class=\"header-block\"><a [routerLink]=\"['/admin']\"> <span class=\"first\">почетна</span> </a> / \n<a [routerLink]=\"['/admin-region-list']\"> <span >региони</span></a> / </div><div class=\"admin\">\n  <div class=\"container\">\n    <div class=\"block\">\n      <form>\n        <div class=\"form-group\">\n          <div class=\"col-md-12 row\">\n            <div class=\"col-md-4\">\n              <label for=\"nameRegion\">Регион</label>\n            </div>\n            <div class=\"col-md-8\">\n              <input id=\"nameRegion\" type=\"text\" [(ngModel)]=\"nameRegion\" name=\"nameRegion\" class=\"form-control\" placeholder=\"{{idRegion}}\">\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"col-md-12 row\">\n            <div class=\"col-md-4\">\n              <label for=\"municipality\">Општини</label>\n            </div>\n            <div class=\"col-md-8 checkbox-box\">\n              <ul>\n                <li *ngFor=\"let mun of municipalityList | async\">\n                  <span>\n             <input [checked]=\"checkedValue.indexOf(mun.key) >= 0\"  #f type=\"checkbox\"  name=\"mun\"  \n             (click)=\"getCheckboxVal($event, mun.key,  mun.val.name, mun.val.code, mun.val.codeGraph, mun.val.colorGraph)\" >\n               </span>\n                  <span> {{ mun.val.name }}</span>\n                  <!--  <span>\n              <input type=\"checkbox\"  (click)=\"getCheckboxVal($event, domen.key,  domen.val.name)\" ></span>\n                  <span> {{ domen.val.name }}</span> -->\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-12\">\n          <button class=\"btn btn-primary\" (click)=\"updateRegion(idRegion, nameRegion)\">Зачувај</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin-region-edit/admin-region-edit.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin-region-edit/admin-region-edit.component.ts ***!
  \******************************************************************/
/*! exports provided: AdminRegionEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRegionEditComponent", function() { return AdminRegionEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_region_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin-region.service */ "./src/app/admin-region.service.ts");
/* harmony import */ var _admin_municipality_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../admin-municipality.service */ "./src/app/admin-municipality.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminRegionEditComponent = /** @class */ (function () {
    function AdminRegionEditComponent(route, service, serviceMun) {
        this.route = route;
        this.service = service;
        this.serviceMun = serviceMun;
        this.checkedValue = [];
        this.newRegionsCheckbox = [];
        this.new = {};
    }
    AdminRegionEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getMunicipality();
        var that = this;
        this.route.paramMap.subscribe(function (id) {
            _this.idRegion = id.get('idRegion');
            /*	this.regionData=this.service.getRegion(this.idRegion).subscribe(objectdata =>
                {
                    this.regionData=objectdata;
                    this.checkedValue=Object.keys(objectdata.municipalities);
    
                    var oldRegionsArray=[];
                    for(var key in objectdata.municipalities){
                        oldRegionsArray.push({key:key,name:objectdata.municipalities[key].name, code:objectdata.municipalities[key].code});
                    }
                    this.newRegionsCheckbox=oldRegionsArray;
                });*/
            //old code
            _this.regionData = _this.service.getRegion(_this.idRegion);
            _this.regionData.forEach(function (a) {
                that.regionData = a;
                that.checkedValue = Object.keys(a.municipalities);
                var oldRegionsArray = [];
                for (var key in a.municipalities) {
                    oldRegionsArray.push({ key: key, name: a.municipalities[key].name, code: a.municipalities[key].code, codeGraph: a.municipalities[key].codeGraph, colorGraph: a.municipalities[key].colorGraph });
                }
                that.newRegionsCheckbox = oldRegionsArray;
            });
        });
    };
    AdminRegionEditComponent.prototype.getMunicipality = function () {
        this.municipalityList = this.serviceMun.getMunicipalityList();
    };
    AdminRegionEditComponent.prototype.getCheckboxVal = function (event, key, name, code, codeGraph, colorGraph) {
        if (event.target.checked === true) {
            this.newRegionsCheckbox.push({ key: key, name: name, code: code, codeGraph: codeGraph, colorGraph: colorGraph });
            console.log(this.newRegionsCheckbox);
        }
        else {
            var index = this.newRegionsCheckbox.findIndex(function (p) { return p.key == key; });
            this.newRegionsCheckbox.splice(index, 1);
            console.log(this.newRegionsCheckbox);
        }
    };
    AdminRegionEditComponent.prototype.updateRegion = function (key, newname) {
        if (newname == undefined) {
            newname = this.regionData.region;
        }
        var newRegion = {};
        this.newRegionsCheckbox.forEach(function (a) {
            newRegion[a.key] = [];
            newRegion[a.key] = { name: a.name, code: a.code, codeGraph: a.codeGraph, colorGraph: a.colorGraph };
        });
        /*ne se edituva imato zasto nema potreba , imeto e kluc, ako se zgresi neka se izbrise i dodade novo:)*/
        this.service.updateRegion(key, newname, newRegion);
    };
    AdminRegionEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-region-edit',
            template: __webpack_require__(/*! ./admin-region-edit.component.html */ "./src/app/admin-region-edit/admin-region-edit.component.html"),
            styles: [__webpack_require__(/*! ./admin-region-edit.component.css */ "./src/app/admin-region-edit/admin-region-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _admin_region_service__WEBPACK_IMPORTED_MODULE_2__["AdminRegionService"], _admin_municipality_service__WEBPACK_IMPORTED_MODULE_3__["AdminMunicipalityService"]])
    ], AdminRegionEditComponent);
    return AdminRegionEditComponent;
}());



/***/ }),

/***/ "./src/app/admin-region-list/admin-region-list.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/admin-region-list/admin-region-list.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin-region-list/admin-region-list.component.html":
/*!********************************************************************!*\
  !*** ./src/app/admin-region-list/admin-region-list.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<admin-navbar></admin-navbar>\n<div class=\"container-fluid\" class=\"header-block\"><a [routerLink]=\"['/admin']\"> <span class=\"first\">почетна</span> </a> / \n</div>\n<div class=\"admin\">\n  <div class=\"container\">\n    <div class=\"block\">\n      <div class=\"action\">\n        <span class=\"action-1\">  \n    <select class='select-option' [(ngModel)]='optionSelected'>\n    \t<option class='option' *ngFor='let option of dropdownOptions' [value]=\"option.id\">{{option.name}}</option>\n    </select>\n\t\t</span>\n        <span class=\"action-2\"><button type=\"button\" class=\"btn btn-default\" (click)=\"removeRegion()\">Избриши</button></span>\n        <span class=\"action-3\"><button type=\"button\" class=\"btn btn-default\" (click)=\"redirectNewRegion()\">Додади</button></span>\n        <div class=\" error\">{{error}}\n        </div>\n      </div>\n      <ul>\n        <li *ngFor=\"let region of regionList | async\">\n          <span> \n\t\t\t<input type=\"checkbox\"  (click)=\"getCheckboxVal($event, region.key)\" ></span>\n          <a [routerLink]=\"['/admin-region',region.key]\"><span> {{ region.key }}</span></a> \n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin-region-list/admin-region-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin-region-list/admin-region-list.component.ts ***!
  \******************************************************************/
/*! exports provided: AdminRegionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRegionListComponent", function() { return AdminRegionListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_region_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../admin-region.service */ "./src/app/admin-region.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminRegionListComponent = /** @class */ (function () {
    function AdminRegionListComponent(service, router) {
        this.service = service;
        this.router = router;
        this.dropdownOptions = [{ id: 'select', name: 'Избери' }, { id: 'delete', name: 'Избриши' }];
        this.arrayRemove = [];
        this.regionList = service.getRegionList();
    }
    AdminRegionListComponent.prototype.ngOnInit = function () {
    };
    AdminRegionListComponent.prototype.getCheckboxVal = function (event, key) {
        if (event.target.checked == true) {
            this.arrayRemove.push(key);
        }
        else {
            var index = this.arrayRemove.indexOf(key);
            this.arrayRemove.splice(index, 1);
        }
    };
    AdminRegionListComponent.prototype.removeRegion = function () {
        var _this = this;
        this.arrayRemove.forEach(function (myKey) {
            if (_this.optionSelected == 'delete') {
                _this.service.removeRegion(myKey);
            }
            else {
                _this.error = "Ве молиме изберете од листата";
            }
        });
    };
    AdminRegionListComponent.prototype.redirectNewRegion = function () {
        this.router.navigate(['/admin-region']);
    };
    AdminRegionListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-region-list',
            template: __webpack_require__(/*! ./admin-region-list.component.html */ "./src/app/admin-region-list/admin-region-list.component.html"),
            styles: [__webpack_require__(/*! ./admin-region-list.component.css */ "./src/app/admin-region-list/admin-region-list.component.css")]
        }),
        __metadata("design:paramtypes", [_admin_region_service__WEBPACK_IMPORTED_MODULE_1__["AdminRegionService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminRegionListComponent);
    return AdminRegionListComponent;
}());



/***/ }),

/***/ "./src/app/admin-region.service.ts":
/*!*****************************************!*\
  !*** ./src/app/admin-region.service.ts ***!
  \*****************************************/
/*! exports provided: AdminRegionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRegionService", function() { return AdminRegionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminRegionService = /** @class */ (function () {
    function AdminRegionService(db, router) {
        this.db = db;
        this.router = router;
        this.itemsRegion = db.list('region');
    }
    AdminRegionService.prototype.addRegion = function (regionName, munList) {
        console.log(regionName);
        this.region = this.db.object('region/' + regionName);
        this.region.set({ region: regionName, municipalities: munList });
        this.router.navigate(['/admin-region-list']);
    };
    AdminRegionService.prototype.getRegionList = function () {
        return this.items = this.itemsRegion.snapshotChanges().
            map(function (changes) {
            return changes.map(function (c) { return ({ key: c.key, val: c.payload.val().municipalities }); });
        });
    };
    AdminRegionService.prototype.getAll = function () {
        return this.items = this.itemsRegion.snapshotChanges().map(function (regions) {
            var fullArray = [];
            var regionArray = [];
            regions.forEach(function (region) {
                var munArray = [];
                for (var key in region.payload.val().municipalities) {
                    munArray.push({ name: region.payload.val().municipalities[key].name, link: key, code: region.payload.val().municipalities[key].codeGraph });
                }
                regionArray.push({ regionkey: region.key, mun: munArray });
            });
            return regionArray;
        });
    };
    AdminRegionService.prototype.removeRegion = function (key) {
        this.itemsRegion.remove(key);
    };
    AdminRegionService.prototype.getRegion = function (fromId) {
        return this.db.object('region/' + fromId).valueChanges();
    };
    AdminRegionService.prototype.updateRegion = function (key, mun, newObjectMun) {
        this.region = this.db.object('region/' + key);
        this.region.set({ region: key, municipalities: newObjectMun });
        this.router.navigate(['/admin-region-list']);
    };
    AdminRegionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminRegionService);
    return AdminRegionService;
}());



/***/ }),

/***/ "./src/app/admin-region/admin-region.component.css":
/*!*********************************************************!*\
  !*** ./src/app/admin-region/admin-region.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin-region/admin-region.component.html":
/*!**********************************************************!*\
  !*** ./src/app/admin-region/admin-region.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<admin-navbar></admin-navbar>\n<div class=\"container-fluid\" class=\"header-block\"><a [routerLink]=\"['/admin']\"> <span class=\"first\">почетна</span> </a> / \n<a [routerLink]=\"['/admin-region-list']\"> <span >региони</span></a> / </div>\n\n<div class=\"admin\">\n  <div class=\"container\">\n    <div class=\"block\">\n      <form>\n        <div class=\"form-group\">\n          <div class=\"col-md-12 row\">\n            <div class=\"col-md-4\">\n              <label for=\"nameRegion\">Регион</label>\n            </div>\n            <div class=\"col-md-7\">\n              <input id=\"nameRegion\" type=\"text\" [(ngModel)]=\"nameRegion\" name=\"nameRegion\" class=\"form-control\">\n            </div>\n             <div class=\"col-md-1\" class=\"required\">*</div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"col-md-12 row\">\n            <div class=\"col-md-4\">\n              <label for=\"municipality\">Општини</label>\n            </div>\n            <div class=\"col-md-7 checkbox-box\">\n              <ul>\n                <li *ngFor=\"let municipality of municipalityList | async\">\n                  <span>\n      \t\t\t\t<input type=\"checkbox\"  (click)=\"getCheckboxVal($event, municipality.key,  municipality.val.name, municipality.val.code, municipality.val.codeGraph, municipality.val.colorGraph)\" ></span>\n                  <span> {{ municipality.val.name }}</span>\n                </li>\n              </ul>\n            </div>\n             <div class=\"col-md-1\" class=\"required\">*</div>\n          </div>\n        </div>\n                <div class=\"error\">{{error}}</div>\n\n        <div class=\"col-md-12\">\n          <button class=\"btn btn-primary\" (click)=\"addRegion(nameRegion)\">Зачувај</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin-region/admin-region.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin-region/admin-region.component.ts ***!
  \********************************************************/
/*! exports provided: AdminRegionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRegionComponent", function() { return AdminRegionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_municipality_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../admin-municipality.service */ "./src/app/admin-municipality.service.ts");
/* harmony import */ var _admin_region_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin-region.service */ "./src/app/admin-region.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminRegionComponent = /** @class */ (function () {
    function AdminRegionComponent(service, serviceMun) {
        this.service = service;
        this.serviceMun = serviceMun;
        this.arrayRemove = [];
    }
    AdminRegionComponent.prototype.ngOnInit = function () {
        this.getMunicipality();
    };
    AdminRegionComponent.prototype.getCheckboxVal = function (event, key, name, code, codeGraph, colorGraph) {
        if (event.target.checked == true) {
            this.arrayRemove.push({ key: key, name: name, code: code, codeGraph: codeGraph, colorGraph: colorGraph });
            // console.log(this.arrayRemove);
        }
        else {
            var index = this.arrayRemove.indexOf(key);
            this.arrayRemove.splice(index, 1);
        }
    };
    AdminRegionComponent.prototype.addRegion = function (name) {
        var newRegion = {};
        this.arrayRemove.forEach(function (a) {
            newRegion[a.key] = [];
            newRegion[a.key] = { name: a.name, code: a.code, codeGraph: a.codeGraph, colorGraph: a.colorGraph };
        });
        console.log(newRegion);
        if (name != undefined && this.arrayRemove.length != 0) {
            this.idMun = this.service.addRegion(name, newRegion);
            this.error = '';
        }
        else {
            this.error = "Ве молиме пополнете ги полињата означени со *";
        }
    };
    AdminRegionComponent.prototype.getMunicipality = function () {
        this.municipalityList = this.serviceMun.getMunicipalityList();
    };
    AdminRegionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-region',
            template: __webpack_require__(/*! ./admin-region.component.html */ "./src/app/admin-region/admin-region.component.html"),
            styles: [__webpack_require__(/*! ./admin-region.component.css */ "./src/app/admin-region/admin-region.component.css")]
        }),
        __metadata("design:paramtypes", [_admin_region_service__WEBPACK_IMPORTED_MODULE_2__["AdminRegionService"], _admin_municipality_service__WEBPACK_IMPORTED_MODULE_1__["AdminMunicipalityService"]])
    ], AdminRegionComponent);
    return AdminRegionComponent;
}());



/***/ }),

/***/ "./src/app/admin-sign-in/admin-sign-in.component.css":
/*!***********************************************************!*\
  !*** ./src/app/admin-sign-in/admin-sign-in.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin-sign-in/admin-sign-in.component.html":
/*!************************************************************!*\
  !*** ./src/app/admin-sign-in/admin-sign-in.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"admin\">\n  <div class=\"fullBack\">\n    <div class=\"container fullHeight\">\n      <div class=\"centerBox\">\n        <form class='loginForm'>\n          <div class=\"form-group\">\n            <label for=\"email\"><i class=\"fal fa-user-ninja\"></i></label>\n            <input type=\"email\" ngModel name=\"email\" #email=\"ngModel\" id=\"email\" class=\"form-control\">\n            <div class=\"alert alert-danger\" *ngIf=\"email.touched && !email.value && email.valid\">Ве молиме внесете ја вашата е адреса</div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"password\"><i class=\"fal fa-lock-alt\"></i></label>\n            <input id=\"password\" type=\"password\" ngModel name=\"password\" #password=\"ngModel\" class=\"form-control\">\n            <div class=\"alert alert-danger\" *ngIf=\"password.touched &&  !password.value\">Ве молиме внесете ја вашата лозинка\n            </div>\n          </div>\n          <button class=\"btn btn-primary\" (click)=\"login(email,password)\">Submit</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin-sign-in/admin-sign-in.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin-sign-in/admin-sign-in.component.ts ***!
  \**********************************************************/
/*! exports provided: AdminSignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminSignInComponent", function() { return AdminSignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminSignInComponent = /** @class */ (function () {
    function AdminSignInComponent(authService) {
        this.authService = authService;
    }
    AdminSignInComponent.prototype.ngOnInit = function () {
    };
    AdminSignInComponent.prototype.login = function (email, password) {
        this.authService.loginUser(email.viewModel, password.viewModel);
        email = password = '';
    };
    AdminSignInComponent.prototype.logout = function () {
        this.authService.logoutUser();
    };
    AdminSignInComponent.prototype.loggedIn = function () {
        this.authService.isloggedIn();
        console.log(this.authService.isloggedIn());
    };
    AdminSignInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sign-in',
            template: __webpack_require__(/*! ./admin-sign-in.component.html */ "./src/app/admin-sign-in/admin-sign-in.component.html"),
            styles: [__webpack_require__(/*! ./admin-sign-in.component.css */ "./src/app/admin-sign-in/admin-sign-in.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AdminSignInComponent);
    return AdminSignInComponent;
}());



/***/ }),

/***/ "./src/app/admin-subdomen-edit/admin-subdomen-edit.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/admin-subdomen-edit/admin-subdomen-edit.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin-subdomen-edit/admin-subdomen-edit.component.html":
/*!************************************************************************!*\
  !*** ./src/app/admin-subdomen-edit/admin-subdomen-edit.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<admin-navbar></admin-navbar>\n<div class=\"container-fluid\" class=\"header-block\"><a [routerLink]=\"['/admin']\"> <span class=\"first\">почетна</span> </a> / \n<a [routerLink]=\"['/admin-subdomen-list']\"> <span >поддомени</span></a> / </div>\n\n<div class=\"admin\">\n  <div class=\"container\">\n    <div class=\"block\">\n  <h1>{{  subdomenData.name  }}</h1>\n      <form>\n        <div class=\"form-group\">\n          <div class=\"col-md-12 row\">\n            <div class=\"col-md-4\">\n              <label for=\"nameSubdomen\">Име на поддомен</label>\n            </div>\n            <div class=\"col-md-8\">\n              <input id=\"nameSubdomen\" type=\"text\" [(ngModel)]=\"subdomen\" name=\"subdomen\" class=\"form-control\" placeholder=\"{{name}}\">\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"col-md-12 row\">\n            <div class=\"col-md-4\">\n              <label for=\"descriptionSubdomen\">Опис</label>\n            </div>\n            <div class=\"col-md-8\">\n              <textarea id=\"descriptionSubdomen\" [(ngModel)]=\"descriptionsubdomen\" type=\"text\" name=\"description\" class=\"form-control\" placeholder=\"{{description}}\"></textarea>\n            </div>\n          </div>\n        </div>\n         <div class=\"form-group\">\n            <div class=\"col-md-12 row\">\n              <div class=\"col-md-4\">\n                <label for=\"subdomen\">Колони за анализа</label>\n              </div>\n              <div class=\"col-md-5 checkbox-box\">\n                <ul>\n                  <li *ngFor=\"let subdomen of subdomensColumns\">\n                    <span>\n                      <input type=\"checkbox\" [checked]=\"frontChecked.indexOf(subdomen.key) >= 0\"  #f type=\"checkbox\" [value]=\"subdomen\" name=\"subdomen\"\n                       (click)=\"getCheckboxVal($event, subdomen.key,  subdomen.subject)\" ></span>\n                      <span> {{ subdomen.subject }}</span>\n                    </li>\n                  </ul>\n                </div>\n                <div class=\"col-md-1\" class=\"required\">*</div>\n              </div>\n            </div>\n        <div class=\"col-md-12\">\n<!--           <button class=\"btn btn-primary\" (click)=\"addSubdomen(subdomen,descriptionsubdomen)\">Submit</button>\n -->          <button class=\"btn btn-primary\"  (click)=\"updateData(idSubdomen, subdomen, descriptionsubdomen)\"> Ажурирај</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin-subdomen-edit/admin-subdomen-edit.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/admin-subdomen-edit/admin-subdomen-edit.component.ts ***!
  \**********************************************************************/
/*! exports provided: AdminSubdomenEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminSubdomenEditComponent", function() { return AdminSubdomenEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _admin_subdomen_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../admin-subdomen.service */ "./src/app/admin-subdomen.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminSubdomenEditComponent = /** @class */ (function () {
    function AdminSubdomenEditComponent(db, route, service) {
        this.db = db;
        this.route = route;
        this.service = service;
        this.subdomensColumns = [];
        this.frontChecked = [];
        this.oldColumnChecked = [];
        this.newColumnChecked = [];
        this.arrayColumns = [{ key: '1rank', subject: 'Ранг' },
            { key: '2grade', subject: 'Оценка' },
            { key: '3avg', subject: 'Просек' }];
        this.subdomensColumns = [{ key: '4women', subject: 'Жени' },
            { key: '5men', subject: 'Мажи' },
            { key: '6w&m', subject: 'Сооднос жени/мажи' },
            { key: '7number', subject: 'Број' },
            { key: '8population', subject: 'Популација' },
            { key: '9rate', subject: 'Стапка' }];
    }
    AdminSubdomenEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var that = this;
        /* this.route.paramMap.subscribe(idParm=>{
            let idSubdomen=idParm.get('idSubdomen');
            this.subdomenDataName=this.db.object('subdomen/'+ idSubdomen).valueChanges().subscribe(objectdata =>
                {
                    this.subdomenDataName=objectdata;
                }
                    
                );
            });*/
        this.route.paramMap.subscribe(function (id) {
            _this.idSubdomen = id.get('idSubdomen');
            /*this.subdomenData=this.service.getSubdomen(this.idSubdomen).subscribe(objectdata =>
            {
                this.subdomenData=objectdata;
            });*/
            _this.subdomenData = _this.service.getSubdomen(_this.idSubdomen);
            _this.subdomenData.forEach(function (objectdata) {
                that.name = objectdata.name;
                that.description = objectdata.description;
                that.frontChecked = Object.keys(objectdata.columns);
                that.oldColumnChecked.push(objectdata.columns);
                that.oldColumnChecked.forEach(function (a) {
                    that.newColumnChecked = Object.keys(a).map(function (key) {
                        return {
                            key: key,
                            subject: a[key]
                        };
                    });
                });
            });
        });
    };
    AdminSubdomenEditComponent.prototype.getCheckboxVal = function (event, key, subject) {
        if (event.target.checked === true) {
            this.newColumnChecked.push({ key: key, subject: subject });
            console.log(this.newColumnChecked);
        }
        else {
            var index = this.newColumnChecked.findIndex(function (p) { return p.key === key; });
            this.newColumnChecked.splice(index, 1);
            console.log(this.newColumnChecked);
            //this.arrayCheckboxRemoveDb.push({key:key,name:name});
        }
    };
    AdminSubdomenEditComponent.prototype.updateData = function (key, newname, newdescription) {
        if (newname == undefined) {
            newname = this.name;
        }
        if (newdescription == undefined) {
            newdescription = this.description;
        }
        var newObjectColumns = this.newColumnChecked.reduce(function (map, obj) { return (map[obj.key] = obj.subject, map); }, {});
        this.service.updateDomen(key, newname, newdescription, newObjectColumns);
    };
    AdminSubdomenEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-subdomen-edit',
            template: __webpack_require__(/*! ./admin-subdomen-edit.component.html */ "./src/app/admin-subdomen-edit/admin-subdomen-edit.component.html"),
            styles: [__webpack_require__(/*! ./admin-subdomen-edit.component.css */ "./src/app/admin-subdomen-edit/admin-subdomen-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _admin_subdomen_service__WEBPACK_IMPORTED_MODULE_3__["AdminSubdomenService"]])
    ], AdminSubdomenEditComponent);
    return AdminSubdomenEditComponent;
}());



/***/ }),

/***/ "./src/app/admin-subdomen-list/admin-subdomen-list.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/admin-subdomen-list/admin-subdomen-list.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin-subdomen-list/admin-subdomen-list.component.html":
/*!************************************************************************!*\
  !*** ./src/app/admin-subdomen-list/admin-subdomen-list.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<admin-navbar></admin-navbar>\n<div class=\"container-fluid\" class=\"header-block\"><a [routerLink]=\"['/admin']\"> <span class=\"first\">почетна</span> /</a></div>\n<div class=\"admin\">\n  <div class=\"container\">\n    <div class=\"block\">\n      <div class=\"action\">\n        <span class=\"action-1\">  \n    <select class='select-option' [(ngModel)]='optionSelected'>\n    \t<option class='option' *ngFor='let option of dropdownOptions' [value]=\"option.id\">{{option.name}}</option>\n    </select>\n\t\t</span>\n        <span class=\"action-2\"><button type=\"button\" class=\"btn btn-default\" (click)=\"removeSubdomen()\">Избриши</button></span>\n        <span class=\"action-3\"><button type=\"button\" class=\"btn btn-default\" (click)=\"redirectNewSubdomen()\">Додади</button></span>\n        <div class=\" error\">{{error}}\n        </div>\n      </div>\n      <ul>\n        <li *ngFor=\"let subdomen of subdomensList | async\">\n          <span> \n\t\t\t<input type=\"checkbox\"  (click)=\"getCheckboxVal($event, subdomen.key)\" ></span>\n          <a [routerLink]=\"['/admin-subdomen',subdomen.key]\"><span> {{ subdomen.val.name }}</span></a> \n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin-subdomen-list/admin-subdomen-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/admin-subdomen-list/admin-subdomen-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: AdminSubdomenListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminSubdomenListComponent", function() { return AdminSubdomenListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_subdomen_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../admin-subdomen.service */ "./src/app/admin-subdomen.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminSubdomenListComponent = /** @class */ (function () {
    function AdminSubdomenListComponent(service, router) {
        this.service = service;
        this.router = router;
        this.dropdownOptions = [{ id: 'select', name: 'Избери' }, { id: 'delete', name: 'Избриши' }];
        this.arrayRemove = [];
        this.subdomensList = service.getSubdomenList();
    }
    AdminSubdomenListComponent.prototype.getCheckboxVal = function (event, key) {
        if (event.target.checked == true) {
            this.arrayRemove.push(key);
        }
        else {
            var index = this.arrayRemove.indexOf(key);
            this.arrayRemove.splice(index, 1);
        }
    };
    AdminSubdomenListComponent.prototype.removeSubdomen = function () {
        var _this = this;
        this.arrayRemove.forEach(function (myKey) {
            if (_this.optionSelected == 'delete') {
                _this.service.removeDomen(myKey);
            }
            else {
                _this.error = "Ве молиме изберете од листата";
            }
        });
    };
    AdminSubdomenListComponent.prototype.redirectNewSubdomen = function () {
        this.router.navigate(['/admin-subdomen']);
    };
    AdminSubdomenListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'admin-subdomen-list',
            template: __webpack_require__(/*! ./admin-subdomen-list.component.html */ "./src/app/admin-subdomen-list/admin-subdomen-list.component.html"),
            styles: [__webpack_require__(/*! ./admin-subdomen-list.component.css */ "./src/app/admin-subdomen-list/admin-subdomen-list.component.css")]
        }),
        __metadata("design:paramtypes", [_admin_subdomen_service__WEBPACK_IMPORTED_MODULE_1__["AdminSubdomenService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminSubdomenListComponent);
    return AdminSubdomenListComponent;
}());



/***/ }),

/***/ "./src/app/admin-subdomen.service.ts":
/*!*******************************************!*\
  !*** ./src/app/admin-subdomen.service.ts ***!
  \*******************************************/
/*! exports provided: AdminSubdomenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminSubdomenService", function() { return AdminSubdomenService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminSubdomenService = /** @class */ (function () {
    function AdminSubdomenService(db, router) {
        this.db = db;
        this.router = router;
        this.itemsRef = db.list('subdomen');
    }
    AdminSubdomenService.prototype.addDomen = function (subdomen, descriptionsubdomen, columns) {
        this.itemsRef.push({ name: subdomen, description: descriptionsubdomen, columns: columns });
        this.router.navigate(['/admin-subdomen-list']);
    };
    AdminSubdomenService.prototype.removeDomen = function (key) {
        this.itemsRef.remove(key);
    };
    AdminSubdomenService.prototype.updateDomen = function (key, newname, newdescription, columns) {
        this.itemsRef.set(key, { name: newname, description: newdescription, columns: columns });
        this.router.navigate(['/admin-subdomen-list']);
    };
    AdminSubdomenService.prototype.getSubdomenList = function () {
        return this.items = this.itemsRef.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (changes) {
            return changes.map(function (c) { return ({ key: c.key, val: c.payload.val() }); });
        }));
    };
    AdminSubdomenService.prototype.getSubdomen = function (fromId) {
        return this.db.object('subdomen/' + fromId).valueChanges();
    };
    AdminSubdomenService.prototype.redirectNewSubomen = function () {
        this.router.navigate(['/admin-subdomen-list']);
    };
    AdminSubdomenService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AdminSubdomenService);
    return AdminSubdomenService;
}());



/***/ }),

/***/ "./src/app/admin-subdomen/admin-subdomen.component.css":
/*!*************************************************************!*\
  !*** ./src/app/admin-subdomen/admin-subdomen.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin-subdomen/admin-subdomen.component.html":
/*!**************************************************************!*\
  !*** ./src/app/admin-subdomen/admin-subdomen.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<admin-navbar></admin-navbar>\n<div class=\"container-fluid\" class=\"header-block\"><a [routerLink]=\"['/admin']\"> <span class=\"first\">почетна</span> </a> / \n  <a [routerLink]=\"['/admin-subdomen-list']\"> <span >поддомени</span></a> / </div>\n\n  <div class=\"admin\">\n    <div class=\"container\">\n      <div class=\"block\">\n        <form>\n          <div class=\"form-group\">\n            <div class=\"col-md-12 row\">\n              <div class=\"col-md-4\">\n                <label for=\"nameSubdomen\">Име на поддомен</label>\n              </div>\n              <div class=\"col-md-7\">\n                <input id=\"nameSubdomen\" type=\"text\" [(ngModel)]=\"subdomen\" name=\"subdomen\" class=\"form-control\">\n              </div>\n              <div class=\"col-md-1\" class=\"required\">*</div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"col-md-12 row\">\n              <div class=\"col-md-4\">\n                <label for=\"descriptionSubdomen\">Опис</label>\n              </div>\n              <div class=\"col-md-7\">\n                <textarea id=\"descriptionSubdomen\" [(ngModel)]=\"descriptionsubdomen\" type=\"text\" name=\"description\" class=\"form-control\"></textarea>\n              </div>\n              <div class=\"col-md-1\" class=\"required\">*</div>\n            </div>\n          </div>\n           <div class=\"form-group\">\n            <div class=\"col-md-12 row\">\n              <div class=\"col-md-4\">\n                <label for=\"subdomen\">Колони за анализа</label>\n              </div>\n              <div class=\"col-md-5 checkbox-box\">\n                <ul>\n                  <li *ngFor=\"let subdomen of subdomensColumns\">\n                    <span>\n                      <input type=\"checkbox\"  (click)=\"getCheckboxVal($event, subdomen.key,  subdomen.subject)\" ></span>\n                      <span> {{ subdomen.subject }}</span>\n                    </li>\n                  </ul>\n                </div>\n                <div class=\"col-md-1\" class=\"required\">*</div>\n              </div>\n            </div>\n\n             <div class=\"form-group\">\n            <div class=\"col-md-12 row\">\n              <div class=\"col-md-12\">\n                <label for=\"labelSubdomen\"><i class=\"fas fa-info-circle\"></i> * Доколку ви треба празен ред составен со наслов на подколони, тогаш насловот на подоменот/индикаторот треба да ви е LABELnumber пр: label2</label>\n              </div>\n             \n               \n              </div>\n            </div>\n          <div class=\"error\">{{error}}</div>\n          <div class=\"col-md-12\">\n            <button class=\"btn btn-primary\" (click)=\"addSubdomen(subdomen,descriptionsubdomen)\">Submit</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/admin-subdomen/admin-subdomen.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin-subdomen/admin-subdomen.component.ts ***!
  \************************************************************/
/*! exports provided: AdminSubdomenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminSubdomenComponent", function() { return AdminSubdomenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_subdomen_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../admin-subdomen.service */ "./src/app/admin-subdomen.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminSubdomenComponent = /** @class */ (function () {
    function AdminSubdomenComponent(service) {
        this.service = service;
        this.subdomensColumns = [];
        this.arrayColumns = [{ key: '1rank', subject: 'Ранг' },
            { key: '2grade', subject: 'Оценка' },
            { key: '3avg', subject: 'Просек' }];
        this.subdomensColumns = [{ key: '4women', subject: 'Жени' },
            { key: '5men', subject: 'Мажи' },
            { key: '6w&m', subject: 'Сооднос жени/мажи' },
            { key: '7number', subject: 'Број' },
            { key: '8population', subject: 'Популација' },
            { key: '9rate', subject: 'Стапка' }];
    }
    AdminSubdomenComponent.prototype.getCheckboxVal = function (event, key, subject) {
        if (event.target.checked == true) {
            this.arrayColumns.push({ key: key, subject: subject });
            console.log(this.arrayColumns);
        }
        else {
            var index = this.arrayColumns.indexOf(key);
            this.arrayColumns.splice(index, 1);
            console.log(this.arrayColumns);
        }
    };
    AdminSubdomenComponent.prototype.addSubdomen = function (name, description) {
        var newDomenSubdomen = this.arrayColumns.reduce(function (map, obj) { return (map[obj.key] = obj.subject, map); }, {});
        if (name != undefined && this.arrayColumns.length != 0) {
            console.log(newDomenSubdomen);
            this.service.addDomen(name, description, newDomenSubdomen);
            this.error = "";
        }
        else {
            this.error = "Ве молиме пополнете ги полињата означени со *";
        }
    };
    AdminSubdomenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-subdomen',
            template: __webpack_require__(/*! ./admin-subdomen.component.html */ "./src/app/admin-subdomen/admin-subdomen.component.html"),
            styles: [__webpack_require__(/*! ./admin-subdomen.component.css */ "./src/app/admin-subdomen/admin-subdomen.component.css")]
        }),
        __metadata("design:paramtypes", [_admin_subdomen_service__WEBPACK_IMPORTED_MODULE_1__["AdminSubdomenService"]])
    ], AdminSubdomenComponent);
    return AdminSubdomenComponent;
}());



/***/ }),

/***/ "./src/app/admin-year-edit/admin-year-edit.component.css":
/*!***************************************************************!*\
  !*** ./src/app/admin-year-edit/admin-year-edit.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin-year-edit/admin-year-edit.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin-year-edit/admin-year-edit.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<admin-navbar></admin-navbar>\n<div class=\"container-fluid\" class=\"header-block\"><a [routerLink]=\"['/admin']\"> <span class=\"first\">почетна</span> </a> / \n  <a [routerLink]=\"['/admin-year-list']\"> <span >години</span></a> / </div>\n  <div class=\"admin\">\n    <div class=\"container\">\n      <div class=\"block\">\n        <form>\n          <div class=\"form-group\">\n            <div class=\"col-md-12 row\">\n              <div class=\"col-md-4\">\n                <label for=\"nameDomen\">Година </label>\n              </div>\n              <div class=\"col-md-5\">\n                <input id=\"nameDomen\" type=\"number\" [(ngModel)]=\"year\" name=\"year\" class=\"form-control\" placeholder=\"{{ year }}\">\n              </div>\n            </div>\n          </div>\n\n          <!-- old code -->\n          <div *ngIf=\"year==2016\">\n        <div class=\"form-group\">\n          <div class=\"col-md-12 row\">\n            <div class=\"col-md-4\">\n              <label for=\"subdomen\">Домен</label>\n            </div>\n            <div class=\"col-md-5 checkbox-box\">\n              <ul>\n                <li *ngFor=\"let domen of domeni1 | async\">\n                 <span>\n               \n     \t\t\t\t <input [checked]=\"checkedValueDomeni.indexOf(domen.key) >= 0\"  #f type=\"checkbox\" [value]=\"domen\" name=\"domen\"  \n     \t\t\t\t (click)=\"getCheckboxValDomen($event, domen.key,  domen.val.name)\" >\n     \t\t\t\t   </span>\n     \t\t\t\t  <span> {{ domen.val.name }}</span>\n              \n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n\n\n         <div class=\"form-group\">\n          <div class=\"col-md-12 row\">\n            <div class=\"col-md-4\">\n              <label for=\"subdomen\">Субдомени</label>\n            </div>\n            <div class=\"col-md-5 checkbox-box\">\n              <ul>\n                <li *ngFor=\"let subdomen of subdomeni | async\">\n                 <span>\n               \n             <input [checked]=\"checkedValueSubdomeni.indexOf(subdomen.key) >= 0\"  #f type=\"checkbox\" [value]=\"subdomen\" name=\"subdomen\"  \n             (click)=\"getCheckboxValSubdomen($event, subdomen.key,  subdomen.val.name)\" >\n               </span>\n              <span> {{ subdomen.val.name }}</span>\n             \n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n        </div>\n        <!-- end old code 2016 -->\n\n<div *ngIf=\"year>2016\">\n        <div class=\"form-group\">\n          <div class=\"col-md-12 row\">\n            <div class=\"col-md-4\">\n              <label for=\"subdomen\">Домен</label>\n            </div>\n            <div class=\"col-md-7 checkbox-box\" style=\"height: 100%!important\">\n              <ul >\n                <li *ngFor=\"let domen of domeni; let i = index \">\n                  <span style=\"font-weight: bold;padding-bottom: 10px;display: block;background:#eff4fe\"> \n                   <!--   <input type=\"checkbox\" (click)=\"getCheckboxValDomen($event, domen.key,  domen.val.name)\"> -->\n\n                   {{domen.val.name}} </span>\n\n                   <ul style=\"padding-left: 10px\"> \n                    <li *ngFor=\"let subdomen of domen.subs\">\n                      <span>\n\n                       <input [checked]=\"checkedValueSubdomeni.indexOf(subdomen.key) >= 0\"  #f type=\"checkbox\" [value]=\"subdomen\" name=\"subdomen\"  \n                       (click)=\"getCheckboxValSubDomen($event, domen, subdomen, subdomen.key,  subdomen.value.name, domen.key, domen.val.name)\" >\n                     </span>\n\n                     <span>{{subdomen.value.name}}</span>\n                   </li>\n                 </ul>\n\n\n\n               </li>\n             </ul>\n           </div>\n           \n         </div>\n       </div>\n\n       </div>\n\n\n\n       <div class=\"col-md-12\">\n        <button class=\"btn btn-primary\" (click)=\"updateYear(idYear, year)\">Submit</button>\n      </div>\n    </form>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin-year-edit/admin-year-edit.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin-year-edit/admin-year-edit.component.ts ***!
  \**************************************************************/
/*! exports provided: AdminYearEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminYearEditComponent", function() { return AdminYearEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_year_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin-year.service */ "./src/app/admin-year.service.ts");
/* harmony import */ var _admin_domen_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../admin-domen.service */ "./src/app/admin-domen.service.ts");
/* harmony import */ var _admin_subdomen_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../admin-subdomen.service */ "./src/app/admin-subdomen.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminYearEditComponent = /** @class */ (function () {
    function AdminYearEditComponent(route, service, serviceDomen, serviceSubdomen) {
        this.route = route;
        this.service = service;
        this.serviceDomen = serviceDomen;
        this.serviceSubdomen = serviceSubdomen;
        this.oldDomeniArray = [];
        this.oldSubdomeniArray = [];
        this.checkedValueDomeni = [];
        this.checkedValueSubdomeni = [];
        this.newDomenCheckbox = [];
        this.newSubdomenCheckbox = [];
        this.arrayDomen = [];
        this.newPosition = 0;
        this.arrayPosition = [];
    }
    AdminYearEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var that = this;
        // this.getDomen();
        // this.getSubdomen();
        this.getDomenWithSubdomen();
        this.route.paramMap.subscribe(function (id) {
            _this.idYear = id.get('idYear');
            _this.yearData = _this.service.getYear(_this.idYear);
            _this.yearData.forEach(function (a) {
                that.year = id.get('idYear');
                //ova da se vrati
                for (var d in a.domeni) {
                    var tempValue = a.domeni[d];
                    var temp = { domenkey: d };
                    for (var key in tempValue) {
                        var value = tempValue[key];
                        temp[key] = value;
                        var subdomenArray = [];
                        // console.log(temp)
                        for (var sun in tempValue.subdomeni) {
                            var subdomen = tempValue.subdomeni[sun];
                            //console.log(subdomen);
                            var temp1 = { subdomenkey: sun };
                            for (var sunkey in subdomen) {
                                var sunkeyval = subdomen[sunkey];
                                temp1[sunkey] = sunkeyval;
                            }
                            subdomenArray.push(temp1);
                        }
                        temp["subdomeni"] = subdomenArray;
                        //console.log(temp);
                    }
                    that.arrayDomen.push(temp);
                }
                that.checkedValueDomeni = Object.keys(a.domeni);
                that.oldDomeniArray.push(a.domeni);
                that.oldDomeniArray.forEach(function (domeni) {
                    that.newDomenCheckbox = Object.keys(domeni).map(function (key) {
                        return {
                            key: key,
                            name: a[key]
                        };
                    });
                });
                var subdomenObject = Object.entries(a.domeni).reduce(function (subdomen, key) {
                    subdomen;
                    return subdomen;
                }, {});
                var list = Object.keys(a.domeni).reduce(function (acc, key) {
                    acc[key] = a.domeni[key].subdomeni;
                    return acc;
                }, {});
                var result = [];
                for (var domenKey in list) {
                    // console.log(domenKey);
                    var tempDomen = list[domenKey];
                    // console.log(tempDomen);
                    for (var subKey in tempDomen) {
                        result.push(subKey);
                    }
                }
                if (subdomenObject) {
                    that.checkedValueSubdomeni = result;
                }
            });
        });
    };
    //old code
    // getDomen(){
    // 	//this.domeni1=this.serviceDomen.getDomenList();
    // }
    // getSubdomen(){
    // 	this.subdomeni=this.serviceSubdomen.getSubdomenList();
    // }
    // getCheckboxValDomen(event, key, name){
    // 	if(event.target.checked===true){
    // 		this.newDomenCheckbox.push({key:key, name:name});
    // 	}else{
    // 		var index=this.newDomenCheckbox.findIndex(p => p.key == key);
    // 		this.newDomenCheckbox.splice(index, 1);
    // 	}
    // }
    // getCheckboxValSubdomen(event, key, name){
    // 	if(event.target.checked===true){
    // 		this.newSubdomenCheckbox.push({key:key, name:name});
    // 	}else{
    // 		var index=this.newSubdomenCheckbox.findIndex(p => p.key == key);
    // 		this.newSubdomenCheckbox.splice(index, 1);
    // 	}
    // }
    //end old code
    //new code for 2021
    AdminYearEditComponent.prototype.getCheckboxValSubDomen = function (event, domen, subdomen, subdomenkey, subdomenname, domenkey, domenname) {
        var _this = this;
        var newPosition;
        if (event.target.checked == true) {
            var mainindex = this.arrayDomen.findIndex(function (x) { return x.domenkey === domenkey; });
            if (mainindex != -1) {
                var array = [];
                var that = this;
                var currentDomen = this.arrayDomen[mainindex];
                currentDomen.subdomeni.forEach(function (a) {
                    array.push(a.position);
                    array.sort();
                });
                var m = array[array.length - 1];
                newPosition = m + 1;
            }
            if (mainindex == -1) {
                this.arrayDomen.push({ domenkey: domenkey, domenname: domenname, columns: [domen.val.columns], subdomeni: [{ subdomenkey: subdomenkey, subdomenname: subdomenname, columns: subdomen.value.columns, position: newPosition }] });
            }
            else {
                this.arrayDomen.forEach(function (value, index) {
                    //console.log(subdomen);
                    if (value.domenkey === domenkey) {
                        _this.arrayDomen[index].subdomeni.push({ subdomenkey: subdomenkey, name: subdomenname, columns: subdomen.value.columns, position: newPosition });
                    }
                });
            }
        }
        else {
            this.arrayDomen.forEach(function (value, index) {
                value.subdomeni.forEach(function (a, i) {
                    if (a.subdomenkey == subdomenkey) {
                        _this.arrayDomen[index].subdomeni.splice(i, 1);
                    }
                });
                if (value.subdomeni.length == 0) {
                    _this.arrayDomen.splice(mainindex, 1);
                }
                else {
                    //console.log(value.subdomeni.length);
                }
            });
        }
        this.changeForFirebase(this.arrayDomen);
    };
    AdminYearEditComponent.prototype.changeForFirebase = function (array) {
        var result = {};
        var columns = {};
        array.forEach(function (element, index) {
            var subdomains = {};
            //columns fo subdomen
            element.subdomeni.forEach(function (el, ind) {
                var columns = {};
                subdomains[el.subdomenkey] = { name: el.name, columns: el.columns, position: el.position };
            });
            result[element.domenkey] = { name: element.name, subdomeni: subdomains, columns: element.columns };
        });
        result = { domeni: result };
        this.newData = result;
        //console.log(result);
    };
    AdminYearEditComponent.prototype.getDomenWithSubdomen = function () {
        var _this = this;
        this.serviceDomen.getDomenList().subscribe(function (data) {
            _this.domeni = data;
            for (var domenKey in _this.domeni) {
                var domen = _this.domeni[domenKey];
                var subs = [];
                var subdomeni = domen.val.subdomeni;
                for (var key in subdomeni) {
                    var value = subdomeni[key];
                    subs.push({ "key": key, "value": subdomeni[key], "position": subdomeni[key].position });
                }
                _this.domeni[domenKey].subs = subs;
            }
        });
    };
    AdminYearEditComponent.prototype.updateYear = function (key, newname) {
        if (newname == undefined) {
            newname = this.year;
        }
        this.service.updateYear(key, newname, this.newData);
    };
    AdminYearEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-year-edit',
            template: __webpack_require__(/*! ./admin-year-edit.component.html */ "./src/app/admin-year-edit/admin-year-edit.component.html"),
            styles: [__webpack_require__(/*! ./admin-year-edit.component.css */ "./src/app/admin-year-edit/admin-year-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _admin_year_service__WEBPACK_IMPORTED_MODULE_2__["AdminYearService"], _admin_domen_service__WEBPACK_IMPORTED_MODULE_3__["AdminDomenService"], _admin_subdomen_service__WEBPACK_IMPORTED_MODULE_4__["AdminSubdomenService"]])
    ], AdminYearEditComponent);
    return AdminYearEditComponent;
}());



/***/ }),

/***/ "./src/app/admin-year-list/admin-year-list.component.css":
/*!***************************************************************!*\
  !*** ./src/app/admin-year-list/admin-year-list.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin-year-list/admin-year-list.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin-year-list/admin-year-list.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<admin-navbar></admin-navbar>\n<div class=\"container-fluid\" class=\"header-block\"><a [routerLink]=\"['/admin']\"> <span class=\"first\">почетна</span> </a> / \n</div>\n<div class=\"admin\">\n  <div class=\"container\">\n    <div class=\"block\">\n      <div class=\"action\">\n        <span class=\"action-1\">  \n    <select class='select-option' [(ngModel)]='optionSelected'>\n    \t<option class='option' *ngFor='let option of dropdownOptions' [value]=\"option.id\">{{option.name}}</option>\n    </select>\n\t\t</span>\n        <span class=\"action-2\"><button type=\"button\" class=\"btn btn-default\" (click)=\"removeYear()\">Избриши</button></span>\n        <span class=\"action-3\"><button type=\"button\" class=\"btn btn-default\" (click)=\"redirectNewYear()\">Додади</button></span>\n        <div class=\" error\">{{error}}\n        </div>\n      </div>\n      <ul>\n        <li *ngFor=\"let year of yearsList | async\">\n          <span> \n\t\t\t<input type=\"checkbox\"  (click)=\"getCheckboxVal($event, year.key)\" ></span>\n          <a [routerLink]=\"['/admin-year',year.key]\"><span> {{ year.val }}</span></a> \n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin-year-list/admin-year-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin-year-list/admin-year-list.component.ts ***!
  \**************************************************************/
/*! exports provided: AdminYearListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminYearListComponent", function() { return AdminYearListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_year_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../admin-year.service */ "./src/app/admin-year.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminYearListComponent = /** @class */ (function () {
    function AdminYearListComponent(service, router) {
        this.service = service;
        this.router = router;
        this.dropdownOptions = [{ id: 'select', name: 'Избери' }, { id: 'delete', name: 'Избриши' }];
        this.arrayRemove = [];
        this.yearsList = service.getYearList();
    }
    AdminYearListComponent.prototype.ngOnInit = function () {
    };
    AdminYearListComponent.prototype.getCheckboxVal = function (event, key) {
        if (event.target.checked == true) {
            this.arrayRemove.push(key);
        }
        else {
            var index = this.arrayRemove.indexOf(key);
            this.arrayRemove.splice(index, 1);
        }
    };
    AdminYearListComponent.prototype.removeYear = function () {
        var _this = this;
        this.arrayRemove.forEach(function (myKey) {
            if (_this.optionSelected == 'delete') {
                _this.service.removeYear(myKey);
            }
            else {
                _this.error = "Ве молиме изберете од листата";
            }
        });
    };
    AdminYearListComponent.prototype.redirectNewYear = function () {
        this.router.navigate(['/admin-year']);
    };
    AdminYearListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-year-list',
            template: __webpack_require__(/*! ./admin-year-list.component.html */ "./src/app/admin-year-list/admin-year-list.component.html"),
            styles: [__webpack_require__(/*! ./admin-year-list.component.css */ "./src/app/admin-year-list/admin-year-list.component.css")]
        }),
        __metadata("design:paramtypes", [_admin_year_service__WEBPACK_IMPORTED_MODULE_1__["AdminYearService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminYearListComponent);
    return AdminYearListComponent;
}());



/***/ }),

/***/ "./src/app/admin-year.service.ts":
/*!***************************************!*\
  !*** ./src/app/admin-year.service.ts ***!
  \***************************************/
/*! exports provided: AdminYearService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminYearService", function() { return AdminYearService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminYearService = /** @class */ (function () {
    function AdminYearService(db, router) {
        this.db = db;
        this.router = router;
        this.itemsYear = db.list('year');
    }
    AdminYearService.prototype.addYear = function (year, domeni) {
        this.itemYear = this.db.object('year/' + year);
        this.itemYear.set({ year: year, domeni: domeni.domeni });
        this.router.navigate(['/admin-year-list']);
    };
    AdminYearService.prototype.getYearList = function () {
        return this.items = this.itemsYear.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (changes) {
            return changes.map(function (c) { return ({ key: c.key, val: c.payload.val().year }); });
        }));
    };
    AdminYearService.prototype.getLastYear = function () {
        return this.itemLastYear = this.db.list('/year', function (ref) { return ref.orderByKey().limitToLast(1); }).snapshotChanges().map(function (change) {
            return change;
        });
    };
    AdminYearService.prototype.getSpecificYear = function (year) {
        return this.db.object('year/' + year + '/domeni').valueChanges();
    };
    AdminYearService.prototype.removeYear = function (key) {
        this.itemsYear.remove(key);
    };
    AdminYearService.prototype.getYear = function (fromId) {
        return this.db.object('year/' + fromId).valueChanges();
    };
    AdminYearService.prototype.updateYear = function (key, year, domeni) {
        this.itemYear = this.db.object('year/' + key);
        this.itemYear.set({ year: year, domeni: domeni.domeni });
        this.router.navigate(['/admin-year-list']);
    };
    AdminYearService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminYearService);
    return AdminYearService;
}());



/***/ }),

/***/ "./src/app/admin-year/admin-year.component.css":
/*!*****************************************************!*\
  !*** ./src/app/admin-year/admin-year.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin-year/admin-year.component.html":
/*!******************************************************!*\
  !*** ./src/app/admin-year/admin-year.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<admin-navbar></admin-navbar>\n<div class=\"container-fluid\" class=\"header-block\"><a [routerLink]=\"['/admin']\"> <span class=\"first\">почетна</span> </a> / \n</div>\n\n<div class=\"admin\">\n  <div class=\"container\">\n    <div class=\"block\">\n      <form>\n        <div class=\"form-group\">\n          <div class=\"col-md-12 row\">\n            <div class=\"col-md-4\">\n              <label for=\"nameDomen\">Година</label>\n            </div>\n            <div class=\"col-md-5\">\n              <input id=\"nameDomen\" type=\"number\" [(ngModel)]=\"year\" name=\"year\" class=\"form-control\">\n            </div>\n            <div class=\"col-md-1\" class=\"required\">*</div>\n          </div>\n\n        </div>\n        <div class=\"form-group\">\n          <div class=\"col-md-12 info_circle\"><i class=\"fas fa-info-circle\"></i> * Тука ве молиме запазете го редоследот на селектирање на подомените, како ги селектирате, по тој редослед би се прикажувале на почетна страна </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"col-md-12 row\">\n            <div class=\"col-md-4\">\n              <label for=\"subdomen\">Домен</label>\n            </div>\n            <div class=\"col-md-7 checkbox-box\" style=\"height: 100%!important\">\n              <ul >\n                <li *ngFor=\"let domen of domeni1; let i = index \">\n                  <span style=\"font-weight: bold;padding-bottom: 10px;display: block;background:#eff4fe\"> \n                 <!--   <input type=\"checkbox\" (click)=\"getCheckboxValDomen($event, domen.key,  domen.val.name)\"> -->\n\n                   {{domen.val.name}} </span>\n\n                   <ul style=\"padding-left: 10px\"> \n                    <li *ngFor=\"let subdomen of domen.subs\">\n                      <input type=\"checkbox\" (click)=\"getCheckboxValSubDomen($event, domen, subdomen, subdomen.key,  subdomen.value.name, domen.key, domen.val.name)\">\n\n                      <span>{{subdomen.value.name}}</span>\n                    </li>\n                  </ul>\n\n\n\n                </li>\n              </ul>\n            </div>\n            <div class=\"col-md-1\" class=\"required\">*</div>\n          </div>\n        </div>\n\n\n\n\n        <div class=\"error\">{{error}}</div>\n\n        <div class=\"col-md-12\">\n          <button class=\"btn btn-primary\" (click)=\"addYear(year)\">Submit</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin-year/admin-year.component.ts":
/*!****************************************************!*\
  !*** ./src/app/admin-year/admin-year.component.ts ***!
  \****************************************************/
/*! exports provided: AdminYearComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminYearComponent", function() { return AdminYearComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_year_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../admin-year.service */ "./src/app/admin-year.service.ts");
/* harmony import */ var _admin_domen_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin-domen.service */ "./src/app/admin-domen.service.ts");
/* harmony import */ var _admin_subdomen_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../admin-subdomen.service */ "./src/app/admin-subdomen.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminYearComponent = /** @class */ (function () {
    function AdminYearComponent(service, serviceDomen, serviceSubDomen) {
        this.service = service;
        this.serviceDomen = serviceDomen;
        this.serviceSubDomen = serviceSubDomen;
        this.arrayYear_domen_subdomen = [];
        this.arrayDomen = [];
        this.arraySubdomen = [];
        this.subdomeni = [];
        this.array = [];
        this.count = 0;
    }
    AdminYearComponent.prototype.ngOnInit = function () {
        //this.getDomen();
        //this.getSubdomen();
        this.getDomenWithSubdomen();
    };
    AdminYearComponent.prototype.getCheckboxValDomen = function (event, key, name) {
        if (event.target.checked == true) {
            this.arrayDomen.push({ key: key, name: name });
            console.log(this.arrayDomen);
            //this.service.addSubdomenRealtion(key,name);
        }
        else {
            var index = this.arrayDomen.indexOf(key);
            this.arrayDomen.splice(index, 1);
            console.log(index);
            //this.service.removeSubdomen(key);
        }
    };
    AdminYearComponent.prototype.getCheckboxValSubDomen = function (event, domen, subdomen, subdomenkey, subdomenname, domenkey, domenname) {
        var _this = this;
        if (event.target.checked == true) {
            this.count += 1;
            var mainindex = this.arrayDomen.findIndex(function (x) { return x.domenkey === domenkey; });
            if (mainindex == -1) {
                this.arrayDomen.push({ domenkey: domenkey, domenname: domenname, columns: domen.val.columns, subdomeni: [{ subdomenkey: subdomenkey, subdomenname: subdomenname, columns: subdomen.value.columns, position: this.count }] });
            }
            else {
                this.arrayDomen.forEach(function (value, index) {
                    if (value.domenkey === domenkey) {
                        _this.arrayDomen[index].subdomeni.push({ subdomenkey: subdomenkey, subdomenname: subdomenname, columns: subdomen.value.columns, position: _this.count });
                    }
                });
            }
        }
        else {
            this.arrayDomen.forEach(function (value, index) {
                value.subdomeni.forEach(function (a, i) {
                    if (a.subdomenkey == subdomenkey) {
                        _this.arrayDomen[index].subdomeni.splice(i, 1);
                    }
                });
                if (value.subdomeni.length == 0) {
                    _this.arrayDomen.splice(mainindex, 1);
                }
                else {
                }
            });
        }
    };
    AdminYearComponent.prototype.addYear = function (name) {
        var result = {};
        var columns = {};
        this.arrayDomen.forEach(function (element, index) {
            var subdomains = {};
            var subArray = [];
            //columns fo subdomen
            element.subdomeni.forEach(function (el, ind) {
                var columns = {};
                subdomains[el.subdomenkey] = { name: el.subdomenname, columns: el.columns, position: el.position };
            });
            result[element.domenkey] = { name: element.domenname, subdomeni: subdomains, columns: element.columns };
        });
        result = { domeni: result };
        console.log(result);
        if (name != undefined && this.arrayDomen.length != 0) {
            this.idYear = this.service.addYear(name, result);
            this.error = '';
        }
        else {
            this.error = 'Ве молиме пополнете ги полињата означени со *';
        }
        //this.arrayRemove.forEach(function (domenNew) {
        //that.service.addDomenYearRealtion(that.idYear, domenNew.key, domenNew.name);
        //that.service.addDomenYearRealtion(domenNew.key,that.idYear,name);
        //});
    };
    AdminYearComponent.prototype.getDomenWithSubdomen = function () {
        var _this = this;
        this.serviceDomen.getDomenList().subscribe(function (data) {
            _this.domeni1 = data;
            for (var domenKey in _this.domeni1) {
                var domen = _this.domeni1[domenKey];
                var subs = [];
                var subdomeni = domen.val.subdomeni;
                for (var key in subdomeni) {
                    var value = subdomeni[key];
                    //console.log({"key":key,"value":subdomeni[key]});
                    subs.push({ "key": key, "value": subdomeni[key] });
                }
                _this.domeni1[domenKey].subs = subs;
                //console.log(this.domeni1);
            }
        });
    };
    AdminYearComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-year',
            template: __webpack_require__(/*! ./admin-year.component.html */ "./src/app/admin-year/admin-year.component.html"),
            styles: [__webpack_require__(/*! ./admin-year.component.css */ "./src/app/admin-year/admin-year.component.css")]
        }),
        __metadata("design:paramtypes", [_admin_year_service__WEBPACK_IMPORTED_MODULE_1__["AdminYearService"], _admin_domen_service__WEBPACK_IMPORTED_MODULE_2__["AdminDomenService"], _admin_subdomen_service__WEBPACK_IMPORTED_MODULE_3__["AdminSubdomenService"]])
    ], AdminYearComponent);
    return AdminYearComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>\n<!-- <ul>\n    <li *ngFor=\"let item of courses | async\">\n       {{ item  }}\n    </li>\n    <button (click)=\"addCourses()\">button</button>\n     <button (click)=\"addItem(courses5)\">items</button>\n  </ul> -->"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(db) {
        this.title = 'app';
    }
    ;
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: highchartsFactory, AppModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "highchartsFactory", function() { return highchartsFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _admin_subdomen_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin-subdomen.service */ "./src/app/admin-subdomen.service.ts");
/* harmony import */ var _municipality_municipality_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./municipality/municipality.component */ "./src/app/municipality/municipality.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _admin_navbar_admin_navbar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./admin-navbar/admin-navbar.component */ "./src/app/admin-navbar/admin-navbar.component.ts");
/* harmony import */ var _admin_sign_in_admin_sign_in_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./admin-sign-in/admin-sign-in.component */ "./src/app/admin-sign-in/admin-sign-in.component.ts");
/* harmony import */ var _admin_domen_admin_domen_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./admin-domen/admin-domen.component */ "./src/app/admin-domen/admin-domen.component.ts");
/* harmony import */ var _admin_subdomen_admin_subdomen_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./admin-subdomen/admin-subdomen.component */ "./src/app/admin-subdomen/admin-subdomen.component.ts");
/* harmony import */ var _admin_subdomen_list_admin_subdomen_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./admin-subdomen-list/admin-subdomen-list.component */ "./src/app/admin-subdomen-list/admin-subdomen-list.component.ts");
/* harmony import */ var _admin_subdomen_edit_admin_subdomen_edit_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./admin-subdomen-edit/admin-subdomen-edit.component */ "./src/app/admin-subdomen-edit/admin-subdomen-edit.component.ts");
/* harmony import */ var _admin_domen_list_admin_domen_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./admin-domen-list/admin-domen-list.component */ "./src/app/admin-domen-list/admin-domen-list.component.ts");
/* harmony import */ var _admin_domen_edit_admin_domen_edit_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./admin-domen-edit/admin-domen-edit.component */ "./src/app/admin-domen-edit/admin-domen-edit.component.ts");
/* harmony import */ var _admin_municipality_admin_municipality_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./admin-municipality/admin-municipality.component */ "./src/app/admin-municipality/admin-municipality.component.ts");
/* harmony import */ var _admin_municipality_list_admin_municipality_list_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./admin-municipality-list/admin-municipality-list.component */ "./src/app/admin-municipality-list/admin-municipality-list.component.ts");
/* harmony import */ var _admin_municipality_edit_admin_municipality_edit_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./admin-municipality-edit/admin-municipality-edit.component */ "./src/app/admin-municipality-edit/admin-municipality-edit.component.ts");
/* harmony import */ var _admin_year_admin_year_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./admin-year/admin-year.component */ "./src/app/admin-year/admin-year.component.ts");
/* harmony import */ var _admin_year_list_admin_year_list_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./admin-year-list/admin-year-list.component */ "./src/app/admin-year-list/admin-year-list.component.ts");
/* harmony import */ var _admin_year_edit_admin_year_edit_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./admin-year-edit/admin-year-edit.component */ "./src/app/admin-year-edit/admin-year-edit.component.ts");
/* harmony import */ var _admin_els_municipality_admin_els_municipality_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./admin-els-municipality/admin-els-municipality.component */ "./src/app/admin-els-municipality/admin-els-municipality.component.ts");
/* harmony import */ var angular2_highcharts__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! angular2-highcharts */ "./node_modules/angular2-highcharts/index.js");
/* harmony import */ var angular2_highcharts__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(angular2_highcharts__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var angular2_highcharts_dist_HighchartsService__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! angular2-highcharts/dist/HighchartsService */ "./node_modules/angular2-highcharts/dist/HighchartsService.js");
/* harmony import */ var angular2_highcharts_dist_HighchartsService__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(angular2_highcharts_dist_HighchartsService__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _municipality_list_municipality_list_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./municipality-list/municipality-list.component */ "./src/app/municipality-list/municipality-list.component.ts");
/* harmony import */ var angular_2_dropdown_multiselect__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! angular-2-dropdown-multiselect */ "./node_modules/angular-2-dropdown-multiselect/esm5/angular-2-dropdown-multiselect.js");
/* harmony import */ var _municipality_compare_municipality_compare_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./municipality-compare/municipality-compare.component */ "./src/app/municipality-compare/municipality-compare.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _orderBy_pipe__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./orderBy.pipe */ "./src/app/orderBy.pipe.ts");
/* harmony import */ var _orderByMunRegion_pipe__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./orderByMunRegion.pipe */ "./src/app/orderByMunRegion.pipe.ts");
/* harmony import */ var _admin_els_municipality_list_admin_els_municipality_list_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./admin-els-municipality-list/admin-els-municipality-list.component */ "./src/app/admin-els-municipality-list/admin-els-municipality-list.component.ts");
/* harmony import */ var _admin_region_admin_region_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./admin-region/admin-region.component */ "./src/app/admin-region/admin-region.component.ts");
/* harmony import */ var _admin_region_list_admin_region_list_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./admin-region-list/admin-region-list.component */ "./src/app/admin-region-list/admin-region-list.component.ts");
/* harmony import */ var _admin_region_edit_admin_region_edit_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./admin-region-edit/admin-region-edit.component */ "./src/app/admin-region-edit/admin-region-edit.component.ts");
/* harmony import */ var _about_index_about_index_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./about-index/about-index.component */ "./src/app/about-index/about-index.component.ts");
/* harmony import */ var _metodology_page_metodology_page_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./metodology-page/metodology-page.component */ "./src/app/metodology-page/metodology-page.component.ts");
/* harmony import */ var _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./about-page/about-page.component */ "./src/app/about-page/about-page.component.ts");
/* harmony import */ var _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./contact-page/contact-page.component */ "./src/app/contact-page/contact-page.component.ts");
/* harmony import */ var _admin_els_municipality_edit_admin_els_municipality_edit_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./admin-els-municipality-edit/admin-els-municipality-edit.component */ "./src/app/admin-els-municipality-edit/admin-els-municipality-edit.component.ts");
/* harmony import */ var _dictionary_page_dictionary_page_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./dictionary-page/dictionary-page.component */ "./src/app/dictionary-page/dictionary-page.component.ts");
/* harmony import */ var _dictionary_button_page_dictionary_button_page_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./dictionary-button-page/dictionary-button-page.component */ "./src/app/dictionary-button-page/dictionary-button-page.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/esm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/esm5/ngx-translate-http-loader.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












/*auth*/








































// import ngx-translate and the http loader


function highchartsFactory() {
    var hc = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
    var dd = __webpack_require__(/*! highcharts/modules/map */ "./node_modules/highcharts/modules/map.js");
    dd(hc);
    return hc;
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _auth_auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _municipality_municipality_component__WEBPACK_IMPORTED_MODULE_15__["MunicipalityComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_16__["NavigationComponent"],
                _admin_navbar_admin_navbar_component__WEBPACK_IMPORTED_MODULE_17__["AdminNavbarComponent"],
                _admin_sign_in_admin_sign_in_component__WEBPACK_IMPORTED_MODULE_18__["AdminSignInComponent"],
                _admin_domen_admin_domen_component__WEBPACK_IMPORTED_MODULE_19__["AdminDomenComponent"],
                _admin_subdomen_admin_subdomen_component__WEBPACK_IMPORTED_MODULE_20__["AdminSubdomenComponent"],
                _admin_subdomen_list_admin_subdomen_list_component__WEBPACK_IMPORTED_MODULE_21__["AdminSubdomenListComponent"],
                _admin_subdomen_edit_admin_subdomen_edit_component__WEBPACK_IMPORTED_MODULE_22__["AdminSubdomenEditComponent"],
                _admin_domen_list_admin_domen_list_component__WEBPACK_IMPORTED_MODULE_23__["AdminDomenListComponent"],
                _admin_domen_edit_admin_domen_edit_component__WEBPACK_IMPORTED_MODULE_24__["AdminDomenEditComponent"],
                _admin_municipality_admin_municipality_component__WEBPACK_IMPORTED_MODULE_25__["AdminMunicipalityComponent"],
                _admin_municipality_list_admin_municipality_list_component__WEBPACK_IMPORTED_MODULE_26__["AdminMunicipalityListComponent"],
                _admin_municipality_edit_admin_municipality_edit_component__WEBPACK_IMPORTED_MODULE_27__["AdminMunicipalityEditComponent"],
                _admin_year_admin_year_component__WEBPACK_IMPORTED_MODULE_28__["AdminYearComponent"],
                _admin_year_list_admin_year_list_component__WEBPACK_IMPORTED_MODULE_29__["AdminYearListComponent"],
                _admin_year_edit_admin_year_edit_component__WEBPACK_IMPORTED_MODULE_30__["AdminYearEditComponent"],
                _admin_els_municipality_admin_els_municipality_component__WEBPACK_IMPORTED_MODULE_31__["AdminElsMunicipalityComponent"],
                _municipality_list_municipality_list_component__WEBPACK_IMPORTED_MODULE_35__["MunicipalityListComponent"],
                _municipality_compare_municipality_compare_component__WEBPACK_IMPORTED_MODULE_37__["MunicipalityCompareComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_38__["FooterComponent"],
                _orderBy_pipe__WEBPACK_IMPORTED_MODULE_39__["OrderBy"],
                _orderByMunRegion_pipe__WEBPACK_IMPORTED_MODULE_40__["OrderByMun"],
                _admin_els_municipality_list_admin_els_municipality_list_component__WEBPACK_IMPORTED_MODULE_41__["AdminElsMunicipalityListComponent"],
                _admin_region_admin_region_component__WEBPACK_IMPORTED_MODULE_42__["AdminRegionComponent"],
                _admin_region_list_admin_region_list_component__WEBPACK_IMPORTED_MODULE_43__["AdminRegionListComponent"],
                _admin_region_edit_admin_region_edit_component__WEBPACK_IMPORTED_MODULE_44__["AdminRegionEditComponent"],
                _about_index_about_index_component__WEBPACK_IMPORTED_MODULE_45__["AboutIndexComponent"],
                _metodology_page_metodology_page_component__WEBPACK_IMPORTED_MODULE_46__["MetodologyPageComponent"],
                _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_47__["AboutPageComponent"],
                _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_48__["ContactPageComponent"],
                _admin_els_municipality_edit_admin_els_municipality_edit_component__WEBPACK_IMPORTED_MODULE_49__["AdminElsMunicipalityEditComponent"],
                _dictionary_page_dictionary_page_component__WEBPACK_IMPORTED_MODULE_50__["DictionaryPageComponent"],
                _dictionary_button_page_dictionary_button_page_component__WEBPACK_IMPORTED_MODULE_51__["DictionaryButtonPageComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_7__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].firebase),
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_9__["AngularFireDatabaseModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__["AngularFireAuthModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__["AngularFireStorageModule"],
                angular2_highcharts__WEBPACK_IMPORTED_MODULE_32__["ChartModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_34__["HttpClientModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_52__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_52__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_34__["HttpClient"]]
                    }
                }),
                angular_2_dropdown_multiselect__WEBPACK_IMPORTED_MODULE_36__["MultiselectDropdownModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                    {
                        path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
                    },
                    {
                        path: 'aboutIndex', component: _about_index_about_index_component__WEBPACK_IMPORTED_MODULE_45__["AboutIndexComponent"]
                    },
                    {
                        path: 'metodology', component: _metodology_page_metodology_page_component__WEBPACK_IMPORTED_MODULE_46__["MetodologyPageComponent"]
                    },
                    {
                        path: 'aboutProject', component: _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_47__["AboutPageComponent"]
                    },
                    {
                        path: 'contactPage', component: _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_48__["ContactPageComponent"]
                    },
                    {
                        path: 'dictionaryPage', component: _dictionary_page_dictionary_page_component__WEBPACK_IMPORTED_MODULE_50__["DictionaryPageComponent"]
                    },
                    {
                        path: 'dictionaryPage/:indicator', component: _dictionary_page_dictionary_page_component__WEBPACK_IMPORTED_MODULE_50__["DictionaryPageComponent"]
                    },
                    {
                        path: 'municipality-list', component: _municipality_list_municipality_list_component__WEBPACK_IMPORTED_MODULE_35__["MunicipalityListComponent"]
                    },
                    {
                        path: 'municipality-list/:idYear', component: _municipality_list_municipality_list_component__WEBPACK_IMPORTED_MODULE_35__["MunicipalityListComponent"]
                    },
                    {
                        path: 'municipality-list/:idYear/:idMunicipality', component: _municipality_municipality_component__WEBPACK_IMPORTED_MODULE_15__["MunicipalityComponent"]
                    },
                    {
                        path: 'municipalities-compare/:idMun /:idMun1 /:idMun2 /:idMun3 ', component: _municipality_compare_municipality_compare_component__WEBPACK_IMPORTED_MODULE_37__["MunicipalityCompareComponent"]
                    },
                    {
                        path: 'municipalities-compare/:idMun /:idMun1 /:idMun2', component: _municipality_compare_municipality_compare_component__WEBPACK_IMPORTED_MODULE_37__["MunicipalityCompareComponent"]
                    },
                    {
                        path: 'municipalities-compare/:idMun /:idMun1 ', component: _municipality_compare_municipality_compare_component__WEBPACK_IMPORTED_MODULE_37__["MunicipalityCompareComponent"]
                    },
                    {
                        path: 'admin', component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"]
                    },
                    {
                        path: 'sign-in', component: _admin_sign_in_admin_sign_in_component__WEBPACK_IMPORTED_MODULE_18__["AdminSignInComponent"]
                    },
                    {
                        path: 'admin-year', component: _admin_year_admin_year_component__WEBPACK_IMPORTED_MODULE_28__["AdminYearComponent"]
                    },
                    {
                        path: 'admin-year-list', component: _admin_year_list_admin_year_list_component__WEBPACK_IMPORTED_MODULE_29__["AdminYearListComponent"]
                    },
                    {
                        path: 'admin-year/:idYear', component: _admin_year_edit_admin_year_edit_component__WEBPACK_IMPORTED_MODULE_30__["AdminYearEditComponent"]
                    },
                    {
                        path: 'admin-domen', component: _admin_domen_admin_domen_component__WEBPACK_IMPORTED_MODULE_19__["AdminDomenComponent"]
                    },
                    {
                        path: 'admin-domen-list', component: _admin_domen_list_admin_domen_list_component__WEBPACK_IMPORTED_MODULE_23__["AdminDomenListComponent"]
                    },
                    {
                        path: 'admin-domen/:idDomen', component: _admin_domen_edit_admin_domen_edit_component__WEBPACK_IMPORTED_MODULE_24__["AdminDomenEditComponent"]
                    },
                    {
                        path: 'admin-subdomen', component: _admin_subdomen_admin_subdomen_component__WEBPACK_IMPORTED_MODULE_20__["AdminSubdomenComponent"]
                    },
                    {
                        path: 'admin-subdomen-list', component: _admin_subdomen_list_admin_subdomen_list_component__WEBPACK_IMPORTED_MODULE_21__["AdminSubdomenListComponent"]
                    },
                    {
                        path: 'admin-subdomen/:idSubdomen', component: _admin_subdomen_edit_admin_subdomen_edit_component__WEBPACK_IMPORTED_MODULE_22__["AdminSubdomenEditComponent"]
                    },
                    {
                        path: 'admin-municipality', component: _admin_municipality_admin_municipality_component__WEBPACK_IMPORTED_MODULE_25__["AdminMunicipalityComponent"]
                    },
                    {
                        path: 'admin-municipality-list', component: _admin_municipality_list_admin_municipality_list_component__WEBPACK_IMPORTED_MODULE_26__["AdminMunicipalityListComponent"]
                    },
                    {
                        path: 'admin-municipality/:idMunicipality', component: _admin_municipality_edit_admin_municipality_edit_component__WEBPACK_IMPORTED_MODULE_27__["AdminMunicipalityEditComponent"]
                    },
                    {
                        path: 'admin-region', component: _admin_region_admin_region_component__WEBPACK_IMPORTED_MODULE_42__["AdminRegionComponent"]
                    },
                    {
                        path: 'admin-region-list', component: _admin_region_list_admin_region_list_component__WEBPACK_IMPORTED_MODULE_43__["AdminRegionListComponent"]
                    },
                    {
                        path: 'admin-region/:idRegion', component: _admin_region_edit_admin_region_edit_component__WEBPACK_IMPORTED_MODULE_44__["AdminRegionEditComponent"]
                    },
                    {
                        path: 'admin-els-municipality', component: _admin_els_municipality_admin_els_municipality_component__WEBPACK_IMPORTED_MODULE_31__["AdminElsMunicipalityComponent"]
                    },
                    {
                        path: 'admin-els-municipality/:idYear', component: _admin_els_municipality_admin_els_municipality_component__WEBPACK_IMPORTED_MODULE_31__["AdminElsMunicipalityComponent"]
                    },
                    {
                        path: 'years/:idYear', component: _admin_els_municipality_list_admin_els_municipality_list_component__WEBPACK_IMPORTED_MODULE_41__["AdminElsMunicipalityListComponent"]
                    },
                    {
                        path: 'years/:idYear/:idMun', component: _admin_els_municipality_edit_admin_els_municipality_edit_component__WEBPACK_IMPORTED_MODULE_49__["AdminElsMunicipalityEditComponent"]
                    },
                    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"] }
                ])
            ],
            providers: [_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"], _admin_subdomen_service__WEBPACK_IMPORTED_MODULE_14__["AdminSubdomenService"], _admin_subdomen_service__WEBPACK_IMPORTED_MODULE_14__["AdminSubdomenService"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__["AngularFireStorageModule"], {
                    provide: angular2_highcharts_dist_HighchartsService__WEBPACK_IMPORTED_MODULE_33__["HighchartsStatic"],
                    useFactory: highchartsFactory
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

// required for AOT compilation
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_53__["TranslateHttpLoader"](http);
}


/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(firebaseAuth, router) {
        var _this = this;
        this.firebaseAuth = firebaseAuth;
        this.router = router;
        this.user = firebaseAuth.authState;
        this.user.subscribe(function (user) {
            if (user) {
                _this.currentUser = user;
            }
            else {
                _this.currentUser = null;
                _this.router.navigate(['/sign-in']);
            }
        });
    }
    AuthService.prototype.loginUser = function (email, password) {
        var _this = this;
        this.firebaseAuth
            .auth
            .signInWithEmailAndPassword(email, password)
            .then(function (value) {
            _this.router.navigate(['/admin']);
        })
            .catch(function (err) {
            alert("Вашата лозинка или е-маил не е точна.");
            console.log('Something went wrong:', err.message);
        });
    };
    AuthService.prototype.logoutUser = function () {
        this.firebaseAuth.auth.signOut();
        this.router.navigate(['/sign-in']);
    };
    AuthService.prototype.isloggedIn = function () {
        if (this.currentUser == null) {
            return false;
        }
        else {
            return true;
        }
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/auth.component.css":
/*!*****************************************!*\
  !*** ./src/app/auth/auth.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/auth.component.html":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"admin\">\n  <div class=\"admin-nav container-fluid\">\n    <div class=\"row line_parts\">\n      <div class=\"col-md-10\">Добредојдовте! Родов индекс</div>\n      <div class=\"col-md-2\">\n        <span><i class=\"fas fa-user-ninja\"></i> {{ (authService.user | async)?.email }}!</span>\n        <span style=\"padding-left: 20px\"><i class=\"fas fa-power-off\" (click)=\"logout()\" style=\"\"></i></span>\n      </div>\n    </div>\n  </div>\n  <div class=\"fullBack fullHeight\">\n    <a routerLink=\"/admin-subdomen-list\"><span class=\"main_cat\">Поддомени / Индикатори</span></a>\n    <a routerLink=\"/admin-domen-list\"><span class=\"main_cat\">Домени</span></a>\n    <a routerLink=\"/admin-year-list\"><span class=\"main_cat\">Години</span></a>\n    <a routerLink=\"/admin-municipality-list\"><span class=\"main_cat\">Општини</span></a>\n    <a routerLink=\"/admin-region-list\"><span class=\"main_cat\">Региони</span></a>\n    \n    <div class=\"grade-box line_parts\">\n      <span class=\"col-md-12\">Преглед низ години</span>\n    </div>\n    <ul>\n      <li *ngFor=\"let els of yearsEls\" class=\"els_li\"><a  [routerLink]=\"['/years', els.key]\"><span class=\"main_cat\">{{els.name}}</span></a></li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _admin_els_municipality_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin-els-municipality.service */ "./src/app/admin-els-municipality.service.ts");
/* harmony import */ var _admin_year_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../admin-year.service */ "./src/app/admin-year.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthComponent = /** @class */ (function () {
    function AuthComponent(authService, serviceEls, serviceYear) {
        this.authService = authService;
        this.serviceEls = serviceEls;
        this.serviceYear = serviceYear;
        this.getYears();
    }
    AuthComponent.prototype.login = function (email, password) {
        this.authService.loginUser(email.viewModel, password.viewModel);
        email = password = '';
    };
    AuthComponent.prototype.logout = function () {
        this.authService.logoutUser();
    };
    AuthComponent.prototype.loggedIn = function () {
        this.authService.isloggedIn();
        console.log(this.authService.isloggedIn());
    };
    AuthComponent.prototype.getYears = function () {
        var _this = this;
        var allYears = [];
        this.listenerEls = this.serviceYear.getYearList().subscribe(function (year) {
            year.forEach(function (a) {
                allYears.push({ key: a.key, name: a.val });
            });
            _this.listenerEls.unsubscribe();
        });
        // console.log(allYears);
        this.yearsEls = allYears;
        // console.log(this.yearsEls);
    };
    AuthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'auth',
            template: __webpack_require__(/*! ./auth.component.html */ "./src/app/auth/auth.component.html"),
            styles: [__webpack_require__(/*! ./auth.component.css */ "./src/app/auth/auth.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _admin_els_municipality_service__WEBPACK_IMPORTED_MODULE_2__["AdminElsMunicipalityService"], _admin_year_service__WEBPACK_IMPORTED_MODULE_3__["AdminYearService"]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/contact-page/contact-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/contact-page/contact-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contact-page/contact-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/contact-page/contact-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n<div class=\"container\">\n\t<h6 class=\"title\">{{\"contact\"|translate}}</h6>\n\t<div class=\"staticPage col-md-12\" style=\"text-align: center;min-height:70vh \">\n\t\t<div class=\"contactPage\">\n\t\t<div>{{\"reactor\"|translate}}</div><br>\n\t\t\t<div class=\"contact\"><i class=\"fas fa-link\"></i>  <span style=\"margin-left:5px\">www.reactor.org.mk</span></div>\n\t\t\t<div class=\"contact\"><i class=\"fas fa-envelope\"></i>  <span style=\"margin-left:5px\"> info@reactor.org.mk</span></div>\n\t\t\t<div class=\"contact\"><i class=\"fas fa-phone\"></i>  <span style=\"margin-left:5px\">+3892 3245 536</span></div>\n\t\t</div>\n\t</div>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/contact-page/contact-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/contact-page/contact-page.component.ts ***!
  \********************************************************/
/*! exports provided: ContactPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageComponent", function() { return ContactPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactPageComponent = /** @class */ (function () {
    function ContactPageComponent() {
    }
    ContactPageComponent.prototype.ngOnInit = function () {
    };
    ContactPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-page',
            template: __webpack_require__(/*! ./contact-page.component.html */ "./src/app/contact-page/contact-page.component.html"),
            styles: [__webpack_require__(/*! ./contact-page.component.css */ "./src/app/contact-page/contact-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactPageComponent);
    return ContactPageComponent;
}());



/***/ }),

/***/ "./src/app/dictionary-button-page/dictionary-button-page.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/dictionary-button-page/dictionary-button-page.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dictionary-button-page/dictionary-button-page.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/dictionary-button-page/dictionary-button-page.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n <div id=\"removeBox\" style=\"float:right;color: orange;padding: 10px;\" class=\"btnClose\">\n      <i class=\"fas fa-times-circle\" (click)=\"removeBox()\"></i></div>\n       <div class=\"titleDictionary\">{{\"glossary\"|translate}}</div>\n  <div class=\"frameDictionary\">\n   <!--  <div id=\"removeBox\" style=\"float:right;color: orange\" class=\"btnClose\">\n      <i class=\"fas fa-times-circle\" (click)=\"removeBox()\"></i></div> -->\n    <div class=\"dictionary\" style=\"margin-top: 20px;\">\n      <p class=\"orangeText\">{{\"technical_terms\"|translate}}</p>\n\n      <div class=\"indi\">\n        <span style=\"font-family: ArsenalB\" class=\"technic\" (click)=\"dictionaryName($event, 'technic0')\"> <i class=\"fas fa-caret-right\" style=\"color:orange\"></i> {{\"first_m\"|translate}}</span><br>\n        <div id=\"technic0\" class=\"contentDictionary closeDictionary\">{{\"first_m_text\"|translate}}</div>\n      </div>\n      <div class=\"indi\">\n        <span style=\"font-family: ArsenalB\" class=\"technic\" (click)=\"dictionaryName($event, 'technic3')\"> <i class=\"fas fa-caret-right\" style=\"color:orange\"></i> {{\"indicators\"|translate}}</span><br>\n        <div id=\"technic3\" class=\"contentDictionary closeDictionary\">{{\"indicators_text\"|translate}}</div>\n      </div>\n\n      <div class=\"indi\">\n        <span style=\"font-family: ArsenalB\" class=\"technic\" (click)=\"dictionaryName($event, 'technic4')\"> <i class=\"fas fa-caret-right\" style=\"color:orange\"></i> {{\"domains\"|translate}}</span><br>\n        <div id=\"technic4\" class=\"contentDictionary closeDictionary \"> {{\"domains_text\"|translate}}</div>\n      </div>\n\n      <div class=\"indi\">\n        <span style=\"font-family: ArsenalB\" class=\"technic\" (click)=\"dictionaryName($event, 'technic5')\"> <i class=\"fas fa-caret-right\" style=\"color:orange\"></i> {{\"index\"|translate}}</span><br>\n        <div id=\"technic5\" class=\"contentDictionary  closeDictionary\">{{\"index_text\"|translate}}</div>\n      </div>\n\n      <div class=\"indi\">\n        <span style=\"font-family: ArsenalB\" class=\"technic\" (click)=\"dictionaryName($event, 'technic6')\"> <i class=\"fas fa-caret-right\" style=\"color:orange\"></i> {{\"scores\"|translate}}</span><br>\n        <div id=\"technic6\" class=\"contentDictionary closeDictionary\">{{\"scores_text\"|translate}}</div>\n      </div>\n      <div class=\"indi\">\n        <span style=\"font-family: ArsenalB\" class=\"technic\" (click)=\"dictionaryName($event, 'technic7')\"> <i class=\"fas fa-caret-right\" style=\"color:orange\"></i> {{\"ranks\"|translate}}</span><br>\n        <div id=\"technic7\" class=\"contentDictionary closeDictionary\">{{\"ranks_text\"|translate}}</div>\n      </div>\n\n      <div class=\"indi\">\n        <span style=\"font-family: ArsenalB\" class=\"technic\" (click)=\"dictionaryName($event, 'technic1')\"> <i class=\"fas fa-caret-right\" style=\"color:orange\"></i> {{\"admin_data\"|translate}}</span><br>\n        <div id=\"technic1\" class=\"contentDictionary closeDictionary\">{{\"admin_data_text\"|translate}</div>\n      </div>\n      <div class=\"indi\">\n        <span style=\"font-family: ArsenalB\" class=\"technic\" (click)=\"dictionaryName($event, 'technic2')\"> <i class=\"fas fa-caret-right\" style=\"color:orange\"></i> {{\"input_var\"|translate}}</span><br>\n        <div id=\"technic2\" class=\"contentDictionary closeDictionary\">{{\"input_var_text\"|translate}}</div>\n      </div>\n    </div>\n\n     <div class=\"dictionary\">\n      <p class=\"orangeText\">{{\"domains\"|translate}}</p>\n       <div class=\"indi\" id=\"open_domen_indicator0\">\n        <span style=\"font-family: ArsenalB\" class=\"indicator\" (click)=\"dictionaryName($event, 'domen_indicator0')\"><i class=\"fas fa-caret-right\" style=\"color:orange\"></i> {{\"gender_gap\"|translate}}</span><br>\n        <div id=\"domen_indicator0\" class=\"contentDictionary closeDictionary\">{{\"gender_gap_text\"|translate}}</div>\n      </div>\n\n      <div class=\"indi\" id=\"open_domen_indicator1\">\n        <span style=\"font-family: ArsenalB\" class=\"indicator\" (click)=\"dictionaryName($event, 'domen_indicator1')\"><i class=\"fas fa-caret-right\" style=\"color:orange\"></i> {{\"enabling_conditions\"|translate}}</span><br>\n        <div id=\"domen_indicator1\" class=\"contentDictionary closeDictionary\">{{\"enabling_conditions_text\"|translate}}</div>\n      </div>\n\n       <div class=\"indi\" id=\"open_domen_indicator2\">\n        <span style=\"font-family: ArsenalB\" class=\"indicator\" (click)=\"dictionaryName($event, 'domen_indicator2')\"><i class=\"fas fa-caret-right\" style=\"color:orange\"></i> {{\"gender_responsive_mun\"|translate}}</span><br>\n        <div id=\"domen_indicator2\" class=\"contentDictionary closeDictionary\">{{\"gender_responsive_mun_text\"|translate}}</div>\n      </div>\n      </div>\n    \n    <div class=\"dictionary\" >\n      <p class=\"orangeText\">{{\"indicators\"|translate}}</p>\n      <div class=\"indi\" id=\"open_domen_indicator0sub_indicator1\">\n        <span style=\"font-family: ArsenalB\" class=\"indicator\" (click)=\"dictionaryName($event, 'domen_indicator0sub_indicator1')\"> <i class=\"fas fa-caret-right\" style=\"color:orange\"></i>  {{\"employed_per\"|translate}}</span><br>\n        <div id=\"domen_indicator0sub_indicator1\" class=\"contentDictionary closeDictionary\">{{\"employed_per_text\"|translate}}</div>\n      </div>\n      <div class=\"indi\" id=\"open_domen_indicator0sub_indicator0\">\n        <span style=\"font-family: ArsenalB\" class=\"indicator\" (click)=\"dictionaryName($event, 'domen_indicator0sub_indicator0')\"> <i class=\"fas fa-caret-right\" style=\"color:orange\"></i> {{\"rec_ann_emp\"|translate}} </span><br>\n        <div id=\"domen_indicator0sub_indicator0\" class=\"contentDictionary closeDictionary\">{{\"rec_ann_emp_text\"|translate}}</div>\n      </div>\n      <div class=\"indi\" id=\"open_domen_indicator0sub_indicator5\">\n        <span style=\"font-family: ArsenalB\" class=\"indicator\" (click)=\"dictionaryName($event, 'domen_indicator0sub_indicator5')\"><i class=\"fas fa-caret-right\" style=\"color:orange\"></i> {{\"person_high_edu\"|translate}} </span><br>\n        <div id=\"domen_indicator0sub_indicator5\" class=\"contentDictionary closeDictionary\">{{\"person_high_edu_text\"|translate}}</div>\n      </div>\n\n      <div class=\"indi\" id=\"open_domen_indicator0sub_indicator6\">\n        <span style=\"font-family: ArsenalB\" class=\"indicator\" (click)=\"dictionaryName($event, 'domen_indicator0sub_indicator6')\"><i class=\"fas fa-caret-right\" style=\"color:orange\"></i>  {{\"amount_salary\"|translate}} </span><br>\n        <div id=\"domen_indicator0sub_indicator6\" class=\"contentDictionary closeDictionary\">{{\"amount_salary_text\"|translate}} </div>\n      </div>\n      <div class=\"indi\" id=\"open_domen_indicator0sub_indicator7\">\n        <span style=\"font-family: ArsenalB\" class=\"indicator\" (click)=\"dictionaryName($event, 'domen_indicator0sub_indicator7')\"><i class=\"fas fa-caret-right\" style=\"color:orange\"></i>  {{\"amount_pension\"|translate}}</span><br>\n        <div id=\"domen_indicator0sub_indicator7\" class=\"contentDictionary closeDictionary\">{{\"amount_pension_text\"|translate}} </div>\n      </div>\n\n\n\n      <div class=\"indi\" id=\"open_domen_indicator0sub_indicator8\">\n        <span style=\"font-family: ArsenalB\" class=\"indicator\" (click)=\"dictionaryName($event, 'domen_indicator0sub_indicator8')\"><i class=\"fas fa-caret-right\" style=\"color:orange\"></i>  {{\"ownership_facilities\"|translate}}</span><br>\n        <div id=\"domen_indicator0sub_indicator8\" class=\"contentDictionary closeDictionary\">{{\"ownership_facilities_text\"|translate}}</div>\n      </div>\n\n      \n\n      <div class=\"indi\" id=\"open_domen_indicator0sub_indicator9\">\n        <span style=\"font-family: ArsenalB\" class=\"indicator\" (click)=\"dictionaryName($event, 'domen_indicator0sub_indicator9')\"><i class=\"fas fa-caret-right\" style=\"color:orange\"></i> {{\"ownership_land\"|translate}}</span><br>\n        <div id=\"domen_indicator0sub_indicator9\" class=\"contentDictionary closeDictionary\">{{\"ownership_land_text\"|translate}}</div>\n      </div>\n\n      <div class=\"indi\" id=\"open_domen_indicator0sub_indicator10\">\n        <span style=\"font-family: ArsenalB\" class=\"indicator\" (click)=\"dictionaryName($event, 'domen_indicator0sub_indicator10')\"><i class=\"fas fa-caret-right\" style=\"color:orange\"></i> {{\"participantion_mun_council\"|translate}}</span><br>\n        <div id=\"domen_indicator0sub_indicator10\" class=\"contentDictionary closeDictionary\">{{\"participantion_mun_council_text\"|translate}}</div>\n      </div>\n\n\n      <div class=\"indi\"  id=\"open_domen_indicator0sub_indicator11\">\n        <span style=\"font-family: ArsenalB\" class=\"indicator\" (click)=\"dictionaryName($event, 'domen_indicator0sub_indicator11')\"><i class=\"fas fa-caret-right\" style=\"color:orange\"></i> {{\"mayoral_madates\"|translate}}</span><br>\n        <div id=\"domen_indicator0sub_indicator11\" class=\"contentDictionary closeDictionary\">{{\"mayoral_madates_text\"|translate}}</div>\n      </div>\n\n\n      <div class=\"indi\" id=\"open_domen_indicator1sub_indicator5\">\n        <span style=\"font-family: ArsenalB\" class=\"indicator\" (click)=\"dictionaryName($event, 'domen_indicator1sub_indicator5')\"><i class=\"fas fa-caret-right\" style=\"color:orange\"></i> {{\"public_kindergarden\"|translate}}</span><br>\n        <div id=\"domen_indicator1sub_indicator5\" class=\"contentDictionary closeDictionary\">{{\"public_kindergarden_text\"|translate}}</div>\n      </div>\n\n      <div class=\"indi\"  id=\"open_domen_indicator1sub_indicator1\">\n        <span style=\"font-family: ArsenalB\" class=\"indicator\" (click)=\"dictionaryName($event, 'domen_indicator1sub_indicator1')\"><i class=\"fas fa-caret-right\" style=\"color:orange\"></i> {{\"child_public_kindergarden\"|translate}}</span><br>\n        <div id=\"domen_indicator1sub_indicator1\" class=\"contentDictionary closeDictionary\">{{\"child_public_kindergarden_text\"|translate}}</div>\n      </div>\n\n\n      <div class=\"indi\" id=\"open_domen_indicator1sub_indicator8\">\n        <span style=\"font-family: ArsenalB\" class=\"indicator\" (click)=\"dictionaryName($event, 'domen_indicator1sub_indicator8')\"><i class=\"fas fa-caret-right\" style=\"color:orange\"></i> {{\"obstetrician_gynecologist\"|translate}}</span><br>\n        <div id=\"domen_indicator1sub_indicator8\" class=\"contentDictionary closeDictionary\">{{\"obstetrician_gynecologist_text\"|translate}}</div>\n      </div>\n\n\n\n      <div class=\"indi\" id=\"open_domen_indicator1sub_indicator12\">\n        <span style=\"font-family: ArsenalB\" class=\"indicator\" (click)=\"dictionaryName($event, 'domen_indicator1sub_indicator12')\"><i class=\"fas fa-caret-right\" style=\"color:orange\"></i> {{\"adult_facilities\"|translate}}</span><br>\n        <div id=\"domen_indicator1sub_indicator12\" class=\"contentDictionary closeDictionary\">{{\"adult_facilities_text\"|translate}}</div>\n      </div>\n\n      <div class=\"indi\" id=\"open_domen_indicator2sub_indicator0\">\n        <span style=\"font-family: ArsenalB\" class=\"indicator\" (click)=\"dictionaryName($event, 'domen_indicator2sub_indicator0')\"><i class=\"fas fa-caret-right\" style=\"color:orange\"></i> {{\"coordinator_equal_op_man_wom\"|translate}}</span><br>\n        <div id=\"domen_indicator2sub_indicator0\" class=\"contentDictionary closeDictionary\">{{\"coordinator_equal_op_man_wom_text\"|translate}}</div>\n      </div>\n\n\n      <div class=\"indi\" id=\"open_domen_indicator2sub_indicator1\">\n        <span style=\"font-family: ArsenalB\" class=\"indicator\" (click)=\"dictionaryName($event, 'domen_indicator2sub_indicator1')\"><i class=\"fas fa-caret-right\" style=\"color:orange\"></i> {{\"comittie_equal_op_man_wom\"|translate}}</span><br>\n        <div id=\"domen_indicator2sub_indicator1\" class=\"contentDictionary closeDictionary\">{{\"comittie_equal_op_man_wom_text\"|translate}}</div>\n      </div>\n\n      <div class=\"indi\" id=\"open_domen_indicator2sub_indicator2\">\n        <span style=\"font-family: ArsenalB\" class=\"indicator\" (click)=\"dictionaryName($event, 'domen_indicator2sub_indicator2')\"><i class=\"fas fa-caret-right\" style=\"color:orange\"></i> {{\"annoual_report_submitted_mtsp\"|translate}}</span><br>\n        <div id=\"domen_indicator2sub_indicator2\" class=\"contentDictionary closeDictionary\">{{\"annoual_report_submitted_mtsp_text\"|translate}}</div>\n      </div>\n\n\n      <div class=\"indi\"  id=\"open_domen_indicator2sub_indicator3\">\n        <span style=\"font-family: ArsenalB\" class=\"indicator\" (click)=\"dictionaryName($event, 'domen_indicator2sub_indicator3')\"><i class=\"fas fa-caret-right\" style=\"color:orange\"></i> {{\"eu_charter_man_wom_signed_loc\"|translate}}</span><br>\n        <div id=\"domen_indicator2sub_indicator3\" class=\"contentDictionary closeDictionary\">{{\"eu_charter_man_wom_signed_loc_text\"|translate}}</div>\n      </div>\n\n      <div class=\"indi\" id=\"open_domen_indicator2sub_indicator4\">\n        <span style=\"font-family: ArsenalB\" class=\"indicator\" (click)=\"dictionaryName($event, 'domen_indicator2sub_indicator4')\"><i class=\"fas fa-caret-right\" style=\"color:orange\"></i> {{\"doc_special_measures_ge\"|translate}}</span><br>\n        <div id=\"domen_indicator2sub_indicator4\" class=\"contentDictionary closeDictionary\">{{\"doc_special_measures_ge_text\"|translate}}</div>\n      </div>\n\n      <div class=\"indi\" id=\"open_domen_indicator2sub_indicator5\">\n        <span style=\"font-family: ArsenalB\" class=\"indicator\" (click)=\"dictionaryName($event, 'domen_indicator2sub_indicator5')\"><i class=\"fas fa-caret-right\" style=\"color:orange\"></i> {{\"impact_plann_measures_ge\"|translate}}</span><br>\n        <div id=\"domen_indicator2sub_indicator5\" class=\"contentDictionary closeDictionary\">{{\"impact_plann_measures_ge_text\"|translate}}</div>\n      </div>\n\n      <div class=\"indi\" id=\"open_domen_indicator2sub_indicator7\">\n        <span style=\"font-family: ArsenalB\" class=\"indicator\" (click)=\"dictionaryName($event, 'domen_indicator2sub_indicator7')\"><i class=\"fas fa-caret-right\" style=\"color:orange\"></i> {{\"designed_funds_gender_prog\"|translate}}</span><br>\n        <div id=\"domen_indicator2sub_indicator7\" class=\"contentDictionary closeDictionary\">{{\"designed_funds_gender_prog_text\"|translate}}</div>\n      </div>\n\n      <div class=\"indi\"  id=\"open_domen_indicator2sub_indicator8\">\n        <span style=\"font-family: ArsenalB\" class=\"indicator\" (click)=\"dictionaryName($event, 'domen_indicator2sub_indicator8')\"><i class=\"fas fa-caret-right\" style=\"color:orange\"></i> {{\"spent_funds_gender_prog\"|translate}}</span><br>\n        <div id=\"domen_indicator2sub_indicator8\" class=\"contentDictionary closeDictionary\">{{\"spent_funds_gender_prog_text\"|translate}}</div>\n      </div>\n\n\n\n    </div>\n\n     \n<div class=\"dictionary\" >\n      <p class=\"orangeText\">{{\"data_not_included_ge_index\"|translate}}</p>\n    \n\n         <div class=\"indi\"  id=\"open_domen_indicator0sub_indicator2\">\n        <span style=\"font-family: ArsenalB\" class=\"indicator\" (click)=\"dictionaryName($event, 'domen_indicator0sub_indicator2')\"><i class=\"fas fa-caret-right\" style=\"color:orange\"></i> ** {{\"unemployed_active_job_seekers\"|translate}}</span><br>\n        <div id=\"domen_indicator0sub_indicator2\" class=\"contentDictionary closeDictionary\">{{\"unemployed_active_job_seekers_text\"|translate}}</div>\n      </div>\n\n        <div class=\"indi\"  id=\"open_domen_indicator0sub_indicator3\">\n        <span style=\"font-family: ArsenalB\" class=\"indicator\" (click)=\"dictionaryName($event, 'domen_indicator0sub_indicator3')\"><i class=\"fas fa-caret-right\" style=\"color:orange\"></i> ** {{\"beneficiaries_monetary\"|translate}}</span><br>\n        <div id=\"domen_indicator0sub_indicator3\" class=\"contentDictionary closeDictionary\">{{\"beneficiaries_monetary_text\"|translate}}</div>\n      </div>\n\n        <div class=\"indi\"  id=\"open_domen_indicator0sub_indicator4\">\n        <span style=\"font-family: ArsenalB\" class=\"indicator\" (click)=\"dictionaryName($event, 'domen_indicator0sub_indicator4')\"><i class=\"fas fa-caret-right\" style=\"color:orange\"></i> ** {{\"unemployed_disabled_person\"|translate}}</span><br>\n        <div id=\"domen_indicator0sub_indicator4\" class=\"contentDictionary closeDictionary\">{{\"unemployed_disabled_person_text\"|translate}}</div>\n      </div>\n\n        <div class=\"indi\"  id=\"open_domen_indicator1sub_indicator2\">\n        <span style=\"font-family: ArsenalB\" class=\"indicator\" (click)=\"dictionaryName($event, 'domen_indicator1sub_indicator2')\"><i class=\"fas fa-caret-right\" style=\"color:orange\"></i> ** {{\"children_not_admitted_kindergarden\"|translate}}</span><br>\n        <div id=\"domen_indicator1sub_indicator2\" class=\"contentDictionary closeDictionary\">{{\"children_not_admitted_kindergarden_text\"|translate}}</div>\n      </div>\n\n        <div class=\"indi\"  id=\"open_domen_indicator1sub_indicator3\">\n        <span style=\"font-family: ArsenalB\" class=\"indicator\" (click)=\"dictionaryName($event, 'domen_indicator1sub_indicator3')\"><i class=\"fas fa-caret-right\" style=\"color:orange\"></i> ** {{\"current_kindergarden_capacity\"|translate}}</span><br>\n        <div id=\"domen_indicator1sub_indicator3\" class=\"contentDictionary closeDictionary\">{{\"current_kindergarden_capacity_text\"|translate}}</div>\n      </div>\n\n\n        <div class=\"indi\"  id=\"open_domen_indicator1sub_indicator6\">\n        <span style=\"font-family: ArsenalB\" class=\"indicator\" (click)=\"dictionaryName($event, 'domen_indicator1sub_indicator6')\"><i class=\"fas fa-caret-right\" style=\"color:orange\"></i> ** {{\"private_kindergardens\"|translate}}</span><br>\n        <div id=\"domen_indicator1sub_indicator6\" class=\"contentDictionary closeDictionary\">{{\"private_kindergardens_text\"|translate}}</div>\n      </div>\n\n       <div class=\"indi\"  id=\"open_domen_indicator1sub_indicator9\">\n        <span style=\"font-family: ArsenalB\" class=\"indicator\" (click)=\"dictionaryName($event, 'domen_indicator1sub_indicator9')\"><i class=\"fas fa-caret-right\" style=\"color:orange\"></i> ** {{\"places_women_helth_care\"|translate}}</span><br>\n        <div id=\"domen_indicator1sub_indicator9\" class=\"contentDictionary closeDictionary\">{{\"places_women_helth_care_text\"|translate}}</div>\n      </div>\n\n       <div class=\"indi\"  id=\"open_domen_indicator1sub_indicator10\">\n        <span style=\"font-family: ArsenalB\" class=\"indicator\" (click)=\"dictionaryName($event, 'domen_indicator1sub_indicator10')\"><i class=\"fas fa-caret-right\" style=\"color:orange\"></i> ** {{\"women_health_care_specialist\"|translate}}</span><br>\n        <div id=\"domen_indicator1sub_indicator10\" class=\"contentDictionary closeDictionary\">{{\"women_health_care_specialist_text\"|translate}}</div>\n      </div>\n        <div class=\"indi\" id=\"open_domen_indicatorSidebar1\" >\n        <span style=\"font-family: ArsenalB\" class=\"indicator\"  (click)=\"dictionaryName($event, 'domen_indicatorSidebar1')\"><i class=\"fas fa-caret-right\" style=\"color:orange\"></i> {{\"infant_mortality_rate\"|translate}} </span><br>\n        <div id=\"domen_indicatorSidebar1\" class=\"contentDictionary closeDictionary\">{{\"infant_mortality_rate_text\"|translate}} </div>\n      </div>\n      <div class=\"indi\" id=\"open_domen_indicatorSidebar2\">\n        <span style=\"font-family: ArsenalB\" class=\"indicator\"  (click)=\"dictionaryName($event, 'domen_indicatorSidebar2')\"><i class=\"fas fa-caret-right\" style=\"color:orange\"></i>{{\"maternal_mortality_rate\"|translate}}</span><br>\n        <div  id=\"domen_indicatorSidebar2\"  class=\"contentDictionary closeDictionary\">{{\"maternal_mortality_rate_text\"|translate}}\n        </div>\n      </div>\n      </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dictionary-button-page/dictionary-button-page.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/dictionary-button-page/dictionary-button-page.component.ts ***!
  \****************************************************************************/
/*! exports provided: DictionaryButtonPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DictionaryButtonPageComponent", function() { return DictionaryButtonPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DictionaryButtonPageComponent = /** @class */ (function () {
    function DictionaryButtonPageComponent() {
    }
    DictionaryButtonPageComponent.prototype.ngOnInit = function () {
    };
    DictionaryButtonPageComponent.prototype.removeBox = function () {
        var poimnik = document.getElementById('mypoimnik');
        poimnik.classList.remove("myclass");
        var map = document.getElementById('mymap');
        map.classList.remove("myclass");
    };
    DictionaryButtonPageComponent.prototype.dictionaryName = function (event, className) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("contentDictionary");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.overflow = "hidden";
            tabcontent[i].style.maxHeight = "0px";
            /*	tabcontent[i].classList.add('closeDictionary');
                tabcontent[i].classList.remove('openDictionary');*/
        }
        var id = document.getElementById(className);
        id.style.visibility = "visible";
        id.style.maxHeight = "500px";
        id.style.opacity = "1";
        //id.classList.add('openDictionary');
        //id.classList.remove('closeDictionary');
    };
    DictionaryButtonPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dictionary-button-page',
            template: __webpack_require__(/*! ./dictionary-button-page.component.html */ "./src/app/dictionary-button-page/dictionary-button-page.component.html"),
            styles: [__webpack_require__(/*! ./dictionary-button-page.component.css */ "./src/app/dictionary-button-page/dictionary-button-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DictionaryButtonPageComponent);
    return DictionaryButtonPageComponent;
}());



/***/ }),

/***/ "./src/app/dictionary-page/dictionary-page.component.css":
/*!***************************************************************!*\
  !*** ./src/app/dictionary-page/dictionary-page.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dictionary-page/dictionary-page.component.html":
/*!****************************************************************!*\
  !*** ./src/app/dictionary-page/dictionary-page.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n<div class=\"container\">\n  <h6  class=\"title\">{{\"glossary\"|translate}}</h6>\n  <div style=\"padding-top: 15px;padding-bottom: 30px\">\n    <div class=\"dictionary\">\n      <p class=\"orangeText\">{{\"technical_terms\"|translate}}</p>\n      <div class=\"indi\">\n        <span style=\"font-family: ArsenalB\" class=\"technic\"> <i class=\"fas fa-caret-right\" style=\"color:orange\"></i>{{\"first_m\"|translate}}</span><br>\n        <div>{{\"first_m_text\"|translate}}</div>\n      </div>\n      <div class=\"indi\">\n        <span style=\"font-family: ArsenalB\" class=\"technic\"> <i class=\"fas fa-caret-right\" style=\"color:orange\"></i> {{\"indicators\"|translate}}</span><br>\n        <div>{{\"indicators_text\"|translate}}</div>\n      </div>\n      <div class=\"indi\">\n        <span style=\"font-family: ArsenalB\" class=\"technic\" > <i class=\"fas fa-caret-right\" style=\"color:orange\"></i> {{\"domains\"|translate}}</span><br>\n        <div > {{\"domains_text\"|translate}} </div>\n      </div>\n      <div class=\"indi\">\n        <span style=\"font-family: ArsenalB\" class=\"technic\" > <i class=\"fas fa-caret-right\" style=\"color:orange\"></i> {{\"index\"|translate}}</span><br>\n        <div >{{\"index_text\"|translate}}</div>\n      </div>\n      <div class=\"indi\">\n        <span style=\"font-family: ArsenalB\" class=\"technic\" > <i class=\"fas fa-caret-right\" style=\"color:orange\"></i> {{\"scores\"|translate}}</span><br>\n        <div>{{\"scores_text\"|translate}}</div>\n      </div>\n      <div class=\"indi\">\n        <span style=\"font-family: ArsenalB\" > <i class=\"fas fa-caret-right\" style=\"color:orange\"></i> {{\"ranks\"|translate}}</span><br>\n        <div> {{\"ranks_text\"|translate}}</div>\n      </div>\n      <div class=\"indi\">\n        <span style=\"font-family: ArsenalB\" > <i class=\"fas fa-caret-right\" style=\"color:orange\"></i> {{\"admin_data\"|translate}}</span><br>\n        <div >{{\"admin_data_text\"|translate}}</div>\n      </div>\n      <div class=\"indi\">\n        <span style=\"font-family: ArsenalB\" > <i class=\"fas fa-caret-right\" style=\"color:orange\"></i> {{\"input_var\"|translate}}</span><br>\n        <div >{{\"input_var_text\"|translate}}</div>\n      </div>\n    </div>\n    <div class=\"dictionary\">\n      <p class=\"orangeText\">{{\"domains\"|translate}}</p>\n      <div class=\"indi\" id=\"open_domen_indicator0\">\n        <span style=\"font-family: ArsenalB\" class=\"indicator\" (click)=\"dictionaryName($event, 'domen_indicator0')\"><i class=\"fas fa-caret-right\" style=\"color:orange\"></i>{{\"gender_gap\"|translate}}</span><br>\n        <div id=\"domen_indicator0\" class=\"contentDictionary closeDictionary\">{{\"gender_gap_text\"|translate}}</div>\n      </div>\n      <div class=\"indi\" id=\"open_domen_indicator1\">\n        <span style=\"font-family: ArsenalB\" class=\"indicator\" (click)=\"dictionaryName($event, 'domen_indicator1')\"><i class=\"fas fa-caret-right\" style=\"color:orange\"></i>{{\"enabling_conditions\"|translate}} </span><br>\n        <div id=\"domen_indicator1\" class=\"contentDictionary closeDictionary\">{{\"enabling_conditions_text\"|translate}}</div>\n      </div>\n      <div class=\"indi\" id=\"open_domen_indicator2\">\n        <span style=\"font-family: ArsenalB\" class=\"indicator\" (click)=\"dictionaryName($event, 'domen_indicator2')\"><i class=\"fas fa-caret-right\" style=\"color:orange\"></i> {{\"gender_responsive_mun\"|translate}}</span><br>\n        <div id=\"domen_indicator2\" class=\"contentDictionary closeDictionary\">{{\"gender_responsive_mun_text\"|translate}}</div>\n      </div>\n    </div>\n    <div class=\"dictionary\">\n      <p class=\"orangeText\">{{\"indicators\"|translate}}</p>\n      <div class=\"indi\" id=\"open_domen_indicator0sub_indicator1\">\n        <span style=\"font-family: ArsenalB\" class=\"indicator\" (click)=\"dictionaryName($event, 'domen_indicator0sub_indicator1')\"> <i class=\"fas fa-caret-right\" style=\"color:orange\"></i>  {{\"employed_per\"|translate}}</span><br>\n        <div id=\"domen_indicator0sub_indicator1\" class=\"contentDictionary closeDictionary\">{{\"employed_per_text\"|translate}}</div>\n      </div>\n      <div class=\"indi\" id=\"open_domen_indicator0sub_indicator0\">\n        <span style=\"font-family: ArsenalB\" class=\"indicator\" (click)=\"dictionaryName($event, 'domen_indicator0sub_indicator0')\"> <i class=\"fas fa-caret-right\" style=\"color:orange\"></i> {{\"rec_ann_emp\"|translate}} </span><br>\n        <div id=\"domen_indicator0sub_indicator0\" class=\"contentDictionary closeDictionary\">{{\"rec_ann_emp_text\"|translate}}</div>\n      </div>\n      <div class=\"indi\" id=\"open_domen_indicator0sub_indicator5\">\n        <span style=\"font-family: ArsenalB\" class=\"indicator\" (click)=\"dictionaryName($event, 'domen_indicator0sub_indicator5')\"><i class=\"fas fa-caret-right\" style=\"color:orange\"></i>\n        {{\"person_high_edu\"|translate}} </span><br>\n        <div id=\"domen_indicator0sub_indicator5\" class=\"contentDictionary closeDictionary\">{{\"person_high_edu_text\"|translate}}</div>\n      </div>\n      <div class=\"indi\" id=\"open_domen_indicator0sub_indicator6\">\n        <span style=\"font-family: ArsenalB\" class=\"indicator\" (click)=\"dictionaryName($event, 'domen_indicator0sub_indicator6')\"><i class=\"fas fa-caret-right\" style=\"color:orange\"></i>  {{\"amount_salary\"|translate}}</span><br>\n        <div id=\"domen_indicator0sub_indicator6\" class=\"contentDictionary closeDictionary\">{{\"amount_salary_text\"|translate}}</div>\n      </div>\n      <div class=\"indi\" id=\"open_domen_indicator0sub_indicator7\">\n        <span style=\"font-family: ArsenalB\" class=\"indicator\" (click)=\"dictionaryName($event, 'domen_indicator0sub_indicator7')\"><i class=\"fas fa-caret-right\" style=\"color:orange\"></i>  {{\"amount_pension\"|translate}}</span><br>\n        <div id=\"domen_indicator0sub_indicator7\" class=\"contentDictionary closeDictionary\">{{\"amount_pension_text\"|translate}} </div>\n      </div>\n      <div class=\"indi\" id=\"open_domen_indicator0sub_indicator8\">\n        <span style=\"font-family: ArsenalB\" class=\"indicator\" (click)=\"dictionaryName($event, 'domen_indicator0sub_indicator8')\"><i class=\"fas fa-caret-right\" style=\"color:orange\"></i>  {{\"ownership_facilities\"|translate}} </span><br>\n        <div id=\"domen_indicator0sub_indicator8\" class=\"contentDictionary closeDictionary\">{{\"ownership_facilities_text\"|translate}}</div>\n      </div>\n      <div class=\"indi\" id=\"open_domen_indicator0sub_indicator9\">\n        <span style=\"font-family: ArsenalB\" class=\"indicator\" (click)=\"dictionaryName($event, 'domen_indicator0sub_indicator9')\"><i class=\"fas fa-caret-right\" style=\"color:orange\"></i> {{\"ownership_land\"|translate}}</span><br>\n        <div id=\"domen_indicator0sub_indicator9\" class=\"contentDictionary closeDictionary\">{{\"ownership_land_text\"|translate}}</div>\n      </div>\n      <div class=\"indi\" id=\"open_domen_indicator0sub_indicator10\">\n        <span style=\"font-family: ArsenalB\" class=\"indicator\" (click)=\"dictionaryName($event, 'domen_indicator0sub_indicator10')\"><i class=\"fas fa-caret-right\" style=\"color:orange\"></i> {{\"participantion_mun_council\"|translate}}</span><br>\n        <div id=\"domen_indicator0sub_indicator10\" class=\"contentDictionary closeDictionary\">{{\"participantion_mun_council_text\"|translate}}</div>\n      </div>\n      <div class=\"indi\" id=\"open_domen_indicator0sub_indicator11\">\n        <span style=\"font-family: ArsenalB\" class=\"indicator\" (click)=\"dictionaryName($event, 'domen_indicator0sub_indicator11')\"><i class=\"fas fa-caret-right\" style=\"color:orange\"></i> {{\"mayoral_madates\"|translate}}</span><br>\n        <div id=\"domen_indicator0sub_indicator11\" class=\"contentDictionary closeDictionary\"> {{\"mayoral_madates_text\"|translate}}</div>\n      </div>\n      <div class=\"indi\" id=\"open_domen_indicator1sub_indicator5\">\n        <span style=\"font-family: ArsenalB\" class=\"indicator\" (click)=\"dictionaryName($event, 'domen_indicator1sub_indicator5')\"><i class=\"fas fa-caret-right\" style=\"color:orange\"></i> {{\"public_kindergarden\"|translate}}</span><br>\n        <div id=\"domen_indicator1sub_indicator5\" class=\"contentDictionary closeDictionary\">{{\"public_kindergarden_text\"|translate}} </div>\n      </div>\n      <div class=\"indi\" id=\"open_domen_indicator1sub_indicator1\">\n        <span style=\"font-family: ArsenalB\" class=\"indicator\" (click)=\"dictionaryName($event, 'domen_indicator1sub_indicator1')\"><i class=\"fas fa-caret-right\" style=\"color:orange\"></i> {{\"child_public_kindergarden\"|translate}}</span><br>\n        <div id=\"domen_indicator1sub_indicator1\" class=\"contentDictionary closeDictionary\">{{\"child_public_kindergarden_text\"|translate}}</div>\n      </div>\n      <div class=\"indi\" id=\"open_domen_indicator1sub_indicator8\">\n        <span style=\"font-family: ArsenalB\" class=\"indicator\" (click)=\"dictionaryName($event, 'domen_indicator1sub_indicator8')\"><i class=\"fas fa-caret-right\" style=\"color:orange\"></i> {{\"obstetrician_gynecologist\"|translate}}</span><br>\n        <div id=\"domen_indicator1sub_indicator8\" class=\"contentDictionary closeDictionary\"> {{\"obstetrician_gynecologist_text\"|translate}}</div>\n      </div>\n      <div class=\"indi\" id=\"open_domen_indicator1sub_indicator12\">\n        <span style=\"font-family: ArsenalB\" class=\"indicator\" (click)=\"dictionaryName($event, 'domen_indicator1sub_indicator12')\"><i class=\"fas fa-caret-right\" style=\"color:orange\"></i> {{\"adult_facilities\"|translate}}</span><br>\n        <div id=\"domen_indicator1sub_indicator12\" class=\"contentDictionary closeDictionary\">{{\"adult_facilities_text\"|translate}}</div>\n      </div>\n      <div class=\"indi\" id=\"open_domen_indicator2sub_indicator0\">\n        <span style=\"font-family: ArsenalB\" class=\"indicator\" (click)=\"dictionaryName($event, 'domen_indicator2sub_indicator0')\"><i class=\"fas fa-caret-right\" style=\"color:orange\"></i> {{\"coordinator_equal_op_man_wom\"|translate}}</span><br>\n        <div id=\"domen_indicator2sub_indicator0\" class=\"contentDictionary closeDictionary\">{{\"coordinator_equal_op_man_wom_text\"|translate}}</div>\n      </div>\n      <div class=\"indi\" id=\"open_domen_indicator2sub_indicator1\">\n        <span style=\"font-family: ArsenalB\" class=\"indicator\" (click)=\"dictionaryName($event, 'domen_indicator2sub_indicator1')\"><i class=\"fas fa-caret-right\" style=\"color:orange\"></i> {{\"comittie_equal_op_man_wom\"|translate}}</span><br>\n        <div id=\"domen_indicator2sub_indicator1\" class=\"contentDictionary closeDictionary\">{{\"comittie_equal_op_man_wom_text\"|translate}} </div>\n      </div>\n      <div class=\"indi\" id=\"open_domen_indicator2sub_indicator2\">\n        <span style=\"font-family: ArsenalB\" class=\"indicator\" (click)=\"dictionaryName($event, 'domen_indicator2sub_indicator2')\"><i class=\"fas fa-caret-right\" style=\"color:orange\"></i> {{\"annoual_report_submitted_mtsp\"|translate}}</span><br>\n        <div id=\"domen_indicator2sub_indicator2\" class=\"contentDictionary closeDictionary\">{{\"annoual_report_submitted_mtsp\"|translate}}</div>\n      </div>\n      <div class=\"indi\" id=\"open_domen_indicator2sub_indicator3\">\n        <span style=\"font-family: ArsenalB\" class=\"indicator\" (click)=\"dictionaryName($event, 'domen_indicator2sub_indicator3')\"><i class=\"fas fa-caret-right\" style=\"color:orange\"></i> {{\"eu_charter_man_wom_signed_loc\"|translate}}</span><br>\n        <div id=\"domen_indicator2sub_indicator3\" class=\"contentDictionary closeDictionary\"> {{\"eu_charter_man_wom_signed_loc_text\"|translate}}</div>\n      </div>\n      <div class=\"indi\" id=\"open_domen_indicator2sub_indicator4\">\n        <span style=\"font-family: ArsenalB\" class=\"indicator\" (click)=\"dictionaryName($event, 'domen_indicator2sub_indicator4')\"><i class=\"fas fa-caret-right\" style=\"color:orange\"></i> {{\"doc_special_measures_ge\"|translate}}</span><br>\n        <div id=\"domen_indicator2sub_indicator4\" class=\"contentDictionary closeDictionary\">{{\"doc_special_measures_ge_text\"|translate}}</div>\n      </div>\n      <div class=\"indi\" id=\"open_domen_indicator2sub_indicator5\">\n        <span style=\"font-family: ArsenalB\" class=\"indicator\" (click)=\"dictionaryName($event, 'domen_indicator2sub_indicator5')\"><i class=\"fas fa-caret-right\" style=\"color:orange\"></i> {{\"impact_plann_measures_ge\"|translate}}</span><br>\n        <div id=\"domen_indicator2sub_indicator5\" class=\"contentDictionary closeDictionary\">{{\"impact_plann_measures_ge_text\"|translate}}</div>\n      </div>\n      <div class=\"indi\" id=\"open_domen_indicator2sub_indicator7\">\n        <span style=\"font-family: ArsenalB\" class=\"indicator\" (click)=\"dictionaryName($event, 'domen_indicator2sub_indicator7')\"><i class=\"fas fa-caret-right\" style=\"color:orange\"></i> {{\"designed_funds_gender_prog\"|translate}}</span><br>\n        <div id=\"domen_indicator2sub_indicator7\" class=\"contentDictionary closeDictionary\">{{\"designed_funds_gender_prog_text\"|translate}}</div>\n      </div>\n      <div class=\"indi\" id=\"open_domen_indicator2sub_indicator8\">\n        <span style=\"font-family: ArsenalB\" class=\"indicator\" (click)=\"dictionaryName($event, 'domen_indicator2sub_indicator8')\"><i class=\"fas fa-caret-right\" style=\"color:orange\"></i> {{\"spent_funds_gender_prog\"|translate}}</span><br>\n        <div id=\"domen_indicator2sub_indicator8\" class=\"contentDictionary closeDictionary\">{{\"spent_funds_gender_prog_text\"|translate}}</div>\n      </div>\n    </div>\n    <div class=\"dictionary\">\n      <p class=\"orangeText\">{{\"data_not_included_ge_index\"|translate}}</p>\n      <div class=\"indi\" id=\"open_domen_indicator0sub_indicator2\">\n        <span style=\"font-family: ArsenalB\" class=\"indicator\" (click)=\"dictionaryName($event, 'domen_indicator0sub_indicator2')\"><i class=\"fas fa-caret-right\" style=\"color:orange\"></i> ** {{\"unemployed_active_job_seekers\"|translate}}</span><br>\n        <div id=\"domen_indicator0sub_indicator2\" class=\"contentDictionary closeDictionary\">{{\"unemployed_active_job_seekers_text\"|translate}}</div>\n      </div>\n      <div class=\"indi\" id=\"open_domen_indicator0sub_indicator3\">\n        <span style=\"font-family: ArsenalB\" class=\"indicator\" (click)=\"dictionaryName($event, 'domen_indicator0sub_indicator3')\"><i class=\"fas fa-caret-right\" style=\"color:orange\"></i> ** {{\"beneficiaries_monetary\"|translate}}</span><br>\n        <div id=\"domen_indicator0sub_indicator3\" class=\"contentDictionary closeDictionary\">{{\"beneficiaries_monetary_text\"|translate}}</div>\n      </div>\n      <div class=\"indi\" id=\"open_domen_indicator0sub_indicator4\">\n        <span style=\"font-family: ArsenalB\" class=\"indicator\" (click)=\"dictionaryName($event, 'domen_indicator0sub_indicator4')\"><i class=\"fas fa-caret-right\" style=\"color:orange\"></i> ** {{\"unemployed_disabled_person\"|translate}}</span><br>\n        <div id=\"domen_indicator0sub_indicator4\" class=\"contentDictionary closeDictionary\">{{\"unemployed_disabled_person_text\"|translate}}</div>\n      </div>\n      <div class=\"indi\" id=\"open_domen_indicator1sub_indicator2\">\n        <span style=\"font-family: ArsenalB\" class=\"indicator\" (click)=\"dictionaryName($event, 'domen_indicator1sub_indicator2')\"><i class=\"fas fa-caret-right\" style=\"color:orange\"></i> ** {{\"children_not_admitted_kindergarden\"|translate}}</span><br>\n        <div id=\"domen_indicator1sub_indicator2\" class=\"contentDictionary closeDictionary\">{{\"children_not_admitted_kindergarden_text\"|translate}}</div>\n      </div>\n      <div class=\"indi\" id=\"open_domen_indicator1sub_indicator3\">\n        <span style=\"font-family: ArsenalB\" class=\"indicator\" (click)=\"dictionaryName($event, 'domen_indicator1sub_indicator3')\"><i class=\"fas fa-caret-right\" style=\"color:orange\"></i> ** {{\"current_kindergarden_capacity\"|translate}}</span><br>\n        <div id=\"domen_indicator1sub_indicator3\" class=\"contentDictionary closeDictionary\">{{\"current_kindergarden_capacity_text\"|translate}}</div>\n      </div>\n      <div class=\"indi\" id=\"open_domen_indicator1sub_indicator6\">\n        <span style=\"font-family: ArsenalB\" class=\"indicator\" (click)=\"dictionaryName($event, 'domen_indicator1sub_indicator6')\"><i class=\"fas fa-caret-right\" style=\"color:orange\"></i> ** {{\"private_kindergardens\"|translate}}</span><br>\n        <div id=\"domen_indicator1sub_indicator6\" class=\"contentDictionary closeDictionary\">{{\"private_kindergardens_text\"|translate}}</div>\n      </div>\n      <div class=\"indi\" id=\"open_domen_indicator1sub_indicator9\">\n        <span style=\"font-family: ArsenalB\" class=\"indicator\" (click)=\"dictionaryName($event, 'domen_indicator1sub_indicator9')\"><i class=\"fas fa-caret-right\" style=\"color:orange\"></i> ** {{\"places_women_helth_care\"|translate}}</span><br>\n        <div id=\"domen_indicator1sub_indicator9\" class=\"contentDictionary closeDictionary\">{{\"places_women_helth_care_text\"|translate}}</div>\n      </div>\n      <div class=\"indi\" id=\"open_domen_indicator1sub_indicator10\">\n        <span style=\"font-family: ArsenalB\" class=\"indicator\" (click)=\"dictionaryName($event, 'domen_indicator1sub_indicator10')\"><i class=\"fas fa-caret-right\" style=\"color:orange\"></i> ** {{\"women_health_care_specialist\"|translate}}</span><br>\n        <div id=\"domen_indicator1sub_indicator10\" class=\"contentDictionary closeDictionary\">{{\"women_health_care_specialist_text\"|translate}}</div>\n      </div>\n        <div class=\"indi\" id=\"open_domen_indicatorSidebar1\" >\n        <span style=\"font-family: ArsenalB\" class=\"indicator\"  (click)=\"dictionaryName($event, 'domen_indicatorSidebar1')\"><i class=\"fas fa-caret-right\" style=\"color:orange\"></i> {{\"infant_mortality_rate\"|translate}} </span><br>\n        <div id=\"domen_indicatorSidebar1\" class=\"contentDictionary closeDictionary\"> {{\"infant_mortality_rate_text\"|translate}}</div>\n      </div>\n      <div class=\"indi\" id=\"open_domen_indicatorSidebar2\">\n        <span style=\"font-family: ArsenalB\" class=\"indicator\"  (click)=\"dictionaryName($event, 'domen_indicatorSidebar2')\"><i class=\"fas fa-caret-right\" style=\"color:orange\"></i> {{\"maternal_mortality_rate\"|translate}} </span><br>\n        <div  id=\"domen_indicatorSidebar2\"  class=\"contentDictionary closeDictionary\">{{\"maternal_mortality_rate_text\"|translate}}\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/dictionary-page/dictionary-page.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/dictionary-page/dictionary-page.component.ts ***!
  \**************************************************************/
/*! exports provided: DictionaryPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DictionaryPageComponent", function() { return DictionaryPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/esm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DictionaryPageComponent = /** @class */ (function () {
    function DictionaryPageComponent(route, translate) {
        var _this = this;
        this.route = route;
        this.translate = translate;
        var that = this;
        this.route.paramMap.subscribe(function (id) {
            _this.idIndicator = id.get('indicator');
        });
    }
    DictionaryPageComponent.prototype.ngOnInit = function () {
        var id = document.getElementById(this.idIndicator);
        //id.style.visibility="visible";
        //id.style.maxHeight="200px";
        //id.classList.add('openDictionary');
        //id.classList.remove('closeDictionary');
        //var openOnClick = document.getElementById('open_'+this.idIndicator);
        //openOnClick.scrollIntoView();
    };
    DictionaryPageComponent.prototype.dictionaryName = function (event, className) {
        var i, tabcontent;
        tabcontent = document.getElementsByClassName("contentDictionary");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.overflow = "hidden";
            tabcontent[i].style.maxHeight = "0px";
        }
        var id = document.getElementById(className);
        id.style.visibility = "visible";
        id.style.maxHeight = "500px";
        id.style.opacity = "1";
    };
    DictionaryPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dictionary-page',
            template: __webpack_require__(/*! ./dictionary-page.component.html */ "./src/app/dictionary-page/dictionary-page.component.html"),
            styles: [__webpack_require__(/*! ./dictionary-page.component.css */ "./src/app/dictionary-page/dictionary-page.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], DictionaryPageComponent);
    return DictionaryPageComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fliud footer\">\n  <div class=\"container\" style=\"padding:30px 0px;border-top: 1px solid #ededed\">\n    <div class=\"row\">\n      <div class=\"col-md-2\" style=\"padding: 20px\">\n        <img src=\"{{'./assets/img/logos/usaid1.png'|translate}}\" width=\"150px\">\n          </div>\n        <div class=\"col-md-8\">\n          <div class=\"mainText\" >\n          {{\"footer_1\"|translate}}\n            <div class=\"text\">\n            {{\"footer_2\"|translate}}\n            </div>\n            {{\"footer_3\"|translate}}\n          </div>\n        </div>\n        <div class=\"col-md-2\" style=\"padding: 20px\">\n          <img src=\"{{'./assets/img/logos/reactor.png'|translate}}\" width=\"125px\">\n          </div>\n        </div>\n      </div>\n    </div>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home.service.ts":
/*!*********************************!*\
  !*** ./src/app/home.service.ts ***!
  \*********************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeService = /** @class */ (function () {
    function HomeService(db) {
        this.db = db;
    }
    HomeService.prototype.getDefaultGrades = function (year) {
        return this.db.list('els-municipality/' + year).snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return ({ key: c.key, val: c.payload.val().scoreMun }); });
        });
    };
    HomeService.prototype.getDomenId = function (year) {
        return this.db.list('els-municipality/' + year).snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return ({ key: c.key, val: c.payload.val() }); });
        });
    };
    HomeService.prototype.getRank = function (year, key) {
        return this.db.object('els-municipality/' + year + '/' + key + '/' + 'domenSubdomen').valueChanges().map(function (value) {
            return value;
        });
    };
    HomeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], HomeService);
    return HomeService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation (languageEmit)=\"recieveLang($event)\"></app-navigation>\n<div class=\"container-fluid homeClass\">\n  <span class=\"offLoader\" id=\"loaderData\">\n    <span style=\"font-size: 12px\">\n      <img src=\"./assets/img/three-dots.svg\" width=\"20%\"> ...{{\"load_data\"|translate}}...\n    </span>\n\n  </span>\n  \n   <span class=\"offLoader\" id=\"loaderData\" >\n      <img src=\"./assets/img/three-dots.svg\" width=\"30%\"> ...{{\"load_data\"|translate}}...\n    </span>\n    \n  <span class=\"years_btn_position\">\n    <span *ngFor=\"let year of years\">\n      <span *ngIf=\"year.key!=lastYear\" class=\"years_btn_style\"(click)=\"changeYear(year.key)\">\n        {{year.key}}\n        <span class=\"years_tooltip\">{{'Click to view the data for'|translate}} {{year.key}} {{\"год.\"|translate}}\n          <span class=\"arrow_up\"></span>\n        </span>\n      </span>\n    </span>\n  </span>\n  <div *ngIf=\"lastYear\" class=\"current_year\">{{\"Data for\"|translate }} {{lastYear}} {{\"год.\"|translate}}</div>  \n  <chart type=\"Map\" [options]=\"options\" (load)=\"saveChart($event.context)\"></chart>\n  <div id=\"pullBox\" class=\"pull_box\">\n    <div class=\"pull\" ></div>\n    <div id=\"pullIcon\" class=\"pull_icon\" (click)=\"close_open_Slider()\"></div>\n    <div class=\"col-md-12 home_title\"> <span class=\"\">{{\"ranging_evaluation_manu\"|translate}}</span>\n    </div>\n    <div class=\"col-md-12 row\">\n      <div class=\"col-md-8 homeSliderText\">\n        <div style=\"margin-top: 10%\" id=\"defaultIndex\" (click)=\"getGeneralGrade($event.context)\"><span style=\"text-transform: uppercase;\">{{\"index\"|translate}}</span></div>\n        <ul style=\"width: 105%;margin-left: 5px\">\n          <li *ngFor=\"let domenSubdomen of domeniSubdomeni | async;\">\n            <span [class.active]=\"selectedDomen===domenSubdomen.key\" (click)=\"getDomenId(domenSubdomen.key)\"> {{domenSubdomen.val.name | translate}}</span>\n                <!-- <button (click)=\"addPoint($event.context)\" style=\"position: relative;top:0\">adsdsd</button>\n                 <ul>\n              <li *ngFor=\"let subdomen of Object.keys(domenSubdomen.val.subdomeni); \">\n                <span [class.active]=\"selectedSubdomen===subdomen\" (click)=\"getSubdomenId(domenSubdomen.key,subdomen)\">{{domenSubdomen.val.subdomeni[subdomen]}}</span>\n              </li>\n            </ul> -->\n          </li>\n        </ul>\n      </div>\n      <div class=\"col-md-12 homeSliderText\" style=\"margin-top:100px\">\n        <div class=\"subject\">{{name.name | translate}}</div>\n        <div class=\"description\">{{description.description | translate}}</div>\n      </div>\n    </div>\n  </div>\n\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _admin_domen_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../admin-domen.service */ "./src/app/admin-domen.service.ts");
/* harmony import */ var _admin_subdomen_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../admin-subdomen.service */ "./src/app/admin-subdomen.service.ts");
/* harmony import */ var _admin_els_municipality_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../admin-els-municipality.service */ "./src/app/admin-els-municipality.service.ts");
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../home.service */ "./src/app/home.service.ts");
/* harmony import */ var _admin_municipality_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../admin-municipality.service */ "./src/app/admin-municipality.service.ts");
/* harmony import */ var _admin_year_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../admin-year.service */ "./src/app/admin-year.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_take__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/add/operator/take */ "./node_modules/rxjs-compat/_esm5/add/operator/take.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/esm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};













var HomeComponent = /** @class */ (function () {
    function HomeComponent(http, serviceDomen, serviceSub, service, db, serviecMun, serviecMunEls, serviceYear, router, translate) {
        this.http = http;
        this.serviceDomen = serviceDomen;
        this.serviceSub = serviceSub;
        this.service = service;
        this.db = db;
        this.serviecMun = serviecMun;
        this.serviecMunEls = serviecMunEls;
        this.serviceYear = serviceYear;
        this.router = router;
        this.translate = translate;
        this.Object = Object;
        this.defaultScore = {};
        this.defaultDataMap = [];
        this.description = {};
        this.name = {};
        this.selectedDomen = null;
        this.years = [];
        this.domenMapData = [];
        this.defaultData = [];
        this.dataClasses = [];
        this.mapSeriesData = [];
        //constructor	
    }
    HomeComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var that;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.translate.get('dummyTranslation').toPromise().then()];
                    case 1:
                        _a.sent();
                        that = this;
                        this.getCurrentYear();
                        this.domeniSubdomeni = this.serviceDomen.getDomenList();
                        document.querySelector("#loaderData").setAttribute("class", "onLoader");
                        document.getElementById('defaultIndex').setAttribute('class', 'active');
                        //new code proveri za error na kraj
                        this.name = { name: "За индексот" };
                        this.description = { description: "Индексот на родова еднаквост е композитен  показател  за статусот на жените и мажите во различни сфери од живеењето, достапноста на јавни услуги кои се релевантни за остварување на родова еднаквост и напорите на општината за промовирање на родово одговорни политики." };
                        //proveri dali ova pravi spor loading na sajtot
                        this.serviceYear.getLastYear().subscribe(function (a) {
                            a.forEach(function (b) {
                                that.createChartMap(b.key);
                            });
                        });
                        this.getAllYears();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeComponent.prototype.mainDataChartLabels = function () {
        var that = this;
        that.dataClasses = [{ name: that.translate.instant('Ниско рангирани'),
                to: 16,
                color: "#B40013",
            }, {
                name: that.translate.instant('Средно рангирани'),
                from: 17,
                to: 38,
                color: "#F19722",
            }, { name: that.translate.instant('Високо рангирани'),
                from: 39,
                color: '#F2BE54'
            }];
    };
    HomeComponent.prototype.createChartMap = function (year) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var that;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.myCurrentYear = year;
                        return [4 /*yield*/, this.translate.get('dummyTranslation').toPromise().then()];
                    case 1:
                        _a.sent();
                        that = this;
                        this.dataClasses = [];
                        that.mainDataChartLabels();
                        setTimeout(function () {
                            document.getElementById('pullBox').setAttribute("class", "pull_open");
                            document.getElementById('pullIcon').setAttribute("class", "pull_icon1");
                        }, 1500);
                        if (this.listener) {
                            this.listener.unsubscribe();
                        }
                        this.listener = this.serviecMunEls.getElsMunicipalityYearId(year).subscribe(function (mun) {
                            _this.newData = mun.map(function (mun1) {
                                return [mun1.key, mun1.val.scoreMun];
                            });
                            // Replace ./data.json with your JSON feed
                            fetch('./assets/map_' + year + '.json').then(function (response) {
                                return response.json();
                            }).then(function (dat) {
                                that.options = {
                                    chart: {
                                        width: 1400,
                                        height: 920,
                                    },
                                    tooltip: {
                                        backgroundColor: null,
                                        borderWidth: 0,
                                        shadow: false,
                                        useHTML: true,
                                        padding: 0,
                                        pointFormatter: function () {
                                            //console.log(this);
                                            var tooltop = '<div class="map">' +
                                                '<div style="padding-top:8px"><img src="' + this.properties.mun_img + '" width="90px"/></div>' +
                                                '<div class="name_mun">' + that.translate.instant(this.name) + '</div>' +
                                                '<div class="grades">' +
                                                that.translate.instant('Ранг') + ':' + this.properties.mun_rang + '  |  ' + that.translate.instant('Оценка') + ':' + this.properties.mun_score + '</div>' +
                                                '<div class="triangle"></div></div>';
                                            return tooltop;
                                        },
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
                                        dataClasses: that.dataClasses,
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
                                                        that.router.navigate(['/municipality-list/' + that.myCurrentYear + '/' + this.properties.code]);
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    series: [{
                                            data: that.newData,
                                            mapData: dat,
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
                                                //format: '{point.name}',
                                                style: {
                                                    fontFamily: 'Arsenal',
                                                    fontSize: 14,
                                                    textTransform: 'uppercase',
                                                    color: 'white',
                                                    textOutline: 'white'
                                                },
                                                formatter: function () {
                                                    var name = this.point.name;
                                                    if (name) {
                                                        return that.translate.instant(this.point.name);
                                                    }
                                                    else {
                                                        // console.log(this);
                                                        return "";
                                                    }
                                                },
                                            }
                                        }],
                                };
                            }).catch(function (err) {
                                console.log(err);
                            });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeComponent.prototype.saveChart = function (chart) {
        this.chart = chart;
    };
    /*get general grade - индекс*/
    HomeComponent.prototype.getGeneralGrade = function (elem) {
        var that = this;
        document.getElementById('defaultIndex').setAttribute('class', 'active');
        this.selectedDomen = null;
        if (this.defaultData.length === 81) {
            that.chart.series[0].setData(that.defaultData);
            that.chart.colorAxis[0].update({
                dataClasses: [{
                        to: 16,
                        color: "#B40013",
                        name: that.translate.instant('Ниско рангирани')
                    }, {
                        from: 17,
                        to: 38,
                        color: "#F19722",
                        name: that.translate.instant('Средно рангирани')
                    }, {
                        from: 39,
                        name: that.translate.instant('Високо рангирани'),
                        color: '#F2BE54'
                    }]
            });
        }
    };
    /*on click get domenData*/
    HomeComponent.prototype.getDomenId = function (id) {
        var _this = this;
        var that = this;
        var rankData = [];
        var domenMap = [];
        this.selectedDomen = id;
        document.getElementById('defaultIndex').setAttribute('class', ' ');
        this.serviceDomen.getDomen(id).subscribe(function (a) {
            _this.description = a;
            _this.name = a;
        });
        this.domenMapData.forEach(function (v) {
            for (var domeniKey in v.domeni) {
                if (domeniKey === id) {
                    for (var objects in v.domeni[domeniKey]) {
                        for (var rank in v.domeni[domeniKey].columns) {
                            if (rank === '1rank') {
                                rankData = v.domeni[domeniKey].columns[rank].columnValue;
                            }
                        }
                    }
                }
            }
            domenMap.push([v.key, rankData]);
        });
        if (domenMap.length === 81) {
            that.chart.series[0].setData(domenMap);
            /*ColorAxis - бои како оцени*/
            /*first domen*/
            if (id === '-LQsYG2Wf30xOMNPuxeJ') {
                that.chart.colorAxis[0].update({
                    dataClasses: [{
                            from: 64,
                            to: 81,
                            color: "#B40013",
                            name: that.translate.instant('Ниско рангирани')
                        }, {
                            from: 18,
                            to: 63,
                            color: "#F19722",
                            name: that.translate.instant('Средно рангирани')
                        }, {
                            from: 1,
                            to: 17,
                            name: that.translate.instant('Високо рангирани'),
                            color: '#F2BE54'
                        }]
                });
            }
            else if (id === '-LQsYSYceSCpupl-VqtH') {
                that.chart.colorAxis[0].update({
                    dataClasses: [{
                            to: 59,
                            color: "#B40013",
                            name: that.translate.instant('Ниско рангирани')
                        }, {
                            from: 19,
                            to: 58,
                            color: "#F19722",
                            name: that.translate.instant('Средно рангирани')
                        }, {
                            from: 1,
                            to: 18,
                            name: that.translate.instant('Високо рангирани'),
                            color: '#F2BE54'
                        }]
                });
            }
            else {
                that.chart.colorAxis[0].update({
                    dataClasses: [{
                            from: 55,
                            to: 79,
                            color: "#B40013",
                            name: that.translate.instant('Ниско рангирани')
                        }, {
                            from: 17,
                            to: 38,
                            color: "#F19722",
                            name: that.translate.instant('Средно рангирани')
                        }, {
                            from: 1,
                            to: 16,
                            name: that.translate.instant('Високо рангирани'),
                            color: '#F2BE54'
                        }]
                });
            }
        }
        else {
            that.chart.series[0].setData(that.newData);
        }
    };
    /*slider window*/
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
    /*onInit - get currentYear*/
    HomeComponent.prototype.getCurrentYear = function () {
        var that = this;
        this.serviceYear.getLastYear().subscribe(function (a) {
            a.forEach(function (b) {
                that.lastYear = b.key;
                that.getDomen(b.key);
                that.getDefaultScore(b.key);
            });
        });
    };
    /*onInit - get domen data*/
    HomeComponent.prototype.getDomen = function (year) {
        var that = this;
        this.service.getDomenId(year).take(1).subscribe(function (domen) {
            domen.forEach(function (n) {
                that.service.getRank(that.lastYear, n.key).subscribe(function (domeni) {
                    that.domenMapData.push({ key: n.key, domeni: domeni });
                    if (that.domenMapData.length === 81) {
                        document.querySelector("#loaderData").setAttribute("class", "offLoader");
                    }
                    else {
                        document.querySelector("#loaderData").setAttribute("class", "onLoader");
                    }
                });
            });
        });
    };
    /*onInit - get defaultGrades*/
    HomeComponent.prototype.getDefaultScore = function (domenId) {
        var that = this;
        this.defaultScore = this.service.getDefaultGrades(domenId).subscribe(function (a) {
            a.forEach(function (mun) {
                that.defaultData.push([mun.key, Number(mun.val)]);
            });
        });
    };
    HomeComponent.prototype.recieveLang = function ($event) {
        return __awaiter(this, void 0, void 0, function () {
            var that;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        that = this;
                        return [4 /*yield*/, this.translate.get('dummyTranslation').toPromise().then()];
                    case 1:
                        _a.sent();
                        this.currentLang = $event;
                        this.dataClasses = [];
                        this.mainDataChartLabels();
                        if (this.myCurrentYear != undefined) {
                            this.serviceYear.getLastYear().subscribe(function (a) {
                                a.forEach(function (b) {
                                    that.createChartMap(b.key);
                                });
                            });
                        }
                        else {
                            this.createChartMap(this.myCurrentYear);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeComponent.prototype.getAllYears = function () {
        var _this = this;
        var that = this;
        this.listenerYears = that.serviceYear.getYearList().subscribe(function (year) {
            year.forEach(function (y) {
                that.years.push(y);
            });
            _this.listenerYears.unsubscribe();
        });
    };
    HomeComponent.prototype.changeYear = function (changeyear) {
        this.lastYear = changeyear;
        this.createChartMap(changeyear);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _admin_domen_service__WEBPACK_IMPORTED_MODULE_4__["AdminDomenService"],
            _admin_subdomen_service__WEBPACK_IMPORTED_MODULE_5__["AdminSubdomenService"],
            _home_service__WEBPACK_IMPORTED_MODULE_7__["HomeService"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"],
            _admin_municipality_service__WEBPACK_IMPORTED_MODULE_8__["AdminMunicipalityService"],
            _admin_els_municipality_service__WEBPACK_IMPORTED_MODULE_6__["AdminElsMunicipalityService"],
            _admin_year_service__WEBPACK_IMPORTED_MODULE_9__["AdminYearService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/metodology-page/metodology-page.component.css":
/*!***************************************************************!*\
  !*** ./src/app/metodology-page/metodology-page.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/metodology-page/metodology-page.component.html":
/*!****************************************************************!*\
  !*** ./src/app/metodology-page/metodology-page.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n<div class=\"container\" style=\"text-align: justify;\">\n  <h6 class=\"title\">{{\"methodology\"|translate}}</h6>\n  <div class=\"col-md-12\" [innerHTML]=\"'methodology_text'|translate\">\n    \n  </div>\n  <div class=\"col-md-12\">\n    <h6 class=\"title orangeText\">{{\"methodology_frame_title\"|translate}}</h6>\n    <p>{{\"methodology_frame\"|translate}}.</p>\n    <p><span style=\"font-family: ArsenalB;cursor: pointer\" [routerLink]=\"['/dictionaryPage', 'domen_indicator0']\">{{\"gender_gap\"|translate}}.</span> {{\"methodology_gender_gap_desc\"|translate}}:</p>\n    <ol [innerHTML]=\"'methodology_gender_gap_indicators'|translate\"></ol>\n    <p><span style=\"font-family: ArsenalB; cursor:pointer;\" [routerLink]=\"['/dictionaryPage', 'domen_indicator1']\">{{\"enabling_conditions\"|translate}}. </span>{{\"methodology_enabling_conditions\"|translate}}: </p>\n    <ol [innerHTML]=\"'methodology_enabling_conditions_indicators'|translate\">\n      \n    </ol>\n    <p><span style=\"font-family: ArsenalB;cursor: pointer;\" [routerLink]=\"['/dictionaryPage', 'domen_indicator1']\">{{\"gender_responsive_mun\"|translate}}. </span>{{\"methodology_gender_responsive_mun\"|translate}}:</p>\n    <ol [innerHTML]=\"'methodology_gender_responsive_mun_indicators'|translate\">\n    </ol>\n  </div>\n  <div class=\"col-md-12\">\n    <h6 class=\"title orangeText\">{{\"methodology_index_calc\"|translate}}</h6>\n    <div [innerHTML]=\"'methodology_index_1_calc'|translate\"></div>\n      \n    <div [innerHTML]=\"'methodology_index_2_calc'|translate\">\n      \n    </div>\n    <div [innerHTML]=\"'methodology_index_3_calc'|translate\">\n      \n    </div>\n  </div>\n  <div class=\"\" style=\"margin: 50px;\n    font-size: 8px;\n    margin-left: 15px;\"> <sup>1</sup> Joint Research Centre-European Commission. (2008). Handbook on constructing composite indicators: methodology and user guide. OECD publishing.</div>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/metodology-page/metodology-page.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/metodology-page/metodology-page.component.ts ***!
  \**************************************************************/
/*! exports provided: MetodologyPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetodologyPageComponent", function() { return MetodologyPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MetodologyPageComponent = /** @class */ (function () {
    function MetodologyPageComponent() {
    }
    MetodologyPageComponent.prototype.ngOnInit = function () {
    };
    MetodologyPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-metodology-page',
            template: __webpack_require__(/*! ./metodology-page.component.html */ "./src/app/metodology-page/metodology-page.component.html"),
            styles: [__webpack_require__(/*! ./metodology-page.component.css */ "./src/app/metodology-page/metodology-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MetodologyPageComponent);
    return MetodologyPageComponent;
}());



/***/ }),

/***/ "./src/app/municipality-compare/municipality-compare.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/municipality-compare/municipality-compare.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/municipality-compare/municipality-compare.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/municipality-compare/municipality-compare.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n<div class=\"container bottom\" style=\"position: relative;\">\n<span class=\"years_btn_position\">\n    <span *ngFor=\"let year of years\">\n      <span *ngIf=\"year.key!=lastYear\" class=\"years_btn_style\"(click)=\"changeYear(year.key)\">\n        {{year.key}}\n        <span class=\"years_tooltip\">{{'Click to view the data for'|translate}} {{year.key}} {{\"год.\"|translate}}\n          <span class=\"arrow_up\"></span>\n        </span>\n      </span>\n    </span>\n  </span>\n  <h6 class=\"munTitle\">{{\"mun_compare\"|translate}}</h6>\n  <div *ngIf=\"lastYear\" class=\"current_year\" style=\"top:26px;font-size: 16px;\">( {{lastYear}} {{\"год.\"|translate}} )</div> \n  <div style=\"width: 100%\">\n    <div id=\"mypoimnik\" class=\"activePoimnik\">\n      <app-dictionary-button-page></app-dictionary-button-page>\n    </div>\n     <div id=\"mymap\" class=\"activeMap\">\n   \n     <div id=\"removeBox\" style=\"float:right;color: orange;padding: 10px;\" class=\"btnClose\">\n      <i class=\"fas fa-times-circle\" (click)=\"removeBox()\"></i></div>\n       <div class=\"titleMap\">{{\"tooltip_municipality_map\"|translate}}</div>\n     <img src=\"/assets/img/map2.png\" style=\"width: 100%;border-top: 1px solid #ededed;\n    border-bottom: 1px solid #ededed;\">\n     <div style=\"padding: 10px;\">{{\"data_not_included\"|translate}}.</div> \n    </div>\n  </div>\n  <div class=\"row munCompare\">\n    <div class=\"col-md-5 col-6\" style=\"margin-right: 0;padding-right: 0\">\n      <div style=\"    height: 35px;\n    color: orange;\n    padding: 10px 0px;\n    border-top: 1px solid #f2f2f2;\">\n      <span id=\"poimnik\" class=\"circleIcon poimnikIcon\" (click)=\"showClass()\">\n       <span class=\"mytooltip\">{{\"glossary\"|translate}}</span>\n      <i class=\"fas fa-info\"></i>\n       </span>\n      <span id=\"mapa\" class=\"circleIcon\"  (click)=\"showMap()\">\n       <span  class=\"circleIcon circleIn\">\n           <span class=\"mytooltip\">{{\"tooltip_municipality_map\"|translate}}</span>\n          </span>\n          <i class=\"far fa-window-alt\"></i>\n          </span></div>\n      <div>\n        <ul class=\"dom\">\n          <li>\n            <div class=\"\">\n              <div class=\"orangeText indexData\">{{\"ge_index\"|translate}}</div>\n            </div>\n          </li>\n          <li *ngFor=\"let domenSubdomen of domenSubdomenList; let i=index\" class=\"domen1\">\n              <div id=\"domen_indicator{{i}} \" class=\"orangeText domenData dataLink domenLink\"  [routerLink]=\"['/dictionaryPage', 'domen_indicator'+i]\" style=\"font-family: ArsenalB\">{{domenSubdomen.domenName|translate}}</div>\n            <ul>\n              <li *ngFor=\"let subdomen of domenSubdomen.subdomeni; let s=index\" class=\"subdomen\">\n                <div id=\"{{subdomen.subdomenName}}\" class=\"subdomenData\">\n                  <div id=\"domen_indicator{{i}}sub_indicator{{s}}\" class=\"subdomen dataLink subdomenLink\"  [routerLink]=\"['/dictionaryPage', 'domen_indicator'+i+'sub_indicator'+s]\">{{subdomen.subdomenName|translate}}</div>\n                </div>\n              </li>\n            </ul>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"col-md-7 col-6\" style=\"text-align: center; margin-left: 0;padding-left: 0\">\n      <ul class=\"dom row\">\n        <li class=\"{{i < 3 ? 'col-md-6 col-6' : i > 3 ? 'col-md-3 col-3': 'col-md-4 col-4'}}\" *ngFor=\"let m of mun; let i=count \" style=\"padding: 0\">\n          <div style=\"border-bottom: 1px solid #f2f2f2;border-top: 1px solid #f2f2f2;\" class=\"munName\">{{m.name|translate}}</div>\n          <div style=\"position: relative;\">\n            <ul>\n            <div class=\"col-md-9 col-9\" style=\"margin: 0 auto\">\n              <li class=\"row\">\n                <div  class=\"col-md-6 col-6\">\n                <div style=\"padding-top: 10px\" >{{\"rang\"|translate}}</div>\n                <div class=\"orangeText num indexRS\">{{m.rangMun}}</div>\n                </div>\n                 <div  class=\"col-md-6 col-6\" >\n                 <div style=\"padding-top: 10px\">{{\"grade\"|translate}}</div>\n                 <div class=\"orangeText num indexRS\" >{{m.scoreMun}}</div>\n                 </div>\n              </li>\n              </div>\n              <li *ngFor=\"let domenSubdomen of m.domenSubdomen\" class=\"domen1\">\n                <div class=\"lineMun\"></div>\n               <div class=\"col-md-9 col-9\" style=\"margin: 0 auto\">\n                <ul class=\"row\">\n\n                <li *ngFor=\"let column of domenSubdomen.columns\" class=\"col-md-6 col-6\" >\n                <div class=\"{{column.columnName === 'Ранг' ? 'orangeText': column.columnName === 'Оценка' ? 'orangeText': column.columnName === 'Просек' ? 'orangeText':'simpleText' }} subdomen domenData\" style=\"font-family: ArsenalB\">{{column.columnValue}}</div>\n                </li>\n                </ul>\n                <ul>\n                <li *ngFor=\"let subdomen of domenSubdomen.subdomeni\">\n                  <ul class=\"row\">\n                  <li *ngFor=\"let sub of subdomen.columns\" class=\"col-md-6 col-6\" id=\"{{subdomen.subdomenName}}\">\n                   <div id=\"{{subdomen.subdomenName}}\" class=\"columnData\">\n                  <div class=\"subdomen\">{{sub.columnValue}}</div>\n                </div>\n                 </li>\n                 </ul>\n               </li>\n               </ul>\n               </div>\n             </li>\n           </ul>\n         </div>\n       </li>\n     </ul>\n   </div>\n </div>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/municipality-compare/municipality-compare.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/municipality-compare/municipality-compare.component.ts ***!
  \************************************************************************/
/*! exports provided: MunicipalityCompareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MunicipalityCompareComponent", function() { return MunicipalityCompareComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_els_municipality_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin-els-municipality.service */ "./src/app/admin-els-municipality.service.ts");
/* harmony import */ var _admin_year_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../admin-year.service */ "./src/app/admin-year.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MunicipalityCompareComponent = /** @class */ (function () {
    function MunicipalityCompareComponent(route, serviceEls, serviceYear) {
        this.route = route;
        this.serviceEls = serviceEls;
        this.serviceYear = serviceYear;
        this.mun = [];
        this.years = [];
    }
    MunicipalityCompareComponent.prototype.ngOnInit = function () {
        this.getAllYears();
        this.loadData();
    };
    //treba da se sredi loadData i loadData1, istata funkcija e
    MunicipalityCompareComponent.prototype.loadData = function () {
        var _this = this;
        var that = this;
        if (this.yearSubscrition) {
            this.yearSubscrition.unsubscribe();
        }
        this.yearSubscrition = this.serviceYear.getLastYear().subscribe(function (a) {
            a.forEach(function (b) {
                that.lastYear = b.key;
            });
            if (_this.dataRouteSubscription) {
                _this.dataRouteSubscription.unsubscribe();
            }
            _this.dataRouteSubscription = _this.route.paramMap.subscribe(function (id) {
                var fullParametersId = [];
                var idParameter;
                fullParametersId = id.keys;
                fullParametersId.forEach(function (idIn) {
                    idParameter = id.get(idIn);
                    that.els = that.serviceEls.getElsMunicipalityId(idParameter, that.lastYear);
                    that.els.forEach(function (b) {
                        that.mun.push(b);
                        //console.log(that.mun);	
                        var newDomenSubdomen = [];
                        for (var key in b.domenSubdomen) {
                            var myTemp = [];
                            for (var key1 in b.domenSubdomen[key].subdomens) {
                                var myColumn = [];
                                for (var col in b.domenSubdomen[key].subdomens[key1].columns) {
                                    if (col == '1rank' || col == "2grade") {
                                        myColumn.push({ columnName: b.domenSubdomen[key].subdomens[key1].columns[col].columnName, columnValue: b.domenSubdomen[key].subdomens[key1].columns[col].columnValue });
                                    }
                                }
                                myTemp.push({ subdomenName: b.domenSubdomen[key].subdomens[key1].subdomenName, columns: myColumn, position: b.domenSubdomen[key].subdomens[key1].position });
                            }
                            var mydomenCol = [];
                            for (var colDomen in b.domenSubdomen[key].columns) {
                                if (colDomen == '1rank' || colDomen == "2grade") {
                                    mydomenCol.push({ columnName: b.domenSubdomen[key].columns[colDomen].columnName, columnValue: b.domenSubdomen[key].columns[colDomen].columnValue });
                                }
                            }
                            newDomenSubdomen.push({ domenName: b.domenSubdomen[key].domenName, subdomeni: myTemp, columns: mydomenCol });
                        }
                        ;
                        newDomenSubdomen.forEach(function (domen, ind) {
                            domen.subdomeni.sort(function (a, b) {
                                return a.position - b.position;
                            });
                        });
                        that.domenSubdomenList = newDomenSubdomen;
                        //console.log(that.domenSubdomenList)
                        b.domenSubdomen = newDomenSubdomen;
                    });
                });
            });
        });
        // newDomenSubdomen.forEach(function(domen, ind){
        // 	//console.log(domen);
        // 	domen.subdomeni.sort(function(a,b){
        // 		return a.position-b.position;
        // 	});
        // });
    };
    MunicipalityCompareComponent.prototype.loadData1 = function (year) {
        var that = this;
        this.route.paramMap.subscribe(function (id) {
            var fullParametersId = [];
            var idParameter;
            fullParametersId = id.keys;
            fullParametersId.forEach(function (idIn) {
                idParameter = id.get(idIn);
                that.els = that.serviceEls.getElsMunicipalityId(idParameter, year);
                that.els.forEach(function (b) {
                    that.mun.push(b);
                    var newDomenSubdomen = [];
                    for (var key in b.domenSubdomen) {
                        var myTemp = [];
                        for (var key1 in b.domenSubdomen[key].subdomens) {
                            var myColumn = [];
                            for (var col in b.domenSubdomen[key].subdomens[key1].columns) {
                                if (col == '1rank' || col == "2grade") {
                                    myColumn.push({ columnName: b.domenSubdomen[key].subdomens[key1].columns[col].columnName, columnValue: b.domenSubdomen[key].subdomens[key1].columns[col].columnValue });
                                }
                            }
                            myTemp.push({ subdomenName: b.domenSubdomen[key].subdomens[key1].subdomenName, columns: myColumn, position: b.domenSubdomen[key].subdomens[key1].position });
                        }
                        var mydomenCol = [];
                        for (var colDomen in b.domenSubdomen[key].columns) {
                            if (colDomen == '1rank' || colDomen == "2grade") {
                                mydomenCol.push({ columnName: b.domenSubdomen[key].columns[colDomen].columnName, columnValue: b.domenSubdomen[key].columns[colDomen].columnValue });
                            }
                        }
                        newDomenSubdomen.push({ domenName: b.domenSubdomen[key].domenName, subdomeni: myTemp, columns: mydomenCol });
                    }
                    ;
                    newDomenSubdomen.forEach(function (domen, ind) {
                        domen.subdomeni.sort(function (a, b) {
                            return a.position - b.position;
                        });
                    });
                    //console.log(newDomenSubdomen);
                    that.domenSubdomenList = newDomenSubdomen;
                    //console.log(that.domenSubdomenList)
                    b.domenSubdomen = newDomenSubdomen;
                });
            });
        });
        // newDomenSubdomen.forEach(function(domen, ind){
        // 	//console.log(domen);
        // 	domen.subdomeni.sort(function(a,b){
        // 		return a.position-b.position;
        // 	});
        // });
    };
    MunicipalityCompareComponent.prototype.showClass = function () {
        var poimnik = document.getElementById('mypoimnik');
        poimnik.classList.add('myclass');
    };
    MunicipalityCompareComponent.prototype.showMap = function () {
        var poimnik = document.getElementById('mymap');
        poimnik.classList.add('myclass');
    };
    MunicipalityCompareComponent.prototype.removeBox = function () {
        var poimnik = document.getElementById('mypoimnik');
        poimnik.classList.remove("myclass");
        var map = document.getElementById('mymap');
        map.classList.remove("myclass");
    };
    MunicipalityCompareComponent.prototype.getAllYears = function () {
        var that = this;
        that.serviceYear.getYearList().subscribe(function (year) {
            year.forEach(function (y) {
                that.years.push(y);
            });
        });
    };
    MunicipalityCompareComponent.prototype.changeYear = function (changeyear) {
        this.lastYear = changeyear;
        this.domenSubdomenList = [];
        this.mun = [];
        this.loadData1(changeyear);
        //this.serieData=[];
        //this.createChart();
    };
    MunicipalityCompareComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-municipality-compare',
            template: __webpack_require__(/*! ./municipality-compare.component.html */ "./src/app/municipality-compare/municipality-compare.component.html"),
            styles: [__webpack_require__(/*! ./municipality-compare.component.css */ "./src/app/municipality-compare/municipality-compare.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _admin_els_municipality_service__WEBPACK_IMPORTED_MODULE_2__["AdminElsMunicipalityService"], _admin_year_service__WEBPACK_IMPORTED_MODULE_3__["AdminYearService"]])
    ], MunicipalityCompareComponent);
    return MunicipalityCompareComponent;
}());



/***/ }),

/***/ "./src/app/municipality-list/municipality-list.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/municipality-list/municipality-list.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/municipality-list/municipality-list.component.html":
/*!********************************************************************!*\
  !*** ./src/app/municipality-list/municipality-list.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation (languageEmit)=\"recieveLang($event)\"></app-navigation>\n<span class=\"years_btn_position\">\n    <span *ngFor=\"let year of years\">\n      <span *ngIf=\"year.key!=lastYear\" class=\"years_btn_style\"(click)=\"changeYear(year.key)\">\n        {{year.key}}\n        <span class=\"years_tooltip\">{{'Click to view the data for'|translate}} {{year.key}} {{\"год.\"|translate}}\n          <span class=\"arrow_up\"></span>\n        </span>\n      </span>\n    </span>\n  </span>\n<div class=\"container bottom munList\">\n\n  <h6 class=\"title\">{{\"municipalities\"|translate}}</h6>\n   <div *ngIf=\"lastYear\" class=\"current_year\" style=\"top:48px;font-size: 16px;\">( {{lastYear}} {{\"год.\"|translate}} )</div>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n\n      <chart [options]=\"options\" ></chart>\n    </div>\n<!--     <div class=\"download_pdf\"><i class=\"fal fa-arrow-circle-down\"></i></div>\n -->   <!--  <div class=\"col-md-12 municipality row\">\n      <ul class=\"row\" style=\"width: 80%;margin: 0 auto;\">\n        <li *ngFor=\"let region of regions\" class=\"col-md-3\">\n          <div style=\"margin-top: 30px\">\n            <span class=\"region_name\"> {{region.regionkey}}</span>\n            <ul style=\"width:100%\">\n              <li *ngFor=\"let mun of region.mun\" style=\"width:100%\">\n                <div><a [routerLink]=\"['/municipality-list',mun.key]\">{{mun.val}} <span style=\"text-transform: uppercase;font-family: ArsenalB\">({{mun.key}})</span></a></div>\n              </li>\n            </ul>\n          </div>\n        </li>\n      </ul>\n    </div> -->\n\n\n\n\n\n <div class=\"col-md-12 municipality row\" style=\"margin: 0 auto\">\n      <ul class=\"row\" style=\"width: 80%;margin: 0 auto;\">\n        <li *ngFor=\"let region of regions\" class=\"col-md-3 col-6\">\n          <div style=\"margin-top: 30px\">\n            <span class=\"region_name\">{{region.regionkey | translate}}</span>\n            <ul style=\"width:100%\">\n              <li *ngFor=\"let mun of region.mun | orderByMun\" style=\"width:100%\">\n                <div><a [routerLink]=\"['/municipality-list',lastYear,mun.link ]\">{{ mun.name | translate}} <span style=\"text-transform: uppercase;font-family: ArsenalB;font-size: 12px\">  ({{mun.code | translate}})</span></a></div>\n              </li>\n            </ul>\n          </div>\n        </li>\n      </ul>\n    </div>\n\n\n\n\n  </div>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/municipality-list/municipality-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/municipality-list/municipality-list.component.ts ***!
  \******************************************************************/
/*! exports provided: MunicipalityListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MunicipalityListComponent", function() { return MunicipalityListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_region_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../admin-region.service */ "./src/app/admin-region.service.ts");
/* harmony import */ var _admin_els_municipality_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin-els-municipality.service */ "./src/app/admin-els-municipality.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_year_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../admin-year.service */ "./src/app/admin-year.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/esm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MunicipalityListComponent = /** @class */ (function () {
    function MunicipalityListComponent(serviceRegion, router, serviceMun, serviceYear, translate) {
        this.serviceRegion = serviceRegion;
        this.router = router;
        this.serviceMun = serviceMun;
        this.serviceYear = serviceYear;
        this.translate = translate;
        this.currentLang = 'mk';
        this.lastYear = 2021;
        this.years = [];
        this.alphabets = ["А", "Б", "В", "Г", "Д", "Ѓ", "Е", "Ж", "З", "Ѕ", "И", "Ј", "К", "Л", "М", "Н", "Њ", "О", "П", "Р", "С", "Т", "Ќ", "У",
            "Ф", "Х", "Ц", "Ч", "Џ", "Ш"];
        this.serieData = [];
    }
    MunicipalityListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listener = this.serviceYear.getLastYear().subscribe(function (year) {
            _this.yearId = year.map(function (year) {
                return year.key;
            });
            _this.listener.unsubscribe();
            _this.lastYear = _this.yearId[0];
        });
        this.createChart();
        this.getAllYears();
    };
    MunicipalityListComponent.prototype.createChart = function () {
        var _this = this;
        var that = this;
        var data = [];
        //console.log(that.translate.currentLang);
        this.serviceRegion.getAll().subscribe(function (region) {
            _this.orderByName(region);
            _this.regions = region;
        });
        // this.serviceYear.getLastYear().forEach(function(a){
        // 	that.lastYear=a[0].key;
        that.serviceMun.getElsMunicipalityYearId(this.lastYear).subscribe(function (a) {
            /*withouth sort*/
            /*a.forEach(function (b) {
                    data.push({name:b.val.code,data:[b.val.scoreMun], color:b.val.colorGraph});
                });*/
            /*sort scoreMun*/
            var copyArrayA = a.slice(0);
            a.forEach(function (b) {
                copyArrayA.sort(function (am, bm) {
                    return am.val.scoreMun - bm.val.scoreMun;
                });
            });
            copyArrayA.forEach(function (b) {
                that.serieData.push({ name: that.translate.instant(b.val.code), data: [{ y: b.val.scoreMun, munName: b.val.name }], color: b.val.colorGraph });
            });
            //console.log(that.serieData);
            /*end sort*/
            that.options = {
                chart: {
                    width: 1000,
                    height: 400,
                    type: 'column',
                    style: {
                        fontFamily: 'Arsenal'
                    }
                },
                tooltip: {
                    formatter: function () {
                        return '<span>' + that.translate.instant('Општина') + ':</span><br/><span style="color:' + this.color + '">\u25CF</span> ' + that.translate.instant(this.point.munName) + '  (<span class="munCode">' + that.translate.instant(this.series.name) + '</span>)<br/>' + '     ' + '<span class="tooltipChart"> ' + that.translate.instant('Оценка') + ': </span><span class="num">' + this.point.y + '</span>';
                    }
                },
                xAxis: {
                    categories: [that.translate.instant('Општини')]
                },
                yAxis: {
                    title: {
                        text: that.translate.instant('Оценка')
                    },
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
                title: {
                    text: that.translate.instant('Оценка на општините')
                },
                series: that.serieData
            };
        });
        //});
    };
    MunicipalityListComponent.prototype.orderByName = function (region) {
        var that = this;
        region.sort(function (a, b) {
            return that.CharCompare(a.regionkey, b.regionkey, 0);
            // body...
        });
    };
    MunicipalityListComponent.prototype.CharCompare = function (a, b, index) {
        var aChar = this.alphabets.indexOf(a.toUpperCase().charAt(index));
        var bChar = this.alphabets.indexOf(b.toUpperCase().charAt(index));
        if (aChar != bChar) {
            if (aChar < bChar) {
                return -1;
            }
            else if (aChar > bChar) {
                return 1;
            }
            else {
                return 0;
            }
        }
        else {
            return this.CharCompare(a, b, index + 1);
        }
    };
    MunicipalityListComponent.prototype.recieveLang = function ($event) {
        this.currentLang = $event;
        this.serieData = [];
        this.createChart();
    };
    MunicipalityListComponent.prototype.getAllYears = function () {
        var that = this;
        that.serviceYear.getYearList().subscribe(function (year) {
            year.forEach(function (y) {
                that.years.push(y);
            });
        });
    };
    MunicipalityListComponent.prototype.changeYear = function (changeyear) {
        this.lastYear = changeyear;
        this.serieData = [];
        this.createChart();
    };
    MunicipalityListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-municipality-list',
            template: __webpack_require__(/*! ./municipality-list.component.html */ "./src/app/municipality-list/municipality-list.component.html"),
            styles: [__webpack_require__(/*! ./municipality-list.component.css */ "./src/app/municipality-list/municipality-list.component.css")]
        }),
        __metadata("design:paramtypes", [_admin_region_service__WEBPACK_IMPORTED_MODULE_1__["AdminRegionService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _admin_els_municipality_service__WEBPACK_IMPORTED_MODULE_2__["AdminElsMunicipalityService"], _admin_year_service__WEBPACK_IMPORTED_MODULE_4__["AdminYearService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
    ], MunicipalityListComponent);
    return MunicipalityListComponent;
}());



/***/ }),

/***/ "./src/app/municipality/municipality.component.css":
/*!*********************************************************!*\
  !*** ./src/app/municipality/municipality.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/municipality/municipality.component.html":
/*!**********************************************************!*\
  !*** ./src/app/municipality/municipality.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation (languageEmit)=\"recieveLang($event)\"></app-navigation>\n<span class=\"years_btn_position\">\n    <span *ngFor=\"let year of years\">\n      <span *ngIf=\"year.key!=idYear\" class=\"years_btn_style\"(click)=\"changeYear(year.key)\">\n        {{year.key}}\n        <span class=\"years_tooltip\">{{'Click to view the data for'|translate}} {{year.key}} {{\"год.\"|translate}}\n          <span class=\"arrow_up\"></span>\n        </span>\n      </span>\n    </span>\n  </span>\n  \n<div class=\"container currentMunicipality\" style=\"position: relative;\">\n<div *ngIf=\"idYear\" class=\"current_year\" style=\"top:26px;font-size: 16px;\">( {{idYear}} {{\"год.\"|translate}} )</div> \n  <div style=\"width: 100%\">\n    <div id=\"mypoimnik\" class=\"activePoimnik\">\n      <app-dictionary-button-page></app-dictionary-button-page>\n    </div>\n    <div id=\"mymap\" class=\"activeMap\">\n      <div id=\"removeBox\" style=\"float:right;color: orange;padding: 10px;\" class=\"btnClose\">\n        <i class=\"fas fa-times-circle\" (click)=\"removeBox()\"></i></div>\n      <div class=\"titleMap\">{{\"tooltip_municipality_map\"|translate}}</div>\n      <img src=\"/assets/img/map1.png\" style=\"width: 100%;border-top: 1px solid #ededed;\n    border-bottom: 1px solid #ededed;\">\n      <div style=\"padding: 10px;\">{{\"data_not_included\"|translate}}.</div>\n    </div>\n  </div>\n  <!-- <div style=\"\n    position: absolute;\n    height: 100%;\n    right: 0px;\n    top:-51px;\n    \">\n <div style=\"position: sticky;top:0px\">\n <span style=\"height:20px; width:20px;\n    background: orange;\n    display: block;border-radius: 50%\"></span></div></div>\n\n    <div style=\"\n    position: absolute;\n    height: 100%;\n    right: 0px;\n    top:-51px;\n    \">\n <div style=\"position: sticky;top:32px\">\n <span style=\"width: 20px;\n height: 20px;\n    background: orange;\n    display: block;border-radius: 50%;\"></span></div></div> -->\n  <h6 class=\"munTitle\">{{\"municipality\"|translate}}: <span style=\"font-family: ArsenalB\">{{municipalityDataSidebar.name | translate}}</span></h6>\n  <div class=\"row\">\n    <div class=\"col-md-10\">\n      <div class=\"munDomen\" style=\"border-right: 1px solid #eeeeee;\">\n        <div style=\"color: orange;\n    position: absolute;\n    width: 40%;z-index: 100\">\n          <span id=\"poimnik\" class=\"circleIcon poimnikIcon\" (click)=\"showClass()\">\n       <span class=\"mytooltip\">{{\"glossary\"|translate}}</span>\n          <i class=\"fas fa-info\" ></i>\n          </span>\n          <span id=\"mapa\" class=\"circleIcon\"  (click)=\"showMap()\">\n       <span  class=\"circleIcon circleIn\">\n           <span class=\"mytooltip\">{{\"tooltip_municipality_map\"|translate}}</span>\n          </span>\n          <i class=\"far fa-window-alt\"></i>\n          </span></div>\n        <ul class=\"dom\">\n          <li *ngFor=\"let domenSubdomen of domenSubdomenList; let i=index\" class=\"domen\">\n            <div class=\"row list\">\n              <div class=\"col-md-4  col-sm-4  col-3 name\">\n                <div class=\"domenList\">\n                  <div id=\"domen_indicator{{i}} \" [routerLink]=\"['/dictionaryPage', 'domen_indicator'+i]\">{{domenSubdomen.domenName | translate}}</div>\n                </div>\n              </div>\n              <div class=\"col-md-8 col-sm-7 col-9 \">\n                <!--  <div class=\"{{domenSubdomen.domenValue < 20 ? 'class_darkred' : domenSubdomen.domenValue > 30 ? 'class_orange': 'class_red' }} circleBox\">\n                    <div class=\"text-circle\">{{domenSubdomen.domenValue}}</div>\n                  </div> -->\n                <ul>\n                  <li *ngFor=\"let column of domenSubdomen.columns\" style=\"display: inline-block;\" class=\"columnsTable col-md-2 col-2 col-sm-2\">\n                    <div style=\"height: 20px;\">{{column.columnName | translate}}</div>\n                    <div class=\"{{column.columnName === 'Ранг' ? 'orangeText': column.columnName === 'Оценка' ? 'orangeText': column.columnName === 'Просек' ? 'orangeText':'simpleText' }} \"> {{column.columnValue}}</div>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <ul>\n              <li *ngFor=\"let subdomen of domenSubdomen.subdomens; let s=index\" class=\"subdomen\">\n                <div class=\"row list\">\n                  <div class=\"col-md-4 col-sm-4 col-3 name\">\n                    <div class=\"subdomenList\">\n                      <div id=\"{{subdomen.subdomenName}}\">\n                        <div id=\"sub_indicator{{i}}\" [routerLink]=\"['/dictionaryPage', 'domen_indicator'+i+'sub_indicator'+s]\" class=\"subdomen\">{{subdomen.subdomenName |translate}}</div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-8 col-sm-7  col-9 \">\n                    <!--  <div class=\"{{subdomen.subdomenValue < 20 ? 'class_darkred' : subdomen.subdomenValue > 30 ? 'class_orange': 'class_red' }} circleBox\">\n                        <div class=\"text-circle\">{{subdomen.subdomenValue}}</div>\n                      </div> -->\n                    <ul>\n                      <li *ngFor=\"let columnSub of subdomen.columns\" style=\"display: inline-block; \" class=\"columnsTable col-md-2 col-sm-2 col-2\">\n                        <div id=\"{{subdomen.subdomenName}}\">\n                          <div id=\"{{subdomen.subdomenName}}_{{columnSub.columnKey}}\"><span id=\"{{columnSub.columnKey}}\" >{{columnSub.columnValue |translate}}</span></div>\n\n                        </div>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </li>\n            </ul>\n          </li>\n        </ul>\n      </div>\n      <div>\n      </div>\n      <div style=\"padding: 50px 0px; color: orange\">{{\"data_not_included\"|translate}}.\n      </div>\n      <!-- <div class=\"description\" sytle=\"margin-top:30px\">\n          <div>Опис</div>\n          <div>\n            {{municipalityData.description}}\n          </div>\n        </div> -->\n    </div>\n    <div class=\"col-md-2 col-sm-12 profileMun\">\n      <div class=\"row\">\n        <div class=\"imageMun\">\n          <div class=\"profileText\">{{\"profile_municilapity\"|translate}}</div>\n          <div><img src=\"{{municipalityDataSidebar.image}}\" width=\"150px\"></div>\n          </div>\n          <div class=\"rangMun\">\n            <div>{{\"ge_index\"|translate}}</div>\n            <div class=\"index\" style=\"padding-right: 10px;\">\n              <span>{{\"grade\"|translate}}: </span>\n              <span class=\"text\" >{{municipalityData.scoreMun}}</span></div>\n            <div style=\"margin-top: 10px;\" class=\"index\">\n              <span>{{\"rang\"|translate}}: </span>\n              <span class=\"text\">{{municipalityData.rangMun}}</span>\n            </div>\n          </div>\n          <div class=\"demograficData\" style=\"margin-top: 30px\">\n            <div class=\"region\">\n              <span>{{\"region\"|translate}}: </span>\n              <span class=\"dataValue\">{{regionName|translate}}</span>\n            </div>\n            <div class=\"area\">\n              <span>{{\"area\"|translate}}: </span>\n              <span class=\"dataValue\">{{municipalityDataSidebar.area}} км<sup>2</sup></span>\n            </div>\n            <div class=\"population\">\n              <span>{{\"number_populated _places\"|translate}}: </span>\n              <span class=\"dataValue\">{{municipalityDataSidebar.population}}</span>\n            </div>\n            <div class=\"women\">\n              <span>{{\"number_women\"|translate}}: </span>\n              <span class=\"dataValue\">{{municipalityData.women}}</span>\n            </div>\n            <div class=\"men\">\n              <span>{{\"number_men\"|translate}}: </span>\n              <span class=\"dataValue\">{{municipalityData.men}}</span>\n            </div>\n            <div class=\"plannedbudget\">\n              <span>{{\"total_planned_budget\"|translate}} {{idYear}} {{year}}: <br/></span>\n              <span class=\"dataValue\">{{municipalityData.plannedBudget}} ден</span>\n            </div>\n            <div class=\"budget\">\n              <span>{{\"total_realized_budget\"|translate}} {{idYear}} {{year}}:<br/> </span>\n              <span class=\"dataValue\">{{municipalityData.budget}} ден</span>\n            </div>\n            <div class=\"numberRateInfants\" *ngIf=\"municipalityData.numberRateInfants!='/'\">\n              <span>{{\"infant_mortality_rate\"|translate}}: </span>\n              <span class=\"dataValue\">{{municipalityData.numberRateInfants}}</span>\n            </div>\n            <div class=\"numberRateMaternal\" *ngIf=\"municipalityData.numberRateMaternal!='/'\">\n              <span>{{\"maternal_mortality_rate\"|translate}}: </span>\n              <span class=\"dataValue\">{{municipalityData.numberRateMaternal}}</span>\n            </div>\n            <div class=\"numberCompany\" *ngIf=\"municipalityData.numberCompany!='/'\">\n              <span>{{\"number_company\"|translate}}: </span>\n              <span class=\"dataValue\">{{municipalityData.numberCompany}}</span>\n            </div>\n            <div class=\"numberPlot\" *ngIf=\"municipalityData.numberPlot!='/'\">\n              <span>{{\"number_plots\"|translate}}: </span>\n              <span class=\"dataValue\">{{municipalityData.numberPlot}}</span>\n            </div>\n            <div class=\"numberObject\" *ngIf=\"municipalityData.numberObject!='/'\">\n              <span>{{\"number_facilities\"|translate}}: </span>\n              <span class=\"dataValue\">{{municipalityData.numberObject}}</span>\n            </div>\n            <div class=\"numberFlat\"*ngIf=\"municipalityData.numberFlat!='/'\">\n              <span>{{\"number_apartments\"|translate}}: </span>\n              <span class=\"dataValue\">{{municipalityData.numberFlat}}</span>\n            </div>\n            <br>\n            <br>\n            <div class=\"compare\" style=\"width:200px\">\n              <div style=\"font-size: 12px\">{{\"mun_compare\"|translate}} <span class=\"dataValue\">{{municipalityDataSidebar.name|translate}}</span> {{\"with\"|translate}}: </div>\n              <ss-multiselect-dropdown [options]=\"myOptions\" [texts]=\"myTexts\" [settings]=\"mySettings\" [(ngModel)]=\"optionsModel\" (ngModelChange)=\"onChange($event)\"></ss-multiselect-dropdown><span class=\"button_compare\" (click)=\"onClickDropdown()\"><i class=\"fas fa-caret-up\"></i></span>\n              <div class=\"error\">{{error}}</div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/municipality/municipality.component.ts":
/*!********************************************************!*\
  !*** ./src/app/municipality/municipality.component.ts ***!
  \********************************************************/
/*! exports provided: MunicipalityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MunicipalityComponent", function() { return MunicipalityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_municipality_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../admin-municipality.service */ "./src/app/admin-municipality.service.ts");
/* harmony import */ var _admin_els_municipality_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin-els-municipality.service */ "./src/app/admin-els-municipality.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_region_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../admin-region.service */ "./src/app/admin-region.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/esm5/ngx-translate-core.js");
/* harmony import */ var _admin_year_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../admin-year.service */ "./src/app/admin-year.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var MunicipalityComponent = /** @class */ (function () {
    function MunicipalityComponent(route, serviceYear, serviceMun, serviceEls, router, serviceRegion, translate) {
        this.route = route;
        this.serviceYear = serviceYear;
        this.serviceMun = serviceMun;
        this.serviceEls = serviceEls;
        this.router = router;
        this.serviceRegion = serviceRegion;
        this.translate = translate;
        this.currentLang = 'mk';
        this.myTexts = {};
        this.years = [];
        this.alphabets = ["А", "Б", "В", "Г", "Д", "Ѓ", "Е", "Ж", "З", "Ѕ", "И", "Ј", "К", "Л", "М", "Н", "Њ", "О", "П", "Р", "С", "Т", "Ќ", "У",
            "Ф", "Х", "Ц", "Ч", "Џ", "Ш"];
        // Text configuration// dropdown multiselect
        // myTexts: IMultiSelectTexts = {
        // 	defaultTitle: this.translate.instant('Изберете општина'),
        // 	checkedPlural:this.translate.instant('Избрани'),
        // 	checked:this.translate.instant('Избран'),
        // 	searchPlaceholder:this.translate.instant('Барај'),
        // 	searchEmptyResult:this.translate.instant('Не постои таа општина')
        //};
        this.mySettings = {
            checkedStyle: 'fontawesome',
            enableSearch: true,
            dynamicTitleMaxItems: 0,
            displayAllSelectedText: false,
            selectionLimit: 3
        };
    }
    MunicipalityComponent.prototype.ngOnInit = function () {
        //for translation
        this.getDropdownSelectedText();
        //load all data
        this.loadData();
        //get municiplaities for the dropdown in sidebar
        this.getDropdownMnicipalities();
        this.getMunRegion();
        this.getAllYears();
    };
    MunicipalityComponent.prototype.getDropdownSelectedText = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.translate.get('dummyTranslation').toPromise().then()];
                    case 1:
                        _a.sent();
                        this.myTexts = {
                            defaultTitle: this.translate.instant('Изберете општина'),
                            checkedPlural: this.translate.instant('Избрани'),
                            checked: this.translate.instant('Избран'),
                            searchPlaceholder: this.translate.instant('Барај'),
                            searchEmptyResult: this.translate.instant('Не постои таа општина')
                        };
                        return [2 /*return*/];
                }
            });
        });
    };
    MunicipalityComponent.prototype.loadData = function () {
        var _this = this;
        var that = this;
        this.route.paramMap.subscribe(function (id) {
            _this.idMunicipality = id.get('idMunicipality');
            _this.idYear = id.get('idYear');
            /*data from municipality*/
            _this.municipalityDataSidebar = _this.serviceMun.getMunicipality(_this.idMunicipality).subscribe(function (objectdata) {
                _this.municipalityDataSidebar = objectdata;
            });
        });
        /*data from els*/
        this.municipalityData = this.serviceEls.getElsMunicipalityId(this.idMunicipality, this.idYear).subscribe(function (munData) {
            _this.municipalityData = munData;
        });
        /*domeni & subdomeni*/
        this.serviceEls.getDomenSubdomenYear(this.idMunicipality, this.idYear).subscribe(function (domenSubdomen) {
            domenSubdomen.forEach(function (domen, ind) {
                domen.subdomens.sort(function (a, b) {
                    return a.position - b.position;
                });
            });
            _this.domenSubdomenList = domenSubdomen;
        });
    };
    MunicipalityComponent.prototype.loadData1 = function (year) {
        var _this = this;
        var that = this;
        this.route.paramMap.subscribe(function (id) {
            _this.idMunicipality = id.get('idMunicipality');
            /*data from municipality*/
            _this.municipalityDataSidebar = _this.serviceMun.getMunicipality(_this.idMunicipality).subscribe(function (objectdata) {
                _this.municipalityDataSidebar = objectdata;
            });
        });
        /*data from els*/
        this.municipalityData = this.serviceEls.getElsMunicipalityId(this.idMunicipality, year).subscribe(function (munData) {
            _this.municipalityData = munData;
        });
        /*domeni & subdomeni*/
        this.serviceEls.getDomenSubdomenYear(this.idMunicipality, year).subscribe(function (domenSubdomen) {
            domenSubdomen.forEach(function (domen, ind) {
                domen.subdomens.sort(function (a, b) {
                    return a.position - b.position;
                });
            });
            _this.domenSubdomenList = domenSubdomen;
        });
    };
    MunicipalityComponent.prototype.getDropdownMnicipalities = function () {
        var _this = this;
        var that = this;
        /*dropdown municipalities*/
        var municiplaities = [];
        var getMun = this.serviceMun.getMunicipalityList().subscribe(function (mun) {
            mun.forEach(function (m) {
                municiplaities.push({ id: m.key, name: that.translate.instant(m.val.name) });
            });
            _this.OrderFunc(municiplaities);
            getMun.unsubscribe();
            var index = municiplaities.findIndex(function (a) { return a.id === that.idMunicipality; });
            municiplaities.splice(index, 1);
            _this.myOptions = municiplaities;
            //console.log(this.myOptions);
        });
    };
    MunicipalityComponent.prototype.getMunRegion = function () {
        var that = this;
        this.serviceRegion.getRegionList().forEach(function (a) {
            a.forEach(function (b) {
                for (var key in b.val) {
                    if (key == that.idMunicipality) {
                        that.regionName = b.key;
                    }
                }
            });
        });
    };
    MunicipalityComponent.prototype.OrderFunc = function (municiplaities) {
        var that = this;
        municiplaities.sort(function (a, b) {
            return that.CharCompare(a.name, b.name, 0);
        });
    };
    MunicipalityComponent.prototype.CharCompare = function (a, b, index) {
        var aChar;
        var bChar;
        aChar = this.alphabets.indexOf(a.toUpperCase().charAt(index));
        bChar = this.alphabets.indexOf(b.toUpperCase().charAt(index));
        if (aChar != null) {
            if (aChar < bChar) {
                return -1;
            }
            else if (aChar > bChar) {
                return 1;
            }
            else {
                return 0;
            }
        }
        else {
            return this.CharCompare(a, b, index + 1);
        }
    };
    MunicipalityComponent.prototype.onChange = function (event) {
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
    MunicipalityComponent.prototype.showClass = function () {
        var poimnik = document.getElementById('mypoimnik');
        poimnik.classList.add('myclass');
    };
    MunicipalityComponent.prototype.showMap = function () {
        var poimnik = document.getElementById('mymap');
        poimnik.classList.add('myclass');
    };
    MunicipalityComponent.prototype.removeBox = function () {
        var poimnik = document.getElementById('mypoimnik');
        poimnik.classList.remove("myclass");
        var map = document.getElementById('mymap');
        map.classList.remove("myclass");
    };
    MunicipalityComponent.prototype.recieveLang = function ($event) {
        this.currentLang = $event;
        //dropdown load again for the translate
        this.getDropdownSelectedText();
        this.getDropdownMnicipalities();
    };
    MunicipalityComponent.prototype.getAllYears = function () {
        var that = this;
        that.serviceYear.getYearList().subscribe(function (year) {
            year.forEach(function (y) {
                that.years.push(y);
            });
        });
    };
    MunicipalityComponent.prototype.changeYear = function (changeyear) {
        this.idYear = changeyear;
        this.loadData1(changeyear);
        //this.serieData=[];
        //this.createChart();
    };
    MunicipalityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-municipality',
            template: __webpack_require__(/*! ./municipality.component.html */ "./src/app/municipality/municipality.component.html"),
            styles: [__webpack_require__(/*! ./municipality.component.css */ "./src/app/municipality/municipality.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _admin_year_service__WEBPACK_IMPORTED_MODULE_6__["AdminYearService"], _admin_municipality_service__WEBPACK_IMPORTED_MODULE_1__["AdminMunicipalityService"], _admin_els_municipality_service__WEBPACK_IMPORTED_MODULE_2__["AdminElsMunicipalityService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _admin_region_service__WEBPACK_IMPORTED_MODULE_4__["AdminRegionService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
    ], MunicipalityComponent);
    return MunicipalityComponent;
}());



/***/ }),

/***/ "./src/app/navigation/navigation.component.css":
/*!*****************************************************!*\
  !*** ./src/app/navigation/navigation.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navigation/navigation.component.html":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"conatiner-fluid navcontainer navigationUp\">\n  <div class=\"container\">\n    <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n      <a class=\"navbar-brand\" [routerLink]=\"['']\"><img src=\"{{'./assets/img/logos/logo_horizontalno.png'|translate}}\" width=\"180px\"></a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo03\" aria-controls=\"navbarTogglerDemo03\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"toggleState()\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"navbar-collapse collapse w-100 order-3 dual-collapse2 myNav\" [ngClass]=\"{ 'in': isIn }\">\n        <ul class=\"navbar-nav ml-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/aboutIndex']\"><i class=\"fal fa-angle-down\" style=\"padding: 0px 5px;\"></i>  {{\"about_the_index\"|translate}}</a>\n            <ul class=\"nav-link-in\">\n              <li [routerLink]=\"['/dictionaryPage']\" style=\"padding: 10px 25px\">{{\"glossary\"|translate}}</li>\n              <li [routerLink]=\"['/metodology']\" style=\"padding: 10px 25px\">{{\"methodology\"|translate}}</li>\n            </ul>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/aboutProject']\">{{'За проектот'|translate}}</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/municipality-list']\">{{\"municipalities\"|translate}}</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/contactPage']\">{{\"contact\"|translate}}</a>\n          </li>\n          <div class=\"lang\" >\n              <span class=\"form-inline\">\n                <select class=\"language\" #selectedLang (change)=\"switchLang(selectedLang.value)\">\n                  <option *ngFor=\"let language of translate.getLangs()\" [value]=\"language\"\n                  [selected]=\"language === translate.currentLang\">\n                  {{ language }}\n                </option>\n              </select>\n            </span>\n          </div>\n        </ul>\n      </div>\n    </nav>\n  </div>\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/esm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(translate) {
        this.translate = translate;
        this.languageEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isIn = false; // store state
    }
    NavigationComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.translate.get('dummyTranslation').toPromise().then()];
                    case 1:
                        _a.sent();
                        this.translate.setDefaultLang('mk');
                        this.translate.setDefaultLang(localStorage.getItem('language'));
                        this.translate.use(localStorage.getItem('language'));
                        this.translate.setDefaultLang('mk');
                        this.translate.addLangs(['mk', 'en']);
                        return [2 /*return*/];
                }
            });
        });
    };
    NavigationComponent.prototype.switchLang = function (lang) {
        this.translate.use(lang);
        localStorage.setItem("language", lang);
        this.languageEmit.emit(lang);
    };
    NavigationComponent.prototype.toggleState = function () {
        var bool = this.isIn;
        this.isIn = bool === false ? true : false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NavigationComponent.prototype, "languageEmit", void 0);
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n<div class=\"container\" style=\"height: 70vh\">\n  <div class=\"error404\">Грешка: 404</div>\n  <div class=\"\" style=\"text-align: center;\">Страницата не постои, вратете се на <a [routerLink]=\"['/']\">почетната страна.</a></div>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/orderBy.pipe.ts":
/*!*********************************!*\
  !*** ./src/app/orderBy.pipe.ts ***!
  \*********************************/
/*! exports provided: OrderBy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderBy", function() { return OrderBy; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrderBy = /** @class */ (function () {
    function OrderBy() {
        this.alphabets = ["А", "Б", "В", "Г", "Д", "Ѓ", "Е", "Ж", "З", "Ѕ", "И", "Ј", "К", "Л", "М", "Н", "Њ", "О", "П", "Р", "С", "Т", "Ќ", "У",
            "Ф", "Х", "Ц", "Ч", "Џ", "Ш"];
    }
    OrderBy.prototype.transform = function (array, args) {
        var that = this;
        if (array != undefined || array != null) {
            array.sort(function (a, b) {
                return that.compareChar(a.val.name, b.val.name, 0);
            });
            return array;
        }
    };
    OrderBy.prototype.compareChar = function (a, b, index) {
        var that = this;
        var aChar = that.alphabets.indexOf(a.toUpperCase().charAt(index));
        var bChar = that.alphabets.indexOf(b.toUpperCase().charAt(index));
        if (aChar != bChar) {
            if (aChar < bChar) {
                return -1;
            }
            else if (aChar > bChar) {
                return 1;
            }
            else {
                return 0;
            }
        }
        else {
            return this.compareChar(a, b, index + 1);
        }
    };
    OrderBy = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'orderByName'
        })
    ], OrderBy);
    return OrderBy;
}());



/***/ }),

/***/ "./src/app/orderByMunRegion.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/orderByMunRegion.pipe.ts ***!
  \******************************************/
/*! exports provided: OrderByMun */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderByMun", function() { return OrderByMun; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrderByMun = /** @class */ (function () {
    function OrderByMun() {
        this.alphabets = ["А", "Б", "В", "Г", "Д", "Ѓ", "Е", "Ж", "З", "Ѕ", "И", "Ј", "К", "Л", "М", "Н", "Њ", "О", "П", "Р", "С", "Т", "Ќ", "У",
            "Ф", "Х", "Ц", "Ч", "Џ", "Ш"];
    }
    OrderByMun.prototype.transform = function (array, args) {
        var that = this;
        if (array !== null) {
            /* return array.sort((a,b)=>a.val.name.localeCompare(b.val.name));*/
            array.sort(function (a, b) {
                var aChar;
                var bChar;
                aChar = that.alphabets.indexOf(a.name.toUpperCase().charAt());
                bChar = that.alphabets.indexOf(b.name.toUpperCase().charAt());
                if (aChar < bChar) {
                    return -1;
                }
                else if (aChar > bChar) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
            return array;
        }
    };
    OrderByMun = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'orderByMun'
        })
    ], OrderByMun);
    return OrderByMun;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyCENt0gLxbPS9YVXkhBJCmVMDN4GWHubPI",
        authDomain: "test-rodov-index-84019.firebaseapp.com",
        databaseURL: "https://test-rodov-index-84019-default-rtdb.firebaseio.com",
        projectId: "test-rodov-index-84019",
        storageBucket: "test-rodov-index-84019.appspot.com",
        messagingSenderId: "872032953857",
        appId: "1:872032953857:web:527a6d3a25467f67d44200",
        measurementId: "G-N56FM0XPDF"
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/aleksandraristeska/Desktop/rodov_index_website/GIndex/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map