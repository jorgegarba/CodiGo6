import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgclassComponent } from './components/ngclass/ngclass.component';
import { NgstyleComponent } from './components/ngstyle/ngstyle.component';
import { NgswitchComponent } from './components/ngswitch/ngswitch.component';
import { FormulariosComponent } from './components/formularios/formularios.component';
// IMPORTANDO MODULO PARA FORMULARIOS EN ANGULAR
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NgclassComponent,
    NgstyleComponent,
    NgswitchComponent,
    FormulariosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
