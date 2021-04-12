import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { courseProviders } from './course.providers';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';

@Module({
  imports: [DatabaseModule],
  controllers: [CoursesController],
  providers: [...courseProviders, CoursesService],
})
export class CoursesModule {}
