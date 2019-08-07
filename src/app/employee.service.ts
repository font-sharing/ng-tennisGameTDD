import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) {
  }

  getEmployee(id: number) {
    return this.http.get(`http://dummy.restapiexample.com/api/v1/employee/${id}`);
  }
}

