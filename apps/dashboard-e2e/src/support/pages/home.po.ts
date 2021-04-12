export const state = {
  route: '/',
};

export const getCourseCards = () => cy.get('[data-cy=home-course-cards]');

export const getCourses = () => cy.get('[data-cy=home-course-cards]>mat-card');

export const getCourseCardTitle = (course) => cy.get(`[data-cy=home-course-${course.id}-title]`);

export const getCourseCardLessons = (course) => cy.get(`[data-cy=home-course-${course.id}-title]`);

export const getCourseCardLessonItem = (lesson) => cy.get(`[data-cy=lesson=${lesson.id}-item]`);

export const checkCoursesDisplayed = (courses) => {
  getCourses().should('have.length', courses.length);
};

export const checkCourseTitles = (courses) => {
  courses.forEach((course) => {
    getCourseCardTitle(course).should('contain.text', course.title);
  })
};

export const checkCourseLessons = (courses, lessons) => {
  courses.forEach((course) => {
    const courseLessons = lessons.filter(
      (lesson) => lesson.courseId === course.id
    );
    getCourseCardLessons(course).should('have.length', courseLessons.length);
  });
}
