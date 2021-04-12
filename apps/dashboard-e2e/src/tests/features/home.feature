Feature: Home

  As an autheticated user
  I need to be able to work from the home page

  Scenario: See home page on load
    Given I have loaded the app
    Then I should be on the home page

  Scenario: Course cards on the home page
    Given I am on the home page
    Then I should see all the course cards

  Scenario: Correct titles on course cards
    Given I am on the home page
    Then I should see the correct title on each course card

  Scenario: Correct lessons on each course card
    Given I am on the home page
    Then I should see the correct lessons on each course card

  Scenario: Lessons should be read only
    Given I am on the home page
    Then I should see each lesson as readonly
