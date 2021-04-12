import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot, cold } from '@nrwl/angular/testing';

import { Observable } from 'rxjs';

import { CoursesEffects } from './courses.effects';
import * as CoursesActions from './courses.actions';
import { CoursesService } from '@workshop/core-data';

import { mockCoursesService, mockCourse } from '@workshop/testing';
import { Course } from '@workshop/api-interfaces';

describe('CoursesEffects', () => {
  let actions: Observable<any>;
  let effects: CoursesEffects;
  let service: CoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        CoursesEffects,
        DataPersistence,
        provideMockActions(() => actions),
        { provide: CoursesService, useValue: mockCoursesService },
      ],
    });

    effects = TestBed.inject(CoursesEffects);
    service = TestBed.inject(CoursesService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('loadCourses$', () => {
    it('should return loadCoursesSuccess, on success', () => {
      const courses: Course[] = [];
      const action = CoursesActions.loadCourses();
      const outcome = CoursesActions.loadCoursesSuccess({ courses });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: courses });
      const expected = cold('--b', { b: outcome });
      service.all = jest.fn(() => response);

      expect(effects.loadCourses$).toBeObservable(expected);
    });

    it('should return loadCoursesFailure, on failure', () => {
      const action = CoursesActions.loadCourses();
      const error = new Error();
      const outcome = CoursesActions.loadCoursesFailure({ error });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.all = jest.fn(() => response);

      expect(effects.loadCourses$).toBeObservable(expected);
    });
  });

  describe('loadCourse$', () => {
    it('should return success with course', () => {
      const course = { ...mockCourse };
      const action = CoursesActions.loadCourse({ courseId: course.id });
      const outcome = CoursesActions.loadCourseSuccess({ course });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: course });
      const expected = cold('--b', { b: outcome });
      service.find = jest.fn(() => response);

      expect(effects.loadCourse$).toBeObservable(expected);
    });

    it('should return failure', () => {
      const course = { ...mockCourse };
      const action = CoursesActions.loadCourse({ courseId: course.id });
      const error = new Error();
      const outcome = CoursesActions.loadCourseFailure({ error });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.find = jest.fn(() => response);

      expect(effects.loadCourse$).toBeObservable(expected);
    });
  });

  describe('createCourse$', () => {
    it('should return success with course', () => {
      const course = { ...mockCourse };
      const action = CoursesActions.createCourse({ course });
      const outcome = CoursesActions.createCourseSuccess({ course });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: course });
      const expected = cold('--b', { b: outcome });
      service.create = jest.fn(() => response);

      expect(effects.createCourse$).toBeObservable(expected);
    });

    it('should return failure', () => {
      const course = { ...mockCourse };
      const action = CoursesActions.createCourse({ course });
      const error = new Error();
      const outcome = CoursesActions.createCourseFailure({ error });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.create = jest.fn(() => response);

      expect(effects.createCourse$).toBeObservable(expected);
    });
  });

  describe('updateCourse$', () => {
    it('should return success with course', () => {
      const course = { ...mockCourse };
      const action = CoursesActions.updateCourse({ course });
      const outcome = CoursesActions.updateCourseSuccess({ course });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: course });
      const expected = cold('--b', { b: outcome });
      service.update = jest.fn(() => response);

      expect(effects.updateCourse$).toBeObservable(expected);
    });

    it('should return failure', () => {
      const course = { ...mockCourse };
      const action = CoursesActions.updateCourse({ course });
      const error = new Error();
      const outcome = CoursesActions.updateCourseFailure({ error });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.update = jest.fn(() => response);

      expect(effects.updateCourse$).toBeObservable(expected);
    });
  });

  describe('deleteCourse$', () => {
    it('should return success with course', () => {
      const course = { ...mockCourse };
      const action = CoursesActions.deleteCourse({ course });
      const outcome = CoursesActions.deleteCourseSuccess({ course });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: course });
      const expected = cold('--b', { b: outcome });
      service.delete = jest.fn(() => response);

      expect(effects.deleteCourse$).toBeObservable(expected);
    });

    it('should return failure', () => {
      const course = { ...mockCourse };
      const action = CoursesActions.deleteCourse({ course });
      const error = new Error();
      const outcome = CoursesActions.deleteCourseFailure({ error });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.delete = jest.fn(() => response);

      expect(effects.deleteCourse$).toBeObservable(expected);
    });
  });
});
