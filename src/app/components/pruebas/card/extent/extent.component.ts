import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-extent',
  templateUrl: './extent.component.html',
  styleUrls: ['./extent.component.css']
})
export class ExtentComponent implements OnInit {

  validator5:boolean=false;

  valMod(){
    this.validator5=!(this.validator5);
  };

  @Output() extensionPj = new EventEmitter<string>(); 


  addCharPj(value:string){
    this.extensionPj.emit(value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
