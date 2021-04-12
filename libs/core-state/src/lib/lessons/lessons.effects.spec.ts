import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot, cold } from '@nrwl/angular/testing';

import { Observable } from 'rxjs';

import { LessonsEffects } from './lessons.effects';
import * as LessonsActions from './lessons.actions';
import { LessonsService } from '@workshop/core-data';

import { mockLessonsService, mockLesson } from '@workshop/testing';
import { Lesson } from '@workshop/api-interfaces';

describe('LessonsEffects', () => {
  let actions: Observable<any>;
  let effects: LessonsEffects;
  let service: LessonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        LessonsEffects,
        DataPersistence,
        provideMockActions(() => actions),
        { provide: LessonsService, useValue: mockLessonsService },
      ],
    });

    effects = TestBed.inject(LessonsEffects);
    service = TestBed.inject(LessonsService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('loadLessons$', () => {
    it('should return loadLessonsSuccess, on success', () => {
      const lessons: Lesson[] = [];
      const action = LessonsActions.loadLessons();
      const outcome = LessonsActions.loadLessonsSuccess({ lessons });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: lessons });
      const expected = cold('--b', { b: outcome });
      service.all = jest.fn(() => response);

      expect(effects.loadLessons$).toBeObservable(expected);
    });

    it('should return loadLessonsFailure, on failure', () => {
      const action = LessonsActions.loadLessons();
      const error = new Error();
      const outcome = LessonsActions.loadLessonsFailure({ error });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.all = jest.fn(() => response);

      expect(effects.loadLessons$).toBeObservable(expected);
    });
  });

  describe('loadLesson$', () => {
    it('should return success with lesson', () => {
      const lesson = { ...mockLesson };
      const action = LessonsActions.loadLesson({ lessonId: lesson.id });
      const outcome = LessonsActions.loadLessonSuccess({ lesson });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: lesson });
      const expected = cold('--b', { b: outcome });
      service.find = jest.fn(() => response);

      expect(effects.loadLesson$).toBeObservable(expected);
    });

    it('should return failure', () => {
      const lesson = { ...mockLesson };
      const action = LessonsActions.loadLesson({ lessonId: lesson.id });
      const error = new Error();
      const outcome = LessonsActions.loadLessonFailure({ error });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.find = jest.fn(() => response);

      expect(effects.loadLesson$).toBeObservable(expected);
    });
  });

  describe('createLesson$', () => {
    it('should return success with lesson', () => {
      const lesson = { ...mockLesson };
      const action = LessonsActions.createLesson({ lesson });
      const outcome = LessonsActions.createLessonSuccess({ lesson });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: lesson });
      const expected = cold('--b', { b: outcome });
      service.create = jest.fn(() => response);

      expect(effects.createLesson$).toBeObservable(expected);
    });

    it('should return failure', () => {
      const lesson = { ...mockLesson };
      const action = LessonsActions.createLesson({ lesson });
      const error = new Error();
      const outcome = LessonsActions.createLessonFailure({ error });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.create = jest.fn(() => response);

      expect(effects.createLesson$).toBeObservable(expected);
    });
  });

  describe('updateLesson$', () => {
    it('should return success with lesson', () => {
      const lesson = { ...mockLesson };
      const action = LessonsActions.updateLesson({ lesson });
      const outcome = LessonsActions.updateLessonSuccess({ lesson });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: lesson });
      const expected = cold('--b', { b: outcome });
      service.update = jest.fn(() => response);

      expect(effects.updateLesson$).toBeObservable(expected);
    });

    it('should return failure', () => {
      const lesson = { ...mockLesson };
      const action = LessonsActions.updateLesson({ lesson });
      const error = new Error();
      const outcome = LessonsActions.updateLessonFailure({ error });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.update = jest.fn(() => response);

      expect(effects.updateLesson$).toBeObservable(expected);
    });
  });

  describe('deleteLesson$', () => {
    it('should return success with lesson', () => {
      const lesson = { ...mockLesson };
      const action = LessonsActions.deleteLesson({ lesson });
      const outcome = LessonsActions.deleteLessonSuccess({ lesson });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: lesson });
      const expected = cold('--b', { b: outcome });
      service.delete = jest.fn(() => response);

      expect(effects.deleteLesson$).toBeObservable(expected);
    });

    it('should return failure', () => {
      const lesson = { ...mockLesson };
      const action = LessonsActions.deleteLesson({ lesson });
      const error = new Error();
      const outcome = LessonsActions.deleteLessonFailure({ error });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.delete = jest.fn(() => response);

      expect(effects.deleteLesson$).toBeObservable(expected);
    });
  });
});
