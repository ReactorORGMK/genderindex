import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AuthComponent } from './auth/auth.component';
import {RouterModule} from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { AngularFireDatabase} from '@angular/fire/database';
import {environment} from './../environments/environment';
/*auth*/
import { AngularFireAuthModule } from '@angular/fire/auth';
import {AuthService} from './auth.service';
import {AdminSubdomenService} from './admin-subdomen.service';
import { MunicipalityComponent } from './municipality/municipality.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminSignInComponent } from './admin-sign-in/admin-sign-in.component';
import { AdminDomenComponent } from './admin-domen/admin-domen.component';
import { AdminSubdomenComponent } from './admin-subdomen/admin-subdomen.component';
import { AdminSubdomenListComponent } from './admin-subdomen-list/admin-subdomen-list.component';
import { AdminSubdomenEditComponent } from './admin-subdomen-edit/admin-subdomen-edit.component';
import { AdminDomenListComponent } from './admin-domen-list/admin-domen-list.component';
import { AdminDomenEditComponent } from './admin-domen-edit/admin-domen-edit.component';
import { AdminMunicipalityComponent } from './admin-municipality/admin-municipality.component';
import { AdminMunicipalityListComponent } from './admin-municipality-list/admin-municipality-list.component';
import { AdminMunicipalityEditComponent } from './admin-municipality-edit/admin-municipality-edit.component';
import { AdminYearComponent } from './admin-year/admin-year.component';
import { AdminYearListComponent } from './admin-year-list/admin-year-list.component';
import { AdminYearEditComponent } from './admin-year-edit/admin-year-edit.component';
import { AdminElsMunicipalityComponent } from './admin-els-municipality/admin-els-municipality.component';
import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MunicipalityListComponent } from './municipality-list/municipality-list.component';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { MunicipalityCompareComponent } from './municipality-compare/municipality-compare.component';
import { FooterComponent } from './footer/footer.component';
import {OrderBy} from './orderBy.pipe';
import {OrderByMun} from './orderByMunRegion.pipe';

import { AdminElsMunicipalityListComponent } from './admin-els-municipality-list/admin-els-municipality-list.component';
import { AdminRegionComponent } from './admin-region/admin-region.component';
import { AdminRegionListComponent } from './admin-region-list/admin-region-list.component';
import { AdminRegionEditComponent } from './admin-region-edit/admin-region-edit.component';
import { AboutIndexComponent } from './about-index/about-index.component';
import { MetodologyPageComponent } from './metodology-page/metodology-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { AdminElsMunicipalityEditComponent } from './admin-els-municipality-edit/admin-els-municipality-edit.component';
import { DictionaryPageComponent } from './dictionary-page/dictionary-page.component';
import { DictionaryButtonPageComponent } from './dictionary-button-page/dictionary-button-page.component';


// import ngx-translate and the http loader
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

declare var require: any;

    export function highchartsFactory() {
      const hc = require('highcharts');
      const dd = require('highcharts/modules/map');
      dd(hc);

      return hc;
    }



