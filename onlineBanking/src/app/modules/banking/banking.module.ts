import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankingRoutingModule } from './banking-routing.module';
import { MyProfileComponent } from './banking/my-profile/my-profile.component';
import { AccountsComponent } from './banking/accounts/accounts.component';
import { TransactAccountComponent } from './banking/transact-account/transact-account.component';
import { ClientHomeComponent } from './client-home/client-home.component';


@NgModule({
  declarations: [
    MyProfileComponent,
    AccountsComponent,
    TransactAccountComponent,
    ClientHomeComponent
  ],
  imports: [
    CommonModule,
    BankingRoutingModule
  ]
})
export class BankingModule { }
