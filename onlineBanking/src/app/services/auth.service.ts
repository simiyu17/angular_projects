import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import User from '../model/User';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthService {
  endpoint: string = 'http://localhost:8080/api/v1/auth/authenticate';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};
  errorMessage: string = '';
  constructor(private http: HttpClient, public router: Router) {}

  login(user: User): void {
    this.http.post(this.endpoint, user)
    .subscribe((res: any) => {
      window.sessionStorage.setItem('auth_token', res.authToken);
    })
  }

  doLogout(){

  }

  public isAuthenticated(): boolean {
    const token = window.sessionStorage.getItem('access_token');

    if (!token) {
      return false;
    }

    return true;
  }
  
}