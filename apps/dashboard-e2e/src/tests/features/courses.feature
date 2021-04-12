Feature: Courses

  As an autheticated user
  I need to be able to work with courses

  Scenario: Navigate to courses
    Given I am on the home page
    And I navigate to the "courses" page
    Then I should see "courses" in the URL

  Scenario: View a list of courses
    Given I am on the "courses" page
    Then I should see courses in the courses list

  Scenario: Create a course
    Given I am on the "courses" page
    And I have just created a new course
    Then I should see that course in the courses list

  Scenario: Select a course
    Given I am on the "courses" page
    And I have just created a new course
    And I select the new course
    Then I should see the new course details

  Scenario: Cancel course selection
    Given I am on the "courses" page
    And I have just created a new course
    And I select the new course
    And I click on the cancel button
    Then I should see the details form reset

  Scenario: Update a course
    Given I am on the "courses" page
    And I have just created a new course
    And I select the new course
    And I update the course
    And I select the updated course
    Then I should see the updated course details

  Scenario: Delete a course
    Given I am on the "courses" page
    And I have just created a new course
    And I delete the new course
    Then I should not see the new course in the list
