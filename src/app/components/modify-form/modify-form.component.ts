import { Component, Input, OnInit } from '@angular/core';
import { EmergentFormService } from 'src/app/home/emergent.form.service';

@Component({
  selector: 'app-modify-form',
  templateUrl: './modify-form.component.html',
  styleUrls: ['./modify-form.component.css']
})
export class ModifyFormComponent implements OnInit {


  constructor(public emFormSv:EmergentFormService) { }

  ngOnInit(): void {
  }


  ab_meUpd(){
    this.emFormSv.emergentForm()
  };
  ab_meDel(i:number){
    this.emFormSv.generalDel(i);
  };
  ab_meAdd(){
    this.emFormSv.generalAdd();
  };

}
