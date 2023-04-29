import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import User from '../model/User';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthService {
  constructor(private httpClient: HttpClient) { }

  login(user: User): Observable<any> {
    
  }
  
}