import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankingRoutingModule } from './banking-routing.module';
import { MyProfileComponent } from './banking/my-profile/my-profile.component';
import { AccountsComponent } from './banking/accounts/accounts.component';
import { TransactAccountComponent } from './banking/transact-account/transact-account.component';
import { ClientHomeComponent } from './client-home/client-home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';




@NgModule({
  declarations: [
    MyProfileComponent,
    AccountsComponent,
    TransactAccountComponent,
    ClientHomeComponent
  ],
  imports: [
    CommonModule,
    BankingRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  exports: [AccountsComponent]
})
export class BankingModule { }
