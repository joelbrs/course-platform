import { DatabaseModule } from '@/infra/database/database.module';
import { Module } from '@nestjs/common';
import { ClassesService } from '../services/classes.service';
import { ClassesController } from '../controllers/classes.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [ClassesController],
  providers: [ClassesService],
  exports: [ClassesService],
})
export class ClassesModule {}
