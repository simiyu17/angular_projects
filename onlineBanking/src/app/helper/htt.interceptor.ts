import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const token: string = window.sessionStorage.getItem("auth_token")!;
        if (!req.headers.has('Content-Type')) {
            if (token != null) {
                req = req.clone({ setHeaders: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json'}
             });
             }
            req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
        }
    
        req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
        return next.handle(req);
    }
}

export const httpInterceptorProvider = [
    {provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true}
]