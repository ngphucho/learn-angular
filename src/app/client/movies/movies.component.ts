import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  constructor(private moviesService: MovieService) {}
  listMovies:any[] = [];

  ngOnInit(): void {
    this.moviesService.getDataMovies().subscribe((res) => {
      // console.log(res);
      this.listMovies = res;
      // console.log('listmovie',typeof(this.listMovies));
    });
  }
}
