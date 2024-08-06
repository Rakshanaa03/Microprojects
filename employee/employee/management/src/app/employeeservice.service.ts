import { Injectable } from '@angular/core';
import { Employee } from './model/employee';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {
  private url: string;
  private employeeArr: Employee[];

  constructor(private http: HttpClient) { 
    this.url = "http://localhost:3005/employees";
    this.employeeArr = [];
  }

  insertEmployee(employee: Employee): string {
    this.http.post<Employee>(this.url, employee).subscribe();
    return "Employee Details Added";
  }

  updateEmployee(employee: Employee): string {
    this.http.put<Employee>(`${this.url}/${employee.id}`, employee).subscribe();
    return "Employee Details Updated";
  }

  deleteEmployee(id: number): string {
    this.http.delete<void>(`${this.url}/${id}`).subscribe();
    return "Employee Details Deleted";
  }

  findAllEmployee(): void {
    this.http.get<Employee[]>(this.url).subscribe(data => {
      this.employeeArr = data;
    });
  }

  findEmployeeById(id: number): void {
    this.http.get<Employee>(`${this.url}/${id}`).subscribe(data => {
      this.employeeArr = [data];
    });
  }

  getEmployeeArr(): Employee[] {
    return this.employeeArr;
  }
}

