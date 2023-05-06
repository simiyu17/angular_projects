import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap, catchError } from 'rxjs';
import User from '../model/User';
import { GlobalService } from './global.service';
import { LoginRequest } from '../model/LoginRequest';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private gs: GlobalService) { }

  userLogin (user: LoginRequest): Observable<any> {
    return this.http.post(this.gs.USER_AUTH_URL, JSON.stringify(user), httpOptions);
  }


  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.gs.BASE_ADMIN_ENDPOINT}/users`);
  }

  getUserById(id: string): Observable<User> {
    const url = `${this.gs.BASE_CLIENT_ENDPOINT}/${id}`;
    return this.http.get<User>(url);
  }

}
