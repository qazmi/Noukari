import { Component, OnInit } from '@angular/core';
import { JobDetails} from '../Job'
import {JobService} from '../job.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 searchStr : String
  constructor( private service:JobService) { }
  

  ngOnInit() {
    this.searchStr = ''
  }

  angularSearch()
  {
    this.service.searchStr = 'Angular';
    this.onSearch();

  }
  reactSearch()
  {
    this.service.searchStr = 'React';
    this.onSearch();

  }

  onSearch()
  {
    this.service.getJobs(this.service.searchStr);
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

