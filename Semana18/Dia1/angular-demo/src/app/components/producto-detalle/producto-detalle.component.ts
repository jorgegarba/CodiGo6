import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../../classes/producto';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {
  
  
  @Input() producto: Producto;

  constructor() { }

  ngOnInit() {
  }

}
