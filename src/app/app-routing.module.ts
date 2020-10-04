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
import {SellerViewadsComponent} from './normalseller/viewads/viewads.component';

import  { LeasingDashboardComponent } from './leasing-dashboard/leasing-dashboard.component';
//Admindashboard
import { AdminAdvertisementsComponent } from './admin-advertisements/admin-advertisements.component';
import { AdminLeasingsComponent } from './admin-leasings/admin-leasings.component';
import { AdminInsuranceComponent } from './admin-insurance/admin-insurance.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import {InsuranceDashboardComponent} from './insurance-dashboard/insurance-dashboard.component';
import { LeasingProfileComponent } from './leasing-profile/leasing-profile.component';
import { AdminGuard } from './guards/admin.guard';
 
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegistrationComponentComponent, canActivate: [LoginGuard] },
  { path: 'login', component: LoginComponentComponent, canActivate: [LoginGuard] },
  
  { path: 'forgetpassword', component: ForgetPasswordComponent },
  { path: 'dashboard', component: DashboardComponent ,canActivate: [AuthGuard] },
  { path: 'leasevehicle', component: LeasevehicleComponent, canActivate: [AuthGuard] },
  { path:'adminDashboard',component: AdminDashboardComponent , canActivate: [AdminGuard]},
  { path:'adminUsers',component:AdminUsersComponent, canActivate: [AdminGuard]},
  { path:'adminAdvertisements',component:AdminAdvertisementsComponent, canActivate: [AdminGuard]},
  { path:'adminLeasings',component:AdminLeasingsComponent, canActivate: [AdminGuard]},
  { path:'adminInsurance',component:AdminInsuranceComponent, canActivate: [AdminGuard]},  

  {path : 'leasingDash', component: LeasingDashboardComponent, canActivate: [AuthGuard]},
  { path: 'salesagentdash', component: SalesdashboardComponent, canActivate: [AuthGuard]},
  {path: 'sidebar',component: SidebarComponent},
  {path: 'viewads',component:ViewadsComponent, canActivate: [AuthGuard]},
  {path: 'editprofile',component:EditprofileComponent, canActivate: [AuthGuard]},
  {path: 'postads',component:PostadsComponent , canActivate: [AuthGuard]},

  {path: 'sidebarn',component: SellerSidebarComponent},
  {path: 'sellerdash',component:SellerdashComponent , canActivate: [AuthGuard]},
  {path: 'editprofilen',component:SellerEditprofileComponent, canActivate: [AuthGuard]},
  {path: 'postadsn',component:SellerPostadsComponent , canActivate: [AuthGuard]},
  { path : 'insuranceDash', component: InsuranceDashboardComponent, canActivate: [AuthGuard]},
  { path : 'leaseProfile', component: LeasingProfileComponent , canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
