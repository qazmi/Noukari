import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import {LoginRegisterService} from './login-register.service';
import { ApplyJobComponent } from './apply-job/apply-job.component'
import {DropdownDirective} from './apply-job/apply-job.component'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

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
    LoginEmailComponent,
    ApplyJobComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
	BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig, 'angular-auth-firebase'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot()
    
  ],
  providers: [AuthService,LoginRegisterService],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
