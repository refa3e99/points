import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../../services/Employees/employees.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifierService } from '../../../services/Notifier/notifier.service';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrl: './new-employee.component.css'
})
export class NewEmployeeComponent implements OnInit {
  newEmployeeForm!: FormGroup;
  formSubmitted = false;

  constructor(private empService: EmployeesService, private router: Router, private notifierService: NotifierService) { }

  ngOnInit(): void {
    this.newEmployeeForm = new FormGroup({
      name: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required)
    });
  }

  addNewEmployee() {
    this.formSubmitted = true;
    if (this.newEmployeeForm.valid) {
      this.empService.addNewEmployee(this.name?.value, this.title?.value).subscribe(res => {
        this.notifierService.showNotification("Employee Added Successfuly", 'success');
        this.router.navigate(['employees']);
      }, err => {
        this.notifierService.showNotification(err.error.error, 'error');
      });
    }
  }

  // ------------

  get name() {
    return this.newEmployeeForm.get('name');
  }

  get title() {
    return this.newEmployeeForm.get('title');
  }
}
