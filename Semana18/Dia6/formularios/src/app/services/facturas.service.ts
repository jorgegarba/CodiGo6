import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_BACKEND } from './../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class FacturasService {

  constructor(private _sHttp: HttpClient) { }

  getFacturas(): Observable<any> {
    return this._sHttp.get(`${URL_BACKEND}/facturas`);
  }
  postFactura(objFactura): Observable<any> {

    let objFacturaString = JSON.stringify(objFactura);
    // creando headers
    let misHeaders = new HttpHeaders().set("Content-Type", "application/json");

    return this._sHttp.post(`${URL_BACKEND}/facturas`,
      objFacturaString,
      { headers: misHeaders });
  }
  deleteFactura(id): Observable<any> {
    return this._sHttp.delete(`${URL_BACKEND}/facturas/${id}`);
  }
  getFacturaById(id): Observable<any> {
    return this._sHttp.get(`${URL_BACKEND}/facturas/${id}`);
  }
  putFacturaById(objFactura): Observable<any> {

    let objFacturaString = JSON.stringify(objFactura);

    let misHeaders = new HttpHeaders().set("Content-type", "application/json");

    return this._sHttp.put(`${URL_BACKEND}/facturas/${objFactura.id}`,
                            objFacturaString, { headers: misHeaders });
  }

}
