import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
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

  getDataMovies(): Observable<any> {
    const api = `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`;
    return this.httpClient.get(api);
  }
}
