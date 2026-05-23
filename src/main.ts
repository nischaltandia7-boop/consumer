import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'consumer-service',
        brokers: ['kafka.kafka.svc.cluster.local:9092'],
      },
      consumer: {
        groupId: 'consumer-group',
      },
    },
  });

  await app.startAllMicroservices();
  await app.listen(3001, '0.0.0.0');

  console.log('Consumer running on port 3001');
  console.log('Kafka consumer is listening...');
}

bootstrap();