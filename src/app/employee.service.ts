import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from './model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) {
  }

  getEmployee(id: number): Observable<Employee> {
    return this.http.get<Employee>(`http://dummy.restapiexample.com/api/v1/employee/${id}`);
  }
}

