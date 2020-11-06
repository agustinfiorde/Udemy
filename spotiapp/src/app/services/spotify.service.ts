import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private _http: HttpClient) {}

  private token_type: string;
  private access_token: string;

  async getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    await this.getToken();

    const headers = new HttpHeaders({
      Authorization: `${this.token_type} ${this.access_token}`,
    });
    return this._http.get(url, { headers });
  }

  async getNewReleases() {
    return (await this.getQuery('browse/new-releases')).pipe(
      map((data: any) => data['albums'].items)
    );
  }

  async getArtistas(q: string) {
    return (await this.getQuery(`search?q=${q}&type=artist&limit=15`)).pipe(
      map((data: any) => data['artists'].items)
    );
  }

  async getArtista(id: string) {
    return await this.getQuery(`artists/${id}`);
  }

  async getTopTracksByArtist(id: string) {
    return (await this.getQuery(`artists/${id}/top-tracks?country=us`)).pipe(
      map((data: any) => data['tracks'])
    );
  }

  getToken() {
    const body = new HttpParams()
      .set('grant_type', 'client_credentials')
      .set('client_id', '97e6b3059e0545948affc68b6b91b352')
      .set('client_secret', '396f0663da944bdd85fb86f943f3518c');

    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/x-www-form-urlencoded'
    );

    return this._http
      .post('https://accounts.spotify.com/api/token', body.toString(), {
        headers,
      })
      .toPromise()
      .then((x: any) => {
        this.access_token = x.access_token;
        this.token_type = x.token_type;
      });
  }
}
