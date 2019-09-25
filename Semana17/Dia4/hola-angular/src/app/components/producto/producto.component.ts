import { Component } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  title = 'Título del Producto';
  content = 'Producto Novedoso Te limpia la casa te lava la ropa y te da desayuno';
  price = '$ 899.99';
}
