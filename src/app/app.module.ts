import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComComponent } from './demo-com/demo-com.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { LessonModule } from './lesson/lesson.module';
// import { BaiTapComponent } from './bai-tap/bai-tap.component';
import { ClientModule } from './client/client.module';
import { BaiTapModule } from './bai-tap/bai-tap.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MeterialModule } from './meterial/meterial.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminNavbarComponent } from './layout/admin/admin-navbar/admin-navbar.component';
// import { NgxPaginationModule } from 'ngx-pagination';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    DemoComComponent,
    HelloWorldComponent,
    PageNotFoundComponent,
    AdminNavbarComponent,
    // BaiTapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LessonModule,
    ClientModule,
    BaiTapModule,
    BrowserAnimationsModule,
    MeterialModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
