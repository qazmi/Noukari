import { Component, OnInit } from '@angular/core';
import { JobDetails} from '../Job'
import {JobService} from '../job.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 Jobs:JobDetails[]
  constructor( ) { }
  

  ngOnInit() {
   
  }

  // Logout()
  // {
  //   if ( this.authService.isLoggedIn )
  //   {
  //     this.authService.logout();
  //     console.log('logged out');
  //   }
  //   this.router.navigateByUrl('/login');
  // }

}

