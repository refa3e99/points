import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/Auth/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  isLoggedIn: boolean = false;
  
  constructor(public authservice: AuthenticationService) { }

  ngOnInit(): void {
    this.authservice.isLoggedIn$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  logout() {
    this.authservice.logOut();
  }
}
