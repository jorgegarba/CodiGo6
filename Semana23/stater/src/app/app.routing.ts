import { Prueba2Component } from './components/prueba2/prueba2.component';
import { Prueba1Component } from './components/prueba1/prueba1.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'prueba1',
    component: Prueba1Component
  },
  {
    path: 'prueba2',
    component: Prueba2Component
  },
  {
    path: 'logged',
    loadChildren: './logged/logged.module#LoggedModule',
  },
  {
    path: 'invitado',
    loadChildren: './invitado/invitado.module#InvitadoModule',
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class RoutingModule { }