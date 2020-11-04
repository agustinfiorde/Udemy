import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HeroService, Heroe } from '../../../services/hero.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private _router: Router
    ) {}

  ngOnInit(): void {}

  buscarHeroe(q: string) {
    console.log(q);
    this._router.navigate(['/heroes', q]);
  }
}
