import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() artist: any;

  constructor(private router: Router) {}

  ngOnInit() {}

  watchArtist() {
    this.router.navigate(['/artist', this.artist.id]);
  }
}
