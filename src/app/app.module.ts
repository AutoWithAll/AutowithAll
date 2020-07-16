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
import {PostLeasingPlanDialog} from './lease-view-ads/lease-view-ads.component';
import {SidebarComponent} from './salesagent/sidebar/sidebar.component';
import {ViewadsComponent} from './salesagent/viewads/viewads.component';
import {EditprofileComponent} from './salesagent/editprofile/editprofile.component';
import {PostadsComponent} from './salesagent/postads/postads.component';
import {SellerdashComponent} from './normalseller/sellerdash/sellerdash.component';
import {SellerSidebarComponent} from './normalseller/sidebar/sidebar.component';
import {SellerEditprofileComponent} from './normalseller/editprofile/editprofile.component';
import {SellerPostadsComponent} from './normalseller/postads/postads.component';
import {SellerViewadsComponent} from './normalseller/viewads/viewads.component';
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


    LeasingDashboardComponent,
    PostLeasingPlanDialog,
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
    LeaseSidebarComponent
     
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
    
    // RouterModule.forRoot([
    //   // { path: '', redirectTo: '/', pathMatch: 'full' },
    //   // { path: 'register', component: RegistrationComponentComponent },
    //   // { path: 'login', component: LoginComponentComponent },
       
     
    // ]),
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
