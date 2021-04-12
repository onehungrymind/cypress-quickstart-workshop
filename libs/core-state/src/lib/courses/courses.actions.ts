import { Course } from '@workshop/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const resetSelectedCourse = createAction(
  '[Courses] Reset Selected Course'
);
export const resetCourses = createAction('[Courses] Reset Courses');

// Select Course
export const selectCourse = createAction(
  '[Courses] Select Course',
  props<{ selectedId: string }>()
);

// Load Courses
export const loadCourses = createAction('[Courses] Load Courses');

export const loadCoursesSuccess = createAction(
  '[Courses] Load Courses Success',
  props<{ courses: Course[] }>()
);

export const loadCoursesFailure = createAction(
  '[Courses] Load Courses Failure',
  props<{ error: any }>()
);

// Load Course
export const loadCourse = createAction(
  '[Courses] Load Course',
  props<{ courseId: string }>()
);

export const loadCourseSuccess = createAction(
  '[Courses] Load Course Success',
  props<{ course: Course }>()
);

export const loadCourseFailure = createAction(
  '[Courses] Load Course Failure',
  props<{ error: any }>()
);

// Create Course
export const createCourse = createAction(
  '[Courses] Create Course',
  props<{ course: Course }>()
);

export const createCourseSuccess = createAction(
  '[Courses] Create Course Success',
  props<{ course: Course }>()
);

export const createCourseFailure = createAction(
  '[Courses] Create Course Failure',
  props<{ error: any }>()
);

// Update Course
export const updateCourse = createAction(
  '[Courses] Update Course',
  props<{ course: Course }>()
);

export const updateCourseSuccess = createAction(
  '[Courses] Update Course Success',
  props<{ course: Course }>()
);

export const updateCourseFailure = createAction(
  '[Courses] Update Course Failure',
  props<{ error: any }>()
);

// Delete Course
export const deleteCourse = createAction(
  '[Courses] Delete Course',
  props<{ course: Course }>()
);

export const deleteCourseCancelled = createAction(
  '[Courses] Delete Course Cancelled'
);

export const deleteCourseSuccess = createAction(
  '[Courses] Delete Course Success',
  props<{ course: Course }>()
);

export const deleteCourseFailure = createAction(
  '[Courses] Delete Course Failure',
  props<{ error: any }>()
);
