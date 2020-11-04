import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent {
  mostrar: boolean = true;
  frase: any;
  personajes: string[];

  constructor() {
    this.mostrar = true;
    this.frase = {
      mensaje: 'Un gran perro come mucho alimento',
      autor: 'El vato que compra el alimento',
    };
    this.personajes = ['Spiderman', 'El Venom', 'El Aironman'];
  }
}
