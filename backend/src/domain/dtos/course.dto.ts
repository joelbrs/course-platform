import { ApiProperty } from '@nestjs/swagger';

export class CourseDtoIn {
  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  banner: string | null;
}
