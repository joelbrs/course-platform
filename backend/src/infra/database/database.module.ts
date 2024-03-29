import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PrismaUserRepository } from './prisma/repositories/prisma-user-repository';
import { UserRepository } from 'src/infra/repositories/user.repository';
import { CourseRepository } from '../repositories/course.repository';
import { PrismaCourseRepository } from './prisma/repositories/prisma-course-repository';
import { PrismaCourseProgressRepository } from './prisma/repositories/prisma-course-progress-repository';
import { CourseProgressRepository } from '../repositories/course-progress.repository';
import { ModuleRepository } from '../repositories/module.repository';
import { PrismaModuleRepository } from './prisma/repositories/prisma-module-repository';
import { ClassesRepository } from '../repositories/classes.repository';
import { PrismaClassesRepository } from './prisma/repositories/prisma-classes-repository';

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
    {
      provide: CourseProgressRepository,
      useClass: PrismaCourseProgressRepository,
    },
    {
      provide: ModuleRepository,
      useClass: PrismaModuleRepository,
    },
    {
      provide: ClassesRepository,
      useClass: PrismaClassesRepository,
    },
  ],
  exports: [
    PrismaService,
    UserRepository,
    CourseRepository,
    CourseProgressRepository,
    ModuleRepository,
    ClassesRepository,
  ],
})
export class DatabaseModule {}
