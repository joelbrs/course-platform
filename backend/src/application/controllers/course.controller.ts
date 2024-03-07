import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Request,
  UseGuards,
} from '@nestjs/common';
import { CourseDtoIn } from '@/domain/dtos/course.dto';
import { CourseService } from '../services/course.service';
import { Roles } from '@/infra/decorators/roles.decorator';
import { AuthGuard } from '@/infra/guards/auth.guard';
import { RolesGuard } from '@/infra/guards/roles.guard';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CourseProgressDtoIn } from '@/domain/dtos/course-progress.dto';

@ApiTags('course-controller')
@ApiBearerAuth()
@Controller('courses')
export class CourseController {
  constructor(private courseService: CourseService) {}

  @ApiOperation({ summary: 'Create a course' })
  @Roles('ADMIN')
  @UseGuards(AuthGuard, RolesGuard)
  @Post()
  create(@Body() data: CourseDtoIn) {
    return this.courseService.create(data);
  }

  @ApiOperation({ summary: 'Update a course' })
  @Roles('ADMIN')
  @UseGuards(AuthGuard, RolesGuard)
  @Put('/:id')
  update(@Param('id') id: string, @Body() data: CourseDtoIn) {
    return this.courseService.update(id, data);
  }

  @ApiOperation({ summary: 'Delete a course' })
  @Roles('ADMIN')
  @UseGuards(AuthGuard, RolesGuard)
  @HttpCode(204)
  @Delete('/:id')
  delete(@Param('id') id: string) {
    return this.courseService.delete(id);
  }

  @ApiOperation({ summary: 'Detail a course by id' })
  @Get('/:id')
  findById(@Param('id') id: string) {
    return this.courseService.findById(id);
  }

  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'Start a course progress to an user' })
  @Post('/start')
  async start(@Request() { user }, @Body() dto: CourseProgressDtoIn) {
    return this.courseService.start(user.sub, dto.course_id);
  }

  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'Finish a course progress to an user' })
  @Put('finish/:id')
  async finish(@Request() { user }, @Param('id') id: string) {
    return this.courseService.finish(user.sub, id);
  }
}
