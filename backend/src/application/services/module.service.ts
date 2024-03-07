import { ModuleDtoIn } from '@/domain/dtos/module.dto';
import { ModuleRepository } from '@/infra/repositories/module.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ModuleService {
  constructor(private moduleRepository: ModuleRepository) {}

  async create(data: ModuleDtoIn) {
    return await this.moduleRepository.create(data);
  }
}
