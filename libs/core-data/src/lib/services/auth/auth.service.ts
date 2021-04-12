import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@env/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  model = 'auth/login'
  isAuthenticated = new BehaviorSubject(false);
  isAuthenticated$ = this.isAuthenticated.asObservable();

  constructor(private http: HttpClient, private router: Router) {
    this.setToken(this.getToken());
  }

  getUrl() {
    return `${environment.apiEndpoint}${this.model}`;
  }

  login(username, password) {
    return this.http.post(this.getUrl(), { username, password });
  }

  check() {
    return this.isAuthenticated.value;
  }

  logout() {
    this.setToken('');
    this.router.navigateByUrl('/login');
  }

  setToken(token) {
    localStorage.setItem('token', token);
    this.isAuthenticated.next(token !== ''); // Could be more robust
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
