import { TestBed } from '@angular/core/testing';
import { ActionsSubject } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { LessonsFacade } from './lessons.facade';
import * as LessonsActions from './lessons.actions';
import { initialLessonsState } from './lessons.reducer';

import { mockLesson } from '@workshop/testing';

describe('LessonsFacade', () => {
  let facade: LessonsFacade;
  let actionSubject;
  const mockActionsSubject = new ActionsSubject();
  let store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LessonsFacade,
        provideMockStore({ initialState: initialLessonsState }),
        { provide: ActionsSubject, useValue: mockActionsSubject },
      ],
    });

    facade = TestBed.inject(LessonsFacade);
    actionSubject = TestBed.inject(ActionsSubject);
    store = TestBed.inject(MockStore);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  it('should have mutations', (done) => {
    const action = LessonsActions.createLesson({ lesson: mockLesson });
    actionSubject.next(action);

    facade.mutations$.subscribe((result) => {
      expect(result).toBe(action);
      done();
    });
  });

  describe('should dispatch', () => {
    it('select on select(lesson.id)', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.selectLesson(mockLesson.id);

      const action = LessonsActions.selectLesson({ selectedId: mockLesson.id });

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('loadLessons on loadLessons()', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.loadLessons();

      const action = LessonsActions.loadLessons();

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('loadLesson on loadLesson(lesson.id)', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.loadLesson(mockLesson.id);

      const action = LessonsActions.loadLesson({ lessonId: mockLesson.id });

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('createLesson on createLesson(lesson)', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.createLesson(mockLesson);

      const action = LessonsActions.createLesson({ lesson: mockLesson });

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('updateLesson on updateLesson(lesson)', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.updateLesson(mockLesson);

      const action = LessonsActions.updateLesson({ lesson: mockLesson });

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('delete on delete(model)', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.deleteLesson(mockLesson);

      const action = LessonsActions.deleteLesson({ lesson: mockLesson });

      expect(spy).toHaveBeenCalledWith(action);
    });
  });
});
