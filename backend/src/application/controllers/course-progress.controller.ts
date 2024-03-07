import {
  Body,
  Controller,
  Param,
  Post,
  Put,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CourseProgressService } from '../services/course-progress.service.';
import { CourseProgressDtoIn } from '@/domain/dtos/course-progress.dto';
import { AuthGuard } from '@/infra/guards/auth.guard';

@ApiTags('course-progress-controller')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('course-progress')
export class CourseProgressController {
  constructor(private courseProgressService: CourseProgressService) {}

  @ApiOperation({ summary: 'Create a course progress to an user' })
  @Post()
  async create(@Request() { user }, @Body() dto: CourseProgressDtoIn) {
    return this.courseProgressService.create(user.sub, dto.course_id);
  }

  @ApiOperation({ summary: 'Finish a course progress to an user' })
  @Put('finish/:course_id')
  async finish(@Request() { user }, @Param('course_id') course_id: string) {
    return this.courseProgressService.finish(user.sub, course_id);
  }
}
