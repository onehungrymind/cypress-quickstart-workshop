import {
  LessonsState,
  lessonsAdapter,
  initialLessonsState,
} from './lessons.reducer';
import * as LessonsSelectors from './lessons.selectors';

import { Lesson } from '@workshop/api-interfaces';
import { mockLesson } from '@workshop/testing';

describe('Lessons Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getLessonsId = (it) => it['id'];
  const createLesson = (id: string, name = '') =>
    ({ ...mockLesson, id: id } as Lesson);

  let state;

  beforeEach(() => {
    state = {
      lessons: lessonsAdapter.setAll(
        [
          createLesson('PRODUCT-AAA'),
          createLesson('PRODUCT-BBB'),
          createLesson('PRODUCT-CCC'),
        ],
        {
          ...initialLessonsState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Lessons Selectors', () => {
    it('getAllLessons() should return the list of Lessons', () => {
      const results = LessonsSelectors.getAllLessons(state);
      const selId = getLessonsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = LessonsSelectors.getSelectedLesson(state);
      const selId = getLessonsId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getLessonsLoaded() should return the current 'loaded' status", () => {
      const result = LessonsSelectors.getLessonsLoaded(state);

      expect(result).toBe(true);
    });

    it("getLessonsError() should return the current 'error' state", () => {
      const result = LessonsSelectors.getLessonsError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
