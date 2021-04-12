export const state = {
  route: '/users',
  homeRoute: '/',
  newMockUser: {
    id: 'E2E_LESSON_ID',
    title: 'E2E Mock User',
    firstName: 'Mock First Name',
    lastName: 'Mock Last Name',
    email: 'mock@email.com',
    password: 'insecure',
  },
  updatedMockUser: {
    id: 'E2E_LESSON_ID',
    title: 'E2E Mock User',
    firstName: 'Mock First Name',
    lastName: 'Mock Last Name',
  }
};

export const getUsersList = () => cy.get('[data-cy=users-list]');

export const getUsers = () => cy.get('[data-cy=users-list]>mat-list-item');

export const getUserItem = (user) => cy.get(`[data-cy=user-${user.id}-item]`);

export const getUserTitle = (user) => cy.get(`[data-cy=user-${user.id}-item-title]`);

export const getUserDeleteBtn = (user) => cy.get(`[data-cy=delete-user-${user.id}-btn]`);

export const getUserDetailsTitle = () => cy.get('[data-cy=user-details-title]');

export const selectUser = (user) => getUserItem(user).click();

export const clearForm = () => cy.get('[data-cy=user-form-cancel').click();

export const completeNewUserForm = (user) => {
  cy.get(`[data-cy=user-form-title]`).type(user.title, { delay: 20});
  cy.get(`[data-cy=user-form-firstName]`).type(user.firstName, { delay: 20});
  cy.get(`[data-cy=user-form-lastName]`).type(user.lastName, { delay: 20});
  cy.get(`[data-cy=user-form-email]`).type(user.email, { delay: 20});
  cy.get(`[data-cy=user-form-password]`).type(user.password, { delay: 20});
  cy.get('[data-cy=user-form-save]').click();
};

export const completeUpdateUserForm = (user) => {
  cy.get(`[data-cy=user-form-title]`).clear().type(`${user.title}!!`, { delay: 20});
  cy.get('[data-cy=user-form-save]').click();
};

export const createUser = (model, user) => {
  cy.createEntity(model, user);
  completeNewUserForm(user);
};

export const updateUser = (model, user) => {
  cy.updateEntity(model, user);
  completeUpdateUserForm(user);
};

export const deleteUser = (model, user) => {
  cy.deleteEntity(model, user);
  getUserDeleteBtn(user).click();
};

export const checkUserDetailsTitle = (title) => {
  getUserDetailsTitle().should('contain.text', title);
};

export const checkUsersLength = (users) => {
  getUsers().should('have.length', users.length);
};

export const checkUser = (user, exists = true) => {
  const condition = exists ? 'exist' : 'not.exist';
  getUserItem(user).should(condition);
};
