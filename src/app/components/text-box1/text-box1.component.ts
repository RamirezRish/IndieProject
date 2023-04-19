import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-box1',
  template: 
      `<div class="box1">
          <div class="tittle"><h4>{{Tittle == "2" ? "es DOS": Tittle}}</h4></div>
          <p class="text"> 
                  {{textContent1}}
          </p>
      </div>`,
      
  styleUrls: ['./text-box1.component.css']
})
export class TextBox1Component implements OnInit {


  @Input() textContent1!:String;
  @Input() Tittle!:String;
  

  private exampleValue:Number= 58;
  public exampleText:String="contenido legible";

  setTextExample(val:String){
    return this.exampleText=val
  }

 public getIncognit(){

    return this.exampleText;
  }



  constructor() { }

  ngOnInit(): void {
  }

}
