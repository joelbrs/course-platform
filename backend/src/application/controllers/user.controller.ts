import { Body, Controller, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserService } from 'src/application/services/user.service';
import { UserDtoIn } from 'src/domain/dtos/user.dto';

@ApiTags('user-controller')
@ApiBearerAuth()
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @ApiOperation({ summary: 'Create an user' })
  @Post()
  async create(@Body() dto: UserDtoIn) {
    return this.userService.create(dto);
  }
}
