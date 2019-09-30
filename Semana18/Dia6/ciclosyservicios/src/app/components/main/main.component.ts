import { Component, OnInit,DoCheck } from '@angular/core';
import { Usuario } from '../../models/usuario';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, DoCheck {

  usuario: Usuario = {
    nombres : '',
    apellidos : '',
    dni : 0
  };

  arrayUsuarios: Array<Usuario> = [];

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck(){
    //Sirve para detectar cambios que Angular no pueda detectar por si mismo
    console.log('Ejecutando ngDoCheck');
    //El valor previo de algo y su cambio.
  }
  usuarioSeleccionado:Usuario;

  seleccionarUsuario(usuario:Usuario){
    this.usuarioSeleccionado = usuario;
  }
  anadirUsuario(){
    const usuarioTmp = new Usuario();
    usuarioTmp.nombres = this.usuario.nombres;
    usuarioTmp.apellidos = this.usuario.apellidos;
    usuarioTmp.dni = this.usuario.dni;
    this.arrayUsuarios.push(usuarioTmp);
    console.log(this.arrayUsuarios);
  }
}
