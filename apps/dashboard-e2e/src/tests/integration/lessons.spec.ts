import {
  clearForm,
  completeNewLessonForm,
  completeUpdateLessonForm,
  getLessonDeleteBtn,
  getLessonDetailsTitle,
  getLessonItem,
  getLessons,
  selectLesson,
  state,
} from '../../support/pages/lessons.po';

describe('Lessons', () => {
  const model = 'lessons';
  let lessons = null;

  before(() => {
    cy.fixture('lessons').then((json) => (lessons = json));
    cy.loadData(['courses', 'lessons']);
    cy.visit(state.route);
  });

  it('should be on the lessons page', () => {
    cy.checkLocation(state.route);
  });

  it('should list all lessons', () => {
    getLessons().should('have.length', lessons.length);
  });

  it('should create a lesson', () => {
    cy.createEntity(model, state.newMockLesson);
    cy.loadData(['courses']);
    completeNewLessonForm(state.newMockLesson);
    getLessonItem(state.newMockLesson).should('exist');
  });

  it('should display a selected lesson details', () => {
    clearForm();
    selectLesson(state.newMockLesson);
    getLessonDetailsTitle().should('contain.text', `Editing ${state.newMockLesson.title}`);
  });

  it('should clear lesson details the form on cancel', () => {
    selectLesson(state.newMockLesson);
    clearForm();
    getLessonDetailsTitle().should('contain.text', `Select Lesson`);
  });

  it('should update a lesson', () => {
    cy.updateEntity(model, state.updatedMockLesson);
    cy.loadData(['courses']);
    selectLesson(state.updatedMockLesson);
    completeUpdateLessonForm(state.updatedMockLesson);
    getLessonItem(state.updatedMockLesson).should('exist');
  });

  it('should delete a lesson', () => {
    cy.deleteEntity(model, state.updatedMockLesson);
    cy.loadData(['courses']);
    getLessonDeleteBtn(state.updatedMockLesson).click();
    getLessonItem(state.updatedMockLesson).should('not.exist');
    getLessons().should('have.length', lessons.length);
  });
});
