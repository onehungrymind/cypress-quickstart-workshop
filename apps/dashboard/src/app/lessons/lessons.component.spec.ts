import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';

import { CoreDataModule } from '@workshop/core-data';
import { CoreStateModule, LessonsFacade } from '@workshop/core-state';
import { MaterialModule } from '@workshop/material';

import { LessonDetailsComponent } from './lesson-details/lesson-details.component';
import { LessonsListComponent } from './lessons-list/lessons-list.component';
import { LessonsComponent } from './lessons.component';

import { mockLesson, mockEmptyLesson } from '@workshop/testing';

describe('LessonsComponent', () => {
  let component: LessonsComponent;
  let fixture: ComponentFixture<LessonsComponent>;
  let de: DebugElement;
  let lessonsFacade: LessonsFacade;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LessonsComponent,
        LessonDetailsComponent,
        LessonsListComponent,
      ],
      imports: [
        CoreDataModule,
        CoreStateModule,
        FormsModule,
        MaterialModule,
        HttpClientTestingModule,
        NoopAnimationsModule,
        RouterTestingModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonsComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    lessonsFacade = TestBed.inject(LessonsFacade);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should on select call lessonsFacade selectLesson', () => {
    const spy = jest.spyOn(lessonsFacade, 'selectLesson');

    component.selectLesson(mockLesson);

    expect(spy).toHaveBeenCalledWith(mockLesson.id);
  })

  describe('should on save call lessonsFacade', () => {
    it('updateLesson', () => {
      const spy = jest.spyOn(lessonsFacade, 'updateLesson');

      component.saveLesson(mockLesson);

      expect(spy).toHaveBeenCalledWith(mockLesson);
    })

    it('createLesson', () => {
      const spy = jest.spyOn(lessonsFacade, 'createLesson');

      component.saveLesson(mockEmptyLesson);

      expect(spy).toHaveBeenCalledWith(mockEmptyLesson);
    })
  })

  it('should on delete call lessonsFacade deleteLesson', () => {
    const spy = jest.spyOn(lessonsFacade, 'deleteLesson');

    component.deleteLesson(mockLesson);

    expect(spy).toHaveBeenCalledWith(mockLesson);
  })
});
