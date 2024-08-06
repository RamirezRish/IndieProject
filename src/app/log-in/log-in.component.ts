import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EditService } from '../services/edit.service';
import { LoginServices } from './login.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor( private loginSv:LoginServices, editSv:EditService, router:Router) { 
  }

  ngOnInit(): void {
  }

  conditional1:boolean = true; 
  signU_I:string = "Don't have an account yet?";

  usrn1:string = "";
  gml1:string = "";
  ctr1:string = "";  
  


  login(form:NgForm){
    const email=form.value.email;
    const password=form.value.password;
    this.loginSv.login(email,password);
  };
  signUpIn(){
    this.conditional1 = !this.conditional1;
    // window.location.reload();
  };

  register(form:NgForm){
    this.conditional1 = !this.conditional1;
    // console.log("Registrado con email " + form.value.email + " existosamente.");
    this.loginSv.register(form.value.email, form.value.password);
  };

}
