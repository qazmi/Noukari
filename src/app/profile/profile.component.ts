import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders , HttpErrorResponse} from '@angular/common/http';
import {JobDetails} from '../Job'
import { catchError, map, tap ,  } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import {LoginRegisterService} from './../login-register.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  loggedIn : true; 

  constructor(private dataservice:LoginRegisterService) { }

  userLoggedin()
  {
    return true;
   // return this.dataservice.userAuthenticated;
    
  }
  
  ngOnInit() {
    
  }


   
  
}
