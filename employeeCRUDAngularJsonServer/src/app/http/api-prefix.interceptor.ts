/** Angular Imports */
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';


/**
 * Http request interceptor to prefix a request with `serverUrl`.
 */
@Injectable()
export class ApiPrefixInterceptor implements HttpInterceptor {

  API_BASE_URL: string = 'http://localhost:3000/'
  constructor() { }


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (!request.url.includes('http:') && !request.url.includes('https:')) {
      request = request.clone({ url: this.API_BASE_URL + request.url });
    }

    request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });

    return next.handle(request);
  }

}

export const httpInterceptorProvider = [
  {provide: HTTP_INTERCEPTORS, useClass: ApiPrefixInterceptor, multi: true}
]
