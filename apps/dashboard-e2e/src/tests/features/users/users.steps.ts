import { Before, Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import {
  checkUser,
  checkUserDetailsTitle,
  checkUsersLength,
  clearForm,
  createUser,
  deleteUser,
  selectUser,
  state,
  updateUser,
} from '../../../support/pages/users.po';

const model = 'users';
let users = null;

Before(() => {
  cy.fixture('users').then((json) => (users = json));
  cy.loadData(['courses', 'users']);
  cy.visit(state.homeRoute);
});

Given(`I am on the home page`, () => cy.checkLocation(state.homeRoute));

Given(`I am on the {string} page`, (page) => cy.visit(`/${page}`));

When('I navigate to the {string} page', (page) => cy.visit(`/${page}`));

When('I have just created a new user', () => {
  createUser(model, state.newMockUser);
});

When('I update the user', () => updateUser(model, state.updatedMockUser));

When('I delete the new user', () => deleteUser(model, state.newMockUser));

When('I select the new user', () => {
  clearForm();
  selectUser(state.newMockUser);
});

When('I select the updated user', () => {
  clearForm();
  selectUser(state.updatedMockUser);
});

When('I click on the cancel button', () => clearForm());

Then('I should see the details form reset', () => {
  checkUserDetailsTitle(`Select User`);
});

Then('I should see {string} in the URL', (route) => {
  cy.checkLocation(`/${route}`);
});

Then('I should see users in the users list', () => checkUsersLength(users));

Then('I should see that user in the users list', () => {
  checkUser(state.newMockUser);
});

Then('I should see the new user details', () => {
  const title = `Editing ${state.newMockUser.firstName} ${state.newMockUser.lastName}`;
  checkUserDetailsTitle(title);
});

Then('I should see the updated user details', () => {
  const title = `Editing ${state.updatedMockUser.firstName} ${state.updatedMockUser.lastName}`;
  checkUserDetailsTitle(title);
});

Then('I should not see the new user in the list', () => {
  checkUser(state.updatedMockUser, false);
  checkUsersLength(users);
});
