import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaiTap8Component } from './bai-tap8.component';
import { SeatingDiagramComponent } from './seating-diagram/seating-diagram.component';
import { ListSelectedSeatComponent } from './list-selected-seat/list-selected-seat.component';

@NgModule({
  declarations: [BaiTap8Component, SeatingDiagramComponent, ListSelectedSeatComponent],
  imports: [CommonModule],
  exports: [BaiTap8Component],
})
export class BaiTap8Module {}
