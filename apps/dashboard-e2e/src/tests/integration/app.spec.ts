import {
  checkLoginBtn,
  checkMenuItems,
  checkMenuLinks,
  checkSideNav,
  checkSideNavVisibility,
  checkToggleBtn,
  checkToolbarTitle,
  getLoginBtn,
  getNavItem,
  getNavList,
  getSideNav,
  getTitle,
  getToggleBtn,
  state,
} from '../../support/pages/app.po';

describe('Dashboard', () => {
  beforeEach(() => {
    cy.loadData(['courses', 'lessons', 'users']);
    cy.visit('/');
  })

  describe('Header', () => {
    it('should display the toggle button', () => checkToggleBtn());

    it('should hide the side navigation panel on toggle click', () => {
      getToggleBtn().click();
      checkSideNavVisibility(false);

      getToggleBtn().click();
      checkSideNavVisibility(true);
    });

    it('should display the login button', () => checkLoginBtn());

    it('should navigate to the login page on login button click', () => {
      getLoginBtn().click();
      cy.checkLocation(state.loginRoute);
    });

    it('should display the correct title', () => checkToolbarTitle(state.title));
  });

  describe('Side Nav', () => {
    it('should display the side navigation', () => checkSideNav());

    it('should display all menu items', () => checkMenuItems(state.links));

    it('should properly navigate on click', () => checkMenuLinks(state.links));
  });
});
