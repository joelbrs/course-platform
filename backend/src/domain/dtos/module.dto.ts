import { ApiProperty } from '@nestjs/swagger';

export class ModuleDtoIn {
  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  course_id: string;
}
