import { Module } from '@nestjs/common';
import { UserModule } from './modules/user.module';
import { AuthModule } from './modules/auth.module';
@Module({
  imports: [UserModule, AuthModule],
})
export class ApplicationModule {}
