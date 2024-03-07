import { Module } from '@nestjs/common';
import { CourseProgressService } from '../services/course-progress.service.';
import { DatabaseModule } from '@/infra/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [CourseProgressService],
  exports: [CourseProgressService],
})
export class CourseProgressModule {}
