import { ApiProperty } from '@nestjs/swagger';
import { $Enums } from '@prisma/client';

export class CourseProgressDtoIn {
  @ApiProperty()
  user_id: string;

  @ApiProperty()
  course_id: string;

  @ApiProperty()
  status?: $Enums.ProgressStatus;
}

export class FinishCourseProgressDto {
  @ApiProperty()
  conclusion_date: Date;

  @ApiProperty()
  status?: $Enums.ProgressStatus;
}
