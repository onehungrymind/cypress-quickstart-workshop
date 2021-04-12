export const state = {
  route: '/lessons',
  homeRoute: '/',
  newMockLesson: {
    id: 'E2E_LESSON_ID',
    title: 'E2E Mock Lesson',
    description: 'E2E Mock Description',
  },
  updatedMockLesson: {
    id: 'E2E_LESSON_ID',
    title: 'E2E Mock Lesson!!',
    description: 'E2E Mock Description Updated',
  }
};

export const getLessonsList = () => cy.get('[data-cy=lessons-list]');

export const getLessons = () => cy.get('[data-cy=lessons-list]>mat-list-item');

export const getLessonItem = (lesson) => cy.get(`[data-cy=lesson-${lesson.id}-item]`);

export const getLessonTitle = (lesson) => cy.get(`[data-cy=lesson-${lesson.id}-item-title]`);

export const getLessonDeleteBtn = (lesson) => cy.get(`[data-cy=delete-lesson-${lesson.id}-btn]`);

export const getLessonDetailsTitle = () => cy.get('[data-cy=lesson-details-title]');

export const selectLesson = (lesson) => getLessonItem(lesson).click();

export const clearForm = () => cy.get('[data-cy=lesson-form-cancel').click();

export const completeNewLessonForm = (lesson) => {
  cy.get(`[data-cy=lesson-form-title]`).type(lesson.title, { delay: 20});
  cy.get(`[data-cy=lesson-form-description]`).type(lesson.description, { delay: 20});
  cy.get('[data-cy=lesson-form-save]').click();
};

export const completeUpdateLessonForm = (lesson) => {
  cy.get(`[data-cy=lesson-form-title]`).clear().type(`${lesson.title}!!`, { delay: 20});
  cy.get(`[data-cy=lesson-form-description]`).clear().type(`${lesson.description} updated`, { delay: 20});
  cy.get('[data-cy=lesson-form-save]').click();
};

export const createLesson = (model, lesson) => {
  cy.createEntity(model, lesson);
  completeNewLessonForm(lesson);
};

export const updateLesson = (model, lesson) => {
  cy.updateEntity(model, lesson);
  completeUpdateLessonForm(lesson);
};

export const deleteLesson = (model, lesson) => {
  cy.deleteEntity(model, lesson);
  getLessonDeleteBtn(lesson).click();
};

export const checkLessonsReadOnly = (lessons) => {
  lessons.forEach((lesson) => {
    getLessonDeleteBtn(lesson).should('not.exist');
  });
};

export const checkLessonDetailsTitle = (title) => {
  getLessonDetailsTitle().should('contain.text', title);
};

export const checkLessonsLength = (lessons) => {
  getLessons().should('have.length', lessons.length);
};

export const checkLesson = (lesson, exists = true) => {
  const condition = exists ? 'exist' : 'not.exist';
  getLessonItem(lesson).should(condition);
};
