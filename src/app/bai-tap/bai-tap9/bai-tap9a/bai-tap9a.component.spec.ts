import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTap9aComponent } from './bai-tap9a.component';

describe('BaiTap9aComponent', () => {
  let component: BaiTap9aComponent;
  let fixture: ComponentFixture<BaiTap9aComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaiTap9aComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiTap9aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
