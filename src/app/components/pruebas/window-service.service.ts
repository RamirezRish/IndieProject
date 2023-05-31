import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowServiceService {

  constructor() { }

  alertMessage(mss:string){
    alert(mss);
  }

}
