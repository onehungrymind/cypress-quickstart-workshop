import { Before, Given, When } from 'cypress-cucumber-preprocessor/steps';
import { clickLoginBtn } from '../../../support/pages/app.po';
import { gotoLoginScreen, loginAs } from '../../../support/pages/login.po';

const { _ } = Cypress;

let users = null;

const getUserByRole = (role) => _.find(users, {role});

Before(() => {
  cy.logout();
  cy.fixture('users').then((json) => (users = json));
});

Given('I am on the login page', () => gotoLoginScreen());

When('I log out', () => clickLoginBtn());

When(/^I login as an? "(\w+)"$/, (role) => loginAs(getUserByRole(role)));
