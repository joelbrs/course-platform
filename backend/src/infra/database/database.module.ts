import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PrismaUserRepository } from './prisma/repositories/prisma-user-repository';
import { UserRepository } from 'src/infra/repositories/user.repository';
import { CourseRepository } from '../repositories/course.repository';
import { PrismaCourseRepository } from './prisma/repositories/prisma-course-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
    {
      provide: CourseRepository,
      useClass: PrismaCourseRepository,
    },
  ],
  exports: [PrismaService, UserRepository, CourseRepository],
})
export class DatabaseModule {}
