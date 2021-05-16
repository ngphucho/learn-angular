import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  constructor(private accountService: AccountService) {}
  isFormError = true;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      account: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      password: new FormControl('1234567'),
    });
  }

  // login(account: string, password: string): void {
  //   const objLogin = {
  //     taiKhoan: account,
  //     matKhau: password,
  //   };
  //   this.accountService.callLoginApi(objLogin).subscribe((res) => {
  //     if (res) {
  //       console.log(res);
  //       alert('Login successfully');
  //     }
  //   });
  // }

  login(formGroup: any): void {
    const { value } = formGroup;
    const objLogin = {
      taiKhoan: value.account,
      matKhau: value.password,
    };
    console.log(formGroup);
    // this.accountService.callLoginApi(objLogin).subscribe((res) => {
    //   if (res) {
    //     console.log(res);
    //     alert('Login successfully');
    //   }
    // });
  }

  get account(): AbstractControl | null {
    return this.loginForm.get('account');
  }
}
