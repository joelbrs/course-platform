import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class ClassesDtoIn {
  @IsString()
  @IsUUID()
  @ApiProperty()
  course_id: string;

  @IsString()
  @IsUUID()
  @ApiProperty()
  module_id: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  description: string;

  @ApiProperty()
  video_url: string;
}
