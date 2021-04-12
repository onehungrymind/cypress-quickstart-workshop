import { EntitySubscriberInterface, EventSubscriber, UpdateEvent } from 'typeorm';
import { Logger } from '@nestjs/common';
import { Course } from '../entities/course.entity';

@EventSubscriber()
export class CourseSubscriber implements EntitySubscriberInterface<Course> {

  listenTo(): any {
    return Course;
  }

  afterUpdate(event: UpdateEvent<Course>): Promise<any> | void {
    Logger.log(`Course Updated: ${event.databaseEntity}`);
  }
}
