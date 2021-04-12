import { Course } from '@workshop/api-interfaces';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import * as CoursesActions from './courses.actions';

export const COURSES_FEATURE_KEY = 'courses';

export interface CoursesState extends EntityState<Course> {
  selectedId?: string | number; // which Courses record has been selected
  loaded: boolean; // has the Courses list been loaded
  error?: string | null; // last known error (if any)
}

export interface CoursesPartialState {
  readonly [COURSES_FEATURE_KEY]: CoursesState;
}

export const coursesAdapter: EntityAdapter<Course> = createEntityAdapter<
  Course
>();

export const initialCoursesState: CoursesState = coursesAdapter.getInitialState(
  {
    // set initial required properties
    loaded: false,
  }
);

const onFailure = (state, { error }) => ({ ...state, error });

const _coursesReducer = createReducer(
  initialCoursesState,
  on(CoursesActions.selectCourse, (state, { selectedId }) =>
    Object.assign({}, state, { selectedId })
  ),
  on(CoursesActions.resetSelectedCourse, (state) =>
    Object.assign({}, state, { selectedId: null })
  ),
  on(CoursesActions.resetCourses, (state) => coursesAdapter.removeAll(state)),
  // Load courses
  on(CoursesActions.loadCourses, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(CoursesActions.loadCoursesSuccess, (state, { courses }) =>
    coursesAdapter.setAll(courses, { ...state, loaded: true })
  ),
  on(CoursesActions.loadCoursesFailure, onFailure),
  // Load course
  on(CoursesActions.loadCourse, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(CoursesActions.loadCourseSuccess, (state, { course }) =>
    coursesAdapter.upsertOne(course, { ...state, loaded: true })
  ),
  on(CoursesActions.loadCourseFailure, onFailure),
  // Add course
  on(CoursesActions.createCourseSuccess, (state, { course }) =>
    coursesAdapter.addOne(course, state)
  ),
  on(CoursesActions.createCourseFailure, onFailure),
  // Update course
  on(CoursesActions.updateCourseSuccess, (state, { course }) =>
    coursesAdapter.updateOne({ id: course.id, changes: course }, state)
  ),
  on(CoursesActions.updateCourseFailure, onFailure),
  // Delete course
  on(CoursesActions.deleteCourseSuccess, (state, { course }) =>
    coursesAdapter.removeOne(course.id, state)
  ),
  on(CoursesActions.deleteCourseFailure, onFailure)
);

export function coursesReducer(
  state: CoursesState | undefined,
  action: Action
) {
  return _coursesReducer(state, action);
}
