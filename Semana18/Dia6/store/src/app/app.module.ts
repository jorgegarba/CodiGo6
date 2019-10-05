import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListadoComponent } from './listado/listado.component';
import { MonedaPipe } from './pipes/moneda.pipe';
import { CambiarmonedaComponent } from './cambiarmoneda/cambiarmoneda.component';
import { FormsModule } from '@angular/forms';
import { CambiartextoPipe } from './pipes/cambiartexto.pipe';
import { CarritoComponent } from './carrito/carrito.component';
import { MISRUTAS } from './app.routes';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListadoComponent,
    MonedaPipe,
    CambiarmonedaComponent,
    CambiartextoPipe,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MISRUTAS
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
