import { Injectable } from '@angular/core';
import { Lesson } from '@workshop/api-interfaces';
import { LessonsService } from '@workshop/core-data';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { fetch, pessimisticUpdate } from '@nrwl/angular';
import { map } from 'rxjs/operators';
import * as LessonsActions from './lessons.actions';

@Injectable()
export class LessonsEffects {
  @Effect() loadLessons$ = this.actions$.pipe(
    ofType(LessonsActions.loadLessons),
    fetch({
      run: (action) =>
        this.lessonsService
          .all()
          .pipe(
            map((lessons: Lesson[]) =>
              LessonsActions.loadLessonsSuccess({ lessons })
            )
          ),
      onError: (action, error) => LessonsActions.loadLessonsFailure({ error }),
    })
  );

  @Effect() loadLesson$ = this.actions$.pipe(
    ofType(LessonsActions.loadLesson),
    fetch({
      run: (action) =>
        this.lessonsService
          .find(action.lessonId)
          .pipe(
            map((lesson: Lesson) =>
              LessonsActions.loadLessonSuccess({ lesson })
            )
          ),
      onError: (action, error) => LessonsActions.loadLessonFailure({ error }),
    })
  );

  @Effect() createLesson$ = this.actions$.pipe(
    ofType(LessonsActions.createLesson),
    pessimisticUpdate({
      run: (action) =>
        this.lessonsService
          .create(action.lesson)
          .pipe(
            map((lesson: Lesson) =>
              LessonsActions.createLessonSuccess({ lesson })
            )
          ),
      onError: (action, error) => LessonsActions.createLessonFailure({ error }),
    })
  );

  @Effect() updateLesson$ = this.actions$.pipe(
    ofType(LessonsActions.updateLesson),
    pessimisticUpdate({
      run: (action) =>
        this.lessonsService
          .update(action.lesson)
          .pipe(
            map((lesson: Lesson) =>
              LessonsActions.updateLessonSuccess({ lesson })
            )
          ),
      onError: (action, error) => LessonsActions.updateLessonFailure({ error }),
    })
  );

  @Effect() deleteLesson$ = this.actions$.pipe(
    ofType(LessonsActions.deleteLesson),
    pessimisticUpdate({
      run: (action) =>
        this.lessonsService
          .delete(action.lesson)
          .pipe(
            map((lesson: Lesson) =>
              LessonsActions.deleteLessonSuccess({ lesson })
            )
          ),
      onError: (action, error) => LessonsActions.deleteLessonFailure({ error }),
    })
  );

  constructor(
    private actions$: Actions,
    private lessonsService: LessonsService
  ) {}
}
