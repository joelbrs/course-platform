import { Body, Controller, Post } from '@nestjs/common';
import { AuthDtoIn, AuthDtoOut } from 'src/domain/dtos/auth.dto';
import { AuthService } from '../services/auth.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('auth-controller')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({ summary: 'Authenticate user with e-mail and password' })
  @Post('sign-in')
  authenticate(@Body() data: AuthDtoIn): Promise<AuthDtoOut> {
    return this.authService.authenticate(data);
  }
}
