import { Body, Controller, Post } from '@nestjs/common';
import { CourseDtoIn } from '@/domain/dtos/course.dto';
import { CourseService } from '../services/course-service';

@Controller('courses')
export class CourseController {
  constructor(private courseService: CourseService) {}

  @Post()
  create(@Body() data: CourseDtoIn) {
    return this.courseService.create(data);
  }
}
