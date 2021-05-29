import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('registerForm') registerFormTag: any;

  constructor(private accountSer: AccountService) {}

  ngOnInit(): void {
    // console.log(this.registerFormTag);
  }

  ngAfterViewInit(): void {
    console.log(this.registerFormTag);
  }

  ngOnDestroy(): void {
    console.log('destroy');
  }

  signup(form: any): void {
    console.log(form);
    const { value } = form;
    const accountOjb = {
      taiKhoan: value.account,
      matKhau: value.password,
      email: value.email,
      soDt: value.phoneNumber,
      maNhom: 'GP01',
      maLoaiNguoiDung: 'KhachHang',
      hoTen: value.fullName,
    };
    // this.accountSer.callSignupApi(accountOjb).subscribe((res) => {
    //   if (res) {
    //     console.log(res);
    //     alert('Login successfully');
    //   }
    // });
    console.log(accountOjb);
  }
  // signup(
  //   form: any
  // ): void {
  //   console.log(form.form.controls.account.value)
  // }

  isSumitedForm() {
    return this.registerFormTag.submitted;
  }
}
