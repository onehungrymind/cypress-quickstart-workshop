import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lesson } from '@workshop/api-interfaces';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class LessonsService {
  model = 'lessons';

  constructor(private http: HttpClient) {}

  all() {
    return this.http.get<Lesson[]>(this.getUrl());
  }

  find(id: string) {
    return this.http.get<Lesson>(this.getUrlWithId(id));
  }

  create(lesson: Lesson) {
    return this.http.post(this.getUrl(), lesson);
  }

  update(lesson: Lesson) {
    return this.http.put(this.getUrlWithId(lesson.id), lesson);
  }

  delete(lesson: Lesson) {
    return this.http.delete(this.getUrlWithId(lesson.id));
  }

  private getUrl() {
    return `${environment.apiEndpoint}${this.model}`;
  }

  private getUrlWithId(id) {
    return `${this.getUrl()}/${id}`;
  }
}
