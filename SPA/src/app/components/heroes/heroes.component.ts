import { Component, OnInit } from '@angular/core';
import { Heroe, HeroService } from '../../services/hero.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _heroesService: HeroService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params) => {
      if (params.q) {
        this.heroes= this._heroesService.searchHeroes(params['q']);
      } else {
        console.log(params.q);
        this.heroes = this._heroesService.getHeroes();
      }
    });
  }

  verHeroe(idx: number) {
    this._router.navigate(['/heroe', idx]);
  }
}
