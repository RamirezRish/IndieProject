import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmergentFormService {

  constructor() { };

  // inyección de datos por variables
  ab_xp:number=1;
  validator_edit:boolean = true;
  validator_emergentForm:boolean = false;

  edit(){
    this.validator_edit = !this.validator_edit
  };
  emergentForm(){
    this.validator_emergentForm = !this.validator_emergentForm;
  };
  setAb_xp(i:number){
    this.ab_xp=i;
  }
  

        // contenido del about me
    ab_me:any={
      tittle1: ["UNO1","DOS1","TRES1"],
      tittle2: ["UNO2","DOS2","TRES2"],
      content1:[
        "11Lorem ipsum dolor sit amet consectetur adipisicing elit. ___________________",
        "12Lorem ipsum dolor sit amet consectetur adipisicing elit. ___________________",
        "13Lorem ipsum dolor sit amet consectetur adipisicing elit. ___________________"
      ],
      content2:[
        "21Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed beatae dolor sunt ullam veniam assumenda distinctio magnam atque vero cumque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed beatae dolor sunt ullam veniam assumenda distinctio magnam atque vero cumque! ",
        "22Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed beatae dolor sunt ullam veniam assumenda distinctio magnam atque vero cumque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed beatae dolor sunt ullam veniam assumenda distinctio magnam atque vero cumque! ",
        "23Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed beatae dolor sunt ullam veniam assumenda distinctio magnam atque vero cumque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed beatae dolor sunt ullam veniam assumenda distinctio magnam atque vero cumque! "
      ], 
      indx:[0,0,0],
      constructor(tittle1:string, tittle2:string, content1:string, content2:string){
        this.tittle1.push(tittle1);
        this.tittle2.push(tittle2);
        this.content1.push(content1);
        this.content2.push(content2);
        this.indx.push(0);
      }  
    };

    
        // contenido del experience
    exp:any={
      tittle: ["UNO1","DOS1","TRES1"],
      content:[
        "11Lorem ipsum dolor sit amet consectetur adipisicing elit. ___________________",
        "12Lorem ipsum dolor sit amet consectetur adipisicing elit. ___________________",
        "13Lorem ipsum dolor sit amet consectetur adipisicing elit. ___________________"
      ],
      indx:[0,0,0],
      contructor(tittle:string,content:string){
        this.tittle.push(tittle);
        this.content.push(content);
        this.index.push(0)
      }
    };


        // modificación de contenidos

    generalUpd(totalInfo:any, code:string){
      // para about me
      if(code == "ab_me"){
        this.ab_me = totalInfo
      }
    }
    generalAdd(){
      this.ab_me.constructor("","","","")
    }
    generalDel(i:number){
      this.ab_me.tittle1.splice(i,1)
      this.ab_me.tittle2.splice(i,1)
      this.ab_me.content1.splice(i,1)
      this.ab_me.content2.splice(i,1)
      this.ab_me.indx.splice(i,1)
    }
    // add1(param:string, content:string, ){}
    // mod_form:any[]=[true, "1", "2", "3", "4"];
    // charge_form(i:number){
    //     this.mod_form[1] = this.tittle1[1]
    //     this.mod_form[2] = this.tittle2[1]
    //     this.mod_form[3] = this.content1[1]
    //     this.mod_form[4] = this.content2[1]
    // }

}
