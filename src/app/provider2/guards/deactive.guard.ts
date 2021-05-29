import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { SignupComponent } from '../signup/signup.component';

@Injectable({
  providedIn: 'root',
})
export class DeactiveGuard implements CanDeactivate<SignupComponent> {
  canDeactivate(component: SignupComponent): boolean {
    const flag = component.isSumitedForm();
    if (flag) {
      return true;
    }
    const confirmed = window.confirm('co chac thoat ra khong');
    return confirmed ? true : false;
  }
}
