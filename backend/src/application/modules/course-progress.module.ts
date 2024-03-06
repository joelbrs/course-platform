import { Module } from '@nestjs/common';
import { CourseProgressService } from '../services/course-progress.service.';
import { CourseProgressController } from '../controllers/course-progress.controller';
import { DatabaseModule } from '@/infra/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [CourseProgressService],
  controllers: [CourseProgressController],
})
export class CourseProgressModule {}
