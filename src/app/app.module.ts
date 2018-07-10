import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './_layout/header/header.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { LayoutComponent } from './_layout/layout/layout.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import {AuthService} from './auth.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginEmailComponent } from './login-email/login-email.component';

import {LoginRegisterService} from './login-register.service'

export const firebaseConfig = {
  apiKey: "AIzaSyCtVMi5vcDNZMHenOhm_7Px0YR90pl1oGE",
    authDomain: "myauth-e8da6.firebaseapp.com",
    databaseURL: "https://myauth-e8da6.firebaseio.com",
    projectId: "myauth-e8da6",
    storageBucket: "",
    messagingSenderId: "535388604338"
};

@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    LoginComponent,
    LayoutComponent,
    HomeComponent,
    RegisterComponent,
    ProfileComponent,
    FooterComponent,
    DashboardComponent,
    LoginEmailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig, 'angular-auth-firebase'),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AuthService,LoginRegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
