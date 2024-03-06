import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { CourseDtoIn } from '@/domain/dtos/course.dto';
import { CourseService } from '../services/course-service';
import { Roles } from '@/infra/decorators/roles.decorator';
import { AuthGuard } from '@/infra/guards/auth.guard';
import { RolesGuard } from '@/infra/guards/roles.guard';

@Controller('courses')
@Roles('ADMIN')
@UseGuards(AuthGuard, RolesGuard)
export class CourseController {
  constructor(private courseService: CourseService) {}

  @Post()
  create(@Body() data: CourseDtoIn) {
    return this.courseService.create(data);
  }
}
