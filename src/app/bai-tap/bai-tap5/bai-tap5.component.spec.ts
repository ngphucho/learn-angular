import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTap5Component } from './bai-tap5.component';

describe('BaiTap5Component', () => {
  let component: BaiTap5Component;
  let fixture: ComponentFixture<BaiTap5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaiTap5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiTap5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
