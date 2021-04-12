import * as LessonsActions from './lessons.actions';
import {
  LessonsState,
  initialLessonsState,
  lessonsReducer,
} from './lessons.reducer';
import { mockLesson, mockEmptyLesson } from '@workshop/testing';

describe('Lessons Reducer', () => {
  let lessons;

  beforeEach(() => {
    lessons = [
      { ...mockLesson, id: '0' },
      { ...mockLesson, id: '1' },
      { ...mockLesson, id: '2' },
    ];
  });

  describe('valid Lessons actions', () => {
    it('loadLessons should set loaded to false', () => {
      const action = LessonsActions.loadLessons();
      const expectedState = {
        ...initialLessonsState,
        error: null,
      };

      const result: LessonsState = lessonsReducer(initialLessonsState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('loadLessonsSuccess should set the list of known Lessons', () => {
      const action = LessonsActions.loadLessonsSuccess({ lessons });
      const expectedState = {
        ...initialLessonsState,
        loaded: true,
        entities: {
          0: lessons[0],
          1: lessons[1],
          2: lessons[2],
        },
        ids: lessons.map((lesson) => lesson.id),
      };

      const result: LessonsState = lessonsReducer(initialLessonsState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('loadLessonsFailure should set error to error', () => {
      const error = new Error();
      const action = LessonsActions.loadLessonsFailure({ error });
      const expectedState = {
        ...initialLessonsState,
        error,
      };

      const result: LessonsState = lessonsReducer(initialLessonsState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('loadLesson should set loaded to false', () => {
      const action = LessonsActions.loadLesson({ lessonId: mockLesson.id });
      const expectedState = {
        ...initialLessonsState,
        loaded: false,
        error: null,
      };

      const result: LessonsState = lessonsReducer(initialLessonsState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('loadLessonSuccess should set loaded to true', () => {
      const action = LessonsActions.loadLessonSuccess({ lesson: mockLesson });
      const expectedState = {
        ...initialLessonsState,
        loaded: true,
        entities: {
          0: mockLesson,
        },
        ids: [mockLesson.id],
      };

      const result: LessonsState = lessonsReducer(initialLessonsState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('loadLessonFailure should set error to error', () => {
      const error = new Error();
      const action = LessonsActions.loadLessonFailure({ error });
      const expectedState = {
        ...initialLessonsState,
        error,
      };

      const result: LessonsState = lessonsReducer(initialLessonsState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('updateLessonSuccess should modify lesson', () => {
      const prepAction = LessonsActions.loadLessonSuccess({
        lesson: { ...mockEmptyLesson, id: mockLesson.id },
      });
      const prepState: LessonsState = lessonsReducer(
        initialLessonsState,
        prepAction
      );

      const expectedState = {
        ...initialLessonsState,
        loaded: true,
        entities: {
          0: mockLesson,
        },
        ids: [mockLesson.id],
      };

      const action = LessonsActions.updateLessonSuccess({ lesson: mockLesson });
      const result: LessonsState = lessonsReducer(prepState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('updateLessonFailure should set error to error', () => {
      const error = new Error();
      const action = LessonsActions.updateLessonFailure({ error });
      const expectedState = {
        ...initialLessonsState,
        error,
      };

      const result: LessonsState = lessonsReducer(initialLessonsState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('createLessonSuccess should add lesson', () => {
      const action = LessonsActions.createLessonSuccess({ lesson: mockLesson });
      const expectedState = {
        ...initialLessonsState,
        loaded: false,
        entities: {
          0: mockLesson,
        },
        ids: [mockLesson.id],
      };

      const result: LessonsState = lessonsReducer(initialLessonsState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('createLessonFailure should set error to error', () => {
      const error = new Error();
      const action = LessonsActions.createLessonFailure({ error });
      const expectedState = {
        ...initialLessonsState,
        error,
      };

      const result: LessonsState = lessonsReducer(initialLessonsState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('deleteLessonSuccess should add lesson', () => {
      const prepAction = LessonsActions.loadLessonSuccess({
        lesson: mockLesson,
      });
      const prepState: LessonsState = lessonsReducer(
        initialLessonsState,
        prepAction
      );

      const expectedState = {
        ...initialLessonsState,
        loaded: true,
      };

      const action = LessonsActions.deleteLessonSuccess({ lesson: mockLesson });
      const result: LessonsState = lessonsReducer(prepState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('deleteLessonFailure should set error to error', () => {
      const error = new Error();
      const action = LessonsActions.deleteLessonFailure({ error });
      const expectedState = {
        ...initialLessonsState,
        error,
      };

      const result: LessonsState = lessonsReducer(initialLessonsState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('selectLesson should set selectedId', () => {
      const action = LessonsActions.selectLesson({ selectedId: mockLesson.id });
      const expectedState = {
        ...initialLessonsState,
        selectedId: mockLesson.id,
      };

      const result: LessonsState = lessonsReducer(initialLessonsState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('resetSelectedLesson should reset selectedId', () => {
      const prepAction = LessonsActions.selectLesson({
        selectedId: mockLesson.id,
      });
      const prepState = lessonsReducer(initialLessonsState, prepAction);

      const action = LessonsActions.resetSelectedLesson();
      const expectedState = {
        ...initialLessonsState,
        selectedId: null,
      };

      const result: LessonsState = lessonsReducer(prepState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('resetLessons should reset lessons', () => {
      const prepAction = LessonsActions.loadLessonsSuccess({ lessons });
      const prepState: LessonsState = lessonsReducer(
        initialLessonsState,
        prepAction
      );

      const expectedState = {
        ...initialLessonsState,
        loaded: true,
      };

      const action = LessonsActions.resetLessons();
      const result: LessonsState = lessonsReducer(prepState, action);

      expect(result).toStrictEqual(expectedState);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result: LessonsState = lessonsReducer(initialLessonsState, action);

      expect(result).toBe(initialLessonsState);
    });
  });
});
