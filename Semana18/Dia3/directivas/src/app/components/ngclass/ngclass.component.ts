import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css']
})
export class NgclassComponent implements OnInit {

  errorsh: boolean = true;

  productos = [
    {
      nombre: 'Tv',
      cantidad: 100
    },
    {
      nombre: 'Microondas',
      cantidad: 50
    },
    {
      nombre: 'Ollas',
      cantidad: 10
    },
  ]

  constructor() { }

  ngOnInit() {
  }

  cambiarError() {
    this.errorsh = !this.errorsh;
  }

}
