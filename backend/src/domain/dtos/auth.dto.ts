import { ApiProperty } from '@nestjs/swagger';

export class AuthDtoIn {
  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}

export class AuthDtoOut {
  access_token: string;
}
