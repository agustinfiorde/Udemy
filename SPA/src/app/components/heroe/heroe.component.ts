import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService, Heroe } from '../../services/hero.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css'],
})
export class HeroeComponent {
  heroe: Heroe;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _heroeService: HeroService
  ) {
    this._activatedRoute.params.subscribe((params) => {
      this.heroe = this._heroeService.getHeroe(params['id']);
      console.log(this.heroe);
    });
  }
}
