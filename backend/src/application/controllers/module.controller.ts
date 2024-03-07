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
import { ModuleService } from '../services/module.service';

@ApiTags('module-controller')
@ApiBearerAuth()
@Roles('ADMIN')
@UseGuards(AuthGuard, RolesGuard)
@Controller('modules')
export class ModuleController {
  constructor(private moduleService: ModuleService) {}

  @ApiOperation({ summary: "Create a course's module" })
  @Post()
  create(@Body() dto: ModuleDtoIn) {
    return this.moduleService.create(dto);
  }

  @ApiOperation({ summary: "Update a course's module" })
  @Put('/:id')
  update(@Param('id') id: string, @Body() data: ModuleDtoIn) {
    return this.moduleService.update(id, data);
  }

  @ApiOperation({ summary: "Delete a course's module" })
  @HttpCode(204)
  @Delete('/:id')
  delete(@Param('id') id: string) {
    return this.moduleService.delete(id);
  }

  @ApiOperation({ summary: "Detail a course's module" })
  @Get('/:id')
  findById(@Param('id') id: string) {
    return this.moduleService.findById(id);
  }
}
