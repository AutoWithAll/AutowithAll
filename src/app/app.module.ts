import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationComponentComponent } from './registration-component/registration-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { MyMaterialModule } from './material.module';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { LeasingDashboardComponent } from './leasing-dashboard/leasing-dashboard.component';
import {LeasingDashboardDialog} from './leasing-dashboard/leasing-dashboard.component';
import { InsuranceDashboardComponent } from './insurance-dashboard/insurance-dashboard.component';
import {InsuranceDashboardDialog} from './insurance-dashboard/insurance-dashboard.component';
import { LeasingProfileComponent } from './leasing-profile/leasing-profile.component';
import { LeasingEditProfileComponent } from './leasing-edit-profile/leasing-edit-profile.component';
import { LeaseViewAdsComponent } from './lease-view-ads/lease-view-ads.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RegistrationComponentComponent,
    LoginComponentComponent,
    NavbarComponent,
    ForgetPasswordComponent,
    LeasingDashboardComponent,
    LeasingDashboardDialog,
    InsuranceDashboardComponent,
    InsuranceDashboardDialog,
    LeasingProfileComponent,
    LeasingEditProfileComponent,
    LeaseViewAdsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    // RouterModule.forRoot([
    //   // { path: '', redirectTo: '/', pathMatch: 'full' },
    //   // { path: 'register', component: RegistrationComponentComponent },
    //   // { path: 'login', component: LoginComponentComponent },
       
     
    // ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
