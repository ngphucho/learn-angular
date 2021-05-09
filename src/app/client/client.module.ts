import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from '../layout/nav-bar/nav-bar.component';
import { DayOneComponent } from '../lesson/day-one/day-one.component';
import { DayTwoComponent } from '../lesson/day-two/day-two.component';
import { DayThreeComponent } from '../lesson/day-three/day-three.component';
import { MoviesComponent } from './movies/movies.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { CardMovieComponent } from './movies/card-movie/card-movie.component';
// import { NavBarComponent } from '../layout/nav-bar/nav-bar.component';

const routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: 'about-us',
        component: AboutUsComponent,
      },
      { path: 'lesson1', component: DayOneComponent },
      { path: 'lesson2', component: DayTwoComponent },
      { path: 'lesson3', component: DayThreeComponent },
      { path: 'movies', component: MoviesComponent },
      { path: '**', component: PageNotFoundComponent },
    ],
  },
];

@NgModule({
  declarations: [
    ClientComponent,
    AboutUsComponent,
    NavBarComponent,
    MoviesComponent,
    CardMovieComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [ClientComponent],
})
export class ClientModule {}
