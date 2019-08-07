import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EmployeeComponent} from './employee.component';
import {EmployeeService} from '../employee.service';
import {Observable, of} from 'rxjs';
import {Employee} from '../model';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // 注入HttpClient 測試模組
      imports: [HttpClientTestingModule],
      declarations: [EmployeeComponent],
      providers: [{provide: EmployeeService, useClass: EmployeeStubService}],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeComponent);
    component = fixture.componentInstance;
    component.employeeId = 1;
    // 建立假的method 可來驗證是否有執行到或是模擬回傳結果
    spyOn(component, 'verifyFunction');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // 模擬API回傳結果還測試employeeInfo的邏輯
  it('employeeInfo should be name + age', () => {
    expect(component.employeeInfo).toBe('Name:Tim, Age:10');
  });

  // 測試是否有執行到
  it('toHaveBeenCalled test', () => {
    // 需spyOn(component, 'verifyFunction')才可以使用toHaveBeenCalled
    // 可傳執行次數 ex: toHaveBeenCalled(2);
    expect(component.verifyFunction).toHaveBeenCalled();
  });
});

// 建立模擬回傳的service
class EmployeeStubService extends EmployeeService {
  getEmployee(id: number): Observable<Employee> {
    const employee = new Employee();
    employee.id = id;
    employee.employee_name = 'Tim';
    employee.employee_age = 10;

    return of(employee);
  }
}
