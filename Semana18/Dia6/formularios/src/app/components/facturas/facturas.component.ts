import { Component, OnInit, OnDestroy } from '@angular/core';
import { FacturasService } from './../../services/facturas.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

declare var $: any;

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent implements OnInit, OnDestroy {
  facturas;
  subscriptor: Subscription;

  objFactura = {
    id: '',
    fact_nro: '',
    fact_rz: '',
    fact_fech: '',
    fact_ruc: ''
  }

  constructor(private _sFacturas: FacturasService,
    private _sRouter: Router) { }

  ngOnInit() {
    this.traerFacturas();
  }

  traerFacturas() {
    this.subscriptor = this._sFacturas.getFacturas()
      .subscribe((resultado) => {
        this.facturas = resultado;
      });
  }



  ngOnDestroy() {
    this.subscriptor.unsubscribe();
  }

  crearFactura() {
    this._sRouter.navigate(['facturas', 'crear']);
  }

  eliminarFactura(id) {
    Swal.fire({
      title: 'ar yu chur?',
      text: 'El proceso no tiene vuelta atrás!',
      type: 'warning',
      confirmButtonText: 'Sí, borrar!',
      showCancelButton: true,
      cancelButtonText: 'No, cancelar!',
    }).then((result) => {
      if (result.value) {
        this._sFacturas.deleteFactura(id).subscribe((rpta) => {
          if (rpta.id) {
            Swal.fire({
              position: 'top-end',
              type: 'success',
              title: 'La factura ha sido borrada con éxito',
              showConfirmButton: false,
              timer: 1500
            });
            this.traerFacturas();
          }
        })
      }
    })
  }

  abrirModalEditar(id) {



    $("#modalEditar").modal("show");
  }
}