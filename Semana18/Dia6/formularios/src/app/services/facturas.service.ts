import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacturasService {

  constructor(private _sHttp: HttpClient) { }

  getFacturas(): Observable<any> {
    return this._sHttp.get("https://5d1cd485f31e7f00147ebb7a.mockapi.io/facturas");
  }

}
