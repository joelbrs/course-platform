import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';
import { UserRepository } from 'src/infra/repositories/user.repository';

@Injectable()
export class PrismaUserRepository extends UserRepository {
  constructor(private prisma: PrismaService) {
    super();
  }

  async create(data: Prisma.UserCreateInput) {
    return await this.prisma.user.create({ data });
  }
}
