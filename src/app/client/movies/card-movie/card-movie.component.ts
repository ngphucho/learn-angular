import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.scss'],
})
export class CardMovieComponent implements OnInit {
  @Input() film: any;

  constructor(private router: Router, private movieSer: MovieService) {}

  ngOnInit(): void {}

  navigateTo() {
    this.router.navigate(['client/detail-movie', this.film.maPhim]);
  }

  callDialog() {
    this.movieSer.changeDataMovieModal(this.film);
  }
}
