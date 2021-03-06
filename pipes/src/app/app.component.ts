import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nombre: string = 'Chiquito Gordo';
  nombre2: string = 'cHiQuItO gORDo';
  array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI: number = Math.PI;
  porcentaje: number = 0.234;
  salario: number = 1234.5;
  heroe = {
    nombre: 'Logan',
    clave: 'El Wolverine',
    edad: 200,
    direccion: {
      calle: 'primera',
      casa: 20,
    },
  };
  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Llego la data');
    }, 4500);
  });
  fecha: Date = new Date();
  idioma: string = 'fr';
  videoURL: string = 'https://www.youtube.com/embed/zd9daXQXLSE';
  activar: boolean = true;
}
