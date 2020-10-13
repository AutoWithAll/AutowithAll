import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from './guards/login.guard';
import { AuthGuard } from './guards/auth.guard';
import { AgentGuard} from './guards/agent.guard'
import { RegistrationComponentComponent } from './registration-component/registration-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { HeaderComponent } from './shared/header/header.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HomeComponent} from "./home/home.component";
import {LeasevehicleComponent} from "./leasevehicle/leasevehicle.component";



 
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
import { InsuranceComponent } from './insurance/insurance.component';
import { InsuranceViewAdsComponent} from './insurance-view-ads/insurance-view-ads.component';
import { InsuranceNavbarComponent} from './insurance-shared/insurance-navbar/insurance-navbar.component';
import { InsuranceSidebarComponent} from './insurance-shared/insurance-sidebar/insurance-sidebar.component';
import {InsuranceEditProfileComponent} from './insurance-edit-profile/insurance-edit-profile.component';
import {InsuranceProfileComponent} from './insurance-profile/insurance-profile.component';
import {InsuranceVehicleComponent} from './insurance-vehicle/insurance-vehicle.component';
import {PostInsurancePlanDialogComponent} from './post-insurance-plan-dialog/post-insurance-plan-dialog.component';
import {AdminLeasingsDetailsComponent} from './admin-leasings-details/admin-leasings-details.component'
import { AdminGuard } from './guards/admin.guard';
 
import { ViewleaseplanComponent } from './viewleaseplan/viewleaseplan.component';
import {ViewinsuranceplanComponent} from './viewinsuranceplan/viewinsuranceplan.component';
import { PaymentComponent } from './payment/payment.component';

import {ReportComponent} from './report/report.component';
import { AdminEditDetailsComponent } from './admin-edit-details/admin-edit-details.component';
import { HomeReportadComponent } from './home-reportad/home-reportad.component';
import { HomeAboutUsComponent } from './home-about-us/home-about-us.component';
import { HomeFaqComponent } from './home-faq/home-faq.component';
import { HomePrivacypolicyComponent } from './home-privacypolicy/home-privacypolicy.component';
import { HomeTermsofUseComponent } from './home-termsof-use/home-termsof-use.component';
 
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegistrationComponentComponent,canActivate: [LoginGuard]  },
  { path: 'login', component: LoginComponentComponent,canActivate: [LoginGuard]  },
  { path: 'postlease', component:PostLeasingPlanDialogComponent},
  { path: 'forgetpassword', component: ForgetPasswordComponent },
  { path: 'dashboard', component: DashboardComponent  },
  { path: 'leasevehicle', component: LeasevehicleComponent },
  { path:'adminDashboard',component: AdminDashboardComponent},  
  { path:'adminUsers',component:AdminUsersComponent},
  { path:'adminAdvertisements',component:AdminAdvertisementsComponent},
  { path:'adminLeasings',component:AdminLeasingsComponent},
  { path:'adminInsurance',component:AdminInsuranceComponent},
  { path:'adminDashboard',component: AdminDashboardComponent , canActivate: [AdminGuard]},
  { path:'adminUsers',component:AdminUsersComponent, canActivate: [AdminGuard]},
  { path:'adminAdvertisements',component:AdminAdvertisementsComponent, canActivate: [AdminGuard]},
  { path:'adminLeasings',component:AdminLeasingsComponent, canActivate: [AdminGuard]},
  { path:'adminInsurance',component:AdminInsuranceComponent, canActivate: [AdminGuard]},

// import { HomeViewadComponent } from './home-viewad/home-viewad.component';
//import { EditnselleradsComponent } from './normalseller/editnsellerads/editnsellerads.component';
 
 
  { path: '', component: HomeComponent },
  { path: 'register', component: RegistrationComponentComponent, canActivate: [LoginGuard] },
  { path: 'login', component: LoginComponentComponent, canActivate: [LoginGuard] },


  
  { path: 'forgetpassword', component: ForgetPasswordComponent , canActivate: [LoginGuard]},
  { path: 'dashboard', component: DashboardComponent ,canActivate: [AuthGuard] },
  { path: 'leasevehicle', component: LeasevehicleComponent, canActivate: [AuthGuard] },
   
  { path: 'home-view-ad', component: HomeViewadComponent},
  {path : 'leasingDash', component: LeasingDashboardComponent, canActivate: [AuthGuard]},
  { path: 'salesagentdash', component: SalesdashboardComponent,canActivate: [AgentGuard] },
  {path: 'sidebar',component: SidebarComponent ,canActivate: [AgentGuard]},
  {path: 'viewads',component:ViewadsComponent, canActivate: [AgentGuard]},
  {path: 'editprofile',component:EditprofileComponent ,canActivate: [AgentGuard]},
  {path: 'postads',component:PostadsComponent, canActivate: [AgentGuard]},
  
  {path: 'sidebarn',component: SellerSidebarComponent},
  {path: 'normalsellerdash',component:SellerdashComponent},
  {path: 'viewadsn',component:SellerViewadsComponent},
  {path: 'editprofilen',component:SellerEditprofileComponent},
  {path: 'postadsn',component:SellerPostadsComponent},
  { path : 'insuranceDash', component: InsuranceDashboardComponent},
  { path : 'leaseProfile', component: LeasingProfileComponent},
  { path : 'leaseEditProfile', component: LeasingEditProfileComponent },
  { path : 'lease', component:LeaseComponent},
  {path:'report-ad',component:HomeReportadComponent},
  {path:'aboutus',component:HomeAboutUsComponent},
  {path:'faq',component:HomeFaqComponent},
  {path:'terms',component:HomeTermsofUseComponent},
  {path:'privacy',component:HomePrivacypolicyComponent},
  {path: 'sellerdash',component:SellerdashComponent , canActivate: [AuthGuard]},
  {path: 'editprofilen',component:SellerEditprofileComponent, canActivate: [AuthGuard]},
  {path: 'postadsn',component:SellerPostadsComponent , canActivate: [AuthGuard]},
  { path : 'insuranceDash', component: InsuranceDashboardComponent, canActivate: [AuthGuard]},
  { path : 'insurance', component : InsuranceComponent},
  {path : 'insuranceviewads', component : InsuranceViewAdsComponent},
  {path : 'insurancenavbar', component :InsuranceNavbarComponent},
  {path : 'insurancesidebar', component : InsuranceSidebarComponent},
  {path : 'insuranceeditprofile' , component : InsuranceEditProfileComponent},
  {path : 'insuranceprofile' , component : InsuranceProfileComponent},
  {path : 'insurancevehicle' , component : InsuranceVehicleComponent},
  {path : 'postinsuranceplan', component : PostInsurancePlanDialogComponent},
  {path : 'adminleasingcompanydetails', component : AdminLeasingsDetailsComponent},

  {path : 'viewleaseplan', component: ViewleaseplanComponent},
  {path : 'viewinsplan', component: ViewinsuranceplanComponent},
  {path : 'payment', component: PaymentComponent},

  { path : 'leaseProfile', component: LeasingProfileComponent , canActivate: [AuthGuard]},
  {path:'reportAd/:id',component:ReportComponent,canActivate:[AuthGuard]},
  {path:'adminDetails',component:AdminEditDetailsComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
