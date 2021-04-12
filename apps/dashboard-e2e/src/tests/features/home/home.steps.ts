import { Before, Given, Then } from 'cypress-cucumber-preprocessor/steps';
import {
  checkCourseLessons,
  checkCourseTitles,
  checkCoursesDisplayed,
} from '../../../support/pages/home.po';
import { checkLessonsReadOnly } from '../../../support/pages/lessons.po';

let courses = null;
let lessons = null;

Before(() => {
  cy.loadData(['courses', 'lessons']);
  cy.fixture('courses').then((json) => (courses = json));
  cy.fixture('lessons').then((json) => (lessons = json));
  cy.visit('/');
});

Then(`I should see all the course cards`, () => checkCoursesDisplayed(courses));

Then(`I should see the correct title on each course card`, () =>
  checkCourseTitles(courses)
);

Then(`I should see the correct lessons on each course card`, () =>
  checkCourseLessons(courses, lessons)
);

Then(`I should see each lesson as readonly`, () => checkLessonsReadOnly(lessons));
