import { Component, OnInit } from '@angular/core';
// servicio para obtener los parametros enviados por la URL
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-factura',
  templateUrl: './ver-factura.component.html',
  styleUrls: ['./ver-factura.component.css']
})
export class VerFacturaComponent implements OnInit {
  id: string;
  constructor(private _sActivatedRoute: ActivatedRoute) { }
  ngOnInit() {
    // this._sActivatedRoute.snapshot.paramMap.get('id');
    // obtener el parametro en la URL que lleva por nombre ':id'
    this.id = this._sActivatedRoute.snapshot.paramMap.get('id');
    console.log(`ID RECIBIDO ===> ${this.id}`);
  }

}
