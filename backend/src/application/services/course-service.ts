import { CourseDtoIn } from '@/domain/dtos/course.dto';
import { CourseRepository } from '@/infra/repositories/course.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {
  constructor(private courseRepository: CourseRepository) {}

  create(data: CourseDtoIn) {
    return this.courseRepository.create(data);
  }

  update(id: string, data: CourseDtoIn) {
    return this.courseRepository.update(id, data);
  }

  findById(id: string) {
    return this.courseRepository.findById(id);
  }
}
