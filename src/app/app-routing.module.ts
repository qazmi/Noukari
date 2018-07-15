import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component'
import {LayoutComponent} from './_layout/layout/layout.component'
import {HomeComponent} from './home/home.component'
import{RegisterComponent} from './register/register.component'
import {ProfileComponent} from './profile/profile.component'
import {DashboardComponent} from './dashboard/dashboard.component'
import {LoginEmailComponent} from './login-email/login-email.component'
import {ApplyJobComponent} from './apply-job/apply-job.component'
 
import {LoginRegisterService as LoggedIn} from './login-register.service'


const routes: Routes = [
  /*{ path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },*/
   // App routes goes here here
   { 
    path: '',
    component: LayoutComponent, 
    children: [
                { path: '', component: HomeComponent, pathMatch: 'full'},
                { path: 'dashboard', component: DashboardComponent },
                { path: 'profile', component: ProfileComponent , canActivate :[LoggedIn] }
              ]
},
{
  path: 'login', component: LoginComponent 
},
{
  path: 'apply', component: ApplyJobComponent
},
{
  path: 'login-email', component: LoginEmailComponent 
},
{ 
  path: 'register', component: RegisterComponent
}
];
@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
  
})
export class AppRoutingModule { }
