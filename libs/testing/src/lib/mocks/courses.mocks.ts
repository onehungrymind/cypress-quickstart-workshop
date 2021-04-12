import { Course } from '@workshop/api-interfaces';
import { of } from 'rxjs';

export const mockCoursesFacade = {
  loadCourses: () => {},
  selectCourse: () => {},
  deleteCourse: () => {},
  updateCourse: () => {},
  createCourse: () => {},
  mutations$: of(true),
};

export const mockCoursesService = {
  all: () => of([]),
  find: () => of({ ...mockCourse }),
  create: () => of({ ...mockCourse }),
  update: () => of({ ...mockCourse }),
  delete: () => of({ ...mockCourse }),
};

export const mockCourse = {
  id: '0',
  title: 'mock',
  description: 'mock',
};

export const mockEmptyCourse = {
  id: null,
  title: 'mockEmpty',
  description: 'mockEmpty',
};
