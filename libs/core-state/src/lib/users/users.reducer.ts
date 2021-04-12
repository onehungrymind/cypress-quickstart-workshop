import { User } from '@workshop/api-interfaces';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import * as UsersActions from './users.actions';

export const USERS_FEATURE_KEY = 'users';

export interface UsersState extends EntityState<User> {
  selectedId?: string | number; // which Users record has been selected
  loaded: boolean; // has the Users list been loaded
  error?: string | null; // last known error (if any)
}

export interface UsersPartialState {
  readonly [USERS_FEATURE_KEY]: UsersState;
}

export const usersAdapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialUsersState: UsersState = usersAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const onFailure = (state, { error }) => ({ ...state, error });

const _usersReducer = createReducer(
  initialUsersState,
  on(UsersActions.selectUser, (state, { selectedId }) =>
    Object.assign({}, state, { selectedId })
  ),
  on(UsersActions.resetSelectedUser, (state) =>
    Object.assign({}, state, { selectedId: null })
  ),
  on(UsersActions.resetUsers, (state) => usersAdapter.removeAll(state)),
  // Load users
  on(UsersActions.loadUsers, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(UsersActions.loadUsersSuccess, (state, { users }) =>
    usersAdapter.setAll(users, { ...state, loaded: true })
  ),
  on(UsersActions.loadUsersFailure, onFailure),
  // Load user
  on(UsersActions.loadUser, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(UsersActions.loadUserSuccess, (state, { user }) =>
    usersAdapter.upsertOne(user, { ...state, loaded: true })
  ),
  on(UsersActions.loadUserFailure, onFailure),
  // Add user
  on(UsersActions.createUserSuccess, (state, { user }) =>
    usersAdapter.addOne(user, state)
  ),
  on(UsersActions.createUserFailure, onFailure),
  // Update user
  on(UsersActions.updateUserSuccess, (state, { user }) =>
    usersAdapter.updateOne({ id: user.id, changes: user }, state)
  ),
  on(UsersActions.updateUserFailure, onFailure),
  // Delete user
  on(UsersActions.deleteUserSuccess, (state, { user }) =>
    usersAdapter.removeOne(user.id, state)
  ),
  on(UsersActions.deleteUserFailure, onFailure)
);

export function usersReducer(state: UsersState | undefined, action: Action) {
  return _usersReducer(state, action);
}
