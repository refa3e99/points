import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeesService } from '../../../services/Employees/employees.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-points',
  templateUrl: './add-points.component.html',
  styleUrl: './add-points.component.css'
})
export class AddPointsComponent implements OnInit {
  addPointsForm!: FormGroup;
  formSubmitted = false;
  id!: any;

  constructor(private empService: EmployeesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.addPointsForm = new FormGroup({
      positivePoints: new FormControl(0, Validators.pattern(/^[-+]?\d*$/)),
      negativePoints: new FormControl(0, Validators.pattern(/^[-+]?\d*$/)),
      reason: new FormControl('', Validators.required),
    });

    this.id = this.route.snapshot.paramMap.get('id');
  }

  addPoints() {
    this.formSubmitted = true;
    if (this.addPointsForm.valid) {
      console.log(this.id, this.positivePoints?.value, this.negativePoints?.value, this.reason?.value);

      this.empService.addPoints(this.id, this.positivePoints?.value, this.negativePoints?.value, this.reason?.value).subscribe(res => {
        console.log(res);

      }, err => {
        console.log(err);

      })
    }
  }

  // ------------

  get positivePoints() {
    return this.addPointsForm.get('positivePoints');
  }

  get negativePoints() {
    return this.addPointsForm.get('negativePoints');
  }

  get reason() {
    return this.addPointsForm.get('reason');
  }
}
