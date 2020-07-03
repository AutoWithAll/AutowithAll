import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponentComponent } from './registration-component/registration-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import  { LeasingDashboardComponent } from './leasing-dashboard/leasing-dashboard.component';
 
const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'register', component: RegistrationComponentComponent },
  { path: 'login', component: LoginComponentComponent },
  { path: 'forgetpassword', component: ForgetPasswordComponent },
  {path : 'leasingDash', component: LeasingDashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
