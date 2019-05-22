import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment.local';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  url = 'https://api.spotify.com/v1/';
  token: string;

  constructor(private http: HttpClient) {
    // console.log(this.base64);
    this.getToken();
  }

  getToken() {
    // spotify send client_id and client_secret
    const spotifyKeys = {
      client_id: environment.client_id,
      client_secret: environment.client_secret
    };

    const { client_id, client_secret } = spotifyKeys;

    const url = `http://localhost:3000/spotify/${client_id}/${client_secret}`;
    const requestBody = this.http.get(url);
    return requestBody
      .pipe(map((data: any) => data.access_token))
      .subscribe((token: any) => {
        this.token = token;
      });
  }

  getQuery(query: string) {
    // this.getToken().subscribe((token: any) => {
    //   tokenSpotify = token;
    //   console.log(tokenSpotify);
    // });
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });
    return this.http.get(this.url + query, { headers });
  }

  getReleases() {
    const query = 'browse/new-releases?country=us&limit=20';
    return this.getQuery(query).pipe(
      map((releases: any) => releases.albums.items)
    );
  }

  getArtist(id: string) {
    // https://api.spotify.com/v1/artists/${id}

    const query = `artists/${id}`;
    return this.getQuery(query).pipe(map((artist: any) => artist));
  }

  getTopTracks(id: string) {
    // https://api.spotify.com/v1/artists/${id}/top-tracks?country=us
    const query = `artists/${id}/top-tracks?country=us`;
    return this.getQuery(query).pipe(map((topTracks: any) => topTracks.tracks));
  }

  getArtists(text: string) {
    const query = `search?q=${text}&type=artist&market=GB&limit=20`;
    return this.getQuery(query).pipe(
      map((search: any) => search.artists.items)
    );
  }
}
