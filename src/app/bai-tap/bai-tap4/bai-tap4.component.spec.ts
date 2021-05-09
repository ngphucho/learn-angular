import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTap4Component } from './bai-tap4.component';

describe('BaiTap4Component', () => {
  let component: BaiTap4Component;
  let fixture: ComponentFixture<BaiTap4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaiTap4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiTap4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
