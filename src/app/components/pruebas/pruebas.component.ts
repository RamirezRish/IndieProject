import { Component, OnInit } from '@angular/core';
import { Character } from './character.model';
import { PjSService } from './pj-s.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent  {

  // las variables y funciones están ligadas a las de <text-box1>
              //initialEvent(value:String){
              //}

              //función para cambiar títulos a partir del input

              // changeTittle(value:String){
              //   TextBox1Component.setTextExample("nuevo título")
              // }

      // reveal(){
      //   return console.log(1 //TextBox1Component.getIncognit())

// binding
  exampleProperty=false;
  userLoginProperty?=false;
  name="";
  lstname:string="";
  age:string="";
  card:number=0.1;
  statecard:string="";
  twoWayDate:string="TwoWayBinding";

  buttonNegative(){
    if (this.userLoginProperty == false){
      this.userLoginProperty = true
    } else {
      this.userLoginProperty = false
    }; 
    this.setUserLoginProperty("javier");
  };
  getUserLoginProperty(){
    this.userLoginProperty=false;
  };
  setUserLoginProperty(name:string){
    alert(`${name}, te acabaas de registrar:)`);
  };
  alert1(){
    alert(`Hola, ${this.lstname} ${this.name}. Te has logueado con éxito! Por cierto, felices ${this.age} años! \n\n` + `${this.statecard}`)
  };
  setDateUser (Name:string, Lstname:string, Age:string){
    this.name=Name; this.lstname=Lstname;this.age=Age;
    this.alert1()
  };
  setCard(event:Event){
    this.card=parseInt((<HTMLInputElement>event.target).value);
    if (this.card > 2000)
        {this.statecard=`Sus fondos: $${this.card}`}
    else{this.statecard="Fondos insuficientes para cualquier operación \n CARGÁ PLATA, RATA!."};
    console.log(this.card)    
  };
  

  // directivas

  title:string="User Create";
  name2:string="";
  subname2:string="";
  message:string="";
  validator:boolean= false;
  pjList:Array<any>=[];
  

  signUp(){
    this.message = `El usuario se ha registrado con éxito. Suerte ${this.subname2}, ${this.name2}.`;
    if (!((this.name2 && this.subname2)=="")) {this.validator = true; this.return()};
  };

  // compilación de conocimientos (app para crear stats de personajes <<basic>>)

  placeh:string="Name"
  value4:string="";
  valueCh:any[]=[];
  date4:string[]=["Name","Subname","Type","Level"];
  counter:number=0;
  validator4:boolean=true;

  characters:Character[]=[];

  addDate(){
   if (!(this.value4=="")){
    this.valueCh[this.counter]=this.value4;
    this.counter++; 
    this.placeh=this.date4[this.counter];
    this.value4=""; 
   }
    // console.log(this.counter);
    if (this.counter == 4)
    {this.counter = 0;this.validator4=false; this.placeh="Name"}
  };
  gCard(){
    this.validator4=true;
    this.pjLS.addPj(this.valueCh,`Se ha agregado a ${this.valueCh[1]} ${this.valueCh[0]}.`);
  };

  // Pruebas para el retorno a home por botón (clase Router)
  return(){
    this.router.navigate([""])
  }


  // Constructor
  constructor(private pjLS:PjSService, private router:Router){ 
    this.pjList=[
      {nick:"Inori"},
      {nick:"Yuu"},
      {nick:"Miku"},
      {nick:"Knd"},
      {nick:"Esdeath"}
    ];

    // this.characters=this.pjLS.characters
  };

  ngOnInit(): void {
    this.pjLS.returnChs().subscribe(
      charU=>{
        this.characters=Object.values(charU);
        this.pjLS.setChs(this.characters)
      }
    );
  }
}
