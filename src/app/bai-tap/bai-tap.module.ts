import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaiTap2Component } from './bai-tap2/bai-tap2.component';
import { HeaderComponent } from './bai-tap2/header/header.component';
import { IndexComponent } from './bai-tap2/index/index.component';
import { FooterComponent } from './bai-tap2/footer/footer.component';
import { BaiTapComponent } from './bai-tap.component';
import { IndexContentComponent } from './bai-tap2/index/index-content/index-content.component';
import { SliderComponent } from './bai-tap2/index/slider/slider.component';
import { ItemComponent } from './bai-tap2/index/index-content/item/item.component';
import { BaiTap4Component } from './bai-tap4/bai-tap4.component';
import { FormsModule } from '@angular/forms';
import { BaiTap5Module } from './bai-tap5/bai-tap5.module';
import { BaiTap6Module } from './bai-tap6/bai-tap6.module';
import { BaiTap7Module } from './bai-tap7/bai-tap7.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { BaiTap8Module } from './bai-tap8/bai-tap8.module';

@NgModule({
  declarations: [
    BaiTapComponent,
    BaiTap2Component,
    HeaderComponent,
    IndexComponent,
    FooterComponent,
    IndexContentComponent,
    SliderComponent,
    ItemComponent,
    BaiTap4Component,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BaiTap5Module,
    BaiTap6Module,
    BaiTap7Module,
    BaiTap8Module,
    NgxPaginationModule,
  ],
  exports: [BaiTapComponent],
})
export class BaiTapModule {}
