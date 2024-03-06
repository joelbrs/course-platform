import {
  Body,
  Controller,
  Get,
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

@Controller('courses')
export class CourseController {
  constructor(private courseService: CourseService) {}

  @Roles('ADMIN')
  @UseGuards(AuthGuard, RolesGuard)
  @Post()
  create(@Body() data: CourseDtoIn) {
    return this.courseService.create(data);
  }

  @Roles('ADMIN')
  @UseGuards(AuthGuard, RolesGuard)
  @Put('/:id')
  update(@Param('id') id: string, @Body() data: CourseDtoIn) {
    return this.courseService.update(id, data);
  }

  @Get('/:id')
  findById(@Param('id') id: string) {
    return this.courseService.findById(id);
  }
}
