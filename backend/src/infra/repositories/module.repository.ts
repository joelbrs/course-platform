import { Module, Prisma } from '@prisma/client';

export abstract class ModuleRepository {
  abstract create(data: Prisma.ModuleUncheckedCreateInput): Promise<Module>;
  abstract update(
    id: string,
    data: Prisma.ModuleUncheckedUpdateInput,
  ): Promise<Module>;
  abstract delete(id: string): Promise<void>;
  abstract findById(id: string): Promise<Module>;
}
