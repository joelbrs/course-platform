import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsStrongPassword } from 'class-validator';

export class AuthDtoIn {
  @ApiProperty()
  @IsEmail()
  email: string;

  @IsStrongPassword()
  @ApiProperty()
  password: string;
}

export class AuthDtoOut {
  access_token: string;
}
