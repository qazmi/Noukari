import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import {AuthService} from '../auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  constructor(private authService: AuthService,private router: Router ) { 
   
  }
  ngOnInit() {
    if(this.authService.isLoggedIn())
    {
      this.authService.logout();
    }
  }
    signInWithTwitter() {
      
    }
  
    loginGoogle()
    {
      this.authService.signInWithGoogle()
        .then((res) => { 
           this.router.navigateByUrl('/profile');
          })
        .catch((err) => console.log(err));
     
    }
  
}