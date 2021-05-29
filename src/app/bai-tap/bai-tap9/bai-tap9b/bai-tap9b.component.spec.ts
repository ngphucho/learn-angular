import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTap9bComponent } from './bai-tap9b.component';

describe('BaiTap9bComponent', () => {
  let component: BaiTap9bComponent;
  let fixture: ComponentFixture<BaiTap9bComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaiTap9bComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiTap9bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
