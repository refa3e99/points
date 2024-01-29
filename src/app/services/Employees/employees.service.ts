import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environment/environment';
import { Observable } from 'rxjs';
import { Employee, Points } from '../../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get<Observable<Employee[]>>(environment.apiUrl + '/employees');
  }

  getEmployeeById(id: string | null) {
    return this.http.get<Observable<Employee>>(environment.apiUrl + `/employees/${id}`);
  }

  addNewEmployee(name: string, title: string) {
    const newEmployee: Employee = new Employee(name, title, new Points());
    return this.http.post(environment.apiUrl + '/employees', newEmployee);
  }

  deleteEmployee(id: string) {
    return this.http.delete(environment.apiUrl + `/employees/${id}`);
  }

  editEmployee(id: string, emp: Employee) {
    const updatedEmplyee = new Employee(emp.name, emp.title);
    return this.http.patch(environment.apiUrl + `/employees/${id}`, updatedEmplyee);
  }

  addPoints(id: string, positivePoints: number, negativePoints: number, reason: string) {
    return this.http.post(environment.apiUrl + '/employees/addPoints', { id, positivePoints, negativePoints, reason });
  }
}
