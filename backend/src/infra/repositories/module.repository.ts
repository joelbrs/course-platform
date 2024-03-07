import { Module, Prisma } from '@prisma/client';

export abstract class ModuleRepository {
  abstract create(data: Prisma.ModuleUncheckedCreateInput): Promise<Module>;
}
