Feature: Users

  As an autheticated user
  I need to be able to work with users

  Scenario: Navigate to users
    Given I am on the home page
    And I navigate to the "users" page
    Then I should see "users" in the URL

  Scenario: View a list of users
    Given I am on the "users" page
    Then I should see users in the users list

  Scenario: Create a user
    Given I am on the "users" page
    And I have just created a new user
    Then I should see that user in the users list

  Scenario: Select a user
    Given I am on the "users" page
    And I have just created a new user
    And I select the new user
    Then I should see the new user details

  Scenario: Cancel user selection
    Given I am on the "users" page
    And I have just created a new user
    And I select the new user
    And I click on the cancel button
    Then I should see the details form reset

  Scenario: Update a user
    Given I am on the "users" page
    And I have just created a new user
    And I select the new user
    And I update the user
    And I select the updated user
    Then I should see the updated user details

  Scenario: Delete a user
    Given I am on the "users" page
    And I have just created a new user
    And I delete the new user
    Then I should not see the new user in the list
