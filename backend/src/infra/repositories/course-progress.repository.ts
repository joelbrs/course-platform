import { CourseProgress, Prisma } from '@prisma/client';

export abstract class CourseProgressRepository {
  abstract create(
    data: Prisma.CourseProgressUncheckedCreateInput,
  ): Promise<CourseProgress>;

  abstract update(
    user_id: string,
    course_id: string,
    data: Prisma.CourseProgressUncheckedUpdateInput,
  ): Promise<CourseProgress>;
}
