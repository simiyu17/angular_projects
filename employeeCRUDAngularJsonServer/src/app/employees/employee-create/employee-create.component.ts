import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Employee } from 'src/app/models/Employee';
import { EmployeesService } from 'src/app/services/employees.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.scss']
})
export class EmployeeCreateComponent implements OnInit{

  createEmployeeForm: FormGroup = this.fb.group({});
  employeeToEdit!: Employee;
  formTitle!: string;
  saveButtonText!: string;

  constructor(
    private fb: FormBuilder, 
    private employeeService: EmployeesService, 
    private gs: GlobalService, 
    private dialogRef: MatDialogRef<EmployeeCreateComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any){
    this.createNewEmployeeForm();
  }

  onSubmitNewEmployee(): void {
    if (this.createEmployeeForm.valid) {
      if(this.data){
        this.employeeService.updateEmployeeDetails(this.createEmployeeForm.value)
        .subscribe({
          next: (response) => {
            this.gs.openSnackBar("Employee Updated sucessfully!!", "Dismiss");
            this.dialogRef.close();
          },
          error: (error: HttpErrorResponse) => {
            if (error.error.message) {
              alert(error.error.message);
              this.gs.openSnackBar(`An error occured ${error.error.message}`, "Dismiss");
            }else {
              this.gs.openSnackBar(`An error occured`, "Dismiss");
            }
          }
        });
      }else {
        this.employeeService.createEmployee(this.createEmployeeForm.value)
        .subscribe({
          next: (response) => {
            this.gs.openSnackBar("Employee Added sucessfully!!", "Dismiss");
            this.dialogRef.close();
          },
          error: (error: HttpErrorResponse) => {
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
  }

  createNewEmployeeForm(): void {
    this.createEmployeeForm = this.fb.group({
      id: [null],
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      gender: [null, Validators.required],
      dateOfBirth: [null, Validators.required],
      cellPhone: [null, [Validators.required, Validators.pattern('\\d{8,10}')]],
      email: [null, [Validators.required, Validators.email]]
    });

    // We are editing an employee
    if(this.data){
      this.fillFormWithEmployeeDetails(this.data.emplId);
    }
  }

  fillFormWithEmployeeDetails(id: number): void {
    this.employeeService.getAllEmployeeById(id).subscribe({
      next: (response) =>{
        this.employeeToEdit = response;
        this.createEmployeeForm.setValue(this.employeeToEdit);
      }
    });
  }

  public myError = (controlName: string, errorName: string) =>{
    return this.createEmployeeForm.controls[controlName].hasError(errorName);
    }

  underAgeFilter = (d: Date | null): boolean => {
    const day = (d || new Date());
    let diff_ms = Date.now() - day.getTime();
    let age_dt = new Date(diff_ms); 
    let age =  Math.abs(age_dt.getUTCFullYear() - 1970);
    return age >= 18;
  };

  ngOnInit(): void {
      if(this.data){
        this.formTitle = 'Update Employee Details';
        this.saveButtonText = 'Update';
      }else {
        this.formTitle = 'Submit New Employee Details';
        this.saveButtonText = 'Submit';
      }
  }

}
