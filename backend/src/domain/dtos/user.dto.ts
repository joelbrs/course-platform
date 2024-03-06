import { ApiProperty } from '@nestjs/swagger';

export class UserDtoIn {
  @ApiProperty({ type: String })
  cpf: string;

  @ApiProperty({ type: String })
  name: string;

  @ApiProperty({ type: String })
  email: string;

  @ApiProperty({ type: String })
  password: string;
}
