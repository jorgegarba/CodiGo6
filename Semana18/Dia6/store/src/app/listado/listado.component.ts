import { Component, OnInit, OnDestroy} from '@angular/core';
import { TiendaService } from '../services/tienda.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit, OnDestroy {
  subscripcion: Subscription;
  productos: any;
  constructor(private _sTienda: TiendaService) { }

  ngOnInit() {
    this.subscripcion = this._sTienda.getProductos().subscribe((datos) => {
      this.productos = datos;
    });
  }

  ngOnDestroy(){
    this.subscripcion.unsubscribe();
  }


}
