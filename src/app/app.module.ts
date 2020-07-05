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
//import { LeasingDashboardDialogComponent } from './leasing-dashboard/leasing-dashboard-dialog.component';
import {LeasingDashboardDialog} from './leasing-dashboard/leasing-dashboard.component';
import { AdminAdvertisementsComponent } from './admin-advertisements/admin-advertisements.component';
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
    LeasingDashboardDialog,
    SalesdashboardComponent,
    AdminAdvertisementsComponent,
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
      timeOut : 1000,
      positionClass : 'toast-top-right'
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
