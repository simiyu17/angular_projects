import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Employee } from 'src/app/models/Employee';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  employeeId!: number;
  employee!: Employee;
  employeeProfileImg!: string
  emplFullName!: string;
  emplDOB!: string;

  constructor(
    private employeeService: EmployeesService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.employeeId = this.data.employeeId;
    if (this.employeeId) {
      this.employeeService.getAllEmployeeById(this.employeeId)
        .subscribe({
          next: (response) => {
            this.employee = response;
            this.employeeProfileImg = this.employee!.gender == 'Male' ? '/assets/male_img.jpg' : '/assets/female_img.jpg';
            this.emplFullName = this.employee!.firstName+' '+this.employee!.lastName;
            this.emplDOB = new Date(this.employee.dateOfBirth).toDateString();
            console.log(new Date(this.employee.dateOfBirth).toISOString())
          }
        });
    }
  }

}
