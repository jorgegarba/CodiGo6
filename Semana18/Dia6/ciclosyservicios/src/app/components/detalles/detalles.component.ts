import { Component,
  Input,
  OnChanges,
  SimpleChanges,
  OnInit, 
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  ngAfterViewChecked,
  OnDestroy,
  } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { ObservableService } from '../../services/observable.service';
@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit, OnChanges, OnDestroy, AfterContentInit, AfterContentChecked, AfterViewInit,ngAfterViewChecked{

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
  
  suscripcion:any;
  ngOnInit() {

    this.suscripcion = this.miObservable.contador.subscribe(data => {
      console.log(data);
    });
  }

  ngAfterContentInit(){
    console.log("ejecutando AfterContentInit, despues que angular proyecte el contenido");
  }

  ngAfterContentChecked(){
    console.log("ejecutando AfterContentChecked,despues que Angularcompruebe el contenido Proyectado, por ejemplo para obtener atributos con @ViewChild");
  }

  ngAfterViewInit(){
    console.log("ejecutando AfterViewInit,despues de inicializar las vistas del componente");
  }

  ngAfterViewChecked() {
    console.log("Se ejecuta AfterViewChecked despues de comprobar las vistas");
  }

  ngOnDestroy(){
    this.suscripcion.unsubscribe();
  }

}
