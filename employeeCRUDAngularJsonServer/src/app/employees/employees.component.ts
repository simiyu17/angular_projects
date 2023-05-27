import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from '../models/Employee';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { EmployeesService } from '../services/employees.service';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { ConfirmDialogComponent } from '../shared/confirm-dialog/confirm-dialog.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit, AfterViewInit, OnDestroy{

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'gender', 'dateOfBirth', 'cellPhone', 'email', 'action'];
  dataSource!: MatTableDataSource<Employee>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  employees!: Employee[];

  private subs = new Subscription();

  constructor(private employeeService: EmployeesService, public dialog: MatDialog, private gs: GlobalService) { }

  getAvailableEmployees() {
    this.employeeService.getAllEmployees()
      .subscribe({
        next: (response) => {
          console.log(response);
          this.employees = response;
          this.dataSource = new MatTableDataSource(this.employees);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error: (err: HttpErrorResponse) => { 
          console.log(err);
        }
      });
  }

  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
    this.getAvailableEmployees();
  }

  ngOnDestroy(): void {
      if(this.subs){
        this.subs.unsubscribe();
      }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openEmployeeFormDialog(employeeId: number | null){

    let dialogRef;
    if(employeeId != null){
      dialogRef = this.dialog.open(EmployeeCreateComponent, {
        data: {emplId: employeeId}
      });
    }else {
      dialogRef = this.dialog.open(EmployeeCreateComponent);
    }

    

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.ngOnInit()
    });
  }

  openEmployeeDetailsDialog(id: number){
    const dialogRef = this.dialog.open(EmployeeDetailsComponent, {
      data: {employeeId: id}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
 

  openDeleteEmployeeDialog(id: number){
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {employeeId: id}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.ngOnInit()
    });
  }

}
