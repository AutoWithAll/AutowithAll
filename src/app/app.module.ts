import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
import { from } from 'rxjs';
import { UserService } from './service/user.service';
import { ToastrModule } from 'ngx-toastr';
import {SalesdashboardComponent} from './salesagent/salesdashboard/salesdashboard.component';




import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LeasevehicleComponent } from './leasevehicle/leasevehicle.component';


import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';


import { LeasingDashboardComponent } from './leasing-dashboard/leasing-dashboard.component';
//import {LeasingDashboardDialog} from './leasing-dashboard/leasing-dashboard.component';
 
import {SidebarComponent} from './salesagent/sidebar/sidebar.component';

import {EditprofileComponent} from './salesagent/editprofile/editprofile.component';
import {PostadsComponent} from './salesagent/postads/postads.component';
import {SellerdashComponent} from './normalseller/sellerdash/sellerdash.component';
import {SellerSidebarComponent} from './normalseller/sidebar/sidebar.component';
import {SellerEditprofileComponent} from './normalseller/editprofile/editprofile.component';
import {SellerPostadsComponent} from './normalseller/postads/postads.component';
import {SellerViewadsComponent} from './normalseller/viewadsn/viewadsn.component';
import {DeleteAdNormalDialog} from './normalseller/viewadsn/viewadsn.component';
import { AdminAdvertisementsComponent } from './admin-advertisements/admin-advertisements.component';
import { AdminLeasingsComponent } from './admin-leasings/admin-leasings.component';
import { AdminInsuranceComponent } from './admin-insurance/admin-insurance.component';
import { InsuranceDashboardComponent } from './insurance-dashboard/insurance-dashboard.component';
import {InsuranceDashboardDialog} from './insurance-dashboard/insurance-dashboard.component';
import { LeasingProfileComponent } from './leasing-profile/leasing-profile.component';
import { LeasingEditProfileComponent } from './leasing-edit-profile/leasing-edit-profile.component';
import { LeaseViewAdsComponent } from './lease-view-ads/lease-view-ads.component';
import { LeaseComponent } from './lease/lease.component';
import { LeaseNavbarComponent } from './lease-shared/lease-navbar/lease-navbar.component';
import { LeaseSidebarComponent } from './lease-shared/lease-sidebar/lease-sidebar.component';

import { PostLeasingPlanDialogComponent } from './post-leasing-plan-dialog/post-leasing-plan-dialog.component';
import { authInterceptorProviders } from './helpers/interceptor.interceptor';

import { ViewadsComponent } from './salesagent/viewads/viewads.component';
//import { EditnselleradsComponent } from './normalseller/editnsellerads/editnsellerads.component';
import { ReportComponent } from './report/report.component';
import { HomeViewadComponent } from './home-viewad/home-viewad.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { InsuranceViewAdsComponent } from './insurance-view-ads/insurance-view-ads.component';
import { InsuranceNavbarComponent } from './insurance-shared/insurance-navbar/insurance-navbar.component';
import { InsuranceSidebarComponent } from './insurance-shared/insurance-sidebar/insurance-sidebar.component';
import { InsuranceEditProfileComponent } from './insurance-edit-profile/insurance-edit-profile.component';
import { InsuranceProfileComponent } from './insurance-profile/insurance-profile.component';
import { InsuranceVehicleComponent } from './insurance-vehicle/insurance-vehicle.component';
import { PostInsurancePlanDialogComponent } from './post-insurance-plan-dialog/post-insurance-plan-dialog.component';
import { ChoosepackageComponent } from "./salesagent/salesdashboard/choosepackage/choosepackage.component";

import { ViewleaseplanComponent } from './viewleaseplan/viewleaseplan.component';
import { ViewinsuranceplanComponent } from './viewinsuranceplan/viewinsuranceplan.component';
import { PaymentComponent } from './payment/payment.component';
import { AdminEditDetailsComponent } from './admin-edit-details/admin-edit-details.component';
//import { EditnselleradsComponent } from './normalseller/editnsellerads/editnsellerads.component';
import { HomeReportadComponent } from './home-reportad/home-reportad.component';
import { HomeAboutUsComponent } from './home-about-us/home-about-us.component';
import { HomeFaqComponent } from './home-faq/home-faq.component';
import { HomePrivacypolicyComponent } from './home-privacypolicy/home-privacypolicy.component';
import { HomeTermsofUseComponent } from './home-termsof-use/home-termsof-use.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RegistrationComponentComponent,
    LoginComponentComponent,
    NavbarComponent,
    ForgetPasswordComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LeasevehicleComponent,
    ForgetPasswordComponent,
    HeaderComponent,
    AdminDashboardComponent,
    AdminUsersComponent,
    DeleteAdNormalDialog,
    LeasingDashboardComponent,
    
    SalesdashboardComponent,
    SidebarComponent,
    ViewadsComponent,
    EditprofileComponent,
    PostadsComponent,
    SellerdashComponent,
    SellerSidebarComponent,
    SellerEditprofileComponent,
    SellerPostadsComponent,
    SellerViewadsComponent,
    AdminAdvertisementsComponent,
    AdminLeasingsComponent,
    AdminInsuranceComponent,
    InsuranceDashboardComponent,
    InsuranceDashboardDialog,
    LeasingProfileComponent,
    LeasingEditProfileComponent,
    LeaseViewAdsComponent,
    LeaseComponent,
    LeaseNavbarComponent,
    LeaseSidebarComponent,
   // EditagentadsComponent,
    ReportComponent,
    PostLeasingPlanDialogComponent,
    HomeViewadComponent,
    InsuranceComponent,
    InsuranceViewAdsComponent,
    InsuranceNavbarComponent,
    InsuranceSidebarComponent,
    InsuranceEditProfileComponent,
    InsuranceProfileComponent,
    InsuranceVehicleComponent,
    PostInsurancePlanDialogComponent,
    ChoosepackageComponent,
    ViewleaseplanComponent,
    ViewinsuranceplanComponent,
    PaymentComponent,
    AdminEditDetailsComponent,
    HomeReportadComponent,
    HomeAboutUsComponent,
    HomeFaqComponent,
    HomePrivacypolicyComponent,
    HomeTermsofUseComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut : 2000,
      positionClass : 'toast-top-center'
    }),
    NgbModule,
    
    
  ],
  providers: [UserService, authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
