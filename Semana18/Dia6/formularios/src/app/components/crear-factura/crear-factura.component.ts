import { Component, OnInit, OnDestroy } from '@angular/core';
import { FacturasService } from './../../services/facturas.service';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


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

  constructor(private _sFactura: FacturasService,
    private _sRouter: Router) { }

  ngOnInit() {
  }

  crearFactura() {
    Swal.fire({
      title: 'Espere un momento',
      text: 'Estamos registrando la factura',
      type: 'info',
      allowOutsideClick: false,
      showConfirmButton: false
    })

    this.subscriptor = this._sFactura.postFactura(this.objFactura)
      .subscribe((rpta) => {
        if (rpta.id) {
          // si tiene un campo id asignado, implica que el objeto fue creado
          Swal.fire({
            title: 'Éxito!',
            type: 'success',
            text: 'La factura ha sido creada con éxito mafren!',
            confirmButtonText: 'Ir a Facturas',
            allowOutsideClick: false
          }).then((result) => {
            if (result.value) {
              this._sRouter.navigate(['facturas']);
            }
          })

        }
      })

  }

  ngOnDestroy() {
    try {
      this.subscriptor.unsubscribe();
    } catch (error) {

    }
  }


}