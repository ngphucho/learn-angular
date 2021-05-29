import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MeterialModule } from '../meterial/meterial.module';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShortCutPipe } from './pipes/short-cut.pipe';

@NgModule({
  declarations: [LoginComponent, SignupComponent, ShortCutPipe],
  imports: [CommonModule, MeterialModule, FormsModule, ReactiveFormsModule],
  exports: [ShortCutPipe],
})
export class Provider2Module {}
