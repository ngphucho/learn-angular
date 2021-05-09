import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss'],
})
export class NgForComponent implements OnInit {
  studentList = [
    {
      name: 'Nguyen',
      age: '25',
    },
    {
      name: 'Nguyen 1',
      age: '26',
    },
    {
      name: 'Nguyen 2',
      age: '25',
    },
    {
      name: 'Nguyen 3',
      age: '28',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
