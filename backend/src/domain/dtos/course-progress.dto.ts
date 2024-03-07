import { ApiProperty } from '@nestjs/swagger';
import { $Enums } from '@prisma/client';

export class CourseProgressDtoIn {
  @ApiProperty()
  course_id: string;
}

export class FinishCourseProgressDto {
  @ApiProperty()
  conclusion_date: Date;

  @ApiProperty()
  status?: $Enums.ProgressStatus;
}
