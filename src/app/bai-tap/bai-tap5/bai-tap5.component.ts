import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-bai-tap5',
  templateUrl: './bai-tap5.component.html',
  styleUrls: ['./bai-tap5.component.scss'],
})
export class BaiTap5Component implements OnInit {
  // @ViewChild('closeBtn') closeBtn: ElementRef;
  baitap5Data = JSON.parse(
    localStorage.getItem('baitap5Data') ||
      JSON.stringify({
        isLogin: false,
        name: '',
      })
  );
  handleLogin(userName: string, password: string): void {
    if (userName === 'cybersoft' && password === 'cybersoft') {
      this.baitap5Data.name = userName;
      this.baitap5Data.isLogin = true;
      localStorage.setItem('baitap5Data', JSON.stringify(this.baitap5Data));
      // this.closeBtn.nativeElement.click();
      document.getElementById("btnClose")?.click();
    }
  }

  handleLogout(): void {
    this.baitap5Data = { isLogin: false, name: '' };
    localStorage.removeItem('baitap5Data');
  }
  constructor() {}

  ngOnInit(): void {}
}
