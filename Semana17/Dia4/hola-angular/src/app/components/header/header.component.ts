import { Component } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  marca: string = "CodiGo";
  sesion: boolean = true;
  links: Array<string> = ['Nosotres','Portafolio', 'Contacto'];
}
