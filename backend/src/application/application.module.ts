import { Module } from '@nestjs/common';
import { UserModule } from './modules/user.module';
import { AuthModule } from './modules/auth.module';
import { CourseModule } from './modules/course.module';
import { CourseProgressModule } from './modules/course-progress.module';
import { ModuleModule } from './modules/module.module';
import { ClassesModule } from './modules/classes.module';
@Module({
  imports: [
    UserModule,
    AuthModule,
    CourseModule,
    CourseProgressModule,
    ModuleModule,
    ClassesModule,
  ],
})
export class ApplicationModule {}
