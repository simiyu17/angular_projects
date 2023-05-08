import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.css']
})
export class ClientProfileComponent implements OnInit{

  clientId?: any;
  clientName?: string;
  constructor(private _Activatedroute:ActivatedRoute, private clientService: ClientService){}

  ngOnInit(): void {
      this._Activatedroute.paramMap.subscribe({
        next:(params) =>{
          console.log(params);
          this.clientId = params.get('id');
          this.clientService.getAllClientById(this.clientId).subscribe({
            next: (response) =>{
              console.log(response);
              this.clientName = response.firstName+' '+response.lastName;
            }
          });
          
        }
      });
  }
}
