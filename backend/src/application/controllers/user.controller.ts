import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from 'src/application/services/user.service';
import { UserDtoIn } from 'src/domain/dtos/user.dto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async create(@Body() dto: UserDtoIn) {
    return this.userService.create(dto);
  }
}
