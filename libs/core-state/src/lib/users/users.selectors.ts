import { User } from '@workshop/api-interfaces';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { USERS_FEATURE_KEY, UsersState, usersAdapter } from './users.reducer';

// Lookup the 'Users' feature state managed by NgRx
export const getUsersState = createFeatureSelector<UsersState>(
  USERS_FEATURE_KEY
);

const { selectAll, selectEntities } = usersAdapter.getSelectors();

export const getUsersLoaded = createSelector(
  getUsersState,
  (state: UsersState) => state.loaded
);

export const getUsersError = createSelector(
  getUsersState,
  (state: UsersState) => state.error
);

export const getAllUsers = createSelector(getUsersState, (state: UsersState) =>
  selectAll(state)
);

export const getUsersEntities = createSelector(
  getUsersState,
  (state: UsersState) => selectEntities(state)
);

export const getSelectedUserId = createSelector(
  getUsersState,
  (state: UsersState) => state.selectedId
);

export const getSelectedUser = createSelector(
  getUsersEntities,
  getSelectedUserId,
  (entities, selectedId) => {
    const emptyUser: User = {
      id: '',
      role: '',
      title: '',
      description: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      profilePic: '',
    }

    return selectedId ? entities[selectedId] : emptyUser;
  }
);
