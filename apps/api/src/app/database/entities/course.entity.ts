import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Lesson } from './lesson.entity';

@Entity()
export class Course {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  thumbnail: string;

  @OneToMany(() => Lesson, (lesson) => lesson.course)
  lessons: Lesson[];
}
