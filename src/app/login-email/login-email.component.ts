import { Component, OnInit } from '@angular/core';

import {LoginRegisterService} from '../login-register.service'
import {User} from '../User'

@Component({
  selector: 'app-login-email',
  templateUrl: './login-email.component.html',
  styleUrls: ['./login-email.component.css']
})
export class LoginEmailComponent implements OnInit {

  constructor(private loginService:LoginRegisterService) { }
  user: User;
  ngOnInit() {
    this.user = new User();
  }

  loginUser()
  {
    console.log(this.user.email,this.user.password);
    this.loginService.loginUser(this.user).subscribe((results)=>{
     // console.log('Results',results);
    })

  }

}
