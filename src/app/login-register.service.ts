import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, CanActivate } from "@angular/router";
import {Observable,of} from 'rxjs'
import { map } from 'rxjs/operators';
import {HttpParams} from "@angular/common/http";
import {jwt} from 'jsonwebtoken'
import * as _ from 'lodash'



@Injectable({
  providedIn: 'root'
})
export class LoginRegisterService implements CanActivate {

  userAuthenticated : boolean;
  constructor(private _http:HttpClient, private router: Router) { }

  registerUser(user) : Observable<any> { 
    console.log(`login service ${user.email},${user.pass}`);
    //https://immense-earth-64169.herokuapp.com
    //http://localhost:3000
   return this._http
     .post("https://immense-earth-64169.herokuapp.com/register",user)
    .pipe(map(data => {
      this.router.navigateByUrl('/login');
      return data;

    }));
   }

   loginUser(user) : Observable<any> { 
    console.log(`service email pass ${user.email},${user.password}`);
    //https://immense-earth-64169.herokuapp.com
    //http://localhost:3000
   return this._http
     .post("https://immense-earth-64169.herokuapp.com/login-email",{
      email:user.email,
      password:user.password
     })
    .pipe(map(token => {
      if(token)
      {
      
      // var token =  _.pick(data,['token']);
       console.log(token);
        this.userAuthenticated = true;
        this.router.navigateByUrl('/profile');
        return token;
      }
      

    }));
   }

   canActivate(): boolean {
     return this.userAuthenticated;
  }

   
}
