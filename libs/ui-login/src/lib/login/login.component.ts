import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '@workshop/api-interfaces';
import { AuthService } from '@workshop/core-data';

export const filters = [
  'ig-xpro2',
  'ig-willow',
  'ig-walden',
  'ig-valencia',
  'ig-toaster',
  'ig-sutro',
  'ig-sierra',
  'ig-rise',
  'ig-nashville',
  'ig-mayfair',
  'ig-lofi',
  'ig-kelvin',
  'ig-inkwell',
  'ig-hudson',
  'ig-hefe',
  'ig-earlybird',
  'ig-brannan',
  'ig-amaro',
  'ig-1977',
];

@Component({
  selector: 'workshop-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginInfo: Login = {
    email: '',
    password: '',
  };

  chosenFilter = filters[Math.floor(Math.random() * filters.length)];

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() { }

  login(email, password) {
    this.authService.login(email, password)
      .subscribe(result => {
        // Store the token
        this.authService.setToken(result['access_token']);
        // Redirect to home
        this.router.navigateByUrl('/');
      });
  }
}
