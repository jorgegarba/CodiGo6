import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  titulo: string = 'Agregar Productos';
  
  nombre: string = '';

  arrayProductos: Array<any> = [];

  miFuncion(): void {
    
    this.arrayProductos.push(this.nombre);
    console.log(this.arrayProductos);

  }
  constructor() { }

  ngOnInit() {
  }

}
