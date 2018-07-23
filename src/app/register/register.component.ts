import { Component, OnInit } from '@angular/core';
import {LoginRegisterService} from '../login-register.service'
import {User} from '../User'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private loginService:LoginRegisterService) { }
 user: User;
  ngOnInit() {
    this.user = new User();
    this.user.gender = "Male";
  }
  registerUser()
  {
    console.log(this.user.email,this.user.password,this.user.firstName);
     this.loginService.registerUser(this.user).subscribe((results)=>{
       console.log('Results',results);
     })

  }

}
