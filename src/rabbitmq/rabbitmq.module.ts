import { Module } from '@nestjs/common';
import { RabbitmqService } from './rabbitmq.service';
import { RabbitmqController } from './rabbitmq.controller';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { config } from 'src/config';
import { EmailModule } from 'src/email/email.module';

@Module({
  imports: [
    RabbitMQModule.forRoot({
      uri: config.RABBITMQ_URL,
      exchanges: [
        {
          name: config.RABBITMQ_EXCHANGE!,
          type: 'direct',
        },
      ],
      connectionInitOptions: { wait: true, timeout: 5000 },
    }),
    EmailModule,
  ],
  controllers: [RabbitmqController],
  providers: [RabbitmqService],
  exports: [RabbitMQModule],
})
export class RabbitmqModule {}
