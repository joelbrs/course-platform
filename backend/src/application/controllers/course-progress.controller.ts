import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CourseProgressService } from '../services/course-progress.service.';
import { CourseProgressDtoIn } from '@/domain/dtos/course-progress.dto';
import { AuthGuard } from '@/infra/guards/auth.guard';

@ApiTags('course-progress-controller')
@UseGuards(AuthGuard)
@Controller('course-progress')
export class CourseProgressController {
  constructor(private courseProgressService: CourseProgressService) {}

  @ApiOperation({ summary: 'Create a course progress to an user' })
  @Post()
  async create(@Body() data: CourseProgressDtoIn) {
    return this.courseProgressService.create(data);
  }
}
