import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  artist: any;
  topTracks: any[];
  constructor(
    private spotifyService: SpotifyService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.spotifyService.getArtist(params.id).subscribe((artist: any) => {
        // console.log(artist);
        this.artist = artist;
        // console.log(this.artist);
      });

      this.spotifyService
        .getTopTracks(params.id)
        .subscribe((topTracks: any) => {
          this.topTracks = topTracks;
          // console.log(topTracks);
        });
    });
  }

  ngOnInit() {}
}
