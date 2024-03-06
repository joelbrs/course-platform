import { Module } from '@nestjs/common';
import { ApplicationModule } from './application/application.module';
import { DatabaseModule } from './infra/database/database.module';

@Module({
  imports: [ApplicationModule, DatabaseModule],
})
export class AppModule {}