@NgModule({
  declarations: [
  AppComponent,
  AuthComponent,
  NotFoundComponent,
  HomeComponent,
  MunicipalityComponent,
  NavigationComponent,
  AdminNavbarComponent,
  AdminSignInComponent,
  AdminDomenComponent,
  AdminSubdomenComponent,
  AdminSubdomenListComponent,
  AdminSubdomenEditComponent,
  AdminDomenListComponent,
  AdminDomenEditComponent,
  AdminMunicipalityComponent,
  AdminMunicipalityListComponent,
  AdminMunicipalityEditComponent,
  AdminYearComponent,
  AdminYearListComponent,
  AdminYearEditComponent,
  AdminElsMunicipalityComponent,
  MunicipalityListComponent,
  MunicipalityCompareComponent,
  FooterComponent,
  OrderBy,
  OrderByMun,
  AdminElsMunicipalityListComponent,
  AdminRegionComponent,
  AdminRegionListComponent,
  AdminRegionEditComponent,
  AboutIndexComponent,
  MetodologyPageComponent,
  AboutPageComponent,
  ContactPageComponent,
  AdminElsMunicipalityEditComponent,
  DictionaryPageComponent,
  DictionaryButtonPageComponent,

  ],
  imports: [
  BrowserModule,
  AngularFireModule.initializeApp(environment.firebase),
  AngularFireDatabaseModule,
  AngularFireAuthModule,
  FormsModule,
  AngularFireStorageModule,
  ChartModule,

  HttpClientModule,
  TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
  MultiselectDropdownModule,



  RouterModule.forRoot([
  {
    path:'', component:HomeComponent
  },
   {
    path:'aboutIndex', component:AboutIndexComponent
  },
  {
    path:'metodology', component:MetodologyPageComponent
  },
  {
    path:'aboutProject', component:AboutPageComponent
  },
  {
    path:'contactPage', component:ContactPageComponent
  },
  {
    path:'dictionaryPage', component:DictionaryPageComponent
  },
  {
    path:'dictionaryPage/:indicator', component:DictionaryPageComponent
  },
  {
    path:'municipality-list', component:MunicipalityListComponent
  },
  {
    path:'municipality-list/:idYear', component:MunicipalityListComponent
  },
   {
    path:'municipality-list/:idYear/:idMunicipality', component:MunicipalityComponent
  },

  {
    path:'municipalities-compare/:idMun /:idMun1 /:idMun2 /:idMun3 ', component:MunicipalityCompareComponent
  },
   {
    path:'municipalities-compare/:idMun /:idMun1 /:idMun2', component:MunicipalityCompareComponent
  },
   {
    path:'municipalities-compare/:idMun /:idMun1 ', component:MunicipalityCompareComponent
  },

  {
    path:'admin', component:AuthComponent
  },
  {
    path:'sign-in', component:AdminSignInComponent
  },
  {
    path:'admin-year',component:AdminYearComponent
  },
  {
    path:'admin-year-list',component:AdminYearListComponent
  },
  {
    path:'admin-year/:idYear',component:AdminYearEditComponent
  },
  {
    path:'admin-domen',component:AdminDomenComponent
  },
  {
    path:'admin-domen-list',component:AdminDomenListComponent
  },
  {
    path:'admin-domen/:idDomen',component:AdminDomenEditComponent
  },
  {
    path:'admin-subdomen',component:AdminSubdomenComponent
  },
  {
    path:'admin-subdomen-list',component:AdminSubdomenListComponent
  },
  {
    path:'admin-subdomen/:idSubdomen',component:AdminSubdomenEditComponent
  },
  {
    path:'admin-municipality',component:AdminMunicipalityComponent
  },
   {
    path:'admin-municipality-list',component:AdminMunicipalityListComponent
  },
  {
    path:'admin-municipality/:idMunicipality',component:AdminMunicipalityEditComponent
  },
  {
    path:'admin-region',component:AdminRegionComponent
  },
  {
    path:'admin-region-list',component:AdminRegionListComponent
  },
  {
    path:'admin-region/:idRegion',component:AdminRegionEditComponent
  },
  {
    path:'admin-els-municipality',component:AdminElsMunicipalityComponent
  },
  {
    path:'admin-els-municipality/:idYear',component:AdminElsMunicipalityComponent
  },
  {
    path:'years/:idYear',component:AdminElsMunicipalityListComponent
  },
  {
    path:'years/:idYear/:idMun',component:AdminElsMunicipalityEditComponent
  },

  {	path:'**',component:NotFoundComponent}
  ])
  ],
  providers: [AuthService, AdminSubdomenService, AdminSubdomenService, AngularFireStorageModule,{
          provide: HighchartsStatic,
          useFactory: highchartsFactory
        }],


  bootstrap: [AppComponent]

})
export class AppModule { }
// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}
