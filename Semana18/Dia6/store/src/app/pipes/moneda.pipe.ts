import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moneda'
})
export class MonedaPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const cambio: number = value * 3.73;
    return cambio;
  }

}
