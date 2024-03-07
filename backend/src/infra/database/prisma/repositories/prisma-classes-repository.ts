import { ClassesRepository } from '@/infra/repositories/classes.repository';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class PrismaClassesRepository extends ClassesRepository {
  constructor(private prisma: PrismaService) {
    super();
  }

  async create(data: Prisma.ClassesUncheckedCreateInput) {
    return await this.prisma.classes.create({ data });
  }

  async update(id: string, data: Prisma.ClassesUncheckedUpdateInput) {
    return await this.prisma.classes.update({ where: { id }, data });
  }

  async delete(id: string) {
    await this.prisma.classes.delete({ where: { id } });
  }

  async findById(id: string) {
    return await this.prisma.classes.findUnique({ where: { id } });
  }
}
