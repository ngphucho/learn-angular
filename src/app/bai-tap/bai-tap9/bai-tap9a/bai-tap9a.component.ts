import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai-tap9a',
  templateUrl: './bai-tap9a.component.html',
  styleUrls: ['./bai-tap9a.component.scss'],
})
export class BaiTap9aComponent implements OnInit {
  selectedCountries!: any[];
  filteredCountries!: any[];
  fullName: string = '';
  data: any[] = [
    { MaHV: 1, TenHocVien: 'Nguyễn Trần Trung Quân', MaLop: 1 },
    { MaHV: 2, TenHocVien: 'Hồ Quang Hiếu', MaLop: 1 },
    { MaHV: 3, TenHocVien: 'Phạm Quỳnh Anh', MaLop: 1 },
    { MaHV: 4, TenHocVien: 'Đặng Trung Hiếu', MaLop: 1 },
    { MaHV: 5, TenHocVien: 'Lê Minh Long', MaLop: 1 },
    { MaHV: 6, TenHocVien: 'Dương Hải Thái', MaLop: 2 },
    { MaHV: 7, TenHocVien: 'Châu Ái My', MaLop: 2 },
    { MaHV: 8, TenHocVien: 'Đàm Thu Trang', MaLop: 2 },
    { MaHV: 9, TenHocVien: 'Lê Quang Minh', MaLop: 2 },
    { MaHV: 10, TenHocVien: 'Phạm Công Trí', MaLop: 2 },
    { MaHV: 11, TenHocVien: 'Huỳnh Tuấn Anh', MaLop: 3 },
    { MaHV: 12, TenHocVien: 'Phạm Tấn Trường', MaLop: 3 },
    { MaHV: 13, TenHocVien: 'Trịnh Minh Triết', MaLop: 3 },
    { MaHV: 14, TenHocVien: 'Liễu Thanh Thanh', MaLop: 3 },
    { MaHV: 15, TenHocVien: 'Thiều Ngọc Anh', MaLop: 3 },
    { MaHV: 16, TenHocVien: 'Trương Ngọc Băng Di', MaLop: 4 },
    { MaHV: 17, TenHocVien: 'Trần Thiệu Tường', MaLop: 4 },
    { MaHV: 18, TenHocVien: 'Phạm Đức Thắng', MaLop: 4 },
    { MaHV: 19, TenHocVien: 'Trần Hồng Minh', MaLop: 4 },
    { MaHV: 20, TenHocVien: 'Thái Phương Châu', MaLop: 4 },
  ];
  countries: any[] = [
    { MaLop: 1, TenLop: 'cybersoft' },
    { MaLop: 2, TenLop: 'myclass' },
    { MaLop: 3, TenLop: 'FrontEnd' },
    { MaLop: 4, TenLop: 'FullStack' },
  ];

  constructor() {}

  ngOnInit(): void {}

  filterCountry(event: any) {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered: any[] = [];
    let query = event.query;

    for (let i = 0; i < this.countries.length; i++) {
      let country = this.countries[i];
      if (country.TenLop.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(country);
      }
    }

    this.filteredCountries = filtered;
  }
}
