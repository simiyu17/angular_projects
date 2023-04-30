import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class GlobalService {
    BASE_API_URL: string = "http://localhost:8080/api/v1";
    USER_AUTH_URL: string = `${this.BASE_API_URL}/auth/authenticate`;
    BASE_ADMIN_ENDPOINT: string = `${this.BASE_API_URL}/admin`;
    BASE_CLIENT_ENDPOINT: string = `${this.BASE_API_URL}/banking`;
    constructor() { }
    

    public handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
      
          // TODO: send the error to remote logging infrastructure
          console.error(error); // log to console instead
      
          // Let the app keep running by returning an empty result.
          return of(result as T);
        };
      }
}