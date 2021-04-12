import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Course } from '../database/entities/course.entity';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  all(): Promise<Course[]> {
    return this.coursesService.getAll();
  }

  @Get(':id')
  find(@Param() id: string): Promise<Course> {
    return this.coursesService.get(id);
  }

  @Post()
  create(@Body() course: Course): Promise<Course> {
    return this.coursesService.create(course);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() course: Course): Promise<Course> {
    return this.coursesService.update(course);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.coursesService.delete(id);
  }
}
