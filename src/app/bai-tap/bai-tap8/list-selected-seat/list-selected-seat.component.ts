import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-selected-seat',
  templateUrl: './list-selected-seat.component.html',
  styleUrls: ['./list-selected-seat.component.scss'],
})
export class ListSelectedSeatComponent implements OnInit {
  @Input() listSelectedSeat!: any[];

  constructor() {}

  ngOnInit(): void {}
}
