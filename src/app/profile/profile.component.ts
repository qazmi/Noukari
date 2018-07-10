import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders , HttpErrorResponse} from '@angular/common/http';
import {JobDetails} from '../Job'
import { catchError, map, tap ,  } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import {JobService} from '../job.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private dataservice:JobService) { }
  
  ngOnInit() {
    
  }


   
  
}
