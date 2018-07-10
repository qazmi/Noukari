import { Component, OnInit } from '@angular/core';

import {LoginRegisterService} from '../login-register.service'

@Component({
  selector: 'app-login-email',
  templateUrl: './login-email.component.html',
  styleUrls: ['./login-email.component.css']
})
export class LoginEmailComponent implements OnInit {

  constructor(private loginService:LoginRegisterService) { }
  email : String;
  password : String;
  ngOnInit() {
  }

  loginUser()
  {
    console.log(this.email,this.password);
    this.loginService.loginUser(this.email,this.password).subscribe((results)=>{
      console.log('Results',results);
    })

  }

}
