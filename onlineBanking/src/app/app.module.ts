import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ClientsComponent } from './client/clients/clients.component';
import { CreateAccountComponent } from './banking/create-account/create-account.component';
import { TransactAccountComponent } from './banking/transact-account/transact-account.component';
import { AccountsComponent } from './banking/accounts/accounts.component';
import { MyProfileComponent } from './banking/my-profile/my-profile.component';
import { AdminComponent } from './admin/admin.component';
import { CreateClientComponent } from './client/create-client/create-client.component';
import { httpInterceptorProvider } from './helper/htt.interceptor';
import { DatePipe } from '@angular/common';
import { AuthGuard } from './utils/auth-guard';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminMenuComponent } from './home/admin-menu/admin-menu.component';
import { ClientMenuComponent } from './home/client-menu/client-menu.component';
import { NoMenuComponent } from './home/no-menu/no-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClientsComponent,
    CreateAccountComponent,
    TransactAccountComponent,
    AccountsComponent,
    MyProfileComponent,
    AdminComponent,
    CreateClientComponent,
    AdminMenuComponent,
    ClientMenuComponent,
    NoMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [httpInterceptorProvider, DatePipe, AuthGuard, AuthService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
