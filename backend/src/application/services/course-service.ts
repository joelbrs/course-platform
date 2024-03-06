import { CourseDtoIn } from '@/domain/dtos/course.dto';
import { CourseRepository } from '@/infra/repositories/course.repository';
import { Injectable } from '@nestjs/common';

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

  findById(id: string) {
    const course = this.courseRepository.findById(id);

    if (!course) {
      throw new Error('Course not found.');
    }
    return course;
  }
}
