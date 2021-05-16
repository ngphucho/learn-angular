import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSelectedSeatComponent } from './list-selected-seat.component';

describe('ListSelectedSeatComponent', () => {
  let component: ListSelectedSeatComponent;
  let fixture: ComponentFixture<ListSelectedSeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSelectedSeatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSelectedSeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
