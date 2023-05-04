import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { UserRole } from './model/UserRole';
import { Event, NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  USER_ROLE: UserRole = UserRole.NONE;
  constructor(private auth: AuthService, private router: Router){
    this.router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event);
    });
  }

  private navigationInterceptor(event: Event): void {
    if (event instanceof NavigationEnd) {
      this.USER_ROLE = this.auth.isAuthenticated() ? this.auth.userRole() : UserRole.NONE;
    }
   
  }
}

