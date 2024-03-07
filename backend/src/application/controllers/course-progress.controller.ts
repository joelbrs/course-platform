import {
  Body,
  Controller,
  Param,
  Post,
  Put,
  Request,
  UseGuards,
} from '@nestjs/common';
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

  @ApiOperation({ summary: 'Finish a course progress to an user' })
  @Put('finish/:course_id')
  async finish(@Request() { user }, @Param('course_id') course_id: string) {
    return this.courseProgressService.finish(user.id, course_id);
  }
}
