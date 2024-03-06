import { Prisma, User } from '@prisma/client';

export abstract class UserRepository {
  abstract create(data: Prisma.UserCreateInput): Promise<User>;
}
