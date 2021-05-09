import { Component, OnInit, ViewChild } from '@angular/core';
import { ListMovieComponent } from './list-movie/list-movie.component';

@Component({
  selector: 'app-day-three',
  templateUrl: './day-three.component.html',
  styleUrls: ['./day-three.component.scss'],
})
export class DayThreeComponent implements OnInit {
  @ViewChild(ListMovieComponent) listMovieTag!: ListMovieComponent;

  addMovie(
    idMovie: string,
    nameMovie: string,
    priceMovie: string,
    imgMovie: string
  ): void {
    const objNewMovie = {
      id: idMovie,
      name: nameMovie,
      price: priceMovie,
      detail: '',
      imgUrl: `/assets/images/${imgMovie}.jpg`,
    };
    const objNewLikeMovie = {
      id: idMovie,
      name: nameMovie,
      totalLike: 0,
    };
    this.listMovieTag.listMovie.push(objNewMovie);
    this.listMovieTag.listLikeMovie.push(objNewLikeMovie);
  }

  constructor() {}

  ngOnInit(): void {}
}
