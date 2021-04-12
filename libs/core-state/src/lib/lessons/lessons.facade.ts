import { Injectable } from '@angular/core';
import { Lesson } from '@workshop/api-interfaces';
import { Action, ActionsSubject, select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { v4 as uuidv4 } from 'uuid';
import * as LessonsActions from './lessons.actions';
import * as fromLessons from './lessons.reducer';
import * as LessonsSelectors from './lessons.selectors';

@Injectable({
  providedIn: 'root',
})
export class LessonsFacade {
  loaded$ = this.store.pipe(select(LessonsSelectors.getLessonsLoaded));
  allLessons$ = this.store.pipe(select(LessonsSelectors.getAllLessons));
  selectedLesson$ = this.store.pipe(select(LessonsSelectors.getSelectedLesson));

  mutations$ = this.actions$.pipe(
    filter(
      (action: Action) =>
        action.type === LessonsActions.createLesson({} as any).type ||
        action.type === LessonsActions.updateLesson({} as any).type ||
        action.type === LessonsActions.deleteLesson({} as any).type
    )
  );

  constructor(
    private store: Store<fromLessons.LessonsPartialState>,
    private actions$: ActionsSubject
  ) {}

  selectLesson(selectedId: string) {
    this.dispatch(LessonsActions.selectLesson({ selectedId }));
  }

  loadLessons() {
    this.dispatch(LessonsActions.loadLessons());
  }

  loadLesson(lessonId: string) {
    this.dispatch(LessonsActions.loadLesson({ lessonId }));
  }

  createLesson(lesson: Lesson) {
    // We are generate the UUID at the client because of a sqlite limitation
    this.dispatch(LessonsActions.createLesson({ lesson: Object.assign({}, lesson, { id: uuidv4()}) }));
  }

  updateLesson(lesson: Lesson) {
    this.dispatch(LessonsActions.updateLesson({ lesson }));
  }

  deleteLesson(lesson: Lesson) {
    this.dispatch(LessonsActions.deleteLesson({ lesson }));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
