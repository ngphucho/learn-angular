import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.scss'],
})
export class DetailMovieComponent implements OnInit {
  detailMovie: any;
  id: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private movieSer: MovieService
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('idMovie') as string;
    if (!this.id) {
      this.getParamFromUrl();
    }
    this.getDataMovie(this.id);
  }

  getDataMovie(idMovie: string) {
    this.movieSer.getDetailMovie(idMovie).subscribe((res) => {
      if (res) {
        this.detailMovie = res;
      }
    });
  }
  getParamFromUrl() {
    this.activatedRoute.queryParams.subscribe((data: any) => {
      this.id = data.maPhim;
    });
  }
}
