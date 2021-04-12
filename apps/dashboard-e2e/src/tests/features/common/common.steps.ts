import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';

Given('I am logged into the app', () => {
  cy.login('admin@gmail.com', 'insecure');
});

Given(`I have loaded the app`, () => cy.checkLocation(`/`));

Given(`I am on the home page`, () => cy.checkLocation(`/`));

Given(`I am on the {string} page`, (page) => cy.visit(`/${page}`));

When('I navigate to the {string} page', (page) => cy.visit(`/${page}`));

Then(`I should be on the home page`, () => cy.checkLocation(`/`));

Then(`I should be on the {string} page`, (page) => cy.checkLocation(`/${page}`));
