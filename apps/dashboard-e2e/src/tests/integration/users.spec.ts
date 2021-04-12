import {
  clearForm,
  completeNewUserForm,
  completeUpdateUserForm,
  getUserDeleteBtn,
  getUserDetailsTitle,
  getUserItem,
  getUsers,
  selectUser,
  state,
} from '../../support/pages/users.po';

describe('Users', () => {
  const model = 'users';
  let users = null;

  before(() => {
    cy.fixture('users').then((json) => (users = json));
    cy.loadData(['users']);
    cy.visit(state.route);
  });

  it('should be on the users page', () => {
    cy.checkLocation(state.route);
  });

  it('should list all users', () => {
    getUsers().should('have.length', users.length);
  });

  it('should create a user', () => {
    cy.createEntity(model, state.newMockUser);
    completeNewUserForm(state.newMockUser);
    getUserItem(state.newMockUser).should('exist');
  });

  it('should display a selected user details', () => {
    clearForm();
    selectUser(state.newMockUser);
    getUserDetailsTitle().should(
      'contain.text',
      `Editing ${state.newMockUser.firstName} ${state.newMockUser.lastName}`
    );
  });

  it('should clear user details the form on cancel', () => {
    selectUser(state.newMockUser);
    clearForm();
    getUserDetailsTitle().should('contain.text', `Select User`);
  });

  it('should update a user', () => {
    cy.updateEntity(model, state.updatedMockUser);
    selectUser(state.updatedMockUser);
    completeUpdateUserForm(state.updatedMockUser);
    getUserItem(state.updatedMockUser).should('exist');
  });

  it('should delete a user', () => {
    cy.deleteEntity(model, state.updatedMockUser);
    getUserDeleteBtn(state.updatedMockUser).click();
    getUserItem(state.updatedMockUser).should('not.exist');
    getUsers().should('have.length', users.length);
  });
});
