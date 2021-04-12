import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Lesson } from '../database/entities/lesson.entity';
import { LessonsService } from './lessons.service';

@Controller('lessons')
export class LessonsController {
  constructor(private readonly lessonsService: LessonsService) {}

  @Get()
  all(): Promise<Lesson[]> {
    return this.lessonsService.getAll();
  }

  @Get(':id')
  find(@Param() id: string): Promise<Lesson> {
    return this.lessonsService.get(id);
  }

  @Post()
  create(@Body() lesson: Lesson): Promise<Lesson> {
    return this.lessonsService.create(lesson);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() lesson: Lesson): Promise<Lesson> {
    return this.lessonsService.update(lesson);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.lessonsService.delete(id);
  }
}
