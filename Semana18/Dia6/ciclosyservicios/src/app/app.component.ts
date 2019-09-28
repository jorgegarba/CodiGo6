import { Component, OnInit } from '@angular/core';
import { SesionService } from './services/sesion.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ciclosyservicios';
  validado: boolean = false;
  constructor(private _sesion:SesionService){
  }
  ngOnInit(){
    console.log(this._sesion);
    this.validado =  this._sesion.giveSesion();
  }
}
