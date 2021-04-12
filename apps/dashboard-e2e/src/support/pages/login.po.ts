export const state = {
  route: '/login',
  homeRoute: '/',
};

export const gotoLoginScreen = () => cy.visit(state.route);

export const loginAs = (user) => {
  cy.loadData(['courses', 'lessons']);
  cy.login(user.email, user.password);

  cy.get('[data-cy=login-email]').type(user.email, { delay: 20 });
  cy.get('[data-cy=login-password]').type(user.password, { delay: 20 });
  cy.get('[data-cy=login-submit]').click();
}
