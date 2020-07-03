import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponentComponent } from './registration-component/registration-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { HeaderComponent } from './shared/header/header.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HomeComponent} from "./home/home.component";
import {LeasevehicleComponent} from "./leasevehicle/leasevehicle.component";
import { from } from 'rxjs';

import  { LeasingDashboardComponent } from './leasing-dashboard/leasing-dashboard.component';
 
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegistrationComponentComponent },
  { path: 'login', component: LoginComponentComponent },
  { path: 'forgetpassword', component: ForgetPasswordComponent },
  { path: 'dashboard', component: DashboardComponent  },
  { path: 'leasevehicle', component: LeasevehicleComponent },
  { path:'adminDashboard',component:AdminDashboardComponent},
  {path : 'leasingDash', component: LeasingDashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
