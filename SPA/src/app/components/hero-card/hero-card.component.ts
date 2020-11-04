import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Heroe } from '../../services/hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css'],
})
export class HeroCardComponent {
  @Input()
  heroe: Heroe;

  @Output()
  heroeSeleccionado: EventEmitter<number>;

  constructor(private _router: Router) {
    this.heroeSeleccionado = new EventEmitter();
  }

  verHeroe(id) {
    this.heroeSeleccionado.emit(id);
    // this._router.navigate(['/heroe', this.index]);
  }
}
