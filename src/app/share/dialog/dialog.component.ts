import { Component, OnInit } from '@angular/core';
import { MovieService, ObjPhim } from 'src/app/client/services/movie.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  movieData!: any;

  constructor(private movieSer: MovieService) {}

  ngOnInit(): void {
    this.movieSer.movieModal.subscribe((data) => {
      this.movieData = data;
    });
  }
}
