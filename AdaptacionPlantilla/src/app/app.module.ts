import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

import { NopagefoundComponent } from './components/nopagefound/nopagefound.component';
import { RegisterComponent } from './components/login/register.component';

// rutas
import { AppRoutingModule } from './app.routes';

// modulos
import { LoggedModule } from './logged/logged.module';
import { FormsModule } from '@angular/forms';

// servicios 


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NopagefoundComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoggedModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
