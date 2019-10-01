import { Component, OnInit, Input,OnChanges,SimpleChanges,} from '@angular/core';
import { Usuario } from '../../models/usuario';
import { ObservableService } from '../../services/observable.service';
@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit, OnChanges{

  @Input()
  usuario:Usuario;
  miObservable:any;

  constructor(private _observable:ObservableService) {
    this.miObservable = this._observable;
   }

  ngOnChanges(changes:SimpleChanges){
    console.log('datosPrevios',changes.usuario.previousValue)
    console.log('datoActual',changes.usuario.currentValue)
    const nuevoValor = changes.usuario.currentValue;

    if(undefined !== nuevoValor){
      this.usuario.nombres = this.usuario.nombres + " Administrador";
    }
  }
  
  ngOnInit() {

    this.miObservable.contador.subscribe(data => {
      console.log(data);
    })
  }

}
