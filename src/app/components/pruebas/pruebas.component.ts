import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent implements OnInit {

  // las variables y funciones están ligadas a las de <text-box1>
              //initialEvent(value:String){
              //}

              //función para cambiar títulos a partir del input

              // changeTittle(value:String){
              //   TextBox1Component.setTextExample("nuevo título")
              // }

      // reveal(){
      //   return console.log(1 //TextBox1Component.getIncognit())

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
  }


  getUserLoginProperty(){
    this.userLoginProperty=false;
  }

  setUserLoginProperty(name:string){
    alert(`${name}, te acabaas de registrar:)`);
  }

  alert1(){
    alert(`Hola, ${this.lstname} ${this.name}. Te has logueado con éxito! Por cierto, felices ${this.age} años! \n\n` + `${this.statecard}`)
  }
  setDateUser (Name:string, Lstname:string, Age:string){
    this.name=Name; this.lstname=Lstname;this.age=Age;
    this.alert1()
  }

  setCard(event:Event){
    this.card=parseInt((<HTMLInputElement>event.target).value);
    if (this.card > 2000)
        {this.statecard=`Sus fondos: $${this.card}`}
    else{this.statecard="Fondos insuficientes para cualquier operación \n CARGÁ PLATA, RATA!."};
    console.log(this.card)    
  }
  
  



  constructor() { }

  ngOnInit(): void {
  }


}
