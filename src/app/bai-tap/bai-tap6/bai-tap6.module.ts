import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaiTap6Component } from './bai-tap6.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [BaiTap6Component],
  imports: [CommonModule],
  exports: [BaiTap6Component, FormsModule],
})
export class BaiTap6Module {}
