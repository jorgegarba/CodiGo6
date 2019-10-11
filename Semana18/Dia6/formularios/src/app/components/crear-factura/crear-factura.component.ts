import { Component, OnInit } from '@angular/core';
import { FacturasService } from './../../services/facturas.service';

@Component({
  selector: 'app-crear-factura',
  templateUrl: './crear-factura.component.html',
  styleUrls: ['./crear-factura.component.css']
})
export class CrearFacturaComponent implements OnInit {

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
    this._sFactura.postFactura(this.objFactura).subscribe((rpta) => {
      console.log(rpta);
    })
  }

}