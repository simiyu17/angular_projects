import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HTTP_INTERCEPTORS, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const token: string = window.sessionStorage.getItem("auth_token")!;
        if (!req.headers.has('Content-Type')) {
            if (token != null) {
                // request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
                req = req.clone({ setHeaders: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json'}
             });
             }
            req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
        }
    
        req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
        return next.handle(req).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    console.log('event--->>>', event);
                }
                return event;
            }, (err: any) => {
              if (err instanceof HttpErrorResponse) {
                if (err.status === 401) {
                //  this.auth.collectFailedRequest(request);
                }
                if (err.status === 403) {
                  console.log('The error ====>' + err.message);
                  }
              }
            }));
    }
}

export const httpInterceptorProvider = [
    {provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true}
]