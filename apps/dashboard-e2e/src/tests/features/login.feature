Feature: Logging In
  I need to be able to log in

  @Login
  Scenario: Login as an admin
    Given I am on the login page
    When I login as an "admin"
    Then I should be on the home page

  @Login
  Scenario: Login as a manager
    Given I am on the login page
    When I login as a "manager"
    Then I should be on the home page

  @Login
  Scenario: Login as a user
    Given I am on the login page
    When I login as a "user"
    Then I should be on the home page

  @Logout
  Scenario: Logout
    Given I am on the login page
    And I login as an "admin"
    And I log out
    Then I should be on the "login" page

