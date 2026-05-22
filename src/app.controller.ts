import { Controller, Get } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';



@Controller()
export class AppController {
  constructor(private readonly service: AppService) {}

  @EventPattern('test')
  async handleKafkaMessage(@Payload() message: any) {
    console.log('Received message:', message);
  }

  @Get()
  home() {
    return this.service.getHello();
  }

  @Get('get')
  findAll() {
    return this.service.getHello();
  }
}