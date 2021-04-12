import {
  CoursesState,
  coursesAdapter,
  initialCoursesState,
} from './courses.reducer';
import * as CoursesSelectors from './courses.selectors';

import { Course } from '@workshop/api-interfaces';
import { mockCourse } from '@workshop/testing';

describe('Courses Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getCoursesId = (it) => it['id'];
  const createCourse = (id: string, name = '') =>
    ({ ...mockCourse, id: id } as Course);

  let state;

  beforeEach(() => {
    state = {
      courses: coursesAdapter.setAll(
        [
          createCourse('PRODUCT-AAA'),
          createCourse('PRODUCT-BBB'),
          createCourse('PRODUCT-CCC'),
        ],
        {
          ...initialCoursesState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Courses Selectors', () => {
    it('getAllCourses() should return the list of Courses', () => {
      const results = CoursesSelectors.getAllCourses(state);
      const selId = getCoursesId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = CoursesSelectors.getSelectedCourse(state);
      const selId = getCoursesId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getCoursesLoaded() should return the current 'loaded' status", () => {
      const result = CoursesSelectors.getCoursesLoaded(state);

      expect(result).toBe(true);
    });

    it("getCoursesError() should return the current 'error' state", () => {
      const result = CoursesSelectors.getCoursesError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
