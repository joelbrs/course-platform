import { ApiProperty } from '@nestjs/swagger';

export class ClassesDtoIn {
  @ApiProperty()
  course_id: string;

  @ApiProperty()
  module_id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  video_url: string;
}
