export const state = {
  title: 'Cypress Quickstart',
  loginRoute: '/login',
  links: [
    { path: '/', icon: 'home', title: 'home' },
    { path: '/courses', icon: 'view_list', title: 'courses' },
    { path: '/lessons', icon: 'assignment', title: 'lessons' },
    { path: '/users', icon: 'account_circle', title: 'users' },
  ],
};

export const getToolbar = () => cy.get('[data-cy=toolbar]');

export const getTitle = () => cy.get('.title');

export const getToggleBtn = () => cy.get('[data-cy=toggle-btn]');

export const getLoginBtn = () => cy.get('[data-cy=login-btn]');

export const getSideNav = () => cy.get('[data-cy=side-nav]');

export const getNavList = () => cy.get('[data-cy=nav-list]>mat-list-item');

export const getNavItem = (item) => cy.get(`[data-cy=nav-item-${item}]`);

export const clickLoginBtn = () => getLoginBtn().click();

export const clickToggleBtn = () => getToggleBtn().click();

export const checkToggleBtn = () => getToggleBtn().should('exist');

export const checkSideNav = () => getSideNav().should('exist');

export const checkLoginBtn = () => getLoginBtn().should('exist');

export const checkToolbarTitle = (title) => getTitle().should('contain', title);

export const checkSideNavVisibility = (visible) => {
  const condition = visible ? 'be.visible' : 'not.be.visible';
  getSideNav().should(condition);
};

export const checkMenuItems = (links) => {
  getNavList().should('have.length', links.length);
};

export const checkMenuLinks = (links) => {
  links.forEach((link) => {
    getNavItem(link.title).click();
    cy.checkLocation(link.path);
  });
};
