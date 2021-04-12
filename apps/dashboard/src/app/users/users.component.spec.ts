import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';

import { CoreDataModule } from '@workshop/core-data';
import { CoreStateModule, UsersFacade } from '@workshop/core-state';
import { MaterialModule } from '@workshop/material';

import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersComponent } from './users.component';

import { mockUser, mockEmptyUser } from '@workshop/testing';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let de: DebugElement;
  let usersFacade: UsersFacade;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UsersComponent,
        UserDetailsComponent,
        UsersListComponent,
      ],
      imports: [
        CoreDataModule,
        CoreStateModule,
        FormsModule,
        MaterialModule,
        HttpClientTestingModule,
        NoopAnimationsModule,
        RouterTestingModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    usersFacade = TestBed.inject(UsersFacade);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should on select call usersFacade selectUser', () => {
    const spy = jest.spyOn(usersFacade, 'selectUser');

    component.selectUser(mockUser);

    expect(spy).toHaveBeenCalledWith(mockUser.id);
  })

  describe('should on save call usersFacade', () => {
    it('updateUser', () => {
      const spy = jest.spyOn(usersFacade, 'updateUser');

      component.saveUser(mockUser);

      expect(spy).toHaveBeenCalledWith(mockUser);
    })

    it('createUser', () => {
      const spy = jest.spyOn(usersFacade, 'createUser');

      component.saveUser(mockEmptyUser);

      expect(spy).toHaveBeenCalledWith(mockEmptyUser);
    })
  })

  it('should on delete call usersFacade deleteUser', () => {
    const spy = jest.spyOn(usersFacade, 'deleteUser');

    component.deleteUser(mockUser);

    expect(spy).toHaveBeenCalledWith(mockUser);
  })
});
