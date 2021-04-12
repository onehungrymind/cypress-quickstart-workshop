import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot, cold } from '@nrwl/angular/testing';

import { Observable } from 'rxjs';

import { UsersEffects } from './users.effects';
import * as UsersActions from './users.actions';
import { UsersService } from '@workshop/core-data';

import { mockUsersService, mockUser } from '@workshop/testing';
import { User } from '@workshop/api-interfaces';

describe('UsersEffects', () => {
  let actions: Observable<any>;
  let effects: UsersEffects;
  let service: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        UsersEffects,
        DataPersistence,
        provideMockActions(() => actions),
        { provide: UsersService, useValue: mockUsersService },
      ],
    });

    effects = TestBed.inject(UsersEffects);
    service = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('loadUsers$', () => {
    it('should return loadUsersSuccess, on success', () => {
      const users: User[] = [];
      const action = UsersActions.loadUsers();
      const outcome = UsersActions.loadUsersSuccess({ users });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: users });
      const expected = cold('--b', { b: outcome });
      service.all = jest.fn(() => response);

      expect(effects.loadUsers$).toBeObservable(expected);
    });

    it('should return loadUsersFailure, on failure', () => {
      const action = UsersActions.loadUsers();
      const error = new Error();
      const outcome = UsersActions.loadUsersFailure({ error });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.all = jest.fn(() => response);

      expect(effects.loadUsers$).toBeObservable(expected);
    });
  });

  describe('loadUser$', () => {
    it('should return success with user', () => {
      const user = { ...mockUser };
      const action = UsersActions.loadUser({ userId: user.id });
      const outcome = UsersActions.loadUserSuccess({ user });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: user });
      const expected = cold('--b', { b: outcome });
      service.find = jest.fn(() => response);

      expect(effects.loadUser$).toBeObservable(expected);
    });

    it('should return failure', () => {
      const user = { ...mockUser };
      const action = UsersActions.loadUser({ userId: user.id });
      const error = new Error();
      const outcome = UsersActions.loadUserFailure({ error });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.find = jest.fn(() => response);

      expect(effects.loadUser$).toBeObservable(expected);
    });
  });

  describe('createUser$', () => {
    it('should return success with user', () => {
      const user = { ...mockUser };
      const action = UsersActions.createUser({ user });
      const outcome = UsersActions.createUserSuccess({ user });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: user });
      const expected = cold('--b', { b: outcome });
      service.create = jest.fn(() => response);

      expect(effects.createUser$).toBeObservable(expected);
    });

    it('should return failure', () => {
      const user = { ...mockUser };
      const action = UsersActions.createUser({ user });
      const error = new Error();
      const outcome = UsersActions.createUserFailure({ error });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.create = jest.fn(() => response);

      expect(effects.createUser$).toBeObservable(expected);
    });
  });

  describe('updateUser$', () => {
    it('should return success with user', () => {
      const user = { ...mockUser };
      const action = UsersActions.updateUser({ user });
      const outcome = UsersActions.updateUserSuccess({ user });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: user });
      const expected = cold('--b', { b: outcome });
      service.update = jest.fn(() => response);

      expect(effects.updateUser$).toBeObservable(expected);
    });

    it('should return failure', () => {
      const user = { ...mockUser };
      const action = UsersActions.updateUser({ user });
      const error = new Error();
      const outcome = UsersActions.updateUserFailure({ error });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.update = jest.fn(() => response);

      expect(effects.updateUser$).toBeObservable(expected);
    });
  });

  describe('deleteUser$', () => {
    it('should return success with user', () => {
      const user = { ...mockUser };
      const action = UsersActions.deleteUser({ user });
      const outcome = UsersActions.deleteUserSuccess({ user });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: user });
      const expected = cold('--b', { b: outcome });
      service.delete = jest.fn(() => response);

      expect(effects.deleteUser$).toBeObservable(expected);
    });

    it('should return failure', () => {
      const user = { ...mockUser };
      const action = UsersActions.deleteUser({ user });
      const error = new Error();
      const outcome = UsersActions.deleteUserFailure({ error });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.delete = jest.fn(() => response);

      expect(effects.deleteUser$).toBeObservable(expected);
    });
  });
});
