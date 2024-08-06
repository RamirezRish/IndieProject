import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class EditService {

  constructor(
    private cookieSv:CookieService
  ) { 

    

    if (cookieSv.get("tkn")){
      this.edit = true
    } else {this.edit = false};
  }

  edit:boolean = false;
}
