import { UsersState, usersAdapter, initialUsersState } from './users.reducer';
import * as UsersSelectors from './users.selectors';

import { User } from '@workshop/api-interfaces';
import { mockUser } from '@workshop/testing';

describe('Users Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getUsersId = (it) => it['id'];
  const createUser = (id: string, name = '') =>
    ({ ...mockUser, id: id } as User);

  let state;

  beforeEach(() => {
    state = {
      users: usersAdapter.setAll(
        [
          createUser('PRODUCT-AAA'),
          createUser('PRODUCT-BBB'),
          createUser('PRODUCT-CCC'),
        ],
        {
          ...initialUsersState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Users Selectors', () => {
    it('getAllUsers() should return the list of Users', () => {
      const results = UsersSelectors.getAllUsers(state);
      const selId = getUsersId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = UsersSelectors.getSelectedUser(state);
      const selId = getUsersId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getUsersLoaded() should return the current 'loaded' status", () => {
      const result = UsersSelectors.getUsersLoaded(state);

      expect(result).toBe(true);
    });

    it("getUsersError() should return the current 'error' state", () => {
      const result = UsersSelectors.getUsersError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
