import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ClientsComponent } from './client/clients/clients.component';
import { CreateClientComponent } from './client/create-client/create-client.component';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    ClientsComponent,
    CreateClientComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
