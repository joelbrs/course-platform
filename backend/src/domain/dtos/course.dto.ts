import { ApiProperty } from '@nestjs/swagger';

export class CourseDtoIn {
  @ApiProperty({ type: String })
  title: string;

  @ApiProperty({ type: String })
  description: string;

  @ApiProperty({ type: String })
  banner: string | null;
}
