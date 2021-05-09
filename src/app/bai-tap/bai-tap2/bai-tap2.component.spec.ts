import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTap2Component } from './bai-tap2.component';

describe('BaiTap2Component', () => {
  let component: BaiTap2Component;
  let fixture: ComponentFixture<BaiTap2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaiTap2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiTap2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
