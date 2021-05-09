import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MeterialModule } from '../meterial/meterial.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule, MeterialModule
  ]
})
export class Provider2Module { }
