
import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {
  titulo: string;
  constructor(private _sRouter: Router,
    private title: Title,
    private meta: Meta) {
    this.getDataRoute().subscribe(e => {
      this.titulo = e.titulo;
      this.title.setTitle(this.titulo);
      const metaTag: MetaDefinition = {
        name: 'Description',
        content: this.titulo
      };
      this.meta.updateTag(metaTag);
    })
  }

  ngOnInit() {
  }

  getDataRoute() {
    return this._sRouter.events.pipe(
      filter(e => e instanceof ActivationEnd),
      filter((e: ActivationEnd) => e.snapshot.firstChild === null),
      map((e: ActivationEnd) => { return e.snapshot.data })
    );

  }

}
