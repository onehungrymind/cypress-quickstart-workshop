import { Injectable } from '@angular/core';
import { User } from '@workshop/api-interfaces';
import { Action, ActionsSubject, select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { v4 as uuidv4 } from 'uuid';
import * as UsersActions from './users.actions';
import * as fromUsers from './users.reducer';
import * as UsersSelectors from './users.selectors';

@Injectable({
  providedIn: 'root',
})
export class UsersFacade {
  loaded$ = this.store.pipe(select(UsersSelectors.getUsersLoaded));
  allUsers$ = this.store.pipe(select(UsersSelectors.getAllUsers));
  selectedUser$ = this.store.pipe(select(UsersSelectors.getSelectedUser));

  mutations$ = this.actions$.pipe(
    filter(
      (action: Action) =>
        action.type === UsersActions.createUser({} as any).type ||
        action.type === UsersActions.updateUser({} as any).type ||
        action.type === UsersActions.deleteUser({} as any).type
    )
  );

  constructor(
    private store: Store<fromUsers.UsersPartialState>,
    private actions$: ActionsSubject
  ) {}

  selectUser(selectedId: string) {
    this.dispatch(UsersActions.selectUser({ selectedId }));
  }

  loadUsers() {
    this.dispatch(UsersActions.loadUsers());
  }

  loadUser(userId: string) {
    this.dispatch(UsersActions.loadUser({ userId }));
  }

  createUser(user: User) {
    // We are generate the UUID at the client because of a sqlite limitation
    this.dispatch(UsersActions.createUser({ user: Object.assign({}, user, { id: uuidv4()}) }));
  }

  updateUser(user: User) {
    this.dispatch(UsersActions.updateUser({ user }));
  }

  deleteUser(user: User) {
    this.dispatch(UsersActions.deleteUser({ user }));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
