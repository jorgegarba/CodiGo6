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

  facturasSeleccionadas: Array<any> = [];
  
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
      console.log(this.facturasSeleccionadas)
      this.facturasSeleccionadas = [];
      console.log(this.facturasSeleccionadas)
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
    // antes de abrir el modal
    // traer la factura dado su id
    // console.time("demoreishon");
    Swal.fire({
      type: 'info',
      html: `<h2 class="display-4">Espere un momento<h2>
              <i class="fa fa-refresh fa-3x fa-spin" ></i> <br/>
              <p>Esperando al Servidor...</p>`,
      allowOutsideClick: false,
      showConfirmButton: false
    });

    this._sFacturas.getFacturaById(id).subscribe((rpta) => {
      // console.timeEnd("demoreishon");
      Swal.close();
      if (rpta.id) {
        // la factura existe y ya llegó
        this.objFactura = rpta;

        $("#modalEditar").modal("show");
      }
    })
  }
  guardarCambios() {
    // consumir el servicio para editar la factura
    this._sFacturas.putFacturaById(this.objFactura).subscribe((rpta) => {
      if (rpta.id) {
        // factura correctamente editada
        this.traerFacturas();
        $("#modalEditar").modal("hide");

      }
    })
  }

  seleccionarFactura(evento, factura){
    if(evento.target.checked){
      this.facturasSeleccionadas.push(factura);
      console.log(this.facturasSeleccionadas);
    } else {
      for (let i = 0; i < this.facturasSeleccionadas.length; i++){
        if(factura.id === this.facturasSeleccionadas[i].id){
          //array.splice(posicion,cant_elementos);
      
          this.facturasSeleccionadas.splice(i, 1);
          console.log(this.facturasSeleccionadas);
        }
      }
    }
  }

  eliminarFacturas(){
    console.log("eliminarFactras",this.facturasSeleccionadas)
    Swal.fire({
      title: 'ar yu chur de cargarse estas facturas?',
      text: 'El proceso no tiene vuelta atrás!',
      type: 'warning',
      confirmButtonText: 'Sí, borrar!',
      showCancelButton: true,
      cancelButtonText: 'No, cancelar!',
    }).then((result) => {
      if (result.value) {
        this._sFacturas.deleteFacturas(this.facturasSeleccionadas).subscribe((rpta) => {
          
          if (rpta[0].id) {
            Swal.fire({
              position: 'top-end',
              type: 'success',
              title: 'Las facturas ha sido borrada con éxito',
              showConfirmButton: false,
              timer: 1500
            });
            
            this.traerFacturas();
          }
          console.log(rpta);
        })
      }
    })
  }
}