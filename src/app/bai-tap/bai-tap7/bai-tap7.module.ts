import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaiTap7Component } from './bai-tap7.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [BaiTap7Component],
  imports: [CommonModule, NgxPaginationModule, FormsModule],
  exports: [BaiTap7Component],
})
export class BaiTap7Module {}
