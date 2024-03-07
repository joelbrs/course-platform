import { ModuleDtoIn } from '@/domain/dtos/module.dto';
import { Roles } from '@/infra/decorators/roles.decorator';
import { AuthGuard } from '@/infra/guards/auth.guard';
import { RolesGuard } from '@/infra/guards/roles.guard';
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
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ClassesService } from '../services/classes.service';
import { ClassesDtoIn } from '@/domain/dtos/classes.dto';

@ApiTags('class-controller')
@ApiBearerAuth()
@Roles('ADMIN')
@UseGuards(AuthGuard, RolesGuard)
@Controller('classes')
export class ClassesController {
  constructor(private classesService: ClassesService) {}

  @ApiOperation({ summary: "Create a modules's class" })
  @Post()
  create(@Body() dto: ClassesDtoIn) {
    return this.classesService.create(dto);
  }

  @ApiOperation({ summary: "Update a modules's class" })
  @Put('/:id')
  update(@Param('id') id: string, @Body() data: ModuleDtoIn) {
    return this.classesService.update(id, data);
  }

  @ApiOperation({ summary: "Delete a modules's class" })
  @HttpCode(204)
  @Delete('/:id')
  delete(@Param('id') id: string) {
    return this.classesService.delete(id);
  }

  @ApiOperation({ summary: "Detail a modules's class" })
  @Get('/:id')
  findById(@Param('id') id: string) {
    return this.classesService.findById(id);
  }
}
