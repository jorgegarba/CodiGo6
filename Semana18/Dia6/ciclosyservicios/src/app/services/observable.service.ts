import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; //<----
import { interval } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ObservableService {
  contador: any;
  constructor() { 
    this.contador = interval(1000); //Incrementandose
  }
}
