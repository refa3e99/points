import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeesService } from '../../../services/Employees/employees.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../../models/employee';
import { NotifierService } from '../../../services/Notifier/notifier.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrl: './edit-employee.component.css'
})
export class EditEmployeeComponent implements OnInit {
  editEmployeeForm!: FormGroup;
  formSubmitted = false;
  empToEdit: any;
  empId: any;

  constructor(private empService: EmployeesService, private route: ActivatedRoute, private router: Router, private notifierService: NotifierService) { }

  ngOnInit(): void {
    this.editEmployeeForm = new FormGroup({
      name: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required)
    })

    this.empId = this.route.snapshot.paramMap.get('id');
    this.empService.getEmployeeById(this.empId).subscribe(res => {
      this.empToEdit = res;
      this.editEmployeeForm.patchValue(res);
    }, err => {
    });
  }

  updateEmployee() {
    this.formSubmitted = true;

    this.empToEdit.name = this.name?.value;
    this.empToEdit.title = this.title?.value;

    if (this.editEmployeeForm.valid) {
      this.empService.editEmployee(this.empId, this.empToEdit).subscribe(res => {
        this.notifierService.showNotification("Employee edited successfuly.", 'success');
      }, err => {

      },
        () => {
          this.router.navigate(['employees']);
        })
    }
  }

  // ------------

  get name() {
    return this.editEmployeeForm.get('name');
  }

  get title() {
    return this.editEmployeeForm.get('title');
  }
}
