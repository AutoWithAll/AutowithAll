import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from './guards/login.guard';
import { AuthGuard } from './guards/auth.guard';
import { RegistrationComponentComponent } from './registration-component/registration-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { HeaderComponent } from './shared/header/header.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HomeComponent} from "./home/home.component";
import {LeasevehicleComponent} from "./leasevehicle/leasevehicle.component";
import { from } from 'rxjs';


 
import {SalesdashboardComponent} from './salesagent/salesdashboard/salesdashboard.component';
import {SidebarComponent} from './salesagent/sidebar/sidebar.component';
import {ViewadsComponent} from './salesagent/viewads/viewads.component';
import {EditprofileComponent} from './salesagent/editprofile/editprofile.component';
import {PostadsComponent} from './salesagent/postads/postads.component';

import {SellerdashComponent} from './normalseller/sellerdash/sellerdash.component';
import {SellerSidebarComponent} from './normalseller/sidebar/sidebar.component';
import {SellerEditprofileComponent} from './normalseller/editprofile/editprofile.component';
import {SellerPostadsComponent} from './normalseller/postads/postads.component';
import {SellerViewadsComponent} from './normalseller/viewadsn/viewadsn.component';

import  { LeasingDashboardComponent } from './leasing-dashboard/leasing-dashboard.component';
//Admindashboard
import { AdminAdvertisementsComponent } from './admin-advertisements/admin-advertisements.component';
import { AdminLeasingsComponent } from './admin-leasings/admin-leasings.component';
import { AdminInsuranceComponent } from './admin-insurance/admin-insurance.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import {InsuranceDashboardComponent} from './insurance-dashboard/insurance-dashboard.component';
import { LeasingProfileComponent } from './leasing-profile/leasing-profile.component';

import { LeasingEditProfileComponent} from './leasing-edit-profile/leasing-edit-profile.component';
import { LeaseComponent} from './lease/lease.component';
import { PostLeasingPlanDialogComponent} from './post-leasing-plan-dialog/post-leasing-plan-dialog.component';
import { HomeViewadComponent} from './home-viewad/home-viewad.component';
import {ReportComponent} from './report/report.component';
 
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegistrationComponentComponent },
  { path: 'login', component: LoginComponentComponent },
  { path: 'postlease', component:PostLeasingPlanDialogComponent},
  { path: 'forgetpassword', component: ForgetPasswordComponent },
  { path: 'dashboard', component: DashboardComponent  },
  { path: 'leasevehicle', component: LeasevehicleComponent },
  { path:'adminDashboard',component: AdminDashboardComponent},
  { path:'adminUsers',component:AdminUsersComponent},
  { path:'adminAdvertisements',component:AdminAdvertisementsComponent},
  { path:'adminLeasings',component:AdminLeasingsComponent},
  { path:'adminInsurance',component:AdminInsuranceComponent},

// import { HomeViewadComponent } from './home-viewad/home-viewad.component';
//import { EditnselleradsComponent } from './normalseller/editnsellerads/editnsellerads.component';
 

  
  { path: 'forgetpassword', component: ForgetPasswordComponent },
  { path: 'dashboard', component: DashboardComponent ,canActivate: [AuthGuard] },
  { path: 'leasevehicle', component: LeasevehicleComponent, canActivate: [AuthGuard] },
 // { path:'adminDashboard',component: AdminDashboardComponent , canActivate: [AdminGuard]},
 // { path:'adminUsers',component:AdminUsersComponent, canActivate: [AdminGuard]},
 // { path:'adminAdvertisements',component:AdminAdvertisementsComponent, canActivate: [AdminGuard]},
 // { path:'adminLeasings',component:AdminLeasingsComponent, canActivate: [AdminGuard]},
 // { path:'adminInsurance',component:AdminInsuranceComponent, canActivate: [AdminGuard]},  
 { path: 'home-view-ad', component: HomeViewadComponent},
  {path : 'leasingDash', component: LeasingDashboardComponent, canActivate: [AuthGuard]},
  { path: 'salesagentdash', component: SalesdashboardComponent, canActivate: [AuthGuard]},
  {path: 'sidebar',component: SidebarComponent},
  {path: 'viewads',component:ViewadsComponent},
  {path: 'editprofile',component:EditprofileComponent},
  {path: 'postads',component:PostadsComponent},
  
  {path: 'sidebarn',component: SellerSidebarComponent},
  {path: 'normalsellerdash',component:SellerdashComponent},
  {path: 'viewadsn',component:SellerViewadsComponent},
  {path: 'editprofilen',component:SellerEditprofileComponent},
  {path: 'postadsn',component:SellerPostadsComponent},
  { path : 'insuranceDash', component: InsuranceDashboardComponent},
  { path : 'leaseProfile', component: LeasingProfileComponent},

  { path : 'leaseEditProfile', component: LeasingEditProfileComponent },
  { path : 'lease', component:LeaseComponent},


  //{ path : 'leaseEditProfile', component: LeasingEditProfileComponent },
  //{ path : 'lease', component:LeaseComponent},
  {path: 'sellerdash',component:SellerdashComponent , canActivate: [AuthGuard]},
  {path: 'editprofilen',component:SellerEditprofileComponent, canActivate: [AuthGuard]},
  {path: 'postadsn',component:SellerPostadsComponent , canActivate: [AuthGuard]},
  { path : 'insuranceDash', component: InsuranceDashboardComponent, canActivate: [AuthGuard]},
  { path : 'leaseProfile', component: LeasingProfileComponent , canActivate: [AuthGuard]},
  {path:'reportAd',component:ReportComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
