import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database';
import { DatabaseReference, DataSnapshot } from '@angular/fire/database/interfaces';

@Component({
  selector: 'app-realtime',
  templateUrl: './realtime.component.html',
  styleUrls: ['./realtime.component.css']
})
export class RealtimeComponent implements OnInit {


  refUsuarios: DatabaseReference;

  constructor(private _realtime: AngularFireDatabase) {
    this.refUsuarios = this._realtime.database.ref("usuarios");
  }

  ngOnInit() {
    // console.log(this.refUsuarios.key);
    // referencia.on('evento',(data)=>{}) => trae la data del nodo
    // cada vez que el 'evento' sucede.

    // referencia.once('evento').then(()=>{}) => trae la data del nodo
    // una sola vez
    // this.traerDataConOnce();
    this.traerDataConOn();
  }

  traerDataConOn() {
    this.refUsuarios.on('value', (data: DataSnapshot) => {
      let objUsuarios = data.toJSON();
      // iterando un obj
      for (const key in objUsuarios) {
        console.log(objUsuarios[key]);
      }
    });
  }

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
