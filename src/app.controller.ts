import { Controller, Get } from '@nestjs/common';
import { EventPattern, Payload, Ctx, KafkaContext } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly service: AppService) {}
 @EventPattern('test')
handleKafka(@Payload() data: any, @Ctx() ctx: KafkaContext) {
  const message = ctx.getMessage();

  let value: any = message.value;

  if (Buffer.isBuffer(value)) {
    value = JSON.parse(value.toString());
  }

  console.log('Kafka message:', value);
}

  @Get()
  home() {
    return this.service.getHello();
  }
}