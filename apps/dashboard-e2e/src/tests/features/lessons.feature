Feature: Lessons

  As an autheticated user
  I need to be able to work with lessons

  Scenario: Navigate to lessons
    Given I am on the home page
    And I navigate to the "lessons" page
    Then I should see "lessons" in the URL

  Scenario: View a list of lessons
    Given I am on the "lessons" page
    Then I should see lessons in the lessons list

  Scenario: Create a lesson
    Given I am on the "lessons" page
    And I have just created a new lesson
    Then I should see that lesson in the lessons list

  Scenario: Select a lesson
    Given I am on the "lessons" page
    And I have just created a new lesson
    And I select the new lesson
    Then I should see the new lesson details

  Scenario: Cancel lesson selection
    Given I am on the "lessons" page
    And I have just created a new lesson
    And I select the new lesson
    And I click on the cancel button
    Then I should see the details form reset

  Scenario: Update a lesson
    Given I am on the "lessons" page
    And I have just created a new lesson
    And I select the new lesson
    And I update the lesson
    And I select the updated lesson
    Then I should see the updated lesson details

  Scenario: Delete a lesson
    Given I am on the "lessons" page
    And I have just created a new lesson
    And I delete the new lesson
    Then I should not see the new lesson in the list
