import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from 'src/app/modules/admin/admin/admin.component';
import { AuthGuard } from 'src/app/utils/auth-guard';
import { CreateClientComponent } from './client/create-client/create-client.component';
import { ClientsComponent } from './client/clients/clients.component';
import { ClientProfileComponent } from './client/client-profile/client-profile.component';

const routes: Routes = [
  {path: '', component: AdminComponent, canActivate: [AuthGuard],
children: [
  {path: 'create-client', component: CreateClientComponent, canActivate: [AuthGuard]},
  {path: 'clients', component: ClientsComponent, canActivate: [AuthGuard]},
  {path: 'clients/:id', component: ClientProfileComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo: '/admin/clients', pathMatch: 'full'}
]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
