import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MeterialModule } from '../meterial/meterial.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, MeterialModule],
})
export class ProviderModule {}
