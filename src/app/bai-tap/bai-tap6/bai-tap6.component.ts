import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai-tap6',
  templateUrl: './bai-tap6.component.html',
  styleUrls: ['./bai-tap6.component.scss'],
})
export class BaiTap6Component implements OnInit {
  mangDanhSachSanPham = [
    { maSP: 'sp1', tenSP: 'Iphone 12', giaSP: 12000 },
    { maSP: 'sp2', tenSP: 'Samsung galaxy s20', giaSP: 11000 },
    { maSP: 'sp3', tenSP: 'Xiaomi Mi 10', giaSP: 10000 },
    { maSP: 'sp4', tenSP: 'Lumia 520', giaSP: 9500 },
  ];

  handleSubmit(maSP: string, tenSP: string, giaSP: number): void {
    if (this.mangDanhSachSanPham.some((sp) => maSP === sp.maSP)) {
      alert(`Mã sản phẩm ${maSP} đã tồn tại`);
    } else {
      this.mangDanhSachSanPham.push({ maSP, tenSP, giaSP });
      alert(`Đã thêm sản phẩm thành công`);
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
