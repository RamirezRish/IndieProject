import { Component, OnInit }      from '@angular/core';

import firebase                   from 'firebase/compat/app'
import { LoginServices }          from './log-in/login.service';

import { getAnalytics }           from "firebase/analytics";

import { initializeApp }          from "firebase/app";
import { getAuth }                from "firebase/auth";
import { DataServices } from './data.services';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor( private loginSv:LoginServices, private dataSv:DataServices) {
    
  }
  ngOnInit(): void{
      // Initialize Firebase (alternative #1)
      firebase.initializeApp({
      apiKey: "AIzaSyDRqAfzsNjmgfb6mBGv8cC7WO7gOOjxx_M",
      authDomain: "portfolio-ang-01.firebaseapp.com",
    });

      // Initialize Firebase (alternative #2)
    // const app = initializeApp(this.firebaseConfig);
    // const analytics = getAnalytics(app);

    // Initialize Firebase (alternative #3)
    // const app = initializeApp(this.firebaseConfig);
    // const auth = getAuth(app);

  }
  
  title:string = 'IndieProject';
  pruebasComponent = true;

  logout(){
    this.loginSv.logout();
  };
  statusLog(){
    return this.loginSv.statusLog();
  };
  toks(){
    // console.log(this.statusLog())
    console.log(this.loginSv.statusLog())
  };

  firebaseConfig = {
    apiKey: "AIzaSyDRqAfzsNjmgfb6mBGv8cC7WO7gOOjxx_M",
    authDomain: "portfolio-ang-01.firebaseapp.com",
    databaseURL: "https://portfolio-ang-01-default-rtdb.firebaseio.com",
    projectId: "portfolio-ang-01",
    storageBucket: "portfolio-ang-01.appspot.com",
    messagingSenderId: "815202224913",
    appId: "1:815202224913:web:f56746890af562305edab0",
    measurementId: "G-LV4DBDM4SN"
  };
  validator1:boolean = this.dataSv.validator_edit;
 

  getToken(){
    console.log(this.loginSv.token)
  }

}




