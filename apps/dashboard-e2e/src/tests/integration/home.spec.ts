import {
  getCourseCardLessons,
  getCourseCardTitle,
  getCourses,
  state,
} from '../../support/pages/home.po';

import { getLessonDeleteBtn } from '../../support/pages/lessons.po';

describe('Home', () => {
  let courses = null;
  let lessons = null;

  before(() => {
    cy.loadData(['courses', 'lessons']);
    cy.fixture('courses').then((json) => (courses = json));
    cy.fixture('lessons').then((json) => (lessons = json));
    cy.visit('/');
  });

  it('should be on the home page', () => {
    cy.checkLocation(state.route);
  });

  describe('Cards', () => {
    it('should list all course cards', () => {
      getCourses().should('have.length', courses.length);
    });

    it('should have the correct course title on each card', () => {
      courses.forEach((course) => {
        getCourseCardTitle(course).should('contain.text', course.title);
      })
    });

    it('should display the correct lessons for each course', () => {
      courses.forEach((course) => {
        const courseLessons = lessons.filter(
          (lesson) => lesson.courseId === course.id
        );
        getCourseCardLessons(course).should('have.length', courseLessons.length);
      })
    });

    it('should display lessons as readonly', () => {
      lessons.forEach((lesson) => {
        getLessonDeleteBtn(lesson).should('not.exist');
      })
    })
  });
});
