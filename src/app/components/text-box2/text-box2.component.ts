import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-box2',
  templateUrl: './text-box2.component.html',
  styleUrls: ['./text-box2.component.css']
})
export class TextBox2Component implements OnInit {

  @Input() textContent2!:String;
  @Input() Tittle2:String;

  constructor() { }

  ngOnInit(): void {
  }

}
