import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { Course } from '@workshop/api-interfaces';

import { CoursesService } from './courses.service';

import { mockCourse } from '@workshop/testing';

describe('CoursesService', () => {
  const model = 'courses';
  let httpTestingController: HttpTestingController;
  let service: CoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(CoursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('should call http.', () => {
    it('get() on service.all()', () => {
      service.all().subscribe((res) => {
        expect(res).toEqual(mockCourse);
      });

      const req = httpTestingController.expectOne(service['getUrl']());
      req.flush([mockCourse]);
      httpTestingController.verify();
    });

    it('get(url(model.id)) on service.find(model.id)', () => {
      service.find(mockCourse.id).subscribe((res) => {
        expect(res).toEqual(mockCourse);
      });

      const req = httpTestingController.expectOne(
        service['getUrlWithId'](mockCourse.id)
      );
      req.flush(mockCourse);
      httpTestingController.verify();
    });

    it('post(url, model) on service.create(model)', () => {
      service.create(mockCourse).subscribe((res) => {
        expect(res).toEqual(mockCourse);
      });

      const req = httpTestingController.expectOne(service['getUrl']());
      req.flush(mockCourse);
      httpTestingController.verify();
    });

    it('put(url(model.id), model) on service.create(model)', () => {
      service.update(mockCourse).subscribe((res) => {
        expect(res).toEqual(mockCourse);
      });

      const req = httpTestingController.expectOne(
        service['getUrlWithId'](mockCourse.id)
      );
      req.flush(mockCourse);
      httpTestingController.verify();
    });

    it('delete(url(model.id)) on service.delete(model.id)', () => {
      service.delete(mockCourse).subscribe((res) => {
        expect(res).toEqual(mockCourse);
      });

      const req = httpTestingController.expectOne(
        service['getUrlWithId'](mockCourse.id)
      );
      req.flush(mockCourse);
      httpTestingController.verify();
    });
  });
});
