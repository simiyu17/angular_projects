import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-client-menu',
  templateUrl: './client-menu.component.html',
  styleUrls: ['./client-menu.component.css']
})
export class ClientMenuComponent {

  constructor(private auth: AuthService){}

  doLogout(): void {
    this.auth.doLogout();
  }

}
