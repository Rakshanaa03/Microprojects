import { Component } from '@angular/core';
import { Employee } from './model/employee';
import { EmployeeserviceService } from './employeeservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employee: Employee;
  result: string;
  employeeArr: Employee[];
  flag: boolean;

  constructor(private service: EmployeeserviceService) {
    this.employee = new Employee();
    this.result = "";
    this.employeeArr = [];
    this.flag = false;
  }

  insertEmployee(data: any) {
    this.employee.id = data.id;
    this.employee.empName = data.empName;
    this.employee.empsalary = data.empSalary;
    this.result = this.service.insertEmployee(this.employee);
  }

  updateEmployee(data: any) {
    this.employee.id = data.id;
    this.employee.empName = data.empName;
    this.employee.empsalary = data.empSalary;
    this.result = this.service.updateEmployee(this.employee);
  }

  deleteEmployee(data: any) {
    this.result = this.service.deleteEmployee(data.id);
  }

  findAllEmployee() {
    this.service.findAllEmployee();
    // Wait for data to be updated
    setTimeout(() => {
      this.employeeArr = this.service.getEmployeeArr();
      this.flag = true;
    }, 1000); // Adjust timeout as needed
  }

  findEmployeeById(id: number) {
    this.service.findEmployeeById(id);
    // Wait for data to be updated
    setTimeout(() => {
      this.employeeArr = this.service.getEmployeeArr();
      this.flag = true;
    }, 1000); // Adjust timeout as needed
  }
}
