import { DatabaseModule } from '@/infra/database/database.module';
import { Module } from '@nestjs/common';
import { ModuleController } from '../controllers/module.controller';
import { ModuleService } from '../services/module.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ModuleController],
  providers: [ModuleService],
  exports: [ModuleService],
})
export class ModuleModule {}
