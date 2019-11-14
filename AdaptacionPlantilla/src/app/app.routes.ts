import { NopagefoundComponent } from './components/nopagefound/nopagefound.component';
import { RegisterComponent } from './components/login/register.component';
import { LoginComponent } from './components/login/login.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './logged/logged.module#LoggedModule'
  },
  
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NopagefoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
