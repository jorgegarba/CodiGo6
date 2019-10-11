import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cambiartexto'
})
export class CambiartextoPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const nuevoTexto: string = value.charAt(0).toUpperCase() + value.slice(1);
    return nuevoTexto;
  }

}
