import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponentComponent } from './registration-component/registration-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { HeaderComponent } from './shared/header/header.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
<<<<<<< HEAD
import { HomeComponent} from "./home/home.component";
import { from } from 'rxjs';
=======
>>>>>>> d458540c843e07f3757b853241055ee44e160e7c

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'register', component: RegistrationComponentComponent },
  { path: 'login', component: LoginComponentComponent },
  { path: 'forgetpassword', component: ForgetPasswordComponent },
  { path: 'dashboard', component: DashboardComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
