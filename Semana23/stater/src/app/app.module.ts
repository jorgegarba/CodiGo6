import { RoutingModule } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Prueba1Component } from './components/prueba1/prueba1.component';
import { Prueba2Component } from './components/prueba2/prueba2.component';

@NgModule({
  declarations: [
    AppComponent,
    Prueba1Component,
    Prueba2Component
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
