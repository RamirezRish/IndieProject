import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../character.model';
import { PjSService } from '../pj-s.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() pjI:Character;
  @Input() i:number;
  @Input() editor:boolean;



  //Ejemplo para @output

  characteristics:Array<string>=[]; //acá modifiqué la instancia que no tenía tipado

  addDate(newDate:string) {
    this.characteristics.push(newDate);
  };
  delDate(i:number){
    this.pjLs.del_char(i)
  }

  constructor(private pjLs:PjSService) { }

  ngOnInit(): void {
  }

}
