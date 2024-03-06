import { CourseRepository } from '@/infra/repositories/course.repository';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class PrismaCourseRepository extends CourseRepository {
  constructor(private prisma: PrismaService) {
    super();
  }

  async create(data: Prisma.CourseCreateInput) {
    return await this.prisma.course.create({ data });
  }
}
