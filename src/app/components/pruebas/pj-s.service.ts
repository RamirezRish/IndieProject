import { Injectable }           from '@angular/core';
import { Character }            from './character.model';
import { WindowServiceService } from './window-service.service';
import { DataServices }         from 'src/app/data.services';

@Injectable({
  providedIn: 'root'
})
export class PjSService {

  returnChs(){
    return this.dataServices.inDate()
  };
  setChs(chs:Character[]){
    this.characters=chs
  }
  
  characters:Character[]=[];
  // character:Character[]=[
  //   new Character("Shenhe", "Uesugi", "Exsorcist", 13),
  //   new Character("Miku", "Nakano", "Human", 1),
  //   new Character("Inori", "Yuzuriha", "Human", 3),
  //   new Character("Alice", "Nakiri", "Human", 1),
  //   new Character("Alexia", "Midgar", "Fighter", 4),
  // ];
  

  addPj(valueCh:any[],str:string){
    // this.alertS.alertMessage(str);
    this.characters.push(new Character(valueCh[0],valueCh[1],valueCh[2],parseInt(valueCh[3])));
    this.dataServices.saveDate(this.characters);
  };

  
    // Para ejemplificar el pasaje de parámetros en las rutas 
        // Estas funciones devuelven el objeto que coincide con el id pasado

  returnPj(n:number){
    let char:Character = this.characters[n];
    return char
  };
  mod_char(ch5:Character, i:number){
    let char5 = new Character (ch5.name3,ch5.subname3,ch5.type3,ch5.level3);
    this.characters[i]=char5;
    this.dataServices.saveDate(this.characters);
    this.dataServices.reloadDate(i,this.characters[i]);
  };


    // Esta función va a ser semejante a la anterior, pero sirve para eliminar le objeto que coicide con el id

  del_char(i:number){
    this.characters.splice(i,1);
    this.dataServices.delDate(i);
  };

  constructor(private alertS:WindowServiceService, private dataServices:DataServices) {}
}
