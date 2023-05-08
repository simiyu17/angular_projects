import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalService } from 'src/app/services/global.service';

@Injectable({providedIn: 'root'})
export class ClientAccountsService {
  constructor(private httpClient: HttpClient, private gs: GlobalService) { }
  

  getMyClientAccounts(): Observable<any> {
    return this.httpClient.get(`${this.gs.BASE_CLIENT_ENDPOINT}/my-accounts`);
  }

  getClientAccountsByClientId(clientId: number): Observable<any> {
    return this.httpClient.get(`${this.gs.BASE_ADMIN_ENDPOINT}/client-accounts/${clientId}/accounts`);
  }
}
