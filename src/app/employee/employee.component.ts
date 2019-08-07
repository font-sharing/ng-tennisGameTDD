import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../employee.service';
import {Employee} from '../model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employeeInfo: string;

  constructor(private employeeService: EmployeeService) {
    this.getEmployeeInfo(15896);
  }

  ngOnInit() {
  }

  getEmployeeInfo(id: number) {
    this.employeeService.getEmployee(id)
      .subscribe((resp: Employee) => this.employeeInfo = `Name:${resp.employee_name}, Age:${resp.employee_age}`);
  }

}
