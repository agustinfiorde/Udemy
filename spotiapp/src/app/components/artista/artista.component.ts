import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css'],
})
export class ArtistaComponent {
  artista: any = {};
  loading: boolean;
  tracks: any[] = [];

  constructor(
    private _routerActivated: ActivatedRoute,
    private _spotify: SpotifyService
  ) {
    this.loading = true;
    this._routerActivated.params.subscribe((params) => {
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
      this.loading = false;
    });
  }

  getArtista(id: string) {
    this._spotify.getArtista(id).then((o) => {
      o.subscribe((data: any) => {
        this.artista = data;
      });
    });
  }

  getTopTracks(id: string) {
    this._spotify.getTopTracksByArtist(id).then((o) => {
      o.subscribe((data: any) => {
        this.tracks = data;
        console.log(this.tracks);
      });
    });
  }
}
