import { CourseProgressDtoIn } from '@/domain/dtos/course-progress.dto';
import { CourseProgressRepository } from '@/infra/repositories/course-progress.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseProgressService {
  constructor(private courseProgressRepository: CourseProgressRepository) {}

  async create(data: CourseProgressDtoIn) {
    return await this.courseProgressRepository.create(data);
  }
}
