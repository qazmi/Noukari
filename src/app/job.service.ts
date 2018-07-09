import { Injectable } from '@angular/core';
import {Observable,of} from 'rxjs'
import {JobDetails} from './Job'
import { MongoClient, Db } from "mongodb";
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {User} from './User'


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http: HttpClient) { }
  
  getJobs (): Observable<JobDetails[]> {
    return this.http.get<JobDetails[]>('/profile')
      .pipe(
        tap(heroes => console.log(`Jobsfetched`)),
        catchError(this.handleError('JobsServiceFialed', []))
      );
  }

  
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  
}
