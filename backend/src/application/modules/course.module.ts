import { DatabaseModule } from '@/infra/database/database.module';
import { Module } from '@nestjs/common';
import { CourseController } from '../controllers/course.controller';
import { CourseService } from '../services/course.service';
import { CourseProgressModule } from './course-progress.module';

@Module({
  imports: [DatabaseModule, CourseProgressModule],
  controllers: [CourseController],
  providers: [CourseService],
  exports: [CourseService],
})
export class CourseModule {}
