import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { MyProfileComponent } from './banking/my-profile/my-profile.component';
import { LoginComponent } from './login/login.component';
import { CreateClientComponent } from './client/create-client/create-client.component';

const routes: Routes = [
  {path: "admin-home", component: AdminComponent},
  {path: "my-account", component: MyProfileComponent},
  {path: "login", component: LoginComponent},
  {path: "create-client", component: CreateClientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
