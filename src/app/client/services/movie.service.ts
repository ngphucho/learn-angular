import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  api = environment.apiUrl;
  private data = new BehaviorSubject({});
  public movieModal = this.data.asObservable();
  listFilm = [
    {
      id: '1',
      name: 'Than Chet 1',
      price: '100000',
      detail: 'test detail 1',
      imgUrl: '/assets/images/film1.jpg',
    },
    {
      id: '2',
      name: 'Than Chet 2',
      price: '200000',
      detail: 'test detail 2',
      imgUrl: '/assets/images/film2.jpg',
    },
    {
      id: '3',
      name: 'Than Chet 3',
      price: '300000',
      detail: 'test detail 3',
      imgUrl: '/assets/images/film3.jpg',
    },
    {
      id: '4',
      name: 'Than Chet 4',
      price: '400000',
      detail: 'test detail 4',
      imgUrl: '/assets/images/film4.jpg',
    },
  ];

  constructor(private httpClient: HttpClient) {}

  // getDataMovies(): Observable<any> {
  //   const api = `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`;
  //   return this.httpClient.get(api);
  // }

  getDataMovies(): Observable<ObjPhim[]> {
    const api = `${this.api}/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`;
    return this.httpClient.get<ObjPhim[]>(api).pipe(
      map((res: ObjPhim[]) => {
        return res.map((item) => {
          item.tenPhim = item.tenPhim + 'abc';
          return item;
        });
      })
    );
  }

  getDetailMovie(data: string): Observable<any> {
    const api = `${this.api}/api/QuanLyPhim/LayThongTinPhim?MaPhim=${data}`;
    return this.httpClient.get(api).pipe(
      tap(),
      catchError((err) => {
        return this.handleErr(err);
      })
    );
  }
  handleErr(error: any) {
    switch (error.status) {
      case 500: {
        alert(error.error);
        break;
      }
    }
    return throwError(error);
  }

  changeDataMovieModal(movie: any):void{
    this.data.next(movie);
  }
}
export interface ObjPhim {
  maPhim: number;
  tenPhim: string;
  biDanh: string;
  trailer: string;
  hinhAnh: string;
  moTa: string;
  maNhom: 'GP01';
  ngayKhoiChieu: string;
  danhGia: number;
}
