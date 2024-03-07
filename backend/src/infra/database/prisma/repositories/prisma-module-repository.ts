import { ModuleRepository } from '@/infra/repositories/module.repository';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class PrismaModuleRepository extends ModuleRepository {
  constructor(private prisma: PrismaService) {
    super();
  }

  async create(data: Prisma.ModuleUncheckedCreateInput) {
    return await this.prisma.module.create({ data });
  }
}
