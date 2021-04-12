import { Injectable } from '@angular/core';
import { Course } from '@workshop/api-interfaces';
import { Action, ActionsSubject, select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { v4 as uuidv4 } from 'uuid';
import { getCourseLessons } from '../index';
import * as CoursesActions from './courses.actions';
import * as CoursesSelectors from './courses.selectors';


@Injectable({
  providedIn: 'root'
})
export class CoursesFacade {
  loaded$ = this.store.pipe(select(CoursesSelectors.getCoursesLoaded));
  allCourses$ = this.store.pipe(select(CoursesSelectors.getAllCourses));
  selectedCourse$ = this.store.pipe(select(CoursesSelectors.getSelectedCourse));
  courseLessons$ = this.store.pipe(select(getCourseLessons));

  mutations$ = this.actions$.pipe(
    filter((action: Action) =>
      action.type === CoursesActions.createCourse({} as any).type ||
      action.type === CoursesActions.updateCourse({} as any).type ||
      action.type === CoursesActions.deleteCourse({} as any).type
    )
  );

  constructor(private store: Store, private actions$: ActionsSubject) { }

  selectCourse(selectedId: string) {
    this.dispatch(CoursesActions.selectCourse({ selectedId }));
  }

  loadCourses() {
    this.dispatch(CoursesActions.loadCourses());
  }

  loadCourse(courseId: string) {
    this.dispatch(CoursesActions.loadCourse({ courseId }));
  }

  createCourse(course: Course) {
    // We are generate the UUID at the client because of a sqlite limitation
    this.dispatch(CoursesActions.createCourse({ course: Object.assign({}, course, { id: uuidv4()}) }));
  }

  updateCourse(course: Course) {
    this.dispatch(CoursesActions.updateCourse({ course }));
  }

  deleteCourse(course: Course) {
    this.dispatch(CoursesActions.deleteCourse({ course }));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
