import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../character.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() pjI:Character;



  //Ejemplo para @output

  characteristics:Array<string>=[]; //acá modifiqué la instancia que no tenía tipado

  addDate(newDate:string) {
    this.characteristics.push(newDate);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
