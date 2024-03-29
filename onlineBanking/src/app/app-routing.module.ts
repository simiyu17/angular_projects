import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './home/not-found/not-found.component';

const routes: Routes = [
  
  {path: "login", component: LoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: "admin", loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  },
  {path: "banking", loadChildren: () => import('./modules/banking/banking.module').then(m => m.BankingModule)
  },
  {path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
