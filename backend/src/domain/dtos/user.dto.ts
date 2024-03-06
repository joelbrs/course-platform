import { ApiProperty } from '@nestjs/swagger';

export class UserDtoIn {
  @ApiProperty()
  cpf: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}
