import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss'],
})
export class PipeComponent implements OnInit {
  title = 'font End62';
  ngay = new Date();
  giaTien = 334455234;

  constructor() {}

  ngOnInit(): void {}
}
