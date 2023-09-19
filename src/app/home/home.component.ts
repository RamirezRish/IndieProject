import { Component, OnInit } from '@angular/core';
import { EmergentFormService } from './emergent.form.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public emFormSv:EmergentFormService) { 
  }
  
  ngOnInit(): void {
  }
  
  validator_emergentForm:boolean = this.emFormSv.validator_emergentForm;

  // tittle1:string;
  // charge_form:string[]

}
