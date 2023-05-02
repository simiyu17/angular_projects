import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { UserRole } from './model/UserRole';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private auth: AuthService){
    console.log(this.auth.userRole());
  }
  USER_ROLE: UserRole = this.auth.isAuthenticated() ? this.auth.userRole() : UserRole.NONE;
}
