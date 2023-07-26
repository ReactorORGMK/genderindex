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
        core_1.Component({
            selector: 'sign-in',
            templateUrl: './admin-sign-in.component.html',
            styleUrls: ['./admin-sign-in.component.css']
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService])
    ], AdminSignInComponent);
    return AdminSignInComponent;
}());
exports.AdminSignInComponent = AdminSignInComponent;
//# sourceMappingURL=admin-sign-in.component.js.map