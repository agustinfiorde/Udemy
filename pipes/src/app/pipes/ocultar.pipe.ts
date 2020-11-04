import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocultar',
})
export class OcultarPipe implements PipeTransform {
  transform(value: string, mostrar: boolean = false): string {
    return mostrar ? '*'.repeat(value.length) : value;
  }
}
