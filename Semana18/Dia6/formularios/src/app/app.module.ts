import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// importando el modulo HTTP
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FacturasComponent } from './components/facturas/facturas.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { RUTAS } from './app.routes';
import { CrearFacturaComponent } from './components/crear-factura/crear-factura.component';
import { VerFacturaComponent } from './components/ver-factura/ver-factura.component';

// importamos el modulo de los formularios
// para tener la posibilidad de usar [(ngModel)]
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FacturasComponent,
    HomeComponent,
    ErrorComponent,
    CrearFacturaComponent,
    VerFacturaComponent
  ],
  imports: [
    BrowserModule,
    RUTAS,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
