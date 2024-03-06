import { ApiProperty } from '@nestjs/swagger';

export class AuthDtoIn {
  @ApiProperty({ type: String })
  email: string;

  @ApiProperty({ type: String })
  password: string;
}

export class AuthDtoOut {
  access_token: string;
}
