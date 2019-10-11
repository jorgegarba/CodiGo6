import { Component, OnInit, OnDestroy } from '@angular/core';
import { FacturasService } from './../../services/facturas.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-crear-factura',
  templateUrl: './crear-factura.component.html',
  styleUrls: ['./crear-factura.component.css']
})
export class CrearFacturaComponent implements OnInit, OnDestroy {
  subscriptor: Subscription;

  objFactura = {
    fact_nro: '',
    fact_rz: '',
    fact_fech: '',
    fact_ruc: ''
  }

  constructor(private _sFactura: FacturasService) { }

  ngOnInit() {
  }

  crearFactura() {
    console.log(this.objFactura);
    this.subscriptor = this._sFactura.postFactura(this.objFactura).subscribe((rpta) => {
      console.log(rpta);
    })
  }

  ngOnDestroy() {
    try {
      this.subscriptor.unsubscribe();
    } catch (error) {

    }
  }


}