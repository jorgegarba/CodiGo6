import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  usuario: Usuario = {
    nombres : '',
    apellidos : '',
    dni : 0
  };

  arrayUsuarios: Array<Usuario> = [];

  constructor() { }

  ngOnInit() {
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
