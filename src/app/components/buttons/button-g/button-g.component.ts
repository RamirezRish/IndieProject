import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-button-g',
  templateUrl: './button-g.component.html',
  styleUrls: ['./button-g.component.css']
})
export class ButtonGComponent implements OnInit {

  @Input() link1 :string;
  @Input() value_btn :string;


  constructor() { }

  ngOnInit(): void {
  }

}
