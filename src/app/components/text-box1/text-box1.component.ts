import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-box1',
  templateUrl: './text-box1.component.html',
  styleUrls: ['./text-box1.component.css']
})
export class TextBox1Component implements OnInit {


  @Input() textContent1!:String;
  @Input() Tittle1!:String;
  @Input() textContent2!:String;
  @Input() Tittle2!:String;
  
//   private exampleValue:Number= 58;
//   public exampleText:String="contenido legible";

//   setTextExample(val:String){
//     return this.exampleText=val
//   }

//  public getIncognit(){

//     return this.exampleText;
//   }


  constructor() { }

  ngOnInit(): void {
  }

}
