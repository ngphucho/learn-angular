import {
  Component,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { MovieService } from 'src/app/client/services/movie.service';
import { ItemMovieComponent } from '../item-movie/item-movie.component';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.scss'],
})
export class ListMovieComponent implements OnInit {
  @ViewChildren(ItemMovieComponent)
  itemMovieTagList!: QueryList<ItemMovieComponent>;

  // listMovie = [
  //   {
  //     id: '1',
  //     name: 'Than Chet 1',
  //     price: '100000',
  //     detail: 'test detail 1',
  //     imgUrl: '/assets/images/film1.jpg',
  //   },
  //   {
  //     id: '2',
  //     name: 'Than Chet 2',
  //     price: '200000',
  //     detail: 'test detail 2',
  //     imgUrl: '/assets/images/film2.jpg',
  //   },
  //   {
  //     id: '3',
  //     name: 'Than Chet 3',
  //     price: '300000',
  //     detail: 'test detail 3',
  //     imgUrl: '/assets/images/film3.jpg',
  //   },
  //   {
  //     id: '4',
  //     name: 'Than Chet 4',
  //     price: '400000',
  //     detail: 'test detail 4',
  //     imgUrl: '/assets/images/film4.jpg',
  //   },
  // ];

  listMovie: any[] = [];
  listLikeMovie = [
    {
      id: '1',
      name: 'Than Chet 1',
      totalLike: 0,
    },
    {
      id: '2',
      name: 'Than Chet 2',
      totalLike: 0,
    },
    {
      id: '3',
      name: 'Than Chet 3',
      totalLike: 0,
    },
    {
      id: '4',
      name: 'Than Chet 4',
      totalLike: 0,
    },
  ];

  demoViewChildren(): void {
    this.itemMovieTagList.map((item) => {
      item.film.detail = 'view children';
    });
  }

  invokeActionFromChil(eventValue: any): void {
    this.listLikeMovie.forEach((item) => {
      if (item.id === eventValue.id) {
        item.totalLike++;
      }
    });
  }

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.listMovie = this.movieService.listFilm;
  }
}
