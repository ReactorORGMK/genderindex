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
var auth_service_1 = require("./../auth.service");
var admin_els_municipality_service_1 = require("../admin-els-municipality.service");
var AuthComponent = /** @class */ (function () {
    function AuthComponent(authService, serviceEls) {
        this.authService = authService;
        this.serviceEls = serviceEls;
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
        var allYears = [];
        this.yearsEls = this.serviceEls.getElsYears().subscribe(function (year) {
            // console.log(year);
            year.forEach(function (a) {
                // console.log(a.key)
                allYears.push(a.key);
                // body...
            });
        });
        console.log(allYears);
        this.yearsEls = allYears;
        // console.log(this.yearsEls);
    };
    AuthComponent = __decorate([
        core_1.Component({
            selector: 'auth',
            templateUrl: './auth.component.html',
            styleUrls: ['./auth.component.css']
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService, admin_els_municipality_service_1.AdminElsMunicipalityService])
    ], AuthComponent);
    return AuthComponent;
}());
exports.AuthComponent = AuthComponent;
//# sourceMappingURL=auth.component.js.map