import { Body, Controller, Post } from '@nestjs/common';
import { AuthDtoIn } from 'src/domain/dtos/auth.dto';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('sign-in')
  authenticate(@Body() data: AuthDtoIn) {
    return this.authService.authenticate(data);
  }
}
