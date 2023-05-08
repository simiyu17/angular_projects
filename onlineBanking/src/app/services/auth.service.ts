import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserRole } from '../model/UserRole';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({providedIn: 'root'})
export class AuthService {

  USER_ROLE: UserRole = UserRole.NONE;
  jwtService: JwtHelperService = new JwtHelperService();
  constructor(private router: Router) {}


  public isAuthenticated(): boolean {
    const token = window.sessionStorage.getItem('auth_token');

    if (!token || this.jwtService.isTokenExpired(token)) {
      return false;
    }

    return true;
  }

  public userRole(): UserRole {
    const user = JSON.parse(window.sessionStorage.getItem('user_details')!);
    if(user){
      const roles = user['roles'];
      if(roles.includes(UserRole.ADMIN)){
        return UserRole.ADMIN;
      }else if(roles.includes(UserRole.CLIENT)){
        return UserRole.CLIENT;
      }
    }else{
      this.doLogout();
    }
    return UserRole.NONE;
    

  }

  userRedirection(): void {
    this.USER_ROLE = this.isAuthenticated() ? this.userRole() : UserRole.NONE;
    if(this.USER_ROLE == UserRole.ADMIN){
      this.router.navigate(['admin']);
    }else if(this.USER_ROLE == UserRole.CLIENT){
      this.router.navigate(['banking']);
    }else {
      this.doLogout();
    }
  }


  doLogout(): void {
    window.sessionStorage.removeItem('auth_token');
    window.sessionStorage.removeItem('user_details');
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
    this.router.navigate(['login']));
  }
  
}