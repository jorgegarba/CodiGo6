import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardAuthService implements CanActivate {

  constructor() { }

  canActivate() {
    return true;
  }

}
