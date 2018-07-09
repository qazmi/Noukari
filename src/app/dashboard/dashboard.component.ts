import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service'
import { Router } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private authService: AuthService,private router: Router) { }

  ngOnInit() {
  }
  Logout()
  {
    if ( this.authService.isLoggedIn )
    {
      this.authService.logout();
      console.log('logged out');
    }
    this.router.navigateByUrl('/login');
  }
}
