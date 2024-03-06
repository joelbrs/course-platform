import { Module } from '@nestjs/common';
import { UserModule } from './modules/user.module';
import { AuthModule } from './modules/auth.module';
import { CourseModule } from './modules/course.module';
@Module({
  imports: [UserModule, AuthModule, CourseModule],
})
export class ApplicationModule {}
