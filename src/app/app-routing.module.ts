import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/authentication/login/login.component';
import { ListOfEmployeesComponent } from './components/employees/list-of-employees/list-of-employees.component';
import { NewEmployeeComponent } from './components/employees/new-employee/new-employee.component';
import { EditEmployeeComponent } from './components/employees/edit-employee/edit-employee.component';
import { ListOfLogsComponent } from './components/actionLogs/list-of-logs/list-of-logs.component';
import { AddPointsComponent } from './components/employees/add-points/add-points.component';
import { AuthenticationGuard } from './guards/authentication.guard';


export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'employees', component: ListOfEmployeesComponent },
    { path: 'employees/add', component: NewEmployeeComponent, canActivate: [AuthenticationGuard] },
    { path: 'employees/edit/:id', component: EditEmployeeComponent, canActivate: [AuthenticationGuard] },
    { path: 'actionLogs/:id', component: ListOfLogsComponent },
    { path: 'addPoints/:id', component: AddPointsComponent, canActivate: [AuthenticationGuard] },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }