import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EmployeesService } from 'src/app/services/employees.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent {

  constructor(private employeeService: EmployeesService, private gs: GlobalService, public dialogRef: MatDialogRef<ConfirmDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any){}

  deleteEmployee(){
    this.employeeService.deleteEmployeeById(this.data.employeeId)
    .subscribe({
      next: (response) => {
        this.gs.openSnackBar("Done sucessfully!!", "Dismiss");
        this.dialogRef.close();
      },
      error: (error) => {
        if (error.error.message) {
          alert(error.error.message);
          this.gs.openSnackBar(`An error occured ${error.error.message}`, "Dismiss");
        }else {
          this.gs.openSnackBar(`An error occured`, "Dismiss");
        }
          }
        });
    }
}

