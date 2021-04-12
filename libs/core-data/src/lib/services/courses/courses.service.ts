import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '@workshop/api-interfaces';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  model = 'courses';

  constructor(private http: HttpClient) {}

  all() {
    return this.http.get<Course[]>(this.getUrl());
  }

  find(id: string) {
    return this.http.get<Course>(this.getUrlWithId(id));
  }

  create(course: Course) {
    return this.http.post(this.getUrl(), course);
  }

  update(course: Course) {
    return this.http.put(this.getUrlWithId(course.id), course);
  }

  delete(course: Course) {
    return this.http.delete(this.getUrlWithId(course.id));
  }

  private getUrl() {
    return `${environment.apiEndpoint}${this.model}`;
  }

  private getUrlWithId(id) {
    return `${this.getUrl()}/${id}`;
  }
}
