import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cambiarmoneda',
  templateUrl: './cambiarmoneda.component.html',
  styleUrls: ['./cambiarmoneda.component.css']
})
export class CambiarmonedaComponent implements OnInit {
  monto: number = 0;
  constructor() { }

  ngOnInit() {
  }

}
