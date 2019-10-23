import { RegisterComponent } from './components/login/register.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { PabellonesComponent } from './components/pabellones/pabellones.component';
import { FirebaseComponent } from './components/firebase/firebase.component';
import { RealtimeComponent } from './components/firebase/realtime/realtime.component';
import { FirestoreComponent } from './components/firebase/firestore/firestore.component';
import { GuardAuthService } from './services/guard-auth.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'pabellones',
    component: PabellonesComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'firebase',
    component: FirebaseComponent,
    canActivate: [GuardAuthService],
    children: [
      {
        path: 'realtime',
        component: RealtimeComponent
      },
      {
        path: 'firestore',
        component: FirestoreComponent
      }
    ]
  },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
