// src/app/auth/token.interceptor.ts
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/do';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {

  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // use it in case of auth
    if (localStorage.getItem('user')) {
      const token = localStorage.getItem('token');
      request = request.clone({
        setHeaders: {
          'Authorization': token,
          'Accept': 'application/json'
        },
      });
    } else {
      request = request.clone({
        setHeaders: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
    }

    return next.handle(request)
    .pipe(
       catchError(error => {
         console.log(error);
         if (error.status === 401 || error.status === 403) {
           // handle error
         }
         return throwError(error);
       })
    );
  }
}
