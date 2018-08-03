import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from "@angular/router";
import {Observable,of} from 'rxjs'
import { map } from 'rxjs/operators';
import {HttpParams} from "@angular/common/http";



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data' })
};

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private _http: HttpClient, private router: Router) { }
  
  getJobs(searchString) : Observable<any> { 
    console.log(`Job service  ${searchString}`);
    //https://immense-earth-64169.herokuapp.com
    //http://localhost:3000
   return this._http
     .post('https://immense-earth-64169.herokuapp.com/dashboard',{searchStr: searchString})
    .pipe(map(data => {
      
      return data;

    }));
   }

   
   public uploadFile(fileToUpload: File) {
    const endpoint = 'https://immense-earth-64169.herokuapp.com/upload';
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload,fileToUpload.name);

    return this._http
      .post(endpoint, formData)
      .pipe(map(data=>{
        console.log(data);
        this.router.navigateByUrl('/dashboard');

      }))
  }

  public applyForJob(file)
  {
    return this._http.post('https://immense-earth-64169.herokuapp.com/sendemail',{
      'email':'qazmi.ali@gmail.com',
      'password':'saak.51214',
      'file':file
    })
    .pipe(map(data=>{
     return data;

    }));
  }

  public getCV()
  {
    return this._http.post('https://immense-earth-64169.herokuapp.com/CV',{
      'email':'qazmi.ali@gmail.com',
      'password':'saak.51214'
    })
    .pipe(map(data=>{
      return data;
    }))
  }
  
}
