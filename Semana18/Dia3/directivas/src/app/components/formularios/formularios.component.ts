import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  imprimir(nombres, apellidos) {
    console.log(`nombres ${nombres.value}`);
    console.log(`apellidos ${apellidos.value}`);
  }

  imprimir2(apodo, pregunta) {
    console.log(`apodo ${apodo.value}`);
    console.log(`pregunta ${pregunta.value}`);
  }

  imprimir3(raza, edad) {
    console.log(raza);
    console.log(edad);
  }
}
