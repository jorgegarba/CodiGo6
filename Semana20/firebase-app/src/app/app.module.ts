import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { AppRoutingModule } from './app.routing';
import { PabellonesComponent } from './components/pabellones/pabellones.component';
import { FirebaseComponent } from './components/firebase/firebase.component';
import { RealtimeComponent } from './components/firebase/realtime/realtime.component';
import { FirestoreComponent } from './components/firebase/firestore/firestore.component';

// Modulo de Firebase para angular
import { AngularFireModule } from '@angular/fire';
import { environment } from './../environments/environment';

import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';

// modulos necesarios para formularios reactivos
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/login/register.component';

// importanto MODULO PARA CONSUMO DE HTTP
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    NavbarComponent,
    PabellonesComponent,
    FirebaseComponent,
    RealtimeComponent,
    FirestoreComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
