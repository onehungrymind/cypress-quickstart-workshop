import { Lesson } from '@workshop/api-interfaces';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  LESSONS_FEATURE_KEY,
  LessonsState,
  lessonsAdapter,
} from './lessons.reducer';

// Lookup the 'Lessons' feature state managed by NgRx
export const getLessonsState = createFeatureSelector<LessonsState>(
  LESSONS_FEATURE_KEY
);

const { selectAll, selectEntities } = lessonsAdapter.getSelectors();

export const getLessonsLoaded = createSelector(
  getLessonsState,
  (state: LessonsState) => state.loaded
);

export const getLessonsError = createSelector(
  getLessonsState,
  (state: LessonsState) => state.error
);

export const getAllLessons = createSelector(
  getLessonsState,
  (state: LessonsState) => selectAll(state)
);

export const getLessonsEntities = createSelector(
  getLessonsState,
  (state: LessonsState) => selectEntities(state)
);

export const getSelectedLessonId = createSelector(
  getLessonsState,
  (state: LessonsState) => state.selectedId
);

export const getSelectedLesson = createSelector(
  getLessonsEntities,
  getSelectedLessonId,
  (entities, selectedId) => {
    const emptyLesson: Lesson = {
      id: null,
      title: '',
      description: '',
      videoUri: '',
      courseId: null,
    };

    return selectedId ? entities[selectedId] : emptyLesson;
  }
);
