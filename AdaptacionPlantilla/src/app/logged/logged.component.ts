import { Component, OnInit } from '@angular/core';
declare function initPlugins();
@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
})
export class LoggedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    initPlugins();
  }

}
