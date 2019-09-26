import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContenedorComponent } from './components/contenedor/contenedor.component';
import { FormularioComponent } from './components/formulario/formulario.component';

import { FormsModule } from '@angular/forms';
import { ProductoDetalleComponent } from './components/producto-detalle/producto-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContenedorComponent,
    FormularioComponent,
    ProductoDetalleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
