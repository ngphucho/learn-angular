import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai-tap4',
  templateUrl: './bai-tap4.component.html',
  styleUrls: ['./bai-tap4.component.scss'],
})
export class BaiTap4Component implements OnInit {
  email = '';
  fullName = '';

  handleSubmit(value: string): void {
    this.fullName = value;
  }

  constructor() {}

  ngOnInit(): void {}
}
