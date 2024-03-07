import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from '../../infra/repositories/user.repository';
import { UserDtoIn } from '../../domain/dtos/user.dto';
import { generateHash } from 'src/infra/utils/hashs/generate-hash';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async create(data: UserDtoIn) {
    return await this.userRepository.create({
      ...data,
      password: generateHash(data.password),
    });
  }

  async findLoggedUser(id: string) {
    return await this.userRepository.findById(id);
  }

  async findByEmail(email: string) {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }
}
