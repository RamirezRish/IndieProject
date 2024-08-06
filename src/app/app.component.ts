import { Component, OnInit } from '@angular/core';

import firebase from 'firebase/compat/app';
import { getFirestore } from "firebase/firestore";

// import { collection, collectionData, getFirestore } from '@angular/fire/firestore';

import { LoginServices } from './log-in/login.service';

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

    const app = firebase.initializeApp(
      // {
      // apiKey: "AIzaSyDRqAfzsNjmgfb6mBGv8cC7WO7gOOjxx_M",
      // authDomain: "portfolio-ang-01.firebaseapp.com",
      // }
      this.firebaseConfig
    );
    const db = getFirestore(app);
    this.dataSv.setDb(db);
    // console.log(db);
    
    

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


  // de prueba
  // getAboutMe():Observable<AboutMe[]>{
  //   console.log(". . .");
    
  //   // this.dataSv.getDocs
  
  //   const _firestore = getFirestore()
  //   const _collection = collection(_firestore,"aboutMe");
  //   // console.log(_firestore, " --- ", _collection)

  //   // return collectionData(_collection,{idField:'id'}) as Observable <AboutMe[]>
      
  // };





}




