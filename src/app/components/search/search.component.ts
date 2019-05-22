import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  artists: any[];
  loading: boolean;
  constructor(private spotify: SpotifyService) {}

  ngOnInit() {}

  search(text: string) {
    this.loading = true;
    if (text) {
      const textArr = text.split(' ');
      text = textArr.join('%20');
      // console.log(text);
      return this.spotify.getArtists(text).subscribe((artists: any) => {
        // console.log(artists);
        this.artists = artists;
        this.loading = false;
      });
    }
  }
}
