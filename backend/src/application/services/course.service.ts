import { CourseDtoIn } from '@/domain/dtos/course.dto';
import { CourseRepository } from '@/infra/repositories/course.repository';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CourseService {
  constructor(private courseRepository: CourseRepository) {}

  create(data: CourseDtoIn) {
    return this.courseRepository.create(data);
  }

  async update(id: string, data: CourseDtoIn) {
    const course = await this.findById(id);

    return this.courseRepository.update(course.id, data);
  }

  async delete(id: string) {
    const course = await this.findById(id);

    try {
      await this.courseRepository.delete(course.id);
    } catch (err) {
      throw err;
    }
  }

  async findById(id: string) {
    const course = await this.courseRepository.findById(id);

    if (!course) {
      throw new NotFoundException();
    }
    return course;
  }
}
