import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormatCurrencyService {
  formatVND(amount: number): string {
    return amount.toLocaleString('it-IT', {
      style: 'currency',
      currency: 'VND',
    });
  }
  constructor() {}
}
