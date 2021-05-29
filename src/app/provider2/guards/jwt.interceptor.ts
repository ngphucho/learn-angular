import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    //Get auth token from the server
    let authToken = '';
    if (localStorage.getItem('accountFE62')) {
      const user = JSON.parse(localStorage.getItem('accountFE62') as string);
      authToken = `Bearer ${user.accessToken}`;
    }
    //Clone the request and replace the orginal header with cloned header, updated with the authoriazation.
    const authReq = request.clone({
      headers: request.headers.set('Authorization', authToken),
    });
    return next.handle(authReq);
  }
}
