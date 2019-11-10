import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvitadoComponent } from './invitado.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'bienvenida',
    component: InvitadoComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class InvitadoRoutingModule { }