import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import { CookieService } from "ngx-cookie-service";

import { createUserWithEmailAndPassword, getAuth, sendEmailVerification } from "firebase/auth";

@Injectable()
export class LoginServices{
    


    constructor(
        private router:Router, 
        private cookieSv:CookieService
    ){
    }

    token:string;
    
    
    // FUNCIÓN "LOGIN" DE DOCUMENTACIÓN OFICIAL

    // login (email:string, password:string){
    //     const auth = getAuth();
    //     signInWithEmailAndPassword(auth, email, password)
    //         .then((userCredential) => {
    //             // Signed in 
    //             const user = userCredential.user;
    //             firebase.auth().currentUser?.getIdToken().then(
    //                 tokenI2=>{
    //                     this.token=tokenI2;
    //                     this.cookieSv.set("tokn",this.token);
    //                     this.router.navigate(['/pruebas']);
    //                 }
    //             )
    //             console.log(user)
    //             // ...
    //         })
    //         .catch((error) => {
    //             const errorCode = error.code;
    //             const errorMessage = error.message;
    //             console.warn(errorCode);
    //             console.warn(errorMessage);
    //         });
    // };



    // FUNCIÓN "REGISTER" DE DOCUMENTACIÓN OFICIAL
    register (email:string, password:string){
        const auth = getAuth();
        console.log(auth)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log(user)
            sendEmailVerification(user)
            
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.warn(errorCode);
            console.warn(errorMessage);
            // ..
        });
    };

    //  FUNCIÓN "LOGIN" SEMIPROPIA 
    login(email:string, password:string){
        firebase.auth().signInWithEmailAndPassword(email,password)
            .then(
                    ()=>{
                    firebase.auth().currentUser?.getIdToken().then(
                        tokenI=>{
                            this.token=tokenI;
                            this.cookieSv.set("tkn",this.token);
                            this.router.navigate(['']);
                        }
                    );
                    setTimeout(()=>{
                        window.location.reload();
                    },
                100)
                }
            )
            .catch(error=> {console.error("error")})
    };

    
    logout(){
        firebase.auth().signOut().then(()=>{
            this.token="";
            this.cookieSv.set("tkn","");
            // this.router.navigate(['']);
            window.location.reload();
        })
    };

    getIdToken(){
        // return this.token;
        return this.cookieSv.get("tkn");
    };
    statusLog(){
        // return this.token;
        return this.cookieSv.get("tkn");
    };
    
    
    

}