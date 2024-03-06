import { Course, Prisma } from '@prisma/client';

export abstract class CourseRepository {
  abstract create(data: Prisma.CourseCreateInput): Promise<Course>;
}