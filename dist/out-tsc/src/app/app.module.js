"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var auth_component_1 = require("./auth/auth.component");
var router_1 = require("@angular/router");
var not_found_component_1 = require("./not-found/not-found.component");
var home_component_1 = require("./home/home.component");
var fire_1 = require("@angular/fire");
var storage_1 = require("@angular/fire/storage");
var database_1 = require("@angular/fire/database");
var forms_1 = require("@angular/forms");
var environment_1 = require("./../environments/environment");
/*auth*/
var auth_1 = require("@angular/fire/auth");
var auth_service_1 = require("./auth.service");
var admin_subdomen_service_1 = require("./admin-subdomen.service");
var signed_in_component_1 = require("./signed-in/signed-in.component");
var municipality_component_1 = require("./municipality/municipality.component");
var navigation_component_1 = require("./navigation/navigation.component");
var admin_navbar_component_1 = require("./admin-navbar/admin-navbar.component");
var admin_sign_in_component_1 = require("./admin-sign-in/admin-sign-in.component");
var admin_domen_component_1 = require("./admin-domen/admin-domen.component");
var admin_subdomen_component_1 = require("./admin-subdomen/admin-subdomen.component");
var admin_subdomen_list_component_1 = require("./admin-subdomen-list/admin-subdomen-list.component");
var admin_subdomen_edit_component_1 = require("./admin-subdomen-edit/admin-subdomen-edit.component");
var admin_domen_list_component_1 = require("./admin-domen-list/admin-domen-list.component");
var admin_domen_edit_component_1 = require("./admin-domen-edit/admin-domen-edit.component");
var admin_municipality_component_1 = require("./admin-municipality/admin-municipality.component");
var admin_municipality_list_component_1 = require("./admin-municipality-list/admin-municipality-list.component");
var admin_municipality_edit_component_1 = require("./admin-municipality-edit/admin-municipality-edit.component");
var admin_year_component_1 = require("./admin-year/admin-year.component");
var admin_year_list_component_1 = require("./admin-year-list/admin-year-list.component");
var admin_year_edit_component_1 = require("./admin-year-edit/admin-year-edit.component");
var admin_els_municipality_component_1 = require("./admin-els-municipality/admin-els-municipality.component");
var angular2_highcharts_1 = require("angular2-highcharts");
var http_1 = require("@angular/common/http");
var municipality_list_component_1 = require("./municipality-list/municipality-list.component");
var angular_2_dropdown_multiselect_1 = require("angular-2-dropdown-multiselect");
var municipality_compare_component_1 = require("./municipality-compare/municipality-compare.component");
var footer_component_1 = require("./footer/footer.component");
var orderBy_pipe_1 = require("./orderBy.pipe");
var admin_els_municipality_list_component_1 = require("./admin-els-municipality-list/admin-els-municipality-list.component");
var admin_region_component_1 = require("./admin-region/admin-region.component");
var admin_region_list_component_1 = require("./admin-region-list/admin-region-list.component");
var admin_region_edit_component_1 = require("./admin-region-edit/admin-region-edit.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                auth_component_1.AuthComponent,
                not_found_component_1.NotFoundComponent,
                home_component_1.HomeComponent,
                signed_in_component_1.SignedInComponent,
                municipality_component_1.MunicipalityComponent,
                navigation_component_1.NavigationComponent,
                admin_navbar_component_1.AdminNavbarComponent,
                admin_sign_in_component_1.AdminSignInComponent,
                admin_domen_component_1.AdminDomenComponent,
                admin_subdomen_component_1.AdminSubdomenComponent,
                admin_subdomen_list_component_1.AdminSubdomenListComponent,
                admin_subdomen_edit_component_1.AdminSubdomenEditComponent,
                admin_domen_list_component_1.AdminDomenListComponent,
                admin_domen_edit_component_1.AdminDomenEditComponent,
                admin_municipality_component_1.AdminMunicipalityComponent,
                admin_municipality_list_component_1.AdminMunicipalityListComponent,
                admin_municipality_edit_component_1.AdminMunicipalityEditComponent,
                admin_year_component_1.AdminYearComponent,
                admin_year_list_component_1.AdminYearListComponent,
                admin_year_edit_component_1.AdminYearEditComponent,
                admin_els_municipality_component_1.AdminElsMunicipalityComponent,
                municipality_list_component_1.MunicipalityListComponent,
                municipality_compare_component_1.MunicipalityCompareComponent,
                footer_component_1.FooterComponent,
                orderBy_pipe_1.OrderBy,
                admin_els_municipality_list_component_1.AdminElsMunicipalityListComponent,
                admin_region_component_1.AdminRegionComponent,
                admin_region_list_component_1.AdminRegionListComponent,
                admin_region_edit_component_1.AdminRegionEditComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                fire_1.AngularFireModule.initializeApp(environment_1.environment.firebase),
                database_1.AngularFireDatabaseModule,
                auth_1.AngularFireAuthModule,
                forms_1.FormsModule,
                storage_1.AngularFireStorageModule,
                angular2_highcharts_1.ChartModule.forRoot(require('highcharts'), require('highcharts/modules/map')),
                http_1.HttpClientModule,
                angular_2_dropdown_multiselect_1.MultiselectDropdownModule,
                router_1.RouterModule.forRoot([
                    {
                        path: '', component: home_component_1.HomeComponent
                    },
                    /*{
                     path:'municipality', component:MunicipalityComponent
                   },*/
                    {
                        path: 'municipality-list', component: municipality_list_component_1.MunicipalityListComponent
                    },
                    {
                        path: 'municipality-list/:idMunicipality', component: municipality_component_1.MunicipalityComponent
                    },
                    {
                        path: 'municipalities-compare/:idMun /:idMun1 /:idMun2 /:idMun3 ', component: municipality_compare_component_1.MunicipalityCompareComponent
                    },
                    {
                        path: 'municipalities-compare/:idMun /:idMun1 /:idMun2', component: municipality_compare_component_1.MunicipalityCompareComponent
                    },
                    {
                        path: 'municipalities-compare/:idMun /:idMun1 ', component: municipality_compare_component_1.MunicipalityCompareComponent
                    },
                    {
                        path: 'admin', component: auth_component_1.AuthComponent
                    },
                    {
                        path: 'sign-in', component: admin_sign_in_component_1.AdminSignInComponent
                    },
                    {
                        path: 'admin-year', component: admin_year_component_1.AdminYearComponent
                    },
                    {
                        path: 'admin-year-list', component: admin_year_list_component_1.AdminYearListComponent
                    },
                    {
                        path: 'admin-year/:idYear', component: admin_year_edit_component_1.AdminYearEditComponent
                    },
                    {
                        path: 'admin-domen', component: admin_domen_component_1.AdminDomenComponent
                    },
                    {
                        path: 'admin-domen-list', component: admin_domen_list_component_1.AdminDomenListComponent
                    },
                    {
                        path: 'admin-domen/:idDomen', component: admin_domen_edit_component_1.AdminDomenEditComponent
                    },
                    {
                        path: 'admin-subdomen', component: admin_subdomen_component_1.AdminSubdomenComponent
                    },
                    {
                        path: 'admin-subdomen-list', component: admin_subdomen_list_component_1.AdminSubdomenListComponent
                    },
                    {
                        path: 'admin-subdomen/:idSubdomen', component: admin_subdomen_edit_component_1.AdminSubdomenEditComponent
                    },
                    {
                        path: 'admin-municipality', component: admin_municipality_component_1.AdminMunicipalityComponent
                    },
                    {
                        path: 'admin-municipality-list', component: admin_municipality_list_component_1.AdminMunicipalityListComponent
                    },
                    {
                        path: 'admin-municipality/:idMunicipality', component: admin_municipality_edit_component_1.AdminMunicipalityEditComponent
                    },
                    {
                        path: 'admin-region', component: admin_region_component_1.AdminRegionComponent
                    },
                    {
                        path: 'admin-region-list', component: admin_region_list_component_1.AdminRegionListComponent
                    },
                    {
                        path: 'admin-region/:idRegion', component: admin_region_edit_component_1.AdminRegionEditComponent
                    },
                    {
                        path: 'admin-els-municipality/:idYear', component: admin_els_municipality_component_1.AdminElsMunicipalityComponent
                    },
                    {
                        path: 'years/:idYear', component: admin_els_municipality_list_component_1.AdminElsMunicipalityListComponent
                    },
                    { path: '**', component: not_found_component_1.NotFoundComponent }
                ])
            ],
            providers: [auth_service_1.AuthService, admin_subdomen_service_1.AdminSubdomenService, admin_subdomen_service_1.AdminSubdomenService, storage_1.AngularFireStorageModule],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map