import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado',
})
export class CapitalizadoPipe implements PipeTransform {
  transform(value: string, todas: boolean = true): string {
    let nombres = value.toLowerCase().split(' ');

    if (todas) {
      nombres = nombres.map((nombre) => {
        return nombre[0].toUpperCase() + nombre.substr(1);
      });
      return nombres.join(' ');
    } else {
      return nombres[0][0].toUpperCase() + nombres[0].substr(1);
    }
  }
}
