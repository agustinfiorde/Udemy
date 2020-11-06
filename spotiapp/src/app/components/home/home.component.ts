import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  errorMessage: any;

  constructor(private _spotify: SpotifyService) {
    this.loading = true;
    this.error = false;

    this._spotify
      .getNewReleases()
      .then((x) =>
        x.subscribe((data: any) => {
          this.nuevasCanciones = data;
          this.loading = false;
        })
      )
      .catch((e) => {
        this.error = true;
        this.errorMessage = e;
      });
  }

  ngOnInit() {}
}
