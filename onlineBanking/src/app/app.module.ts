import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

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
import { NotFoundComponent } from './home/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminMenuComponent,
    ClientMenuComponent,
    NoMenuComponent,
    NotFoundComponent
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
