import { Component, OnInit, OnDestroy } from '@angular/core';
import { FacturasService } from './../../services/facturas.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent implements OnInit, OnDestroy {
  facturas;
  subscriptor: Subscription;
  constructor(private _sFacturas: FacturasService,
              private _sRouter: Router) { }

  ngOnInit() {
    this.subscriptor = this._sFacturas.getFacturas().subscribe((resultado) => {
      this.facturas = resultado;
    })
  }

  ngOnDestroy() {
    this.subscriptor.unsubscribe();
  }

  crearFactura() {
    this._sRouter.navigate(['facturas','crear']);
  }
}