import { CourseProgress, Prisma } from '@prisma/client';

export abstract class CourseProgressRepository {
  abstract create(
    data: Prisma.CourseProgressUncheckedCreateInput,
  ): Promise<CourseProgress>;
}
