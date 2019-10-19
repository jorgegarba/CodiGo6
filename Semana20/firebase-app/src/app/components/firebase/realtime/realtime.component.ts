import { Component, OnInit, NgZone } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database';
import { DatabaseReference, DataSnapshot } from '@angular/fire/database/interfaces';

// importando clases para formularios reactivos
import { FormGroup, FormControl, Validators } from '@angular/forms';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-realtime',
  templateUrl: './realtime.component.html',
  styleUrls: ['./realtime.component.css']
})
export class RealtimeComponent implements OnInit {

  // variable que va representar a todo el formulario
  formulario: FormGroup;

  refUsuarios: DatabaseReference;
  listaUsuarios: Array<any>;

  constructor(private _realtime: AngularFireDatabase,
    private zone: NgZone) {
    this.refUsuarios = this._realtime.database.ref("usuarios");

    // inicializando el formulario reactivo
    this.formulario = new FormGroup(
      {
        "campo_nombre": new FormControl('', Validators.required),
        "campo_apellido": new FormControl('', Validators.required),
        "campo_imagen": new FormControl('', Validators.required),
        "campo_email": new FormControl('', [
          Validators.required,
          Validators.pattern("[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}")
        ])
      }
    );
  }
  // evento submit del formulario reactivo
  onSubmit() {
    Swal.fire({
      title: 'Espere',
      text: 'Estamos creando el registro',
      type: 'info',
      showConfirmButton: false,
      allowOutsideClick: false,
    });
    // imprimiendo todo el objeto formulario
    console.log(this.formulario);
    // obtener el objeto usuario del formulario
    console.log(this.formulario.value);
    // obtener la referencia al input del email 
    console.log(this.formulario.get('campo_email').value);

    // armar el objeto para enviarlo a firebase
    // 1. crear un ID a partir de la referencia al nodo 'usuarios'
    let key = this.refUsuarios.push().key;

    // 2. crear una referencia al nodo 'usuarios'=>'key'
    let refKey = this.refUsuarios.child(key);

    // 3. enviar el objeto usuario a su referencia
    refKey.set({
      nombre: this.formulario.get('campo_nombre').value,
      apellido: this.formulario.get('campo_apellido').value,
      email: this.formulario.get('campo_email').value,
      imagen: this.formulario.get('campo_imagen').value,
    }).then(() => {
      Swal.fire({
        title: 'Exito!',
        text: 'Registro creado correctamente',
        type:'success',
        timer: 1000,
      })
    })

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


  eliminarUsuario(id) {
    // db -> usuarios -> id (del regustro a borrar)

    Swal.fire({
      title: 'Borrar Registro',
      text: '¿Seguro que quiere eliminar el registro?',
      type: 'question',
      showCancelButton: true,
    }).then(rpta => {
      if (rpta.value) {
        this.refUsuarios.child(id).remove().then(() => {
          Swal.fire({
            title: 'Exito',
            text: 'Registro eliminado correctamente',
            type: 'success',
            timer: 1500,
          })
        })
      }
    })
  }
}
