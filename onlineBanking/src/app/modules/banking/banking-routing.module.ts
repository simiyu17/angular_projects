import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/utils/auth-guard';
import { ClientHomeComponent } from './client-home/client-home.component';
import { AccountsComponent } from './banking/accounts/accounts.component';
import { TransactAccountComponent } from './banking/transact-account/transact-account.component';

const routes: Routes = [
  {
    path: '', component: ClientHomeComponent, canActivate: [AuthGuard],
    children: [
      { path: 'my-accounts', component: AccountsComponent, canActivate: [AuthGuard] },
      { path: 'transactions', component: TransactAccountComponent, canActivate: [AuthGuard] },
      { path: '', redirectTo: '/banking/my-accounts', pathMatch: 'full' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankingRoutingModule { }
