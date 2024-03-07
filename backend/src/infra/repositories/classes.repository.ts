import { Classes, Prisma } from '@prisma/client';

export abstract class ClassesRepository {
  abstract create(data: Prisma.ClassesUncheckedCreateInput): Promise<Classes>;
  abstract update(
    id: string,
    data: Prisma.ClassesUncheckedUpdateInput,
  ): Promise<Classes>;
  abstract delete(id: string): Promise<void>;
  abstract findById(id: string): Promise<Classes>;
}
