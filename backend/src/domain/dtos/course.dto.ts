import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CourseDtoIn {
  @IsString()
  @ApiProperty()
  title: string;

  @IsString()
  @ApiProperty()
  description: string;

  @ApiProperty()
  banner: string | null;
}
