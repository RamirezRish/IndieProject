import { Component, OnInit } from '@angular/core';
import { EmergentFormService } from '../home/emergent.form.service';
import { EditService } from '../services/edit.service';

@Component({
  selector: 'app-h-s-skills',
  templateUrl: './h-s-skills.component.html',
  styleUrls: ['./h-s-skills.component.css']
})
export class HSSkillsComponent implements OnInit {

  edit:boolean = false;

  // HARD SKILLS DATA
  sH:any[];

  addSH(ttl:string,urlImg:string,description:string){
    this.em_formS.addHS(ttl,urlImg,description);
  };



  // SOFT SKILLS DATA
  col1:string[]=[
    "Proactivity",
    "Fast learning",
    "Good communication",
    "Leadership",
    "Quick adaptation"
  ];
  col2:string[]=[
    "Teamwork",
    "Problem solving",
    "Creativity and Innovation",
    "Time management",
    "Organized"
  ];




  constructor(private em_formS:EmergentFormService, private editSv:EditService) {
    this.sH=em_formS.hardS;
    this.edit = this.editSv.edit
  }

  ngOnInit(): void {
  }

}
