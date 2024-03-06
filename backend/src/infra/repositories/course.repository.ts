import { Course, Prisma } from '@prisma/client';

export abstract class CourseRepository {
  abstract create(data: Prisma.CourseCreateInput): Promise<Course>;
  abstract update(id: string, data: Prisma.CourseUpdateInput): Promise<Course>;
  abstract delete(id: string): Promise<void>;
  abstract findById(id: string): Promise<Course>;
}
