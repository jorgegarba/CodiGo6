import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
// importando Servicios
import { SesionService } from './services/sesion.service';
import { NavComponent } from './components/nav/nav.component';
import { MainComponent } from './components/main/main.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  // Aqui registramos los servicios
  providers: [SesionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
