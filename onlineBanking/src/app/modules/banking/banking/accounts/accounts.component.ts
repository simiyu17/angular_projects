import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ClientAccountsService } from '../../services/client-accounts.service';
import { ClientAccount } from '../../dto/ClientAccount';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

const ELEMENT_DATA: ClientAccount[] = [
  {id: 1, accountStatus: 'Hydrogen', balance: 1.0079, accountType: 'H', accountNumber: '777777777777777'},
  {id: 2, accountStatus: 'Helium', balance: 4.0026, accountType: 'He', accountNumber: '777777777777777'},
  {id: 3, accountStatus: 'Lithium', balance: 6.941, accountType: 'Li', accountNumber: '777777777777777'},
  {id: 4, accountStatus: 'Beryllium', balance: 9.0122, accountType: 'Be', accountNumber: '777777777777777'},
  {id: 5, accountStatus: 'Boron', balance: 10.811, accountType: 'B', accountNumber: '777777777777777'},
  {id: 6, accountStatus: 'Carbon', balance: 12.0107, accountType: 'C', accountNumber: '777777777777777'},
  {id: 7, accountStatus: 'Nitrogen', balance: 14.0067, accountType: 'N', accountNumber: '777777777777777'},
  {id: 8, accountStatus: 'Oxygen', balance: 15.9994, accountType: 'O', accountNumber: '777777777777777'},
  {id: 9, accountStatus: 'Fluorine', balance: 18.9984, accountType: 'F', accountNumber: '777777777777777'},
  {id: 10, accountStatus: 'Neon', balance: 20.1797, accountType: 'Ne', accountNumber: '777777777777777'},
];

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit{

displayedColumns: string[] = ['id', 'accountType', 'accountStatus', 'accountNumber', 'balance', 'action'];
clientAcconts?: ClientAccount[];
dataSource?: any;
@ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
@Input() clientId?: any;
constructor(private clientAccountsService: ClientAccountsService){}

  getAvailableClientAccounts() {
    console.log('CLIENT=='+this.clientId)
    this.clientAccountsService.getClientAccountsByClientId(this.clientId)
      .subscribe({
        next: (response) => {
          console.log(response);
          this.clientAcconts = response;
          this.dataSource = this.clientAcconts;
          console.log(this.dataSource);
        },
        error: (error) => { }
      });
  }

  ngOnInit(): void {
      this.getAvailableClientAccounts();
  }
}
