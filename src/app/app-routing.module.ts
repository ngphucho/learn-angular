import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { ClientModule } from './client/client.module';
import { DayOneComponent } from './lesson/day-one/day-one.component';
import { DayThreeComponent } from './lesson/day-three/day-three.component';
import { DayTwoComponent } from './lesson/day-two/day-two.component';
import { LessonComponent } from './lesson/lesson.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './provider2/login/login.component';

const routes: Routes = [
  { path: '', component: LessonComponent },
  // { path: 'lesson1', component: DayOneComponent },
  // { path: 'lesson2', component: DayTwoComponent },
  // { path: 'lesson3', component: DayThreeComponent },
  { path: 'admin', loadChildren: () => AdminModule },
  { path: 'client', loadChildren: () => ClientModule },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
