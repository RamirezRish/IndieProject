import { Injectable } from '@angular/core';
import { HardS } from '../models/HardS';


@Injectable({
  providedIn: 'root'
})
export class EmergentFormService {

  constructor() { };

  // DATA INJECTION BY VARIABLES
  ab_xp:number=1;
  validator_edit:boolean = true;
  validator_emergentForm:boolean = false;
  visibility:string="";



  edit(){
    this.validator_edit = !this.validator_edit
  };
  emergentForm(){
    this.validator_emergentForm = !this.validator_emergentForm;
    if(this.visibility == ""){this.visibility = "active-visibility"} else {this.visibility = ""}
  };
  setAb_xp(i:number){
    this.ab_xp=i;
  }
  

    // CONTENT OF: ABOUT-ME
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

    
    // CONTENT OF: EXPERIENCE
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


    // CONTENT OF: HARD & SOFT SKILLS
    hardS:HardS[]=[
      new HardS ("HTML","../../assets/images/htmlimg.avif","hard skill 1",0),
      new HardS ("CSS","../../assets/images/CSS3img.svg.png","hard skill 2",1),
      new HardS ("TypeScript","../../assets/images/tsimg.png","hard skill 3",2),
      new HardS ("Angular","../../assets/images/angularimg.svg.png","hard skill 4",3),
      new HardS ("Git","../../assets/images/angularimg.svg.png","hard skill 4",4),
      new HardS ("Java","../../assets/images/angularimg.svg.png","hard skill 4",5),
      new HardS ("SpringBoot","../../assets/images/angularimg.svg.png","hard skill 4",6),
      new HardS ("Firebase","../../assets/images/angularimg.svg.png","hard skill 4",7),
      new HardS ("Netlify","../../assets/images/angularimg.svg.png","hard skill 4",8),
      new HardS ("Bootstrap","../../assets/images/angularimg.svg.png","hard skill 4",9),
      new HardS ("VSCode","../../assets/images/angularimg.svg.png","hard skill 4",10),
    ];



    addHS(ttl:string,urlImg:string, desc:string){
      this.hardS.push(new HardS(ttl,urlImg,desc,(this.hardS[this.hardS.length-1].index+1),))
      console.log(this.hardS);
    };


    // MODIFY CONTENTS

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
