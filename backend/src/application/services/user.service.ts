import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../infra/repositories/user.repository';
import { UserDtoIn } from '../../domain/dtos/user.dto';
import { generateHash } from 'src/infra/utils/hashs/generate-hash';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  create(data: UserDtoIn) {
    return this.userRepository.create({
      ...data,
      password: generateHash(data.password),
    });
  }

  async findByEmail(email: string) {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new Error('User not found.');
    }

    return user;
  }
}
