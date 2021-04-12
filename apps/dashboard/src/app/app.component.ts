import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@workshop/core-data';
import { Observable, of } from 'rxjs';

export enum SidenavStatus {
  OPENED = 'opened',
  DISABLED = 'disabled',
  CLOSED = 'closed',
}

@Component({
  selector: 'workshop-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Cypress Quickstart';
  links = [
    { path: '/', icon: 'home', title: 'home' },
    { path: '/courses', icon: 'view_list', title: 'courses' },
    { path: '/lessons', icon: 'assignment', title: 'lessons' },
    { path: '/users', icon: 'account_circle', title: 'users' },
  ];

  isAuthenticated$: Observable<boolean> = this.auth.isAuthenticated$;
  sidenavStatus = SidenavStatus.OPENED;

  constructor(private auth: AuthService) {}

  logout() {
    this.auth.logout();
  }

  toggleSidenav() {
    this.sidenavStatus =
      this.sidenavStatus === SidenavStatus.OPENED
        ? SidenavStatus.CLOSED
        : SidenavStatus.OPENED;
  }
}
