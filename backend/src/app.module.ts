import { Module } from '@nestjs/common';
import { ApplicationModule } from './application/application.module';
import { DatabaseModule } from './infra/database/database.module';
import { AuthModule } from './application/modules/auth.module';

@Module({
  imports: [ApplicationModule, DatabaseModule, AuthModule],
})
export class AppModule {}
