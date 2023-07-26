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
var auth_1 = require("@angular/fire/auth");
var router_1 = require("@angular/router");
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
        this.firebaseAuth
            .auth
            .signInWithEmailAndPassword(email, password)
            .then(function (value) {
            //this.router.navigate(['/admin']);
        })
            .catch(function (err) {
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
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [auth_1.AngularFireAuth, router_1.Router])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map