import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// importando el componete Producto
import { ProductoComponent } from './components/producto/producto.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  // aqui se registran a todos los componentes del modulo APP
  declarations: [
    AppComponent,
    ProductoComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
