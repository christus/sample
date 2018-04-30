import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import * as $ from 'jquery';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list = [];

  constructor(private myservice: RegisterService) { }

  ngOnInit() {
    this.getList();
  }

  getList() {
    var that = this;
    this.myservice.getListDate().then( 
      (response)=> {
        console.log("Success"+ response);
        that.list = that.toArray(response);
        console.log("List*********");
        console.log(that.list);
      },
      (err)=> console.log("Failure"+ err),
    );
  }

  toArray(myObj) {
    let arr = [];
    for(let key in myObj){
      if(myObj.hasOwnProperty(key)){
        arr.push(myObj[key]);
      }
    }
    return arr;
  }

}
