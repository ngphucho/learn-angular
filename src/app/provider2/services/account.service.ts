import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ProxyService } from './proxy/proxy.service';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  api = environment.apiUrl;
  constructor(private httpClient: HttpClient, private proxy: ProxyService) {}

  callLoginApi(data: any): Observable<any> {
    const api = `${this.api}/api/QuanLyNguoiDung/DangNhap`;
    return this.proxy.post(api, data);
    // return this.httpClient.post(api, data).pipe(
    //   tap(),
    //   catchError((err) => {
    //     return this.handleErr(err);
    //   })
    // );
  }

  callSignupApi(data: any): Observable<any> {
    const api = `${this.api}/api/QuanLyNguoiDung/DangKy`;
    return this.proxy.post(api, data);
    // return this.httpClient.post(api, data).pipe(
    //   tap(),
    //   catchError((err) => {
    //     return this.handleErr(err);
    //   })
    // );
  }

  // post(api: string, data: any): Observable<any> {
  //   return this.httpClient.post(api, data).pipe(
  //     tap(),
  //     catchError((err) => {
  //       return this.handleErr(err);
  //     })
  //   );
  // }

  // handleErr(error: any) {
  //   switch (error.status) {
  //     case 500: {
  //       alert(error.error);
  //       break;
  //     }
  //   }
  //   return throwError(error);
  // }
}
