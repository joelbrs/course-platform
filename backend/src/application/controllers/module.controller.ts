import { ModuleDtoIn } from '@/domain/dtos/module.dto';
import { Roles } from '@/infra/decorators/roles.decorator';
import { AuthGuard } from '@/infra/guards/auth.guard';
import { RolesGuard } from '@/infra/guards/roles.guard';
import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ModuleService } from '../services/module.service';

@ApiTags('module-controller')
@ApiBearerAuth()
@Roles('ADMIN')
@UseGuards(AuthGuard, RolesGuard)
@Controller('modules')
export class ModuleController {
  constructor(private moduleService: ModuleService) {}

  @ApiOperation({ summary: 'Create a module to a course' })
  @Post()
  create(@Body() dto: ModuleDtoIn) {
    return this.moduleService.create(dto);
  }
}
