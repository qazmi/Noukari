import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, CanActivate } from "@angular/router";
import {Observable,of} from 'rxjs'
import { map } from 'rxjs/operators';
import {HttpParams} from "@angular/common/http";



@Injectable({
  providedIn: 'root'
})
export class LoginRegisterService implements CanActivate {

  userAuthenticated : boolean;
  constructor(private _http:HttpClient, private router: Router) { }

  registerUser(user) : Observable<any> { 
    console.log(`service email weather ${user.email},${user.pass}`);
   return this._http
     .post("http://localhost:3000/register",user)
    .pipe(map(data => {
      this.router.navigateByUrl('/login');
      return data;

    }));
   }

   loginUser(user) : Observable<any> { 
    console.log(`service email pass ${user.email},${user.password}`);
   return this._http
     .post("http://localhost:3000/login-email",{
      email:user.email,
      password:user.password
     })
    .pipe(map(data => {
      if(data)
      {
        this.userAuthenticated = true;
        this.router.navigateByUrl('/profile');
        return data;
      }
      

    }));
   }

   canActivate(): boolean {
     return this.userAuthenticated;
  }

   
}
