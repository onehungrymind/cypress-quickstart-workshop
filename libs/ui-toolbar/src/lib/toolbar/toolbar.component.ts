import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'workshop-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  @Input() title = '';
  @Input() isAuthenticated = false;
  @Input() sidenavEnabled: boolean;
  @Output() logout = new EventEmitter();
  @Output() toggleSidenav = new EventEmitter();
}
