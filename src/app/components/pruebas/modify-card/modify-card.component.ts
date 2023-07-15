import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from '../character.model';
import { PjSService } from '../pj-s.service';

@Component({
  selector: 'app-modify-card',
  templateUrl: './modify-card.component.html',
  styleUrls: ['./modify-card.component.css']
})
export class ModifyCardComponent implements OnInit {

  index:number    =this.route.snapshot.params['id'];
  char5:Character =this.pjLS.returnPj(this.index);
  name5:string    =this.char5.name3;
  subname5:string =this.char5.subname3;
  type5:string    =this.char5.type3;
  lvl5:number     =this.char5.level3;

  
  mod_del5:number;
  mod_button:string;

  mod_delCh5(){
    if(this.mod_del5 == 1){
      this.char5.name3    =this.name5;
      this.char5.subname3 =this.subname5;
      this.char5.type3    =this.type5;
      this.char5.level3   =this.lvl5;
      this.pjLS.mod_char(this.char5,this.index);
    } else if (this.mod_del5 == 2){
      this.pjLS.del_char(this.index);
    };
    this.router.navigate(['/pruebas']);

  };
  // del(){}

  constructor(private route:ActivatedRoute, private pjLS:PjSService, private router:Router) { }

  ngOnInit(): void {
    this.mod_del5=this.route.snapshot.queryParams['mod'];
    if (this.mod_del5 == 1){
      this.mod_button = "Modify"
    } else if  (this.mod_del5 == 2){
      this.mod_button = "Delete"
    }
  }



}
