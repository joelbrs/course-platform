import { FinishCourseProgressDto } from '@/domain/dtos/course-progress.dto';
import { CourseProgressRepository } from '@/infra/repositories/course-progress.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseProgressService {
  constructor(private courseProgressRepository: CourseProgressRepository) {}

  async create(user_id: string, course_id: string) {
    return await this.courseProgressRepository.create({ course_id, user_id });
  }

  async finish(user_id: string, course_id: string) {
    const data: FinishCourseProgressDto = {
      conclusion_date: new Date(),
      status: 'COMPLETE',
    };
    return await this.courseProgressRepository.update(user_id, course_id, data);
  }
}
