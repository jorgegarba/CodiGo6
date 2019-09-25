import { Component, OnInit } from '@angular/core';
import { Producto } from '../../classes/producto';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  titulo: string = 'Agregar Productos';
  producto: Producto = {
    id: 1,
    nombre: 'Pizza',
    descripcion: 'Descripción de mi Pizza :)'
  }

  arrayProductos: Array<any> = [];

  miFuncion(): void {
    this.arrayProductos.push(this.producto);
    console.log(this.arrayProductos);
  }
  constructor() { }

  ngOnInit() {
  }

}
