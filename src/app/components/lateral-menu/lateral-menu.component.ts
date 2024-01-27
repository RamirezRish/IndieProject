import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lateral-menu',
  templateUrl: './lateral-menu.component.html',
  styleUrls: ['./lateral-menu.component.css']
})
export class LateralMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // let open:any = document.getElementById('open'),
    //     overlay:any = document.getElementById('overlay'),
    //     close:any = document.getElementById('close');
    
    // open.addEventListener('click',function(){overlay.classList.add('active')})
    // close.addEventListener('click',function(){overlay.classList.remove('active')})

  }


  visibility:string;

  open(i:number){
    if(i==0){this.visibility="active"}
    else if (i==1){this.visibility=""}
  };
  
}
