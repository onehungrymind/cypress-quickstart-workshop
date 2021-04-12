import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { lessonProviders } from './lesson.providers';
import { LessonsController } from './lessons.controller';
import { LessonsService } from './lessons.service';

@Module({
  imports: [DatabaseModule],
  controllers: [LessonsController],
  providers: [...lessonProviders, LessonsService],
})
export class LessonsModule {}
