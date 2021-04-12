import { Injectable } from '@angular/core';
import { Course } from '@workshop/api-interfaces';
import { CoursesService } from '@workshop/core-data';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { fetch, pessimisticUpdate } from '@nrwl/angular';
import { map } from 'rxjs/operators';
import * as CoursesActions from './courses.actions';

@Injectable()
export class CoursesEffects {
  @Effect() loadCourses$ = this.actions$.pipe(
    ofType(CoursesActions.loadCourses),
    fetch({
      run: (action) =>
        this.coursesService
          .all()
          .pipe(
            map((courses: Course[]) =>
              CoursesActions.loadCoursesSuccess({ courses })
            )
          ),
      onError: (action, error) => CoursesActions.loadCoursesFailure({ error }),
    })
  );

  @Effect() loadCourse$ = this.actions$.pipe(
    ofType(CoursesActions.loadCourse),
    fetch({
      run: (action) =>
        this.coursesService
          .find(action.courseId)
          .pipe(
            map((course: Course) =>
              CoursesActions.loadCourseSuccess({ course })
            )
          ),
      onError: (action, error) => CoursesActions.loadCourseFailure({ error }),
    })
  );

  @Effect() createCourse$ = this.actions$.pipe(
    ofType(CoursesActions.createCourse),
    pessimisticUpdate({
      run: (action) =>
        this.coursesService
          .create(action.course)
          .pipe(
            map((course: Course) =>
              CoursesActions.createCourseSuccess({ course })
            )
          ),
      onError: (action, error) => CoursesActions.createCourseFailure({ error }),
    })
  );

  @Effect() updateCourse$ = this.actions$.pipe(
    ofType(CoursesActions.updateCourse),
    pessimisticUpdate({
      run: (action) =>
        this.coursesService
          .update(action.course)
          .pipe(
            map((course: Course) =>
              CoursesActions.updateCourseSuccess({ course })
            )
          ),
      onError: (action, error) => CoursesActions.updateCourseFailure({ error }),
    })
  );

  @Effect() deleteCourse$ = this.actions$.pipe(
    ofType(CoursesActions.deleteCourse),
    pessimisticUpdate({
      run: (action) =>
        this.coursesService
          .delete(action.course)
          .pipe(
            map((course: Course) =>
              CoursesActions.deleteCourseSuccess({ course })
            )
          ),
      onError: (action, error) => CoursesActions.deleteCourseFailure({ error }),
    })
  );

  constructor(
    private actions$: Actions,
    private coursesService: CoursesService
  ) {}
}
