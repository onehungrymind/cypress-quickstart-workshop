export interface BaseEntity {
  id: string | null;
  title?: string | null;
}

export interface Login {
  email: string;
  password: string;
}

export interface User extends BaseEntity {
  title: string;
  role: string;
  description: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  profilePic: string;
}

export interface Course extends BaseEntity {
  title: string;
  description: string;
  thumbnail: string;
  lessons?: Lesson[];
}

export interface Lesson extends BaseEntity {
  title: string;
  description: string;
  videoUri: string;
  courseId: any;
}

export interface Author extends BaseEntity {
  title: string;
  description: string;
  firstName: string;
  lastName: string;
  profilePic: string;
  courses?: Course[];
}
