import { CourseDtoIn } from '@/domain/dtos/course.dto';
import { CourseRepository } from '@/infra/repositories/course.repository';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CourseProgressService } from './course-progress.service.';

@Injectable()
export class CourseService {
  constructor(
    private courseRepository: CourseRepository,
    private courseProgressService: CourseProgressService,
  ) {}

  create(data: CourseDtoIn) {
    return this.courseRepository.create(data);
  }

  async update(id: string, data: CourseDtoIn) {
    const course = await this.findById(id);

    return this.courseRepository.update(course.id, data);
  }

  async start(user_id: string, course_id: string) {
    return await this.courseProgressService.create(user_id, course_id);
  }

  async finish(user_id: string, course_id: string) {
    return await this.courseProgressService.finish(user_id, course_id);
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
