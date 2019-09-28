import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// importando Servicios
import { SesionService } from './services/sesion.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  // Aqui registramos los servicios
  providers: [SesionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
