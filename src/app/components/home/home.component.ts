import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  releases: any[] = [];
  loading: boolean;

  constructor(private spotifyService: SpotifyService, private router: Router) {
    // this.spotifyService.getToken().subscribe((data: any) => {
    //   console.log(data);
    // });
    this.loading = true;
    this.spotifyService.getReleases().subscribe((data: any) => {
      this.releases = data;
      this.loading = false;
    });
  }

  ngOnInit() {}

  watchArtist(release: any) {
    const id = release.artists[0].id;
    this.router.navigate(['/artist', id]);
  }
}
