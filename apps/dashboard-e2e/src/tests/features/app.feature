Feature: Application

  I need to be able to work with global application elements

  Scenario: Display the toggle button on load
    Given I am logged into the app
    Then I should see the toggle button

  Scenario: Display the login button on load
    Given I am logged into the app
    Then I should see the login button

  Scenario: Display the correct title on load
    Given I am logged into the app
    Then I should see the correct title

  Scenario: Display the menu items on load
    Given I am logged into the app
    Then I should see all menu items in the side navigation

  Scenario: Navigate to login page
    Given I am logged into the app
    When I click the login button
    Then I should be on the "login" page

  Scenario: Navigate from menu
    Given I am logged into the app
    Then I should be able to navigate menu links

  Scenario: Toggle side menu
    Given I am logged into the app
    And I click the toggle button
    Then I should not see the side navigation
    And I click the toggle button
    Then I should see the side navigation
