import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../services/Auth/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  loginForm!: FormGroup
  formSubmitted = false;
  errMessage!: string;

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }

  login() {
    this.formSubmitted = true;

    if (this.loginForm.valid) {
      this.authService.login(this.email?.value, this.password?.value).subscribe((res: any) => {
        this.router.navigate(['employees']);
        this.errMessage = '';
      }, err => {
        if (err.status === 400 && err.error.error == 'Username or password is incorrect.') {
          this.errMessage = err.error.error;
        }
      })
    }
  }

  //------------

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

}
