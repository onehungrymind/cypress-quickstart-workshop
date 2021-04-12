import { User } from '@workshop/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const resetSelectedUser = createAction('[Users] Reset Selected User');
export const resetUsers = createAction('[Users] Reset Users');

// Select User
export const selectUser = createAction(
  '[Users] Select User',
  props<{ selectedId: string }>()
);

// Load Users
export const loadUsers = createAction('[Users] Load Users');

export const loadUsersSuccess = createAction(
  '[Users] Load Users Success',
  props<{ users: User[] }>()
);

export const loadUsersFailure = createAction(
  '[Users] Load Users Failure',
  props<{ error: any }>()
);

// Load User
export const loadUser = createAction(
  '[Users] Load User',
  props<{ userId: string }>()
);

export const loadUserSuccess = createAction(
  '[Users] Load User Success',
  props<{ user: User }>()
);

export const loadUserFailure = createAction(
  '[Users] Load User Failure',
  props<{ error: any }>()
);

// Create User
export const createUser = createAction(
  '[Users] Create User',
  props<{ user: User }>()
);

export const createUserSuccess = createAction(
  '[Users] Create User Success',
  props<{ user: User }>()
);

export const createUserFailure = createAction(
  '[Users] Create User Failure',
  props<{ error: any }>()
);

// Update User
export const updateUser = createAction(
  '[Users] Update User',
  props<{ user: User }>()
);

export const updateUserSuccess = createAction(
  '[Users] Update User Success',
  props<{ user: User }>()
);

export const updateUserFailure = createAction(
  '[Users] Update User Failure',
  props<{ error: any }>()
);

// Delete User
export const deleteUser = createAction(
  '[Users] Delete User',
  props<{ user: User }>()
);

export const deleteUserCancelled = createAction(
  '[Users] Delete User Cancelled'
);

export const deleteUserSuccess = createAction(
  '[Users] Delete User Success',
  props<{ user: User }>()
);

export const deleteUserFailure = createAction(
  '[Users] Delete User Failure',
  props<{ error: any }>()
);
