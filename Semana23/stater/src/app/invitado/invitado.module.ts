import { InvitadoRoutingModule } from './invitado-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InvitadoComponent } from './invitado.component';
import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [NavbarComponent, InvitadoComponent, HomeComponent],
  imports: [
    CommonModule,
    InvitadoRoutingModule
  ]
})
export class InvitadoModule { }
