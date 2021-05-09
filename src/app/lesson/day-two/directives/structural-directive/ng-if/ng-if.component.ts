import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.scss'],
})
export class NgIfComponent implements OnInit {
  flat = true;

  constructor() {}

  ngOnInit(): void {}

  showDivIf(): void {
    this.flat = true;
  }

  ShowDivElse(): void {
    this.flat = false;
  }
}
