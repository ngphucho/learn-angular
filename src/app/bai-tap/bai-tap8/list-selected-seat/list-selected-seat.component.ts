import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-selected-seat',
  templateUrl: './list-selected-seat.component.html',
  styleUrls: ['./list-selected-seat.component.scss'],
})
export class ListSelectedSeatComponent implements OnInit {
  @Input() listSelectedSeat!: any[];
  @Input() numberSelectedSeat!: any;
  @Output() unselectSeat = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  cancel(data: any) {
    this.unselectSeat.emit(data);
  }
}
