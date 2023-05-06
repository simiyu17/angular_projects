import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from 'src/app/services/global.service';
import { ClientDto } from '../dto/ClientDto';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ClientService {
  constructor(private httpClient: HttpClient, private glService: GlobalService) { }

  createClient(clientData: ClientDto): Observable<any> {
    return this.httpClient.post(`${this.glService.BASE_ADMIN_ENDPOINT}/clients`, JSON.stringify(clientData));
  }

  getAllClients(): Observable<any> {
    return this.httpClient.get(`${this.glService.BASE_ADMIN_ENDPOINT}/clients`);
  }
}
