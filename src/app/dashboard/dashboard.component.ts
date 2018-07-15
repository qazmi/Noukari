import { Component, OnInit } from '@angular/core';
import {JobService} from '../job.service'
import {JobDetails} from '../Job'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  Jobs:JobDetails[]
  searchText : string;
  constructor(private dataservice:JobService) { }

  ngOnInit() {
    this.searchText = 'Angular';
  }

  onSearch()
  {
    console.log(this.searchText);
    this.dataservice.getJobs(this.searchText)
    .subscribe(jobs => {
      this.Jobs = jobs;
    
    });
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
