import { Lesson } from '@workshop/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const resetSelectedLesson = createAction(
  '[Lessons] Reset Selected Lesson'
);
export const resetLessons = createAction('[Lessons] Reset Lessons');

// Select Lesson
export const selectLesson = createAction(
  '[Lessons] Select Lesson',
  props<{ selectedId: string }>()
);

// Load Lessons
export const loadLessons = createAction('[Lessons] Load Lessons');

export const loadLessonsSuccess = createAction(
  '[Lessons] Load Lessons Success',
  props<{ lessons: Lesson[] }>()
);

export const loadLessonsFailure = createAction(
  '[Lessons] Load Lessons Failure',
  props<{ error: any }>()
);

// Load Lesson
export const loadLesson = createAction(
  '[Lessons] Load Lesson',
  props<{ lessonId: string }>()
);

export const loadLessonSuccess = createAction(
  '[Lessons] Load Lesson Success',
  props<{ lesson: Lesson }>()
);

export const loadLessonFailure = createAction(
  '[Lessons] Load Lesson Failure',
  props<{ error: any }>()
);

// Create Lesson
export const createLesson = createAction(
  '[Lessons] Create Lesson',
  props<{ lesson: Lesson }>()
);

export const createLessonSuccess = createAction(
  '[Lessons] Create Lesson Success',
  props<{ lesson: Lesson }>()
);

export const createLessonFailure = createAction(
  '[Lessons] Create Lesson Failure',
  props<{ error: any }>()
);

// Update Lesson
export const updateLesson = createAction(
  '[Lessons] Update Lesson',
  props<{ lesson: Lesson }>()
);

export const updateLessonSuccess = createAction(
  '[Lessons] Update Lesson Success',
  props<{ lesson: Lesson }>()
);

export const updateLessonFailure = createAction(
  '[Lessons] Update Lesson Failure',
  props<{ error: any }>()
);

// Delete Lesson
export const deleteLesson = createAction(
  '[Lessons] Delete Lesson',
  props<{ lesson: Lesson }>()
);

export const deleteLessonCancelled = createAction(
  '[Lessons] Delete Lesson Cancelled'
);

export const deleteLessonSuccess = createAction(
  '[Lessons] Delete Lesson Success',
  props<{ lesson: Lesson }>()
);

export const deleteLessonFailure = createAction(
  '[Lessons] Delete Lesson Failure',
  props<{ error: any }>()
);
