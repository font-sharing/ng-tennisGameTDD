import {Component, Input, OnInit} from '@angular/core';
import {EmployeeService} from '../employee.service';
import {Employee} from '../model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  @Input() employeeId: number;
  employeeInfo: string;

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.getEmployeeInfo(this.employeeId);
    this.verifyFunction();
  }

  getEmployeeInfo(id: number) {
    this.employeeService.getEmployee(id)
      .subscribe((resp: Employee) => this.employeeInfo = `Name:${resp.employee_name}, Age:${resp.employee_age}`);
  }

  verifyFunction(): void {
  }
}
