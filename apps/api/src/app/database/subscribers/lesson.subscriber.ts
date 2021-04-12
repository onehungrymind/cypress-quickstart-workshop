import { EntitySubscriberInterface, EventSubscriber, UpdateEvent } from 'typeorm';
import { Logger } from '@nestjs/common';
import { Lesson } from '../entities/lesson.entity';

@EventSubscriber()
export class LessonSubscriber implements EntitySubscriberInterface<Lesson> {

  listenTo(): any {
    return Lesson;
  }

  afterUpdate(event: UpdateEvent<Lesson>): Promise<any> | void {
    Logger.log(`User Updated: ${event.databaseEntity}`);
  }
}
