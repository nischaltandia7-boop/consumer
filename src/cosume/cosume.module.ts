import { Module } from '@nestjs/common';
import { CosumeService } from './cosume.service';
import { CosumeController } from './cosume.controller';

@Module({
  controllers: [CosumeController],
  providers: [CosumeService],
})
export class CosumeModule {}
