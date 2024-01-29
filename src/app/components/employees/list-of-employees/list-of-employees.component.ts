import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../../services/Employees/employees.service';
import { Router } from '@angular/router';
import { Employee } from '../../../models/employee';
import { NotifierService } from '../../../services/Notifier/notifier.service';
import { AuthenticationService } from '../../../services/Auth/authentication.service';

@Component({
  selector: 'app-list-of-employees',
  templateUrl: './list-of-employees.component.html',
  styleUrl: './list-of-employees.component.css'
})
export class ListOfEmployeesComponent implements OnInit {
  isLoggedIn: boolean = false;
  listOfEmployees: any[] = [];

  constructor(private empService: EmployeesService, private router: Router, public notifierService: NotifierService, private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.getEmployees();

    this.authService.isLoggedIn$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  getEmployees() {
    this.empService.getEmployees().subscribe((res: any) => {
      this.listOfEmployees = res;
    }, err => {
    });
  }

  editEmployee(id: string) {
    this.router.navigate([`employees/edit/${id}`]);
  }

  deleteEmployee(id: string) {
    this.empService.deleteEmployee(id).subscribe(res => {
      this.notifierService.showNotification("Employee deleted successfuly", "success")
      this.getEmployees();
    }, err => {
    })
  }

  actionLogs(id: string) {
    this.router.navigate([`actionLogs/${id}`]);
  }

  addPoints(employee: any) {
    this.router.navigate([`addPoints/${employee._id}`]);
  }

}
