import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {


  makeAlert(message:string){
    return alert(message);
  }

  constructor() { }
}
