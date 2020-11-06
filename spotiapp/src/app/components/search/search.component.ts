import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  artistas: any[] = [];
  loading: boolean;

  constructor(private _spotify: SpotifyService) {}

  buscar(termino: string) {
    this.loading = true;
    this._spotify.getArtistas(termino).then((x) =>
      x.subscribe((data: any) => {
        this.artistas = data;
        this.loading = false;
      })
    );
  }
}
