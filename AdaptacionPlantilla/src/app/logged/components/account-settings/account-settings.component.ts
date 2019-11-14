import { SettingsService } from './../../../services/settings.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

  constructor(public _sAjustes: SettingsService) { }

  ngOnInit() {  
    this.colocarCheck();
  }

  cambiarColor(color, link: any) {
    this._sAjustes.aplicarTema(color);
    this.aplicarCheck(link);
  }

  aplicarCheck(link) {
    let selectores: any = document.getElementsByClassName('selector');

    // for of sirve para iterar varios objetos por mas que no sea un arreglo
    for (const ref of selectores) {
      ref.classList.remove('working');
    }

    link.classList.add('working');
  }

  colocarCheck() {
    let selectores: any = document.getElementsByClassName('selector');
    for (const ref of selectores) {
      if (ref.getAttribute("data-theme") === this._sAjustes.ajustes.tema) {
        ref.classList.add('working');
      }

    }
  }
}
