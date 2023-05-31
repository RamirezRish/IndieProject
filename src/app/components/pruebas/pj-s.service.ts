import { Injectable } from '@angular/core';
import { Character } from './character.model';
import { WindowServiceService } from './window-service.service';

@Injectable({
  providedIn: 'root'
})
export class PjSService {

  character:Character[]=[
    new Character("Shenhe", "Uesugi", "Exsorcist", 13),
    new Character("Miku", "Nakano", "Human", 1),
    new Character("Inori", "Yuzuriha", "Human", 3),
    new Character("Alice", "Nakiri", "Human", 1),
    new Character("Inori", "Yuzuriha", "Human", 3),
  ];
  

  addPj(valueCh:any[],str:string){
    this.alertS.alertMessage(str)
    this.character.push(new Character(valueCh[0],valueCh[1],valueCh[2],parseInt(valueCh[3])))
  };

  constructor(private alertS:WindowServiceService) { }
}
