import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WindowServiceService } from 'src/app/components/pruebas/window-service.service';

@Component({
  selector: 'app-extent',
  templateUrl: './extent.component.html',
  styleUrls: ['./extent.component.css'],
})
export class ExtentComponent implements OnInit {

  validator5:boolean=false;

  valMod(){
    this.validator5=!(this.validator5);
  };

  @Output() extensionPj = new EventEmitter<string>(); 


  addCharPj(value:string){
    this.alertS1.alertMessage(`Se ha agregado la característica "${value}"`)
    this.extensionPj.emit(value);
  }

  constructor(private alertS1:WindowServiceService) { }

  ngOnInit(): void {
  }

}
