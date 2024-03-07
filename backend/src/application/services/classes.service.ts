import { ClassesDtoIn } from '@/domain/dtos/classes.dto';
import { ModuleDtoIn } from '@/domain/dtos/module.dto';
import { ClassesRepository } from '@/infra/repositories/classes.repository';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ClassesService {
  constructor(private classesRepository: ClassesRepository) {}

  async create(data: ClassesDtoIn) {
    return await this.classesRepository.create(data);
  }

  async update(id: string, data: ModuleDtoIn) {
    const classes = await this.findById(id);

    return this.classesRepository.update(classes.id, data);
  }

  async delete(id: string) {
    const classes = await this.findById(id);

    try {
      await this.classesRepository.delete(classes.id);
    } catch (err) {
      throw err;
    }
  }

  async findById(id: string) {
    const classes = await this.classesRepository.findById(id);

    if (!classes) {
      throw new NotFoundException();
    }
    return classes;
  }
}
