import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { DeleteResult, Repository } from 'typeorm';
import { Lesson } from '../database/entities/lesson.entity';

@Injectable()
export class LessonsService {
  constructor(
    @Inject('LESSON_REPOSITORY')
    private lessonsRepository: Repository<Lesson>,
  ) {}

  async getAll(): Promise<Lesson[]> {
    return this.lessonsRepository.find();
  }

  async get(id: string): Promise<Lesson> {
    const lesson = await this.lessonsRepository.findOne(id);
    if (!lesson) throw new NotFoundException();
    return lesson;
  }

  async create(lesson: Lesson): Promise<Lesson> {
    return await this.lessonsRepository.save(lesson);
  }

  async update(lesson: Lesson): Promise<Lesson> {
    return await this.lessonsRepository.save(lesson);
  }

  async delete(id: string): Promise<DeleteResult> {
    const lesson = await this.lessonsRepository.findOne(id);
    if (!lesson) throw new NotFoundException();
    return await this.lessonsRepository.delete(id);
  }
}
