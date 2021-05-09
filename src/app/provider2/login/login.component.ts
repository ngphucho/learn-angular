import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private accountService: AccountService) {}

  ngOnInit(): void {}

  login(account: string, password: string): void {
    const objLogin = {
      taiKhoan: account,
      matKhau: password,
    };
    this.accountService.login(objLogin).subscribe((res)=>{
      if(res){
        console.log(res);
        alert("Login successfully")
      }
    })
  }
}
