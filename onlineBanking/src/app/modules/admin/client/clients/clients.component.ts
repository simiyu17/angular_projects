import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateClientComponent } from '../create-client/create-client.component';
import { ClientService } from '../../services/client.service';
import { ClientDto } from '../../dto/ClientDto';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {

  displayedColumns: string[] = ['clientGovernmentId', 'firstName', 'lastName', 'gender', 'cellPhone', 'emailAddress', 'action'];
  dataSource!: MatTableDataSource<ClientDto>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  clients: ClientDto[] = [];
  constructor(public dialog: MatDialog, private clientService: ClientService) { }
  openNewClientDialog() {
    const dialogRef = this.dialog.open(CreateClientComponent);

    dialogRef.afterClosed().subscribe({
      next: (res) => {
        if (res) {
          this.getAvailableClients();
        }
      }
    });
  }

  getAvailableClients() {
    this.clientService.getAllClients()
      .subscribe({
        next: (response) => {
          console.log(response);
          this.clients = response;
          this.dataSource = new MatTableDataSource(this.clients);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error: (error) => { }
      });
  }

  ngAfterViewInit() {

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit(): void {
    this.getAvailableClients();
  }

}
