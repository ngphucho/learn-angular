import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-movie',
  templateUrl: './item-movie.component.html',
  styleUrls: ['./item-movie.component.scss'],
})
export class ItemMovieComponent implements OnInit {
  @Input() film: any;
  @Input() listLike!: any[];
  @Output() eventOutput = new EventEmitter();
  likeInListLike = 0;

  like(): void {
    // this.eventOutput.emit(this.film);
    this.countLike();
  }

  countLike(): void {
    this.listLike.forEach(ele => {
      if (ele.id == this.film.id) {
        ele.totalLike++;
        this.likeInListLike = ele.totalLike;
      }
    });
  }
  constructor() {}

  ngOnInit(): void {}
}
