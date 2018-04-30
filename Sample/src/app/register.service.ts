import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';



@Injectable()
export class RegisterService {

  url: string
 
  constructor(private http : Http){
      this.url  = 'https://192.168.1.118:8443/MeOnCloud/account/customer/register'
  }

  search_word(){
    /*const req = this.http.post('http://jsonplaceholder.typicode.com/posts', {
      title: 'foo',
      body: 'bar',
      userId: 1
    })
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );*/

      const req = this.http.post('URL:https://192.168.1.118:8443/MeOnCloud/account/customer/register', {
        name: 'christus',
        phoneNumber: '123456',
        countryCode: '+91',
        countryAlpha2Code: 'IN',
        needVerification: 'false',
        byInvitation: 'false',
        subscribeToAll: 'true',
        enterprisesToSubscribe: {"eIds":["103"]}
      })
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error code");
        }
      );
  }


  getListDate() {
    return new Promise((resolve, reject) => {
      const req = this.http.get("https://jsonplaceholder.typicode.com/photos").subscribe(
        res => {
          resolve(res.json())
        },
        err => {
          console.log(err);
          reject(err);
        }
      )
    });
  }

}
