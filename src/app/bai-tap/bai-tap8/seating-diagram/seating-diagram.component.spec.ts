import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatingDiagramComponent } from './seating-diagram.component';

describe('SeatingDiagramComponent', () => {
  let component: SeatingDiagramComponent;
  let fixture: ComponentFixture<SeatingDiagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeatingDiagramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatingDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
