import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CourseProgressRepository } from '@/infra/repositories/course-progress.repository';
import { Prisma } from '@prisma/client';

@Injectable()
export class PrismaCourseProgressRepository extends CourseProgressRepository {
  constructor(private prisma: PrismaService) {
    super();
  }

  async create(data: Prisma.CourseProgressUncheckedCreateInput) {
    return await this.prisma.courseProgress.create({ data });
  }

  async update(
    user_id: string,
    course_id: string,
    data: Prisma.CourseProgressUncheckedUpdateInput,
  ) {
    return await this.prisma.courseProgress.update({
      where: { user_id_course_id: { course_id, user_id } },
      data,
    });
  }
}
