import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environment/environment';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  url = environment.apiUrl;

  constructor(private http: HttpClient, private cookieService: CookieService, private router: Router) {
    this.checkAuthenticationStatus();
  }

  private isLoggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedIn.asObservable();

  login(email: string, password: string) {
    const credentials = { email, password };
    return this.http.post(this.url + '/auth/login', credentials, { withCredentials: true }).pipe(
      tap((response: any) => {
        this.cookieService.set('AUTH', response.cookie.AUTH);
        this.isLoggedIn.next(true);
        this.router.navigate(['/']);
      })
    );
  }

  register(email: string, username: string, password: string) {
    const newUser = { email, username, password };
    return this.http.post(this.url + '/auth/register', newUser);
  }

  isAuthenticated() {
    const token = this.cookieService.get('AUTH');
    return this.http.post(this.url + '/auth/isAuthenticated', token);
  }

  logOut() {
    this.isLoggedIn.next(false);
    this.cookieService.delete('AUTH');
    this.router.navigate(['']);
  }

  private checkAuthenticationStatus(): void {
    this.isAuthenticated().subscribe(
      () => this.isLoggedIn.next(true),
      () => this.isLoggedIn.next(false)
    );
  }
}
