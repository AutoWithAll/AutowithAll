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
import {SalesdashboardComponent} from './salesagent/salesdashboard/salesdashboard.component';
import {SidebarComponent} from './salesagent/sidebar/sidebar.component';
import {ViewadsComponent} from './salesagent/viewads/viewads.component';
import {EditprofileComponent} from './salesagent/editprofile/editprofile.component';
import {PostadsComponent} from './salesagent/postads/postads.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RegistrationComponentComponent,
    LoginComponentComponent,
    NavbarComponent,
    SalesdashboardComponent,
    SidebarComponent,
    ViewadsComponent,
    EditprofileComponent,
    PostadsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyMaterialModule,
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
