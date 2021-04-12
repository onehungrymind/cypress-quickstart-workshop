import { Connection } from 'typeorm';
import { Course } from '../database/entities/course.entity';

export const courseProviders = [
  {
    provide: 'COURSE_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Course),
    inject: ['DATABASE_CONNECTION'],
  },
];
