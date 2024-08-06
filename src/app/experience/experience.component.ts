import { Component, OnInit } from '@angular/core';
import { EmergentFormService } from '../home/emergent.form.service';
import { EditService } from '../services/edit.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor(
    public emFormSv:EmergentFormService,
    private editSv:EditService
  ) {
    // this.validator_edit = this.emFormSv.validator_edit;
    this.validator_edit = this.editSv.edit
  }

  ngOnInit(): void {
  }

  validator_edit:boolean;

  setEmergentForm(i:number){
    // this.secondary_coefficient = i
    this.emFormSv.emergentForm();
    this.emFormSv.setAb_xp(i)
  }
}
