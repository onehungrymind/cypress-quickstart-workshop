import { Before, Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import {
  checkCourseDetailsTitle,
  checkCourse,
  checkCoursesLength,
  clearForm,
  createCourse,
  deleteCourse,
  getCourseDetailsTitle,
  getCourseItem,
  getCourses,
  selectCourse,
  state,
  updateCourse,
} from '../../../support/pages/courses.po';

const model = 'courses';
let courses = null;

Before(() => {
  cy.fixture('courses').then((json) => (courses = json));
  cy.loadData(['courses', 'lessons']);
  cy.visit(state.homeRoute);
});

Given(`I am on the home page`, () => cy.checkLocation(state.homeRoute));

When('I have just created a new course', () => {
  createCourse(model, state.newMockCourse);
});

When('I update the course', () => updateCourse(model, state.updatedMockCourse));

When('I delete the new course', () => deleteCourse(model, state.newMockCourse));

When('I select the new course', () => {
  clearForm();
  selectCourse(state.newMockCourse);
});

When('I select the updated course', () => {
  clearForm();
  selectCourse(state.updatedMockCourse);
});

When('I click on the cancel button', () => clearForm());

Then('I should see the details form reset', () => {
  checkCourseDetailsTitle('Select Course');
});

Then('I should see {string} in the URL', (route) => {
  cy.checkLocation(`/${route}`);
});

Then('I should see courses in the courses list', () => {
  checkCoursesLength(courses);
});

Then('I should see that course in the courses list', () => {
  checkCourse(state.newMockCourse);
});

Then('I should see the new course details', () => {
  checkCourseDetailsTitle(`Editing ${state.newMockCourse.title}`);
});

Then('I should see the updated course details', () => {
  checkCourseDetailsTitle(`Editing ${state.updatedMockCourse.title}`);
});

Then('I should not see the new course in the list', () => {
  checkCourse(state.updatedMockCourse, false);
  checkCoursesLength(courses);
});
