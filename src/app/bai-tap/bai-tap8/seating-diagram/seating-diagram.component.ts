import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-seating-diagram',
  templateUrl: './seating-diagram.component.html',
  styleUrls: ['./seating-diagram.component.scss'],
})
export class SeatingDiagramComponent implements OnInit {
  @Input() listSeat!: any[];
  @Output() setSeatStatus = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  changeSeatStatus(seat: any): void {
    this.setSeatStatus.emit(seat);
  }
}
