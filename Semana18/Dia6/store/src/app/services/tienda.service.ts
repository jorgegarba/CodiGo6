import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {

  constructor(private _sHttp: HttpClient) { }

  getProductos(): Observable<any> {
    return this._sHttp.get('https://5d4a3aed5c331e00148eaec4.mockapi.io/productos');
  }
}
