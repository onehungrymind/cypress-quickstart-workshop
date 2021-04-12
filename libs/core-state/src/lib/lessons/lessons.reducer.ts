import { Lesson } from '@workshop/api-interfaces';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import * as LessonsActions from './lessons.actions';

export const LESSONS_FEATURE_KEY = 'lessons';

export interface LessonsState extends EntityState<Lesson> {
  selectedId?: string | number; // which Lessons record has been selected
  loaded: boolean; // has the Lessons list been loaded
  error?: string | null; // last known error (if any)
}

export interface LessonsPartialState {
  readonly [LESSONS_FEATURE_KEY]: LessonsState;
}

export const lessonsAdapter: EntityAdapter<Lesson> = createEntityAdapter<
  Lesson
>();

export const initialLessonsState: LessonsState = lessonsAdapter.getInitialState(
  {
    // set initial required properties
    loaded: false,
  }
);

const onFailure = (state, { error }) => ({ ...state, error });

const _lessonsReducer = createReducer(
  initialLessonsState,
  on(LessonsActions.selectLesson, (state, { selectedId }) =>
    Object.assign({}, state, { selectedId })
  ),
  on(LessonsActions.resetSelectedLesson, (state) =>
    Object.assign({}, state, { selectedId: null })
  ),
  on(LessonsActions.resetLessons, (state) => lessonsAdapter.removeAll(state)),
  // Load lessons
  on(LessonsActions.loadLessons, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(LessonsActions.loadLessonsSuccess, (state, { lessons }) =>
    lessonsAdapter.setAll(lessons, { ...state, loaded: true })
  ),
  on(LessonsActions.loadLessonsFailure, onFailure),
  // Load lesson
  on(LessonsActions.loadLesson, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(LessonsActions.loadLessonSuccess, (state, { lesson }) =>
    lessonsAdapter.upsertOne(lesson, { ...state, loaded: true })
  ),
  on(LessonsActions.loadLessonFailure, onFailure),
  // Add lesson
  on(LessonsActions.createLessonSuccess, (state, { lesson }) =>
    lessonsAdapter.addOne(lesson, state)
  ),
  on(LessonsActions.createLessonFailure, onFailure),
  // Update lesson
  on(LessonsActions.updateLessonSuccess, (state, { lesson }) =>
    lessonsAdapter.updateOne({ id: lesson.id, changes: lesson }, state)
  ),
  on(LessonsActions.updateLessonFailure, onFailure),
  // Delete lesson
  on(LessonsActions.deleteLessonSuccess, (state, { lesson }) =>
    lessonsAdapter.removeOne(lesson.id, state)
  ),
  on(LessonsActions.deleteLessonFailure, onFailure)
);

export function lessonsReducer(
  state: LessonsState | undefined,
  action: Action
) {
  return _lessonsReducer(state, action);
}
