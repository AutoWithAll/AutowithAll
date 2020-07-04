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



import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';

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
    

    ForgetPasswordComponent,

    HeaderComponent,
    
    AdminDashboardComponent,
    
    AdminUsersComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    NgbModule,
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
