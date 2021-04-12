import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course, Lesson } from '@workshop/api-interfaces';

@Component({
  selector: 'workshop-lesson-details',
  templateUrl: './lesson-details.component.html',
  styleUrls: ['./lesson-details.component.scss']
})
export class LessonDetailsComponent {
  currentLesson: Lesson;
  originalTitle = '';
  @Input() courses: Course[];
  @Input() set lesson(value: Lesson) {
    if(value) this.originalTitle = value.title;
    this.currentLesson = {...value};
  };
  @Output() saved = new EventEmitter;
  @Output() cancelled = new EventEmitter;
}
