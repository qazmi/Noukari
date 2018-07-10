import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from "@angular/router";
import {Observable,of} from 'rxjs'
import { map } from 'rxjs/operators';
import {HttpParams} from "@angular/common/http";



@Injectable({
  providedIn: 'root'
})
export class LoginRegisterService {

  constructor(private _http:HttpClient, private router: Router) { }

  registerUser(user) : Observable<any> { 
    console.log(`service get weather ${user.email},${user.pass}`);
   return this._http
     .post("http://localhost:3000/register",user)
    .pipe(map(data => {
      this.router.navigateByUrl('/login');
      return data;

    }));
   }

   loginUser(email,pass) : Observable<any> { 
    console.log(`service email pass ${email},${pass}`);
   return this._http
     .post("http://localhost:3000/login-email",{
      email:email,
      pass:pass
     })
    .pipe(map(data => {
      this.router.navigateByUrl('/');
      return data;

    }));
   }

   
}
