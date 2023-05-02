import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserRole } from '../model/UserRole';

@Injectable({providedIn: 'root'})
export class AuthService {

  USER_ROLE: UserRole = UserRole.NONE;
  constructor(private router: Router) {}


  public isAuthenticated(): boolean {
    const token = window.sessionStorage.getItem('auth_token');

    if (!token) {
      return false;
    }

    return true;
  }

  public userRole(): UserRole {
    const user = JSON.parse(window.sessionStorage.getItem('user_details')!);
    if(user){
     //this.doLogout();
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

  successfulSigninRedirection(): void {
    this.USER_ROLE = this.isAuthenticated() ? this.userRole() : UserRole.NONE;
    if(this.USER_ROLE == UserRole.ADMIN){
      this.router.navigate(['admin-home']);
    }else if(this.USER_ROLE == UserRole.CLIENT){
      this.router.navigate(['my-account']);
    }
  }


  doLogout(): void {
    window.sessionStorage.removeItem('auth_token');
    window.sessionStorage.removeItem('user_details');
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
    this.router.navigate(['login']));
  }
  
}