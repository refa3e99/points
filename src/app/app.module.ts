import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { ListOfEmployeesComponent } from './components/employees/list-of-employees/list-of-employees.component';
import { AppRoutingModule } from './app-routing.module';
import { NewEmployeeComponent } from './components/employees/new-employee/new-employee.component';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth-interceptor';
import { EditEmployeeComponent } from './components/employees/edit-employee/edit-employee.component';
import { ListOfLogsComponent } from './components/actionLogs/list-of-logs/list-of-logs.component';
import { AddPointsComponent } from './components/employees/add-points/add-points.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListOfEmployeesComponent,
    NewEmployeeComponent,
    EditEmployeeComponent,
    ListOfLogsComponent,
    AddPointsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
