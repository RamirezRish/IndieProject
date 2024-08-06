import { Component, OnInit } from '@angular/core';
import { EmergentFormService } from '../home/emergent.form.service';
import { EditService } from '../services/edit.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  
  constructor(
    public emFormSv:EmergentFormService,
    private editSv:EditService
  ) {
    // this.tittle1 = emergentFormSv.tittle1;
    // this.tittle2 = emergentFormSv.tittle2;
    // this.content1 = emergentFormSv.content1;
    // this.content2 = emergentFormSv.content2;
    // this.ab_me=this.emFormSv.ab_me;

    // this.validator_edit = this.emFormSv.validator_edit;
    this.validator_edit = this.editSv.edit
  }
  
  
  ngOnInit(): void {  }
  
  // tittle1:string  [] = [];
  // tittle2:string  [] = [];
  // content1:string [] = [];
  // content2:string [] = [];
  ab_me:any={}
  validator_edit:boolean;
  
  // secondary_coefficient:number = 0;
  
  setEmergentForm(i:number){
  // this.secondary_coefficient = i
    this.emFormSv.emergentForm();
    this.emFormSv.setAb_xp(i)
  }
  
  
  

}
