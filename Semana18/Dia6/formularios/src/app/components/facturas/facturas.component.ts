import { Component, OnInit, OnDestroy } from '@angular/core';
import { FacturasService } from './../../services/facturas.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent implements OnInit, OnDestroy {
  facturas;
  subscriptor: Subscription;
  constructor(private _sFacturas: FacturasService) { }

  ngOnInit() {
    this.subscriptor = this._sFacturas.getFacturas().subscribe((resultado) => {
      this.facturas = resultado;
    })
  }

  ngOnDestroy() {
    this.subscriptor.unsubscribe();
  }
}