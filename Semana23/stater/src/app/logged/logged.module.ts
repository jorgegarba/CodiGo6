import { LoggedRoutingModule } from './logged-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoggedComponent } from './logged.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [NavbarComponent, LoggedComponent, HomeComponent],
  imports: [
    CommonModule,
    LoggedRoutingModule
  ]
})
export class LoggedModule { }
