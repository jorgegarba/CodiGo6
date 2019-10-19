import { Component, OnInit, NgZone } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database';
import { DatabaseReference, DataSnapshot } from '@angular/fire/database/interfaces';

@Component({
  selector: 'app-realtime',
  templateUrl: './realtime.component.html',
  styleUrls: ['./realtime.component.css']
})
export class RealtimeComponent implements OnInit {


  refUsuarios: DatabaseReference;
  listaUsuarios: Array<any>;

  constructor(private _realtime: AngularFireDatabase,
    private zone: NgZone) {
    this.refUsuarios = this._realtime.database.ref("usuarios");
  }

  ngOnInit() {
    // console.log(this.refUsuarios.key);
    // referencia.on('evento',(data)=>{}) => trae la data del nodo
    // cada vez que el 'evento' sucede.

    // referencia.once('evento').then(()=>{}) => trae la data del nodo
    // una sola vez
    // this.traerDataConOnce();
    // this.traerDataConOn();


    this.traerUsuariosConOn();
  }



  /**
   * Trae a los usuarios con la función 'on' e itea los objetos
   * con un ciclo FOREACH
   */
  traerUsuariosConOn() {
    this.refUsuarios.on('value', (usuariosSnap: DataSnapshot) => {

      let usuariosTmp = [];

      usuariosSnap.forEach((usuario) => {
        let objUsuarioTmp = {
          id: usuario.key,
          nombre: usuario.val().nombre,
          apellido: usuario.val().apellido,
          imagen: usuario.val().imagen
        }
        usuariosTmp.push(objUsuarioTmp);
      });

      // El servicio zone, sirve para ejercutar una tarea
      // sincrona en la zona angular
      // zona angular => cualquier componente visual de angular
      this.zone.run(() => {
        this.listaUsuarios = usuariosTmp;
      })

      console.log(this.listaUsuarios);

    })
  }


  /**
   * Trae la data con la funcion 'on' e itera los objetos
   * con un ciclo FOR IN
   */
  traerDataConOn() {
    this.refUsuarios.on('value', (data: DataSnapshot) => {
      let objUsuarios = data.toJSON();
      // iterando un obj
      for (const key in objUsuarios) {
        console.log(objUsuarios[key]);
      }
    });
  }
  /**
     * Trae la data con la funcion 'once' e itera los objetos
     * con un ciclo FOR IN
     */
  traerDataConOnce() {
    this.refUsuarios.once('value').then((data: DataSnapshot) => {
      let objUsuarios = data.toJSON();
      // iterando un obj
      for (const key in objUsuarios) {
        console.log(objUsuarios[key]);
      }
    })
  }

}
