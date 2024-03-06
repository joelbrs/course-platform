import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CourseDtoIn } from '@/domain/dtos/course.dto';
import { CourseService } from '../services/course-service';
import { Roles } from '@/infra/decorators/roles.decorator';
import { AuthGuard } from '@/infra/guards/auth.guard';
import { RolesGuard } from '@/infra/guards/roles.guard';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('course-controller')
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
}
