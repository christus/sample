import { ListComponent } from './../list/list.component';
import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';


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
  buttonStatus:boolean ;
  list:{};
  
  constructor(private myservice: RegisterService, private router: Router) {
    this.buttonStatus = false
   }

  ngOnInit() {
  

  }

  onClickMe($event) {
    var that = this;
    console.log($event);
    this.buttonStatus = true;
    this.userName = this.name;
    this.mobileNumber = this.mobile;

    this.router.navigate(['list']);
  }

}
