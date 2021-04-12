import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { Lesson } from '@workshop/api-interfaces';

import { LessonsService } from './lessons.service';

import { mockLesson } from '@workshop/testing';

describe('LessonsService', () => {
  const model = 'lessons';
  let httpTestingController: HttpTestingController;
  let service: LessonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(LessonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('should call http.', () => {
    it('get() on service.all()', () => {
      service.all().subscribe((res) => {
        expect(res).toEqual(mockLesson);
      });

      const req = httpTestingController.expectOne(service['getUrl']());
      req.flush([mockLesson]);
      httpTestingController.verify();
    });

    it('get(url(model.id)) on service.find(model.id)', () => {
      service.find(mockLesson.id).subscribe((res) => {
        expect(res).toEqual(mockLesson);
      });

      const req = httpTestingController.expectOne(
        service['getUrlWithId'](mockLesson.id)
      );
      req.flush(mockLesson);
      httpTestingController.verify();
    });

    it('post(url, model) on service.create(model)', () => {
      service.create(mockLesson).subscribe((res) => {
        expect(res).toEqual(mockLesson);
      });

      const req = httpTestingController.expectOne(service['getUrl']());
      req.flush(mockLesson);
      httpTestingController.verify();
    });

    it('put(url(model.id), model) on service.create(model)', () => {
      service.update(mockLesson).subscribe((res) => {
        expect(res).toEqual(mockLesson);
      });

      const req = httpTestingController.expectOne(
        service['getUrlWithId'](mockLesson.id)
      );
      req.flush(mockLesson);
      httpTestingController.verify();
    });

    it('delete(url(model.id)) on service.delete(model.id)', () => {
      service.delete(mockLesson).subscribe((res) => {
        expect(res).toEqual(mockLesson);
      });

      const req = httpTestingController.expectOne(
        service['getUrlWithId'](mockLesson.id)
      );
      req.flush(mockLesson);
      httpTestingController.verify();
    });
  });
});
