import { Component, OnInit } from '@angular/core';
import {JobService} from '../job.service'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private dataservice:JobService) { }

  ngOnInit() {
  }
  registerUser()
  {
    //this.dataservice.registerUser(this.user);

  }

}
