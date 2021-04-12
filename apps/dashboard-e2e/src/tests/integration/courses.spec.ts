import {
  clearForm,
  createCourse,
  deleteCourse,
  getCourseDetailsTitle,
  getCourseItem,
  getCourses,
  selectCourse,
  state,
  updateCourse
} from '../../support/pages/courses.po';

describe('Courses', () => {
  const model = 'courses';
  let courses = null;

  before(() => {
    cy.fixture('courses').then((json) => (courses = json));
    cy.loadData(['courses']);
    cy.visit(state.route);
  });

  it('should be on the courses page', () => {
    cy.checkLocation(state.route);
  });

  it('should list all courses', () => {
    getCourses().should('have.length', courses.length);
  });

  it('should create a course', () => {
    createCourse(model, state.newMockCourse);
    getCourseItem(state.newMockCourse).should('exist');
  });

  it('should display a selected course details', () => {
    clearForm();
    selectCourse(state.newMockCourse);
    getCourseDetailsTitle().should('contain.text', `Editing ${state.newMockCourse.title}`);
  });

  it('should clear course details the form on cancel', () => {
    selectCourse(state.newMockCourse);
    clearForm();
    getCourseDetailsTitle().should('contain.text', `Select Course`);
  });

  it('should update a course', () => {
    selectCourse(state.updatedMockCourse);
    updateCourse(model, state.updatedMockCourse);
    getCourseItem(state.updatedMockCourse).should('exist');
  });

  it('should delete a course', () => {
    deleteCourse(model, state.updatedMockCourse);
    getCourseItem(state.updatedMockCourse).should('not.exist');
    getCourses().should('have.length', courses.length);
  });
});
