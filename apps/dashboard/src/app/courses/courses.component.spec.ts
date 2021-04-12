import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';

import { CoreDataModule } from '@workshop/core-data';
import { CoreStateModule, CoursesFacade } from '@workshop/core-state';
import { MaterialModule } from '@workshop/material';

import { CourseDetailsComponent } from './course-details/course-details.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesComponent } from './courses.component';

import { mockCourse, mockEmptyCourse } from '@workshop/testing';

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;
  let de: DebugElement;
  let coursesFacade: CoursesFacade;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CoursesComponent,
        CourseDetailsComponent,
        CoursesListComponent,
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
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    coursesFacade = TestBed.inject(CoursesFacade);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should on select call coursesFacade selectCourse', () => {
    const spy = jest.spyOn(coursesFacade, 'selectCourse');

    component.selectCourse(mockCourse);

    expect(spy).toHaveBeenCalledWith(mockCourse.id);
  })

  describe('should on save call coursesFacade', () => {
    it('updateCourse', () => {
      const spy = jest.spyOn(coursesFacade, 'updateCourse');

      component.saveCourse(mockCourse);

      expect(spy).toHaveBeenCalledWith(mockCourse);
    })

    it('createCourse', () => {
      const spy = jest.spyOn(coursesFacade, 'createCourse');

      component.saveCourse(mockEmptyCourse);

      expect(spy).toHaveBeenCalledWith(mockEmptyCourse);
    })
  })

  it('should on delete call coursesFacade deleteCourse', () => {
    const spy = jest.spyOn(coursesFacade, 'deleteCourse');

    component.deleteCourse(mockCourse);

    expect(spy).toHaveBeenCalledWith(mockCourse);
  })
});
