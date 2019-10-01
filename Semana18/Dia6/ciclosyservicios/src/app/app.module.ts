import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
// importando Servicios
import { SesionService } from './services/sesion.service';
import { NavComponent } from './components/nav/nav.component';
import { MainComponent } from './components/main/main.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { OtherComponent } from './components/other/other.component';

const rutas:Routes = [
  {path: '', component:AppComponent},
  
]

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent,
    DetallesComponent,
    OtherComponent
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
