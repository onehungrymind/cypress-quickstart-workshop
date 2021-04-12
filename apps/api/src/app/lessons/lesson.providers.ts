import { Connection } from 'typeorm';
import { Lesson } from '../database/entities/lesson.entity';

export const lessonProviders = [
  {
    provide: 'LESSON_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Lesson),
    inject: ['DATABASE_CONNECTION'],
  },
];
