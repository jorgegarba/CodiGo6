import { Injectable } from '@angular/core';
// importando servicio para el consumo de recursos HTTP
import { HttpClient, HttpHeaders } from '@angular/common/http';
// 

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _sHttp: HttpClient) { }

  crearUsuario(correo, contra) {
    let url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCj9KyssMJNqyT2bAECTGgTOBbRloL92PM";

    let data = {
      email: correo,
      password: contra,
      returnSecureToken: true
    };

    let misHeaders = new HttpHeaders().set("Content-type", "application/json");

    return this._sHttp.post(url, JSON.stringify(data), { headers: misHeaders });

  }


  iniciarSesion(correo, contra) {
    let url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCj9KyssMJNqyT2bAECTGgTOBbRloL92PM";

    let data = {
      email: correo,
      password: contra,
      returnSecureToken: true
    };

    let misHeaders = new HttpHeaders().set("Content-type", "application/json");

    return this._sHttp.post(url, JSON.stringify(data), { headers: misHeaders });

  }

}
