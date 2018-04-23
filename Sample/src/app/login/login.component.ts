import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;
  name: string;
  mobileNumber: number;
  mobile: number;
  constructor(private myservice: RegisterService) {
   }

  ngOnInit() {
  

  }

  onClickMe() {
    this.userName = this.name;
    this.mobileNumber = this.mobile;
    console.log(this.userName);
    console.log(this.mobileNumber);
    console.log("response "+this.myservice.search_word());

  }

}
