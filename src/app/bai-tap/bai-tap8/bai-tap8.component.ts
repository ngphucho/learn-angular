import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai-tap8',
  templateUrl: './bai-tap8.component.html',
  styleUrls: ['./bai-tap8.component.scss'],
})
export class BaiTap8Component implements OnInit {
  listSeat = [
    { soGhe: 1, tenGhe: 'số 1', gia: 100, trangThai: false },
    { soGhe: 2, tenGhe: 'số 2', gia: 100, trangThai: false },
    { soGhe: 3, tenGhe: 'số 3', gia: 100, trangThai: false },
    { soGhe: 4, tenGhe: 'số 4', gia: 100, trangThai: false },
    { soGhe: 5, tenGhe: 'số 5', gia: 100, trangThai: false },
    { soGhe: 6, tenGhe: 'số 6', gia: 100, trangThai: false },
    { soGhe: 7, tenGhe: 'số 7', gia: 100, trangThai: false },
    { soGhe: 8, tenGhe: 'số 7', gia: 100, trangThai: false },
    { soGhe: 9, tenGhe: 'số 9', gia: 100, trangThai: false },
    { soGhe: 10, tenGhe: 'số 10', gia: 100, trangThai: false },
    { soGhe: 11, tenGhe: 'số 11', gia: 100, trangThai: false },
    { soGhe: 12, tenGhe: 'số 12', gia: 100, trangThai: false },
    { soGhe: 13, tenGhe: 'số 13', gia: 100, trangThai: false },
    { soGhe: 14, tenGhe: 'số 14', gia: 100, trangThai: false },
    { soGhe: 15, tenGhe: 'số 15', gia: 100, trangThai: false },
    { soGhe: 16, tenGhe: 'số 16', gia: 100, trangThai: false },
    { soGhe: 17, tenGhe: 'số 17', gia: 100, trangThai: false },
    { soGhe: 18, tenGhe: 'số 18', gia: 100, trangThai: false },
    { soGhe: 19, tenGhe: 'số 19', gia: 100, trangThai: false },
    { soGhe: 20, tenGhe: 'số 20', gia: 100, trangThai: false },
    { soGhe: 21, tenGhe: 'số 21', gia: 100, trangThai: false },
    { soGhe: 22, tenGhe: 'số 22', gia: 100, trangThai: false },
    { soGhe: 23, tenGhe: 'số 23', gia: 100, trangThai: false },
    { soGhe: 24, tenGhe: 'số 24', gia: 100, trangThai: false },
    { soGhe: 25, tenGhe: 'số 25', gia: 100, trangThai: false },
    { soGhe: 26, tenGhe: 'số 26', gia: 100, trangThai: false },
    { soGhe: 27, tenGhe: 'số 27', gia: 100, trangThai: false },
    { soGhe: 28, tenGhe: 'số 28', gia: 100, trangThai: false },
    { soGhe: 29, tenGhe: 'số 29', gia: 100, trangThai: false },
    { soGhe: 30, tenGhe: 'số 30', gia: 100, trangThai: true },
    { soGhe: 31, tenGhe: 'số 31', gia: 100, trangThai: false },
    { soGhe: 32, tenGhe: 'số 32', gia: 100, trangThai: false },
    { soGhe: 33, tenGhe: 'số 33', gia: 100, trangThai: false },
    { soGhe: 34, tenGhe: 'số 34', gia: 100, trangThai: false },
    { soGhe: 35, tenGhe: 'số 35', gia: 100, trangThai: false },
    { soGhe: 36, tenGhe: 'số 36', gia: 100, trangThai: true },
  ];
  numberSelectedSeat = this.countSelectedSeat();

  constructor() {}

  ngOnInit(): void {}

  setSeatStatus(seat: any) {
    const index = this.listSeat.findIndex((item) => item.soGhe === seat.soGhe);
    this.listSeat[index].trangThai = !this.listSeat[index].trangThai;
    this.numberSelectedSeat = this.countSelectedSeat();
  }

  countSelectedSeat() {
    return this.listSeat.reduce((tt, seat) => {
      if (seat.trangThai) {
        return (tt = tt + 1);
      }
      return tt;
    }, 0);
  }

  unselectSeat(seat: any){
    const index = this.listSeat.findIndex((item) => item.soGhe === seat.soGhe);
    this.listSeat[index].trangThai = !this.listSeat[index].trangThai;
    this.numberSelectedSeat = this.countSelectedSeat();
  }
}
