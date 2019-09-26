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
  
  arrayProductos: Array<Producto> = [
    {id:1,nombre:'Pizza',descripcion:'DescripcionPizza'},
    {id:2,nombre:'Ceviche',descripcion:'DescripcionCeviche'},
    {id:3,nombre:'Jugo',descripcion:'DescripcionJugo'},
    {id:4,nombre:'Papitas',descripcion:'DescripcionPapitas'},
  ];

  productoSeleccionado:Producto;
  seleccionarProducto(producto:Producto):void{
    this.productoSeleccionado = producto;
  }

  miFuncion(): void {
    this.arrayProductos.push(this.producto);
    console.log(this.arrayProductos);
  }
  
  constructor() { }

  ngOnInit() {
  }

}
