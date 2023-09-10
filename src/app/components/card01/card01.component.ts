import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card01',
  templateUrl: './card01.component.html',
  styleUrls: ['./card01.component.css']
})
export class Card01Component implements OnInit {

  @Input() img_url:string;
  @Input() ttl_card:string;
  @Input() url:string;
  @Input() alt:string;


  constructor() { }

  ngOnInit(): void {
  }

}
