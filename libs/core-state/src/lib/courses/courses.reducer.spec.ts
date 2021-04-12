import * as CoursesActions from './courses.actions';
import {
  CoursesState,
  initialCoursesState,
  coursesReducer,
} from './courses.reducer';
import { mockCourse, mockEmptyCourse } from '@workshop/testing';

describe('Courses Reducer', () => {
  let courses;

  beforeEach(() => {
    courses = [
      { ...mockCourse, id: '0' },
      { ...mockCourse, id: '1' },
      { ...mockCourse, id: '2' },
    ];
  });

  describe('valid Courses actions', () => {
    it('loadCourses should set loaded to false', () => {
      const action = CoursesActions.loadCourses();
      const expectedState = {
        ...initialCoursesState,
        error: null,
      };

      const result: CoursesState = coursesReducer(initialCoursesState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('loadCoursesSuccess should set the list of known Courses', () => {
      const action = CoursesActions.loadCoursesSuccess({ courses });
      const expectedState = {
        ...initialCoursesState,
        loaded: true,
        entities: {
          0: courses[0],
          1: courses[1],
          2: courses[2],
        },
        ids: courses.map((course) => course.id),
      };

      const result: CoursesState = coursesReducer(initialCoursesState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('loadCoursesFailure should set error to error', () => {
      const error = new Error();
      const action = CoursesActions.loadCoursesFailure({ error });
      const expectedState = {
        ...initialCoursesState,
        error,
      };

      const result: CoursesState = coursesReducer(initialCoursesState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('loadCourse should set loaded to false', () => {
      const action = CoursesActions.loadCourse({ courseId: mockCourse.id });
      const expectedState = {
        ...initialCoursesState,
        loaded: false,
        error: null,
      };

      const result: CoursesState = coursesReducer(initialCoursesState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('loadCourseSuccess should set loaded to true', () => {
      const action = CoursesActions.loadCourseSuccess({ course: mockCourse });
      const expectedState = {
        ...initialCoursesState,
        loaded: true,
        entities: {
          0: mockCourse,
        },
        ids: [mockCourse.id],
      };

      const result: CoursesState = coursesReducer(initialCoursesState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('loadCourseFailure should set error to error', () => {
      const error = new Error();
      const action = CoursesActions.loadCourseFailure({ error });
      const expectedState = {
        ...initialCoursesState,
        error,
      };

      const result: CoursesState = coursesReducer(initialCoursesState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('updateCourseSuccess should modify course', () => {
      const prepAction = CoursesActions.loadCourseSuccess({
        course: { ...mockEmptyCourse, id: mockCourse.id },
      });
      const prepState: CoursesState = coursesReducer(
        initialCoursesState,
        prepAction
      );

      const expectedState = {
        ...initialCoursesState,
        loaded: true,
        entities: {
          0: mockCourse,
        },
        ids: [mockCourse.id],
      };

      const action = CoursesActions.updateCourseSuccess({ course: mockCourse });
      const result: CoursesState = coursesReducer(prepState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('updateCourseFailure should set error to error', () => {
      const error = new Error();
      const action = CoursesActions.updateCourseFailure({ error });
      const expectedState = {
        ...initialCoursesState,
        error,
      };

      const result: CoursesState = coursesReducer(initialCoursesState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('createCourseSuccess should add course', () => {
      const action = CoursesActions.createCourseSuccess({ course: mockCourse });
      const expectedState = {
        ...initialCoursesState,
        loaded: false,
        entities: {
          0: mockCourse,
        },
        ids: [mockCourse.id],
      };

      const result: CoursesState = coursesReducer(initialCoursesState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('createCourseFailure should set error to error', () => {
      const error = new Error();
      const action = CoursesActions.createCourseFailure({ error });
      const expectedState = {
        ...initialCoursesState,
        error,
      };

      const result: CoursesState = coursesReducer(initialCoursesState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('deleteCourseSuccess should add course', () => {
      const prepAction = CoursesActions.loadCourseSuccess({
        course: mockCourse,
      });
      const prepState: CoursesState = coursesReducer(
        initialCoursesState,
        prepAction
      );

      const expectedState = {
        ...initialCoursesState,
        loaded: true,
      };

      const action = CoursesActions.deleteCourseSuccess({ course: mockCourse });
      const result: CoursesState = coursesReducer(prepState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('deleteCourseFailure should set error to error', () => {
      const error = new Error();
      const action = CoursesActions.deleteCourseFailure({ error });
      const expectedState = {
        ...initialCoursesState,
        error,
      };

      const result: CoursesState = coursesReducer(initialCoursesState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('selectCourse should set selectedId', () => {
      const action = CoursesActions.selectCourse({ selectedId: mockCourse.id });
      const expectedState = {
        ...initialCoursesState,
        selectedId: mockCourse.id,
      };

      const result: CoursesState = coursesReducer(initialCoursesState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('resetSelectedCourse should reset selectedId', () => {
      const prepAction = CoursesActions.selectCourse({
        selectedId: mockCourse.id,
      });
      const prepState = coursesReducer(initialCoursesState, prepAction);

      const action = CoursesActions.resetSelectedCourse();
      const expectedState = {
        ...initialCoursesState,
        selectedId: null,
      };

      const result: CoursesState = coursesReducer(prepState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('resetCourses should reset courses', () => {
      const prepAction = CoursesActions.loadCoursesSuccess({ courses });
      const prepState: CoursesState = coursesReducer(
        initialCoursesState,
        prepAction
      );

      const expectedState = {
        ...initialCoursesState,
        loaded: true,
      };

      const action = CoursesActions.resetCourses();
      const result: CoursesState = coursesReducer(prepState, action);

      expect(result).toStrictEqual(expectedState);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result: CoursesState = coursesReducer(initialCoursesState, action);

      expect(result).toBe(initialCoursesState);
    });
  });
});
