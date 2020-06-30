import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponentComponent } from './registration-component/registration-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
<<<<<<< HEAD
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
=======
import { HeaderComponent } from './shared/header/header.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
>>>>>>> prabath

const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'register', component: RegistrationComponentComponent },
  { path: 'login', component: LoginComponentComponent },
<<<<<<< HEAD
  { path: 'forgetpassword', component: ForgetPasswordComponent },
=======
  { path: 'dashboard', component: DashboardComponent  },
>>>>>>> prabath
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
