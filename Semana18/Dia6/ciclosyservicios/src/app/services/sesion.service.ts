import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  private sesionActiva: boolean = true;

  constructor() { }

  giveSesion(){
    return this.sesionActiva;
  }
}
