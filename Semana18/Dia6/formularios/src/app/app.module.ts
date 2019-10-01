import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FacturasComponent } from './components/facturas/facturas.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { RUTAS } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FacturasComponent,
    HomeComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    RUTAS
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
