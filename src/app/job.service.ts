import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from "@angular/router";
import {Observable,of} from 'rxjs'
import { map } from 'rxjs/operators';
import {HttpParams} from "@angular/common/http";



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private _http: HttpClient) { }
  
  getJobs(searchString) : Observable<any> { 
    console.log(`Job service  ${searchString}`);
   return this._http
     .post("http://localhost:3000/dashboard",{searchStr: searchString})
    .pipe(map(data => {
      
      return data;

    }));
   }
}
