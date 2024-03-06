import { DatabaseModule } from '@/infra/database/database.module';
import { Module } from '@nestjs/common';
import { CourseController } from '../controllers/course.controller';
import { CourseService } from '../services/course-service';

@Module({
  imports: [DatabaseModule],
  controllers: [CourseController],
  providers: [CourseService],
  exports: [CourseService],
})
export class CourseModule {}
