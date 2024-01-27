import { Component, OnInit } from '@angular/core';
import { EmergentFormService } from '../home/emergent.form.service';

@Component({
  selector: 'app-h-s-skills',
  templateUrl: './h-s-skills.component.html',
  styleUrls: ['./h-s-skills.component.css']
})
export class HSSkillsComponent implements OnInit {

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




  constructor(private em_formS:EmergentFormService) {
    this.sH=em_formS.hardS;
  }

  ngOnInit(): void {
  }

}
