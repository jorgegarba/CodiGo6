import { Component, OnInit, Input,OnChanges,SimpleChanges,} from '@angular/core';
import { Usuario } from '../../models/usuario';
@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit, OnChanges{

  @Input()
  usuario:Usuario;

  constructor() { }

  ngOnChanges(changes:SimpleChanges){
    console.log('datosPrevios',changes.usuario.previousValue)
    console.log('datoActual',changes.usuario.currentValue)
    const nuevoValor = changes.usuario.currentValue;

    if(undefined !== nuevoValor){
      this.usuario.nombres = this.usuario.nombres + " Administrador";
    }
  }

  ngOnInit() {
  }

}
