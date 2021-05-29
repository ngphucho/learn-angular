import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaiTap9Component } from './bai-tap9.component';
import { BaiTap9aComponent } from './bai-tap9a/bai-tap9a.component';
import { BaiTap9bComponent } from './bai-tap9b/bai-tap9b.component';
import { PrimeNGModule } from 'src/app/PrimeNG/prime-ng/prime-ng.module';
import { PanelModule } from 'primeng/panel';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [BaiTap9Component, BaiTap9aComponent, BaiTap9bComponent],
  imports: [
    CommonModule,
    PrimeNGModule,
    PanelModule,
    AutoCompleteModule,
    FormsModule,
    TableModule,
  ],
  exports: [BaiTap9Component],
})
export class BaiTap9Module {}
