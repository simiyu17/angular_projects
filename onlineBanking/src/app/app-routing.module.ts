import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { MyProfileComponent } from './banking/my-profile/my-profile.component';
import { LoginComponent } from './login/login.component';
import { CreateClientComponent } from './client/create-client/create-client.component';
import { AuthGuard } from './utils/auth-guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: "home", component: HomeComponent, canActivate: [AuthGuard]},
  {path: "admin-home", component: AdminComponent, canActivate: [AuthGuard]},
  {path: "my-account", component: MyProfileComponent, canActivate: [AuthGuard]},
  {path: "login", component: LoginComponent},
  {path: "create-client", component: CreateClientComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
