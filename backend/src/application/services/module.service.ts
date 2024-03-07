import { ModuleDtoIn } from '@/domain/dtos/module.dto';
import { ModuleRepository } from '@/infra/repositories/module.repository';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ModuleService {
  constructor(private moduleRepository: ModuleRepository) {}

  async create(data: ModuleDtoIn) {
    return await this.moduleRepository.create(data);
  }

  async update(id: string, data: ModuleDtoIn) {
    const course = await this.findById(id);

    return this.moduleRepository.update(course.id, data);
  }

  async delete(id: string) {
    const course = await this.findById(id);

    try {
      await this.moduleRepository.delete(course.id);
    } catch (err) {
      throw err;
    }
  }

  async findById(id: string) {
    const course = await this.moduleRepository.findById(id);

    if (!course) {
      throw new NotFoundException();
    }
    return course;
  }
}
