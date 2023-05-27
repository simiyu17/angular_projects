import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/Employee';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EmployeesService {
  constructor(private httpClient: HttpClient) { }

  getAllEmployees(): Observable<any> {
    return this.httpClient.get('employees');
  }

  getAllEmployeeById(id: number): Observable<any> {
    return this.httpClient.get(`employees/${id}`);
  }

  createEmployee(employee: Employee): Observable<any> {
    employee.dateOfBirth = this.formateDate(employee.dateOfBirth);
    return this.httpClient.post('employees', JSON.stringify(employee));
  }

  updateEmployeeDetails(employee: Employee): Observable<any> {
    employee.dateOfBirth = this.formateDate(employee.dateOfBirth);
    return this.httpClient.put(`employees/${employee.id}`, JSON.stringify(employee));
  }

  deleteEmployeeById(id: number): Observable<any> {
    return this.httpClient.delete(`employees/${id}`);
  }

  formateDate(date: string): string {
    let dob = new Date(date);
    let yyyy = dob.getFullYear();
    let month = (dob.getMonth() + 1);
    let mm = month < 10 ? `0${month}`: `${month}`;
    let dd = dob.getDate() < 10 ? `0${dob.getDate()}` : `${dob.getDate()}`;
    return yyyy+'-'+mm+'-'+dd;
  }

}
