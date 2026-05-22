import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CosumeModule } from './cosume/cosume.module';

@Module({
  imports: [
    CosumeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }
