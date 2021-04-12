import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreDataModule } from '@workshop/core-data';
import { CoreStateModule } from '@workshop/core-state';
import { MaterialModule } from '@workshop/material';
import { CoursesListComponent } from '../courses/courses-list/courses-list.component';
import { LessonsListComponent } from '../lessons/lessons-list/lessons-list.component';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, CoursesListComponent, LessonsListComponent],
      imports: [
        CoreDataModule,
        CoreStateModule,
        MaterialModule,
        HttpClientTestingModule,
        RouterTestingModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
