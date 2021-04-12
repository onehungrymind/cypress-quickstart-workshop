import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '@workshop/api-interfaces';
import { CoursesFacade } from '@workshop/core-state';

@Component({
  selector: 'workshop-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses$: Observable<Course[]> = this.coursesFacade.allCourses$;
  selectedCourse$: Observable<Course> = this.coursesFacade.selectedCourse$;

  constructor(
    private coursesFacade: CoursesFacade
  ) { }

  ngOnInit(): void {
    this.reset();
    this.coursesFacade.mutations$.subscribe(_ => this.reset());
  }

  reset() {
    this.loadCourses();
    this.coursesFacade.selectCourse(null);
  }

  resetForm() {
    this.coursesFacade.selectCourse(null);
  }

  selectCourse(course: Course) {
    this.coursesFacade.selectCourse(course.id);
  }

  loadCourses() {
    this.coursesFacade.loadCourses();
  }

  saveCourse(course: Course) {
    if (course.id) {
      this.coursesFacade.updateCourse(course);
    } else {
      this.coursesFacade.createCourse(course);
    }
  }

  deleteCourse(course: Course) {
    this.coursesFacade.deleteCourse(course);
  }
}
