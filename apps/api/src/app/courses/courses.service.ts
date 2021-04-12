import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { DeleteResult, Repository } from 'typeorm';
import { Course } from '../database/entities/course.entity';

@Injectable()
export class CoursesService {
  constructor(
    @Inject('COURSE_REPOSITORY')
    private coursesRepository: Repository<Course>
  ) {}

  async getAll(): Promise<Course[]> {
    return this.coursesRepository.find();
  }

  async get(id: string): Promise<Course> {
    const course = await this.coursesRepository.findOne(id);
    if (!course) throw new NotFoundException();
    return course;
  }

  async create(course: Course): Promise<Course> {
    return await this.coursesRepository.save(course);
  }

  async update(course: Course): Promise<Course> {
    return await this.coursesRepository.save(course);
  }

  async delete(id: string): Promise<DeleteResult> {
    const course = await this.coursesRepository.findOne(id);
    if (!course) throw new NotFoundException();
    return await this.coursesRepository.delete(id);
  }
}
