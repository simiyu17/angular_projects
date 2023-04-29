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
    CreateClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [httpInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
